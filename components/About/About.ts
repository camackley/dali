import Vue from "vue";
import { UilFileDownload } from '@iconscout/vue-unicons';

import skills  from "@/components/About/Skills/Skills.js";
import CmButton from '@/components/Material/CmButton/CmButton.vue';
import CmChip from '@/components/Material/CmChip/CmChip.vue';

export default Vue.extend({
  name: "About",
  components: {
    UilFileDownload,
    CmButton,
    CmChip
  },
  data() {
    return {
      CVUrl: "https://shorturl.at/bcqBE"
    }
  },
  computed: {
    skills(): { [key: string]: string }[] {
      return skills;
    }
  },
  methods: {
    openCV(): void {
      window.open(this.CVUrl, "_blank");
    }
  }
});
