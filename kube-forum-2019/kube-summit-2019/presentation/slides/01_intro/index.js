import React from 'react'
import {
  Heading,
  Slide,
  CodePane,
  Text,
  List,
  ListItem,
  Image,
  Appear,
  BlockQuote,
  Quote
} from 'spectacle'


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
  <Slide align='center center' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
    <Heading
      margin='100px 0 100px 0'
      size={1}
      textColor={COLOR_PALLETE.textPrimary}
      fit
      caps
      lineHeight={1}
    >
    OPA Policy Templating and Testing
    </Heading>
    <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Tejas Cherukara</Text>
    <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>Ben Ebsworth</Text>
    {/* <Text margin='30px 0 0' textColor='tertiary' size={5} bold>
      Ben Ebsworth
    </Text> */}
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
  <Slide align='center center' transition={['zoom']} bgColor={COLOR_PALLETE.background}>
  <Heading
     margin='100px 0 100px 0'
     size={1}
     textColor={COLOR_PALLETE.textPrimary}
     fit
     caps
     lineHeight={1}
   >
   Workflow
   </Heading>
   <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>insert workflow here (demonstrated via a user-story)</Text>
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
  Scaling - Use cases
  </Heading>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>walkthrough use-cases which are hard to scale easily across a wide number of users</Text>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>specifically demonstrating doing best-practice enforcement</Text>
  <Text italic={true} textColor={COLOR_PALLETE.textPrimary}>abstracting platforms concerns from developers</Text>
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
  Scaling - Challenges
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
