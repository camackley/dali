<template>
  <span
    class="logo"
    :style="componentStyle"
  >CaMackley</span>
</template>


<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "cm-logo",
    props: {
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

<style src='./CmLogo.scss' lang='scss' scoped></style>
