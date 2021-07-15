<template>
  <div>
    <div class="list">
      <div class="listTitle">
        <TaskListTitle title='On Hold'/>
        <TaskListStatus :inactive="false" />
      </div>
      <TaskItem v-for="(item, index) in onHoldTasks" :key="index" :item="item"/>
    </div>
    <div class="list">
      <div class="listTitle">
        <TaskListTitle title='Completed' />
        <TaskListStatus :inactive="true" />
      </div>
      <TaskItem v-for="(item, index) in completedTasks" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskListTitle from './taskListTitle.vue'
import TaskListStatus from './taskListStatus.vue'
import TaskItem from '../task/taskItem.vue'

export default {
  name: 'TaskList',
  props: {

  },
  components: {
    TaskListTitle,
    TaskListStatus,
    TaskItem
  },
  data () {
    return {}
  },
  watch: {

  },
  computed: {
    ...mapGetters('task', ['onHoldTasks', 'completedTasks'])
  },
  methods: {

  }
  // controles de fluxo: created, updated, destroy
}
</script>

<style scoped>
  .list{
    padding: 10px 0px;
  }
  .listTitle{
    padding: 20px 0px;
  }
</style>
