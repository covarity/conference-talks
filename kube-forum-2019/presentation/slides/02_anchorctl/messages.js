export const anchorctlLabels = [
  {
      index: 0,
      header:  "1 - Setup",
      description: `
Similar to other testing frameworks, enables you to provision the test namespace, and initialize resources needed for testing.
`
  },
  {
      index: 1,
      header:  "2 - Create && Lookup",
      description: `
Enables you to either submit a filepath for creation or lookup a resource live through the spec.
`
  },
  {
      index: 2,
      header:  "3 - Assert",
      description: `
Interact with Kube APIServer, assert that errors are returned as expected or that the JSONPath has the expected value.
`
  },
  {
      index: 3,
      header:  "4 - Teardown",
      description: `
Destroy resources initialized during the setup stage.
`
  },
]