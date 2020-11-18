import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "n7nyq3ka",
  dataset: "production",
  useCdn: true,
})