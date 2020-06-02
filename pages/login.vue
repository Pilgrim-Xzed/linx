<template>
  <div>
    <auth-header />

    <div class="auth-outer">
      <div class="columns">
        <div class="card">
          <div class="column">
            <div class="form-wrapper">
              <center>
                <br />
                <div class="form-title">
                  <img src="assets/img/logos/logo.png" alt="" width="150px" />
                  <h3>Welcome back</h3>
                  <h4>We're super happy to see you again! Let's log you in.</h4>
                </div>
              </center>
              <div class="form-inner">
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      class="input is-rounded is-secondary-focus"
                      placeholder="Email address"
                    />
                    <div class="icon is-nedium is-left">
                      <i class="sl sl-icon-envelope-open"></i>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      class="input is-rounded is-secondary-focus"
                      placeholder="Password"
                    />
                    <div class="icon is-nedium is-left">
                      <i class="sl sl-icon-lock"></i>
                    </div>
                  </div>
                </div>

                <div class="field pb-5">
                  <div class="control">
                    <label class="checkbox-wrap is-small muted-text">
                      <input id="check1" type="checkbox" class="d-checkbox" />
                      <span></span>
                      Remember me?
                    </label>
                  </div>
                </div>

                <div class="field">
                  <div class="control has-icons-left">
                    <button
                      class="button is-fullwidth is-rounded secondary-btn raised"
                    >
                      Login
                    </button>
                  </div>
                </div>

                <div class="has-text-centered">
                  <a class="muted-text">Forgot Password?</a>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <!--div class="column is-6">
                    <img src="assets/img/illustrations/drawings/couch.svg" alt="">
                </div-->
      </div>
    </div>
  </div>
</template>
<script>
import AuthHeader from '~/components/AuthHeader.vue'
export default {
  components: {
    AuthHeader
  },
  head() {
    return {
      script: [
        {
          src: '/assets/js/auth.js'
        }
      ]
    }
  }
}
</script>
<style scoped>
.auth-outer {
  position: relative;
  margin-top: 60px;
  padding: 50px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  background: #f2f2fa;
  min-height: calc(100vh - 60px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
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

*::-webkit-scrollbar-thumb,
html::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar-thumb,
html::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  width: 10px;
}

a,
a:active,
i,
i:active,
div,
div:active,
div:focus,
span:focus,
span:active {
  outline: none !important;
}
</style>
