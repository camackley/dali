import Vue from "vue";
import { UilVolume } from '@iconscout/vue-unicons';

import Navbar from "@/components/Navbar/Navbar";

export default Vue.extend({
  components: {
    Navbar,
    IconVolume: UilVolume
  },
  data() {
    return {
      avatarUrl: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FAvatar.svg?alt=media&token=43cde588-7eff-4f55-86d9-01b2faba790b"
    };
  }
});
