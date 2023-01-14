import Vue from "vue";
import { IDevice } from '@/store/Utils'

import About from "@/components/About/About";
import Footer from '@/components/Footer/Footer'
import Home from '@/components/Home/Home'
import Navbar from '@/components/Navbar/Navbar'

export default Vue.extend({
  head() {
    const title = "Mackley Carmona | Experienced Full-Stack Software Engineer Focused on User Experience";
    const description = "Full-stack software engineer with 4+ years experience designing & developing scalable solutions that prioritize user experience on web and mobile. Notable achievements include creating a hybrid codebase, designing a scalable user management system, and improving mobile app performance through clean architecture.";
    const ogImage = "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FogImage.png?alt=media&token=f0b71d31-c143-44b8-8504-416797a59feb";

    return {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: "description", property: "description", name: "description", content: description },
        { hid: "og:type", property: "og:type", name: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", name: "og:title", content: title },
        { hid: "og:description", property: "og:description", name: "og:description", content: description },
        { hid: "og:image", property: "og:image", name: "og:image", content: ogImage },
        { hid: "og:image:width", property: "og:image:width", name: "og:image:width", content: "1200" },
        { hid: "og:image:height", property: "og:image:height", name: "og:image:height", content: "630" },
        { hid: "og:site_name", property: "og:site_name", name: "og:site_name", content: "CaMackley" },
        { hid: "og:url", property: "og:url", name: "og:url", content: ogImage },
        { hid: "twitter:title", property: "twitter:title", name: "twitter:title", content:  title },
        { hid: "twitter:image", property: "twitter:image", name: "twitter:image", content: ogImage },
        { hid: "twitter:card", property: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:domain", property: "twitter:domain", name: "twitter:domain", content: "camackley.com" },
        { hid: "google", property: "google", name: "google", content: "notranslate" },
        { hid: "robots", property: "robots", name: "robots", content: "index, follow" },
      ],
      link: [
        { hid: "canonical", rel: "canonical", href: "https://camackley.com" }
      ],
      __dangerouslyDisableSanitizers: ["script"],
    }
  },
  components: {
    About,
    CmFooter: Footer,
    Home,
    Navbar,
  },
  asyncData({ app, store }) {
    const device = app.$device;
    function dispatchOrAddError(action: string, item: any, payload?: any): void {
      if (item) {
        store.dispatch(action, payload || item);
      }
    }

    dispatchOrAddError("Utils/setDeviceInfo", device);
  },
  computed: {
    device(): IDevice {
      return this.$store.state.Utils.device;
    },
  }
});
