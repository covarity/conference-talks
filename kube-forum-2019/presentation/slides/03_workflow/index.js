import React from "react";
import {
  Heading,
  Slide,
  CodePane,
  Text,
  Layout,
  Fill,
  Image,
  Code,
} from "spectacle";

import Workflow from "./components/Workflow";
import Balls from './components/Balls';


import Banner from "../../components/Banner";


import { workflowLabels } from "./messages";
import Tekton from "./../../../assets/tekton.png";
import GitHub from './../../../assets/github-logo-white.png';

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
    <Banner position="topRight" text={"@sycli"} />
    <Banner position="topLeft" text={"@space_tj"} />
    <Heading size={5} textColor={COLOR_PALLETE.textPrimary} caps lineHeight={1}>
      Workflow
    </Heading>
    <Workflow labels={workflowLabels} />
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={5}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Workflow
    </Heading>
    <Layout style={{ alignItems: "center", height: 400 }}>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          A high level interface is provided to developer for managing policies
          within their environments
        </Text>
      </Fill>
      <Fill>
        <Heading
          size={4}
          caps
          textColor={COLOR_PALLETE.textPrimary}
          margin={10}
        >
          values.yaml
        </Heading>
        <CodePane
          textSize={25}
          lang="yaml"
          source={`
        policies:
          resourcesAllowed:
            - name: dev-a
              resources:
              - Deployment
              - ReplicaSet
              - ConfigMap
              - Secret
          ingressBlock:
          `}
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={5}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Workflow
    </Heading>
    <Layout style={{ alignItems: "center", height: 400 }}>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Tekton pipeline is triggered on PR to repository
        </Text>
      </Fill>
      <Fill>
        <Image src={Tekton} />
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={5}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Workflow
    </Heading>
    <Layout style={{ alignItems: "center", height: 400 }}>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Jinja2 templating engine generates OPA policy and corresponding unit
          tests
        </Text>
      </Fill>
      <Fill>
        <Code bgColor={"#ffffff3d"} textColor={COLOR_PALLETE.textPrimary}>
          jinja2 ./templates/*
        </Code>
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={5}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Workflow
    </Heading>
    <Layout style={{ alignItems: "center", height: 400 }}>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Run unit tests using built-in opa testing capability
        </Text>
      </Fill>
      <Fill>
        <Code bgColor={"#ffffff3d"} textColor={COLOR_PALLETE.textPrimary}>
          opa test ../output/tests/*
        </Code>
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={5}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Workflow
    </Heading>
    <Layout style={{ alignItems: "center", height: 400 }}>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Run integration tests using anchorctl to assert expected behavior
          within kubernetes
        </Text>
      </Fill>
      <Fill>
        <Code bgColor={"#ffffff3d"} textColor={COLOR_PALLETE.textPrimary}>
          anchorctl run -f ./integration-tests/*{" "}
        </Code>
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={5}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Workflow
    </Heading>
    <Layout style={{ alignItems: "center", height: 400 }}>
      <Fill>
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          If all tests are successful then we commit back to the repository a
          versioned snapshot of the OPA policy output and apply the changes to
          the cluster
        </Text>
      </Fill>
      <Fill>
        <Code bgColor={"#ffffff3d"} textColor={COLOR_PALLETE.textPrimary}>
          kubectl apply -f ./output/resources/*
        </Code>
      </Fill>
    </Layout>
  </Slide>,
  <Slide
    align="center center"
    transitionIn={["zoom"]}
    transitionOut={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
      Demo
    </Heading>
    <Balls />
    <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text>
  </Slide>,
  <Slide
    align="center center"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      lineHeight={1}
      style={{ fontFamily: `'Pacifico', cursive`, fontWeight: 100 }}
    >
      Thank You!
    </Heading>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      lineHeight={1}
      style={{ fontFamily: `'Pacifico', cursive`, fontWeight: 100 }}
    >
      References
    </Heading>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image margin="0" height={120} src={GitHub} />
        <Text margin="0 0 0 40px" textColor={COLOR_PALLETE.textPrimary} >https://github.com/covarity/anchorctl</Text>
    </div>
  </Slide>,
];
