<template>
  <div>
    <no-ssr>
      <div id="bulkit-landing" class="hero is-fullheight rounded-hero">
        <nav class="navbar navbar-wrapper is-cloned">
          <div class="container">
            <!-- Brand -->
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="assets/img/logos/logo.png" alt="" />
              </a>

              <!-- /Responsive toggle -->
            </div>
          </div>
        </nav>
        <nav
          class="navbar navbar-wrapper navbar-light is-transparent is-static"
        >
          <div class="container">
            <!-- Brand -->
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="assets/img/logos/logo.png" alt="" class="logo" />
              </a>
            </div>
          </div>
        </nav>
        <div class="absolute-header">
          <div class="header-inner">
            <img
              class="cut-circle"
              src="assets/img/shapes/cut-circle.svg"
              alt=""
            />
          </div>
        </div>

        <div class="hero-body has-text-centered">
          <div class="container">
            <h1 class="title is-1 is-bold is-light pb-10">Hello. I am LINX</h1>
            <h3 class="subtitle is-5 is-light pb-20">
              Your Cloud Video Conferencing Tool.
              <span
                class="tag is-light is-rounded no-margin-bottom color-secondary"
                >3.1</span
              >
            </h3>
            <div class="buttons">
              <a
                href="signup"
                class="button button-cta is-bold btn-align primary-btn is-rounded raised"
              >
                Sign up
              </a>

              <a
                href="/login"
                class="button button-cta is-bold btn-align primary-btn is-rounded raised"
              >
                Log in
              </a>
            </div>
            <img
              class="hero-mockup"
              src="assets/img/illustrations/UI/linx.png"
              alt=""
            />
          </div>
        </div>

        <canvas id="demo-canvas"></canvas>
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.navbar-wrapper .navbar-brand img {
  height: 80px;
}
.navbar-item img {
  max-height: 10.75rem;
}
</style>
