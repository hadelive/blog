import Image from 'next/image'

export default {
  project: {
    link: 'https://github.com/hadelive/blog'
  },
  primaryHue: 0,
  primarySaturation: 90,
  logo: () => (
    <>
      <Image
        src="https://avatars.githubusercontent.com/u/127402781?v=4"
        height="50"
        width="50"
        style={{ marginRight: "1em" }}
      />
    </>
  ),
  banner: {
    key: '1.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        Read more →
      </a>
    )
  }
  // ... other theme options
}
