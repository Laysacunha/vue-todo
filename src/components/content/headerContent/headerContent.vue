<template>
  <div id="headerContent">
    <ContentTitle />
    <AddTask />
  </div>
</template>

<script>
import ContentTitle from './contentTitle.vue'
import AddTask from './addTask.vue'
export default {
  name: 'headerContent',
  components: {
    ContentTitle,
    AddTask
  }
}
</script>

<style scoped>
  #headerContent {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
