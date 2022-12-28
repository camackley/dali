<template>
  <div class="index">
    <navbar/>
    <home/>
    <about/>
    <cm-footer/>
  </div>
</template>

<router>
  {
    name: 'index',
    path: '/'
  }
</router>

<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
