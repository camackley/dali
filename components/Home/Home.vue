<template>
  <div class="row home">
    <div class="col col-md-5 pl-md-5 home__avatar">
      <nuxt-img 
        class="home__avatar--img"
        :src="avatarUrl"
        alt="Mackley Carmona photo"
        :width="avatarImgSizes.width"
        :height="avatarImgSizes.height"
        preload
      />
    </div>

    <div class="home__caption col col-md-4 p-md-0">
      <h2>
        Hello there! 👀
      </h2>
      <p>
        I'm
        <span
          class="home__caption--name"
          @click="playNameAudio()"
        >
          Mackley Carmona
          <icon-volume
            class="home__caption--name-icon align-top"
            :size="iconVolumeSize"
          />
        </span>,
        a software engineer at
        <a
          :href="torreUrl"
          :class="['home__caption--company', { 'home__caption--hover': !$device.isMobileOrTablet }]"
          target="_blank"
        >torre</a>
        and passionate about never stopping learning 🚀
      </p>
    </div>
  </div>
</template>

<script src='./Home.ts' lang='ts'></script>
<style src='./Home.scss' lang='scss' scoped></style>
