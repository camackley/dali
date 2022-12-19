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
      avatarUrl: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2Favatar.webp?alt=media&token=5a482f4b-719c-4829-988c-a84adacbdf53",
      nameAudioUrl: "https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FName.m4a?alt=media&token=44da4f84-2f39-42e4-9d3b-efc3d6ef9457",
      torreUrl: "https://torre.co",
      audio: undefined as undefined | HTMLAudioElement
    };
  },
  mounted() {
    this.loadNameAudio();
  },
  methods: {
    loadNameAudio(): void  {
      this.audio = new Audio(this.nameAudioUrl);
    },
    playNameAudio(): void {
      alert("Play audio");
      // this.audio?.play();
    }
  }
});
