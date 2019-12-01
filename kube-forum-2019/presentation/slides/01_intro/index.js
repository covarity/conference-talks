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
  Image,
  Appear,
  BlockQuote,
  Quote
} from 'spectacle'

import IntroBackground from  './../../../assets/intro-background.png'
import WorkflowPR from  './../../../assets/workflow-pr.png'


const COLOR_PALLETE = {
  background: '#020003',
  textPrimary: '#ffffff',
  textSecondary: '#64c27c',

}
const style = {
  note: { bottom: -25, position: 'relative' },
  pre: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { margin: 0, fontSize: '2em' },
  codeColor: '#d8d8d8'
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
<Slide align='center center' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
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
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>walkthrough use-cases which are hard to scale easily across a wide number of users</Text> 
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
  Solutions
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Gatekeeper</Text>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Common Library</Text>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Templating</Text>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Unit Testing</Text>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Integration Testing</Text>
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
    Common Library
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
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
  Templating - Jinja2
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
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
  Mock Testing - Conftest
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
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
  Integration Testing - Anchor
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
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
  Anchor - Why
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
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
  Anchor - How
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
  <Heading
     
     size={5}
     textColor={COLOR_PALLETE.textPrimary}
     caps
     lineHeight={1}
   >
   Workflow
   </Heading>
   <Image height={600} margin={"100px auto"} src={WorkflowPR} />
</Slide>,
<Slide align='center flex-start' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
  <Heading
     margin='100px 0 100px 0'
     size={5}
     textColor={COLOR_PALLETE.textPrimary}
     caps
     lineHeight={1}
   >
   Workflow
   </Heading>
   <Layout>
    <Fill>
      <Heading
        size={4}
        caps
        textColor="secondary"
        bgColor="white"
        margin={10}
      >
      </Heading>
      <Text textColor={COLOR_PALLETE.textPrimary}>A high level interface is provided to developer for manging policies within their environments</Text>
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
      <CodePane lang="yaml" source={`
        policies:
          resourcesAllowed:
            - name: dev-a
              resources:
              - Deployment
              - ReplicaSet
              - ConfigMap
              - Secret
          ingressBlock:
          `} />
    </Fill>
    </Layout>
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
  Demo - Workflow
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Templating + unit tests + integration tests all running in Tekton Pipeline triggered via github PR</Text> 
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
  Demo
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}></Text> 
</Slide>
]
