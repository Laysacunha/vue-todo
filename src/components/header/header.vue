<template>
  <div id="header">
    <Search />
    <Notifications />
    <Profile />
  </div>
</template>

<script>
import Search from './search.vue'
import Profile from './profile.vue'
import Notifications from './notifications.vue'
export default {
  name: 'header',
  components: {
    Search,
    Profile,
    Notifications
  }
}
</script>

<style scoped>
  #header {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 4%;
  }
</style>
