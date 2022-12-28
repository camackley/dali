<template>
  <div class="navbar container">
    <div class="row">
      <h1 class="navbar__logo">
        <cm-logo/>
      </h1>
    </div>

    <span
      v-if="!$device.isMobileOrTablet"
      class="warning"
    >
      ⚠️
      <span class="warning--text bg-warning">
        This website is under development
      </span>
    </span>
  </div>
</template>

<script src='./Navbar.ts' lang='ts'></script>
<style src='./Navbar.scss' lang='scss' scoped></style>
