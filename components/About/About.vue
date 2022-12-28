<template>
  <div class="row about">
    <div class="col-12 col-md about__summary">
      <h2>About me</h2>
      <p class="about__summary--text">
        User-centered software engineer with 4+ years of experience in full-stack software development. I specialize in designing and developing high-quality and scalable software solutions that prioritize the user experience, both on the web and mobile.
        <br/>
        <br/>
        <strong>Some of my notable achievements:</strong>
        <br/>
        <ul>
          <li>
            Reduced development time by 7X through the creation of a single hybrid codebase that can be customized for all clients by simply changing the build file, instead of creating a separate codebase for each client.<br/>
          </li>
          <li>
            Designed a scalable component system that allows for the management of different types of users based on a schema file.<br/>
          </li>
          <li>
            Migrated 80% of the codebase to a hybrid technology with clean architecture, resulting in improved mobile app performance
          </li>
        </ul>
        <br/>
        I'm excited about opportunities to build solutions that positively impact users and work with world-class teams.
      </p>

      <div class="about__skills--chips">
        <cm-chip
          v-for="skill in skills"
          :key="skill.text"
          :text="skill.text"
          :path="skill.path"
        />
      </div>

      <cm-button
        class="button"
        text="Open Curriculum Vitae"
        icon="UilExternalLinkAlt"
        icon-direction="end"
        @on-lick="openCV"
      />

    </div>
    <div class="col-md"/>
  </div>
</template>

<script src='./About.ts' lang='ts'></script>
<style src='./About.scss' lang='scss' scoped></style>
