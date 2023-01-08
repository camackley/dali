import Vue from "vue";
import { IDevice } from '@/store/Utils'

import SocialNetworks from "@/components/Footer/SocialNetworks/SocialNetworks";
import { SocialNetworkIcons } from "@/components/Footer/SocialNetworks/SocialNetworks";
import CmButton from '@/components/Material/CmButton/CmButton.vue';
import CmLogo from '@/components/Material/CmLogo/CmLogo.vue';

export interface ISocialNetwork {
  icon: string;
  url: string;
}

export default Vue.extend({
  components: {
    ...SocialNetworkIcons,
    CmButton,
    CmLogo
  },
  computed: {
    logoStyle(): { [key:string]:string } {
      return { "--color": "#F7F7F7" }
    },
    buttonStyle(): { [key:string]:string } {
      return {
        "--color": "#F7F7F7",
        "--background-color": "#2B475C"
      }
    },
    socialNetworks(): ISocialNetwork[] {
      return SocialNetworks;
    },
    device(): IDevice {
      return this.$store.state.Utils.device;
    },
  },
  methods: {
    sendEmail(): void {
      window.open("mailto:mackleycarmonaalvarez@gmail.com", "_blank");
    },
    scrollToTop(): void {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
});
