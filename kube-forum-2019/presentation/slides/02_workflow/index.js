import React from 'react'
import {
  Heading,
  Slide,
  CodePane,
  Text,
  Layout,
  Fill,
} from 'spectacle'


const COLOR_PALLETE = {
  background: '#020003',
  textPrimary: '#ffffff',
  textSecondary: '#64c27c',

}

export default [
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
