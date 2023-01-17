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
      nameAudioUrl:
        'https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2FName.m4a?alt=media&token=44da4f84-2f39-42e4-9d3b-efc3d6ef9457',
      torreUrl: 'https://torre.co',
      avatar: {
        id: 0,
        url: 'https://firebasestorage.googleapis.com/v0/b/dali-camackley.appspot.com/o/website%20assets%2Favatar.webp?alt=media&token=5339f2c6-53c6-44ae-8039-f0f74835e660',
        size: 0
      },
      audio: undefined as undefined | HTMLAudioElement,
    }
  },
  computed: {
    device(): IDevice {
      return this.$store.state.Utils.device;
    },
    iconVolumeSize(): string {
      if (this.device.isMobileOrTablet) {
        return "18px"
      }

      return "35px"
    }
  },
  mounted() {
    this.loadNameAudio();

    this.$nextTick(() => {
      window.addEventListener('resize', () => this.renderAvatar());
    });

    this.renderAvatar();
  },
  beforeDestroy() { 
    window.removeEventListener('resize', () => {}); 
  },
  methods: {
    loadNameAudio(): void {
      this.audio = new Audio(this.nameAudioUrl)
    },
    playNameAudio(): void {
      this.audio?.play()
    },
    getAvatarImgSize(): number {
      const width = window.innerWidth;

      return width < 768
        ? width * 0.9
        : width * 0.3;
    },
    renderAvatar(): void {
      const avatarSize = this.getAvatarImgSize();
      this.avatar = {
        ...this.avatar,
        size: avatarSize
      };

      this.avatar.id += 1;
    },
  },
})
