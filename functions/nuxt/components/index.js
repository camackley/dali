export const About = () => import('../../components/About/About.ts' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/Navbar/Navbar.ts' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home/Home.ts' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))

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
