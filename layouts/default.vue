<template>
  <div>
    <div class="pageloader"></div>
    <div class="infraloader is-active"></div>
    <!-- Hero and Navbar -->
    <nuxt />
    <footer class="footer-light-medium-demo">
      <div class="container">
        <div class="columns footer-body">
          <!-- Column -->
          <div class="column is-4">
            <div class="pt-10 pb-10">
              <img src="assets/img/logos/logo.png" alt="" width="150px" />
              <div class="footer-description pt-10 pb-10">
                Linx is a fully featured video conferencing tool, with features
                ranging from -----
              </div>
            </div>
            <div>
              <span class="moto"
                >Designed and coded with
                <i class="fa fa-heart color-red"></i> by CypherFOX.</span
              >
              <div class="social-links pt-10 pb-10">
                <a href="#">
                  <span class="icon"><i class="fa fa-facebook"></i></span>
                </a>
                <a href="#">
                  <span class="icon"><i class="fa fa-twitter"></i></span>
                </a>
                <a href="#">
                  <span class="icon"><i class="fa fa-linkedin"></i></span>
                </a>
                <a href="#">
                  <span class="icon"><i class="fa fa-dribbble"></i></span>
                </a>
                <a href="#">
                  <span class="icon"><i class="fa fa-github"></i></span>
                </a>
              </div>
            </div>
          </div>
          <!-- Column -->
          <div class="column is-6 is-offset-2">
            <div class="columns">
              <!-- Column -->
              <div class="column">
                <ul class="footer-column">
                  <li class="column-header">
                    LINX
                  </li>
                  <li class="column-item"><a href="#">Home</a></li>
                  <li class="column-item"><a href="#">Signup</a></li>
                  <li class="column-item"><a href="#">Login</a></li>
                  <li class="column-item"><a href="#">Help</a></li>
                </ul>
              </div>
              <div class="column">
                <ul class="footer-column">
                  <li class="column-header">
                    Terms
                  </li>
                  <li class="column-item"><a href="#">Terms of Service</a></li>
                  <li class="column-item"><a href="#">Privacy policy</a></li>
                  <li class="column-item"><a href="#">SaaS services</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright has-text-centered">
          <p>
            &copy; 2019-2020 | <a href="#">Slammad</a> | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
