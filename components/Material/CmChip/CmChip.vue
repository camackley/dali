<template>
  <span
    class="chip"
    :style="componentStyle"
  >
    <svg
      v-if="false"
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      :fill="color"
    >
      <path :d="path"/>
    </svg>
    <span>{{ text }}</span>
  </span>
</template>


<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "cm-chip",
    props: {
      text: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      },
      componentStyle: {
        type: Object,
        default: () => ({
          "--color": "#2B475C",
          "--background-color": "#E9E6E1" 
        })
      }
    },
    computed: {
      color(): string {
        return this.componentStyle["--color"];
      }
    }
  })
</script>

<style src='./CmChip.scss' lang='scss' scoped></style>
