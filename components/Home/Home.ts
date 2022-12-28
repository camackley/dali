import Vue from 'vue'
import { UilVolume } from '@iconscout/vue-unicons'
import { IDevice } from '@/store/Utils'

export default Vue.extend({
  name: "Home",
  components: {
    IconVolume: UilVolume,
  },
  data() {
    return {
      avatarUrl:
        'https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2Favatar.webp?alt=media&token=5339f2c6-53c6-44ae-8039-f0f74835e660',
      nameAudioUrl:
        'https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FName.m4a?alt=media&token=44da4f84-2f39-42e4-9d3b-efc3d6ef9457',
      torreUrl: 'https://torre.co',
      audio: undefined as undefined | HTMLAudioElement,
    }
  },
  computed: {
    device(): IDevice {
      return this.$store.state.Utils.device;
    },
    windowsSize(): { [key: string]: number } {
      if ((this, process.client)) {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      }

      return {}
    },
    avatarImgSizes(): { [key: string]: number } {
      if (this.device.isMobile) {
        return {
          width: this.windowsSize.width * 0.9,
          height: this.windowsSize.width * 0.9,
        }
      }

      return {
        width: this.windowsSize.width * 0.3,
        height: this.windowsSize.width * 0.3,
      }
    },
  },
  mounted() {
    this.loadNameAudio()
  },
  methods: {
    loadNameAudio(): void {
      this.audio = new Audio(this.nameAudioUrl)
    },
    playNameAudio(): void {
      this.audio?.play()
    },
  },
})
