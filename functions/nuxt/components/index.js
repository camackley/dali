export const About = () => import('../../components/About/About.ts' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer/Footer.ts' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/Navbar/Navbar.ts' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home/Home.ts' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const AboutSkills = () => import('../../components/About/Skills/Skills.js' /* webpackChunkName: "components/about-skills" */).then(c => wrapFunctional(c.default || c))
export const FooterSocialNetworks = () => import('../../components/Footer/SocialNetworks/SocialNetworks.js' /* webpackChunkName: "components/footer-social-networks" */).then(c => wrapFunctional(c.default || c))
export const MaterialCmButton = () => import('../../components/Material/CmButton/CmButton.vue' /* webpackChunkName: "components/material-cm-button" */).then(c => wrapFunctional(c.default || c))
export const MaterialCmButtonIcons = () => import('../../components/Material/CmButton/Icons.ts' /* webpackChunkName: "components/material-cm-button-icons" */).then(c => wrapFunctional(c.default || c))
export const MaterialCmChip = () => import('../../components/Material/CmChip/CmChip.vue' /* webpackChunkName: "components/material-cm-chip" */).then(c => wrapFunctional(c.default || c))
export const MaterialCmLogo = () => import('../../components/Material/CmLogo/CmLogo.vue' /* webpackChunkName: "components/material-cm-logo" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
