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

import IntroBackground from "./../../../assets/intro-background.png";
import WorkflowPR from "./../../../assets/workflow-pr.png";
import AnchorCTL from  './../../../assets/anchorctl.png'

const COLOR_PALLETE = {
  background: "#020003",
  textPrimary: "#ffffff",
  textSecondary: "#64c27c",
};

export default [
  <Slide
    align="center center-top"
    transition={["zoom"]}
    bgImage={IntroBackground}
  >
    <Heading
      margin="100px 0 400px 0"
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
    align="center center"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
      What is OPA?
    </Heading>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={4}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
      Adoption Journey - Use Cases
    </Heading>
    <Layout>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Controlling `Service` resource type within environment. Preventing
          services being exposed unintentionally
        </Text>
      </Fill>
      <Fill>
        <Text
          caps
          textAlign={"left"}
          textSize={24}
          textColor={COLOR_PALLETE.textPrimary}
          margin={10}
        >
          ✅ allow internal service
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
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
          margin={10}
        >
          ❌ deny external service
        </Text>
        <CodePane
          textSize={16}
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
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={4}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
      Use Cases
    </Heading>
    <Layout>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        ></Heading>
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Mutating deployments onto specific worker pools based of namespace etc
        </Text>
      </Fill>
      <Fill>
        <Text
          caps
          textAlign={"left"}
          textSize={24}
          textColor={COLOR_PALLETE.textPrimary}
          margin={10}
        >
          namespace-functionA → node-pool-A
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
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
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={4}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
      Use Cases
    </Heading>
    <Layout>
      <Fill align="center">
        <Text textColor={COLOR_PALLETE.textPrimary}>
          Control which resources can be deployed into which namespace based on
          team and/or cluster
        </Text>
      </Fill>
      <Fill>
        <Text
          caps
          textAlign={"left"}
          textSize={24}
          textColor={COLOR_PALLETE.textPrimary}
          margin={10}
        >
          ✅ Allow Deployment resource
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
          source={`
        apiVersion: v1
        kind: Deployment
        metadata:
          name: myDeployment
          namespace: teamA
        spec:
          ...
          `}
        />
        <Text
          caps
          textSize={24}
          textAlign={"left"}
          textColor={COLOR_PALLETE.textPrimary}
          margin={10}
        >
          ❌ deny DaemonSet resource
        </Text>
        <CodePane
          textSize={16}
          lang="yaml"
          source={`
        apiVersion: v1
        kind: DaemonSet
        metadata:
          name: myDaemonSet
          namespace: teamA
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
    align="center flex-start"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      lineHeight={1}
    >
      Production Outcomes
    </Heading>
  </Slide>,
  <Slide
    align="center center"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Simplify the maintenance and extension of policies
    </Heading>
    <Layout>
      <Fill height={500} align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>common library of helper functions</ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            textSize={16}
            lang="bash"
            source={`
  kube
  ├── common
      ...
  ├── deny-resource
  ├── lb-services
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
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Decoupling the underlying admission control solution (ie OPA)
    </Heading>
    <Layout>
      <Fill height={500} align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>templating rego based policies</ListItem>
          <ListItem>templating unit-tests for corresponding policies</ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            textSize={16}
            lang="python"
            source={`
         {% for resource in deny_resource -%}

         deny[msg] {
             input.request.resource.resource = "{{resource}}"
             isCreate
             msg := "You can't create {{resource}} resource in this Cluster"
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
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
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
    <Layout>
      <Fill height={500} align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>top level values.yaml which generates policy</ListItem>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            textSize={16}
            lang="yaml"
            source={`
deny_resource:
- ingresses
          `}
          />
        </Fill>
      </Appear>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
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
    <Layout style={{ alignItems: "center" }}>
      <Fill align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>unit testing policy using opa built-in capability</ListItem>
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
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      caps
      italic
      lineHeight={1}
    >
      Integration testing validation and mutation policies
    </Heading>
    <Layout>
      <Fill height={500} align="center center">
        <List textColor={COLOR_PALLETE.textPrimary}>
          <ListItem>
            Built opensource tool for defining integration tests as YAML
          </ListItem>
          <ListItem>
            Carries out end-to-end tests of OPA policies in a running kubernetes
            environment
          </ListItem>
          <List textColor={COLOR_PALLETE.textPrimary}>
            <ListItem>Assert status of OPA deploy and configmaps</ListItem>
            <ListItem>Assert Validating Admission webhook works</ListItem>
            <ListItem>Assert Mutating Admission webhook works</ListItem>
          </List>
        </List>
      </Fill>
      <Appear order={1}>
        <Fill>
          <CodePane
            style={{ marginLeft: 50 }}
            textSize={14}
            lang="yaml"
            source={`
kind: KubernetesTest
api: anchor.io/alpha1v1
metadata:
  name: podValidation
objectRef:
  kind: Pod
  namespace: default
  label:
    key: run
    value: nginx
tests:
- type: AssertJSONPath
  jsonPath: ".spec.nodeName"
  value: "docker-desktop"
- type: AssertValidation
  action: "CREATE"
  filePath: "./samples/fixtures/loadbalancer.yaml"
  expectedError: "Internal error occurred: admission webhook \"webhook.openpolicyagent.org\" denied the request: External Loadbalancers cannot be deployed in this cluster"
- type: AssertMutation
  action: "CREATE"
  filePath: "./samples/fixtures/deploy.yaml"
  jsonPath: ".metadata.labels.function"
  value: "workload"
          `}
          />
        </Fill>
      </Appear>
    </Layout>
  </Slide>,
  <Slide
    align="center flex-start"
    transition={["zoom"]}
    bgColor={COLOR_PALLETE.background}
  >
    <Heading
      margin="100px 0 100px 0"
      size={3}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
      AnchorCTL
    </Heading>
    <Layout style={{ alignItems: "center" }}>
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
        <Image src={AnchorCTL} />
      </Fill>
    </Layout>
  </Slide>,
];
// Consistent interface for developers to interact with: similar to helm charts
// Reduces cognitive effort required to get up and running
// Admission controller agnostic interface to building policy
// Switch between OPA + kube management -> Gatekeeper or own validating controller
// Allows templating of the tests.
// Helps find bugs early, enforces test coverage and helps weed out specific use cases.
// Lack of integration tests
// Build an open source tool called Anchor for this. A CLI tool that contains frequently tested kube functionalities in a declarative.
