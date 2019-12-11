import React from "react";
import {
  Heading,
  Slide,
  CodePane,
  Text,
  Layout,
  List,
  ListItem,
  Fill,
  Image,
  Code,
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
    transition={["zoom"]}
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
          <ListItem>Opensource CLI tool written in Golang</ListItem>
          <ListItem>Collection of Kubernetes test helps</ListItem>
          <ListItem>Tests defined through YAML interface</ListItem>
        </List>
      </Fill>
      <Fill align="center" style={{ padding: "10px" }}>
        <Image height={500} src={AnchorLogo} />
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="topRight" text={"@sycli"} />
    <Banner position="topLeft" text={"@space_tj"} />
    <Heading size={5} textColor={COLOR_PALLETE.textPrimary} caps lineHeight={1}>
      Workflow
    </Heading>
    <Anchorctl labels={anchorctlLabels} />
  </Slide>,
];
