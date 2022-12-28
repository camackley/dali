import Vue from "vue";

import { IDevice } from '@/store/Utils'
import CmLogo from '@/components/Material/CmLogo/CmLogo.vue';

export default Vue.extend({
  name: 'Navbar',
  components: {
    CmLogo
  },
  computed: {
    device(): IDevice {
      return this.$store.state.Utils.device;
    },
  }
})
