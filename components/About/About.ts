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
      CVUrl: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2Fmackley_resume.pdf?alt=media&token=b691c9a4-297c-4871-a857-105cd7eedf48"
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
