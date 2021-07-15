<template>
  <div>
    <HeaderContent />
    <TaskList />
  </div>
</template>

<script>
import HeaderContent from '../content/headerContent/headerContent.vue'
import TaskList from './taskList/taskList.vue'
export default {
  name: 'layout',
  components: {
    HeaderContent,
    TaskList
  }
}
</script>

<style scoped>

</style>
