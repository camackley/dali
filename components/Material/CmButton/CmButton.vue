<template>
  <button
    class="button"
    :style="componentStyle"
    type="button"
    @click="() => $emit('on-click')"
  >
    <component
      v-if="iconDirection == 'start'"
      :is="icon"
      :size="iconSize"
    />

    {{ text }}

    <component
      v-if="iconDirection == 'end'"
      :is="icon"
      :size="iconSize"
    />
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CamackleyIcons from "./Icons";

  export type IIconDirection = 'start' | 'end' | 'no-icon';

  export default Vue.extend({
    name: "cm-button",
    components: {
      ...CamackleyIcons
    },
    props: {
      text: {
        type: String,
        required: true
      },
      icon: {
        type: String,
      },
      iconDirection: {
        type: String as () => IIconDirection,
        required: true
      },
      iconSize: {
        type: String,
        default: "16px"
      },
      componentStyle: {
        type: Object,
        default: () => ({
          "--color": "#F7F7F7",
          "--background-color": "#608A76" 
        })
      }
    }
  })
</script>


<style src='./CmButton.scss' lang='scss' scoped></style>
