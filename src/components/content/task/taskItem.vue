<template>
  <div id="taskItem">
    <div id="taskTitle">
      <TaskMark />
      <TaskTitle :title="item.task"/>
    </div>
    <TaskStatus :status="item.status"/>
    <div id="priority">
      <TaskMark :priority="item.priority"/>
      <TaskPriority :priority="item.priority"/>
    </div>
    <TaskAssigners :assigners="item.assigners"/>
    <TaskMenu />
  </div>
</template>

<script>
import TaskTitle from './taskTitle.vue'
import TaskStatus from './taskStatus.vue'
import TaskPriority from './taskPriority.vue'
import TaskMark from './taskMark.vue'
import TaskAssigners from './taskAssigners.vue'
import TaskMenu from './taskMenu.vue'
export default {
  name: 'taskAssigners',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  components: {
    TaskTitle,
    TaskStatus,
    TaskPriority,
    TaskMark,
    TaskAssigners,
    TaskMenu
  }
}
</script>

<style scoped>
  #taskItem{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 15px 0px;
    border-bottom: 0.5px rgb(247, 247, 247) solid;
  }
  #priority{
    align-items: left;
    width:80px;
  }
  #taskTitle{
    align-items: left;
    width: 380px;
  }
</style>
