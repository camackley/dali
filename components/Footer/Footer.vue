<template>
  <footer class="footer">
    <div @click="scrollToTop">
      <cm-logo
        :component-style="logoStyle"
      />
    </div>

    <div class="footer__social-networks">
      <h4 class="title">Follow me</h4>

      <div class="icons">
        <a
          v-for="socialNetwork in socialNetworks"
          :key="socialNetwork.url"
          :href="socialNetwork.url"
          target="_blank"
          rel="external"
        >
          <component
            :is="socialNetwork.icon"
            size="25px"
          />
        </a>
      </div>
      
    </div>

    <div class="footer__contact">
      <h4 class="title">Contact me</h4>
      <cm-button
        class="button"
        text="Send an email"
        icon="UilEnvelopeAlt"
        icon-direction="end"
        icon-size="18px"
        :component-style="buttonStyle"
        @on-click="sendEmail"
      />
    </div>
  </footer>
</template>

<script src='./Footer.ts' lang='ts'></script>
<style src='./Footer.scss' lang='scss' scoped></style>
