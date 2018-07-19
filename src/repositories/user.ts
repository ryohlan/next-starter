export const get: () => Promise<{ user: any }> = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ user: { name: 'SampleName' } })
    }, 2000)
  })
