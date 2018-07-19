export const get: () => Promise<{ user: any }> = () =>
  new Promise(resolve => {
    resolve({ user: { name: 'SampleName' } })
  })
