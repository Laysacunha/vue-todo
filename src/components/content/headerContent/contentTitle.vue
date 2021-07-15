<template>
  <div>
    <label class="contentTitle">You've got </label>
    <NumberTask class="contentTitle" />
    <label class="contentTitle" > today</label>
  </div>
</template>

<script>
import NumberTask from './numberTask.vue'
import AddTask from './addTask.vue'

export default {
  name: 'contentTitle',
  components: {
    NumberTask,
    AddTask
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  .contentTitle {
    width: 474px;
    height: 54px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    color: #1D262C;
  }
</style>
