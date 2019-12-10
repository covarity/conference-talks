export const workflowLabels = [
  {
      index: 0,
      header:  "1 - Opening a Pull Request",
      description: `
A developer raises a PR to update OPA \`values.yaml\` or the underlying OPA policy templating engine
`
  },
  {
      index: 1,
      header:  "2 - Tekton Trigger",
      description: `
With GitHub being configured to hit a **Tekton Trigger** we will then have a mechanism of "triggering" a pipeline to run which will implement our validation workflow.
`
  },
  {
      index: 2,
      header:  "3 - PipelineRun",
      description: `
The Tekton Trigger will receive the GitHub webhook and create a corresponding **PipelineRun**
`
  },
  {
      index: 3,
      header:  "4 - Generate Policy",
      description: `
The first step of the pipeline is to generate our \`.rego\` policy from the templating engine, ready for validation by running \`$ opa test ...\`
`
  },
  {
    index: 4,
    header:  "5 - Unit Tests",
    description: `
With the generated policy from the previous step we can run our OPA unit testing to validate the basic functionality
`
},
{
  index: 5,
  header:  "6 - Integration Tests",
  description: `
Once the previous two steps have successfully passed, we can now our final, deeper, check on the policy. Using AnchorCTL we can run integration tests against a "real" cluster, in this case it is a **KinD** cluster, running inside a Kubernetes **Pod**
`
},
]