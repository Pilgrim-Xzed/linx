<template>
  <div class="auth-nav">
    <div class="start is-hidden-mobile">
      <a href="/">Home</a>
    </div>
    <div class="end">
      <span class="muted-text pr-10">Have an account?</span>
      <a href="/kit8-login.html" class="button is-rounded btn-align">Sign Up</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthHeader'
}
</script>
<style scoped>
.auth-nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  background: #f2f2fa;
  border-bottom: 1px solid #ededed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 10;
}
</style>
