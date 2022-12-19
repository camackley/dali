import Vue from "vue";

import About from "@/components/About/About";
import Home from '@/components/Home/Home'
import Navbar from '@/components/Navbar/Navbar'

export default Vue.extend({
  components: {
    About,
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
});
