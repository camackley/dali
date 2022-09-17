<template>
  <div class="home container">
    <Navbar/>

    <div class="row">
      <div class="col-12 col-md text-center">
        <img
          :class="['home__avatar', { 'home__avatar-mobile': $device.isMobileOrtablet }]"
          :src="avatarUrl"
          alt="Mackley photo"
        >
      </div>
  
      <div class="home__caption col-12 col-md">
        <h2>
          Hello there! 👀
        </h2>
        <p>
          I'm
          <span class="home__caption--name">
            Mackley Carmona
            <IconVolume size="18px" class="home__caption--name-icon align-top"/>
          </span>,
          a software engineer at
          <a
            href="https://torre.co"
            class="home__caption--company"
            target="_blank"
          >
            @torre</a>
          and appasionated to never stop learning
        </p>
      </div>
    </div>
  </div>
</template>

<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
