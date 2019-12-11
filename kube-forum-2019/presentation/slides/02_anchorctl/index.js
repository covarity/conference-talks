import React from "react";
import {
  Heading,
  Slide,
  Layout,
  List,
  ListItem,
  Fill,
  Appear,
  CodePane
} from "spectacle";

import Banner from "../../components/Banner";

import Anchorctl from './components/Anchorctl';

import AnchorLogo from "./../../../assets/anchorctl.png";


import { anchorctlLabels } from "./messages";

const COLOR_PALLETE = {
  background: "#020003",
  textPrimary: "#ffffff",
  textSecondary: "#64c27c",
};

export default [
  <Slide
    align="center flex-start"
    transitionIn={["zoom"]}
    transitionOut={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      AnchorCTL
    </Heading>
    <Layout style={{ alignItems: "center", height: 500 }}>
      <Fill>
        <List
          caps
          textAlign={"centre"}
          textSize={"24"}
          textColor={COLOR_PALLETE.textPrimary}
        >
          <ListItem>Open source CLI tool written in Golang</ListItem>
          <ListItem>Collection of Kubernetes test helps</ListItem>
          <ListItem>Tests defined through YAML interface</ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            style={{ marginLeft: 50 }}
            textSize={14}
            lang="yaml"
            source={`
apiVersion: anchor.covarity.dev/alpha1v1
kind: KubeTest
metadata:
  name: opa-validation
spec:
  lifecycle:
    postStart:
    - path: "./fixtures/applications-ns.yaml"
      action: "CREATE"
    preStop:
    - path: "./fixtures/applications-ns.yaml"
      action: "DELETE"
  tests:
  - type: AssertJSONPath
    spec:
      jsonPath: .metadata.annotations['openpolicyagent\.org/policy-status']
      value: '{"status":"ok"}'
    resource:
    ...
  - type: AssertValidation
    spec:
      containsResponse: "External Loadbalancers cannot be deployed in this cluster"
    resource:
    ...
          `}
          />
        </Fill>
      </Appear>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="topRight" text={"@sycli"} />
    <Banner position="topLeft" text={"@space_tj"} />
    <Heading size={5} textColor={COLOR_PALLETE.textPrimary} caps lineHeight={1}>
      Anchorctl Overview
    </Heading>
    <Anchorctl labels={anchorctlLabels} />
  </Slide>,
];
