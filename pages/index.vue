<template>
  <div>
    <HomeHeader />
    <service />
    <customer-chat />
  </div>
</template>
<script>
import HomeHeader from '~/components/HomeHeader.vue'
import Service from '~/components/Service.vue'
import CustomerChat from '~/components/CustomerChat.vue'
export default {
  components: {
    HomeHeader,
    Service,
    CustomerChat
  }
}
</script>
