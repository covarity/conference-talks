import React from 'react'
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
  Appear
} from 'spectacle'

import IntroBackground from  './../../../assets/intro-background.png'
import WorkflowPR from  './../../../assets/workflow-pr.png'


const COLOR_PALLETE = {
  background: '#020003',
  textPrimary: '#ffffff',
  textSecondary: '#64c27c',

}

export default [
  <Slide align='center center-top' transition={['zoom']} bgImage={IntroBackground}>
    <Heading
      margin='100px 0 400px 0'
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      align='center center-top'
      fit
      caps
      textColor="black"
      lineHeight={1}
    >
    OPA Policy Templating and Testing
    </Heading>
    <Text textAlign='right' margin='0 20px' italic={true} textColor={COLOR_PALLETE.textPrimary}>Tejas Cherukara</Text>
    <Text textAlign='right' margin='0 20px' italic={true} textColor={COLOR_PALLETE.textPrimary}>Ben Ebsworth</Text>
  </Slide>,
  <Slide align='center center' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
   <Heading
      margin='100px 0 100px 0'
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
    What is OPA?
    </Heading>
  </Slide>,
 <Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
 <Heading
    margin='100px 0 100px 0'
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
      >
      </Heading>
      <Text textColor={COLOR_PALLETE.textPrimary}>Controlling `Service` resource type within environment. Preventing services being exposed unintentionally</Text>
    </Fill>
    <Fill>
      <Text
        caps
        textAlign={
          "left"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        ✅  allow internal service
      </Text>
      <CodePane textSize={16} lang="yaml" source={`
        apiVersion: v1
        kind: Service
        metadata:
          name: my-service
        spec:
          ...
          type: ClusterIP
          `} />
      <Text
        caps
        textSize={25}
        textAlign={
        "left"
        }
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
      >❌  deny external service
      </Text>
      <CodePane textSize={16} lang="yaml" source={`
        apiVersion: v1
        kind: Service
        metadata:
          name: my-service
        spec:
          ...
          type: LoadBalancer
          `} />
    </Fill>
    </Layout>
  <Notes>For a quick preface - in adopting OPA within the origanisation, these are some of the scenarios we had to overcome
  </Notes>
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
 <Heading
    margin='100px 0 100px 0'
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
      >
      </Heading>
      <Text textColor={COLOR_PALLETE.textPrimary}>Mutating deployments onto specific worker pools based of namespace etc</Text>
    </Fill>
    <Fill>
      <Text
        caps
        textAlign={
          "left"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        namespace-functionA → node-pool-A
      </Text>
      <CodePane textSize={16} lang="yaml" source={`
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
          `} />
    </Fill>
    </Layout>
  <Notes>For a quick preface - in adopting OPA within the origanisation, these are some of the scenarios we had to overcome
  </Notes>
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
 <Heading
    margin='100px 0 100px 0'
    size={4}
    textColor={COLOR_PALLETE.textPrimary}
    fit
    caps
    lineHeight={1}
  >
  Use Cases
  </Heading>
  <Layout>
    <Fill align='center'>
      <Text textColor={COLOR_PALLETE.textPrimary}>Control which resources can be deployed into which namespace based on team and/or cluster</Text>
    </Fill>
    <Fill >
      <Text
        caps
        textAlign={
          "left"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        ✅ Allow Deployment resource
      </Text>
      <CodePane textSize={16} lang="yaml" source={`
        apiVersion: v1
        kind: Deployment
        metadata:
          name: myDeployment
          namespace: teamA
        spec:
          ...
          `} />
      <Text
        caps
        textSize={24}
        textAlign={
        "left"
        }
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
      >❌  deny DaemonSet resource
      </Text>
      <CodePane textSize={16} lang="yaml" source={`
        apiVersion: v1
        kind: DaemonSet
        metadata:
          name: myDaemonSet
          namespace: teamA
        spec:
          ...
          `} />
    </Fill>
    </Layout>
  <Notes>For a quick preface - in adopting OPA within the origanisation, these are some of the scenarios we had to overcome
  </Notes>
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
 <Heading
    margin='100px 0 100px 0'
    size={3}
    textColor={COLOR_PALLETE.textPrimary}
    fit
    caps
    lineHeight={1}
  >
  Productionising Challenges
  </Heading>
  <List textColor={COLOR_PALLETE.textPrimary}>
    <ListItem>Reduce effort get up and running with OPA</ListItem>
    <ListItem>Provide a admission controller agnostic interface</ListItem>
    <ListItem>Provide an abstraction with a consistent workflow</ListItem>
  </List>
  <Notes>
    Reduce Cognitive Load
    Admission Controller agnostic interface
        - With the introduction of Gatekeeper, we wanted to provide a mechanism to support
          writing policies that could lead to a graceful migration from OPA + kube-mgmt to Gatekeeper
    Abstraction with consistent workflow
        - Developer are used to dealing with helm charts, potentially surfacing the policies in a
          similar manner
  </Notes>
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
 <Heading
    margin='100px 0 100px 0'
    size={3}
    textColor={COLOR_PALLETE.textPrimary}
    fit
    caps
    lineHeight={1}
  >
  A Potential Solution
  </Heading>
  <Layout style={{padding:"20px"}}>
  <Fill>
    <Appear order={2}>
      <div>
      <Text
        caps
        textAlign={
          "centre"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        Of templated policies
      </Text>
      <CodePane textSize={16} lang="python" source={`
{% for resource in deny_resource -%}

deny[msg] {
    input.request.resource.resource = "{{resource}}"
    isCreate
    msg := "You can't create {{resource}} resource in this Cluster"
}

{% endfor -%}
          `} />
      </div>
    </Appear>
    </Fill>
    </Layout>
    <Layout>
    <Fill align='center' style={{padding:"10px"}}>
      <Appear order={1}>
        <div>
        <Text caps textColor={COLOR_PALLETE.textPrimary} textSize={24}>Common library</Text>
      <CodePane textSize={16} lang="bash" source={`
  kube
  ├── common
  ├── deny-resource
  ├── lb-services
  ├── mutate-affinity
  ├── mutate-label
  ├── restrict-resource-namespaces
  └── whitelist-namespaces
          `} />
        </div>
      </Appear>

    </Fill>
    <Fill style={{padding:"10px"}} align='center flex-start'>
      <Appear order="3">
        <div>
        <Text
        caps
        textAlign={
          "centre"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        Exposed through common interface
      </Text>
      <CodePane textSize={16} lang="yaml" source={`
deny_resource:
- ingresses
          `} />
        </div>
      </Appear>
    </Fill>
    </Layout>
    <Notes>
    - Common library of policies to get up and running which reduces the cognitive workload
    - Templated policies which can be used to template rego now, and CRDs later when Gatekeeper is introducted for a graceful migration
    - YAML values file, similar to the helm workflow that the developers are already familiar with
  </Notes>
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
<Heading
    margin='100px 0 100px 0'
    size={3}
    textColor={COLOR_PALLETE.textPrimary}
    fit
    caps
    lineHeight={1}
  >
  More Challenges
  </Heading>
  <Layout>
    <Fill>
    <Appear order={1}>
      <div>
      <Text
        caps
        textAlign={
          "centre"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        What about unit tests?
      </Text>
      <CodePane textSize={16} lang="python" source={`
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

          `} />
      </div>
    </Appear>
    </Fill>
  </Layout>
  <Layout>
    <Fill>
    <Appear order={2}>
      <div>
      <Text
        caps
        textAlign={
          "centre"
          }
          textSize={24}
        textColor={COLOR_PALLETE.textPrimary}
        margin={10}
        >
        What about integrations tests?
      </Text>
          <List textColor={COLOR_PALLETE.textPrimary}>
            <ListItem>Assert status of OPA deploy and configmaps</ListItem>
            <ListItem>Assert Validating Admission webhook works</ListItem>
            <ListItem>Assert Mutating Admission webhook works</ListItem>
          </List>
      </div>
    </Appear>
    </Fill>
  </Layout>
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
 <Heading
    margin='100px 0 100px 0'
    size={3}
    textColor={COLOR_PALLETE.textPrimary}
    fit
    caps
    lineHeight={1}
  >
  AnchorCTL
  </Heading>
  <Layout style={{padding:"20px"}}>
  <Fill>
    <Appear order={1}>
      <List caps textAlign={"centre"} textSize={"24"} textColor={COLOR_PALLETE.textPrimary}>
        <ListItem>Opensource CLI tool written in Golang</ListItem>
        <ListItem>Collection of Kubernetes test helps</ListItem>
        <ListItem>Tests defined through YAML interface</ListItem>
      </List>
    </Appear>
    </Fill>
    <Fill align='center' style={{padding:"10px"}}>
      <Appear order={2}>
        <div>
        <Text caps textColor={COLOR_PALLETE.textPrimary} textSize={24}>Test File</Text>
      <CodePane textSize={14} lang="yaml" source={`
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
          `} />
        </div>
      </Appear>

    </Fill>
    </Layout>
</Slide>
]
// Consistent interface for developers to interact with: similar to helm charts
// Reduces cognitive effort required to get up and running
// Admission controller agnostic interface to building policy
// Switch between OPA + kube management -> Gatekeeper or own validating controller
// Allows templating of the tests.
// Helps find bugs early, enforces test coverage and helps weed out specific use cases.
// Lack of integration tests
// Build an open source tool called Anchor for this. A CLI tool that contains frequently tested kube functionalities in a declarative.