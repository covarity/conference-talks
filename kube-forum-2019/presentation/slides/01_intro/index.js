import React from "react";
import {
  Heading,
  Slide,
  CodePane,
  Text,
  Layout,
  Fill,
  Notes,
  List,
  ListItem,
  Image,
  Appear,
} from "spectacle";

import Banner from "../../components/Banner";

import IntroBackground from "./../../../assets/intro-background.png";
import AnchorCTL from "./../../../assets/anchorctl.png";
import OPA from "./../../../assets/opa.png";
import AnchorCTLOverview from '../../../assets/anchorctl-overview.png'

const COLOR_PALLETE = {
  background: "#020003",
  textPrimary: "#ffffff",
  textSecondary: "#64c27c",
};

export default [
  <Slide
    align="center center-top"
    transition={["slide"]}
    bgImage={IntroBackground}
    style={{ backgroundSize: "100vw 100vh" }}
    fill
  >
    <Heading
      margin="100px 0 470px 0"
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      align="center center-top"
      fit
      caps
      textColor="black"
      lineHeight={1}
    >
      OPA Policy Templating and Testing
    </Heading>
    <Text
      textAlign="right"
      margin="0 20px"
      italic={true}
      textColor={COLOR_PALLETE.textPrimary}
    >
      Tejas Cherukara
    </Text>
    <Text
      textAlign="right"
      margin="0 20px"
      italic={true}
      textColor={COLOR_PALLETE.textPrimary}
    >
      Ben Ebsworth
    </Text>
  </Slide>,
  <Slide
    align="center center-top"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 200px 0"
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      lineHeight={1}
    >
      What is OPA?
    </Heading>
    <Image height={500} src={OPA} />
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
  </Slide>,
  <Slide
    align="center flex-start"
    transitionIn={["zoom"]}
    transitionOut={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 50px 0"
      size={4}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Use Case - Dev Guardrails
    </Heading>
    <Layout style={{ alignItems: "center" }}>
      <Fill align="center">
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="white"
          margin={1}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Controlling Service resource type within environment. Preventing
          services being exposed unintentionally
        </Text>
      </Fill>
      <Fill>
        <Text
          caps
          textAlign={"left"}
          textSize={24}
          textColor={COLOR_PALLETE.textPrimary}
          style={{ marginLeft: 50, marginBottom: 20 }}
        >
          ✅ allow internal service
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
          style={{ marginLeft: 50 }}
          source={`
        apiVersion: v1
        kind: Service
        metadata:
          name: my-service
        spec:
          ...
          type: ClusterIP
          `}
        />
        <Text
          caps
          textSize={25}
          textAlign={"left"}
          textColor={COLOR_PALLETE.textPrimary}
          style={{ marginLeft: 50, marginBottom: 20, marginTop: 20 }}
        >
          ❌ deny external service
        </Text>
        <CodePane
          textSize={16}
          style={{ marginLeft: 50 }}
          lang="yaml"
          source={`
        apiVersion: v1
        kind: Service
        metadata:
          name: my-service
        spec:
          ...
          type: LoadBalancer
          `}
        />
      </Fill>
    </Layout>
    <Notes>
      For a quick preface - in adopting OPA within the origanisation, these are
      some of the scenarios we had to overcome
    </Notes>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 50px 0"
      size={4}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Use Case - Security
    </Heading>
    <Layout style={{ alignItems: "center", height: 577 }}>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Isolate Sensitive Workloads and mutate deployments onto specific
          worker pools based of namespaces, using PodAffinity
        </Text>
      </Fill>
      <Fill>
        <Text
          caps
          textAlign={"left"}
          textSize={24}
          textColor={COLOR_PALLETE.textPrimary}
          style={{ marginLeft: 50, marginBottom: 20 }}
        >
          🔒 namespace-A → node-pool-A
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
          style={{ marginLeft: 50 }}
          source={`
        apiVersion: v1
        kind: Pod
        metadata:
          name: with-pod-affinity
        spec:
          ...
          affinity:
          podAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                - key: workload-function
                  operator: In
                  values: functionA
                  -
          `}
        />
      </Fill>
    </Layout>
    <Notes>
      For a quick preface - in adopting OPA within the origanisation, these are
      some of the scenarios we had to overcome
    </Notes>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 50px 0"
      size={4}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Use Case - Administrative
    </Heading>
    <Layout style={{ alignItems: "center", height: 577 }}>
      <Fill align="center">
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Mutate labels onto workloads in order to identify billing information
          and teams.
        </Text>
      </Fill>
      <Fill>
        <Text
          caps
          textAlign={"left"}
          textSize={24}
          textColor={COLOR_PALLETE.textPrimary}
          style={{ marginLeft: 50, marginBottom: 20 }}
        >
          🧳 Append Labels to Resources
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
          style={{ marginLeft: 50 }}
          source={`
        apiVersion: v1
        kind: Deployment
        metadata:
          name: myDeployment
          namespace: teamA
          labels:
            app.company.com/team: team-a
            app.company.com/cost-center: cost-center
        spec:
          ...
          `}
        />
      </Fill>
    </Layout>
    <Notes>
      For a quick preface - in adopting OPA within the origanisation, these are
      some of the scenarios we had to overcome
    </Notes>
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
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Production Requirements
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
      margin="100px 0 25px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Simplified extension & maintenance
    </Heading>
    <Layout style={{ alignItems: "center" }}>
      <Fill height={500} align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>Common library of helper functions</ListItem>
          <ListItem>
            Consistent way of creating and/or extending code base
          </ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <Text
            caps
            textAlign={"left"}
            textSize={24}
            textColor={COLOR_PALLETE.textPrimary}
            margin={10}
          >
            Common Library
          </Text>
          <CodePane
            textSize={16}
            lang="bash"
            source={`
  package common

  hasLabel(obj, label) {
    obj.metadata.labels[label]
  }
          `}
          />
          <Text
            caps
            textAlign={"left"}
            textSize={24}
            textColor={COLOR_PALLETE.textPrimary}
            margin={10}
          >
            Reuse Common Library functions
          </Text>
          <CodePane
            textSize={16}
            lang="bash"
            source={`
  package admin-labels

  deny[msg] {
    not common.hasLabel(input, "app.company.com/cost-center")
    msg := "Cannot Deploy workloads without app.company.com/cost-center label."
  }
          `}
          />
        </Fill>
      </Appear>
    </Layout>
    <Notes>
      Reduce Cognitive Load Admission Controller agnostic interface - With the
      introduction of Gatekeeper, we wanted to provide a mechanism to support
      writing policies that could lead to a graceful migration from OPA +
      kube-mgmt to Gatekeeper Abstraction with consistent workflow - Developer
      are used to dealing with helm charts, potentially surfacing the policies
      in a similar manner
    </Notes>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["slide"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 50px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Admission Controller Agnostic
    </Heading>
    <Layout style={{ alignItems: "center", height: 500 }}>
      <Fill align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>Templating rego based policies</ListItem>
          <ListItem>
            Provides graceful migration from OPA to Gatekeeper
          </ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            textSize={16}
            lang="python"
            source={`
{% for labelResource in mutate_label -%}
patch [patchCode] {
  isCreateOrUpdate
  labelResourcesList := [
      {%- for resource in labelResource.resources -%}
          "{{resource}}"
      {% endfor -%}
    ]
  input.request.resource.resource = labelResourcesList[_]

  patchCode = { "op": "add", "path": "/metadata/labels/{{labelResource.label.key}}", "value": "{{labelResource.label.value}}" }
}

{% endfor -%}
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
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Provide an abstraction consistent with existing ecosystem (YAML)
    </Heading>
    <Layout style={{ alignItems: "center", height: 300 }}>
      <Fill align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>Top level values.yaml which generates policy</ListItem>
          <ListItem>The UI by which developers can update configuration</ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            textSize={16}
            lang="yaml"
            source={`
    mutate_label:
    - resources:
      - deployments
      - pods
      label:
        key: app.company.com/cost-center
        value: sample-cost-center
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
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Unit testing policy with 100% coverage
    </Heading>
    <Layout style={{ alignItems: "center", height: 500 }}>
      <Fill align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>Utilise built-in opa dapability to define unit tests</ListItem>
          <ListItem>
            auto-generating unit tests corresponding to generated policy
          </ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            style={{ marginLeft: 50 }}
            textSize={16}
            lang="python"
            source={`
{% for resource in deny_resource -%}

test_deny_denyResource_{{ resource }} {
  {{ resource }}_object := {"request": {
      "resource": {"resource": "{{ resource }}"},
      "operation": "CREATE"
  }}

  res := main with input as {{ resource }}_object
	res.response.allowed = false
}

{% endfor -%}

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
    <Banner position="bottomRight" text={"@sycli"} />
    <Banner position="bottomLeft" text={"@space_tj"} />
    <Heading
      margin="80px 0 30px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Integration testing
    </Heading>
    <Layout style={{ alignItems: "center", height: 700 }}>
      <Fill height={500} align="center center">
      <Text
            // caps
            textAlign={"left"}

            textColor={COLOR_PALLETE.textPrimary}
            margin={10}
          >
            Requirements: Ability to assert the functionality of OPA policies in a real cluster.
          </Text>
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>
           Validate that rego configs are correctly parsed
          </ListItem>
          <ListItem>
            Ensure that resources which fail the validation webhook throws the expected error
          </ListItem>
          <ListItem>
            Ensure that resources have the expected mutation once created
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
];
// Consistent interface for developers to interact with: similar to helm charts
// Reduces cognitive effort required to get up and running
// Admission controller agnostic interface to building policy
// Switch between OPA + kube management -> Gatekeeper or own validating controller
// Allows templating of the tests.
// Helps find bugs early, enforces test coverage and helps weed out specific use cases.
// Lack of integration tests
// Build an open source tool called Anchor for this. A CLI tool that contains frequently tested kube functionalities in a declarative.
