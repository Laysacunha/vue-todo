<template>
  <div>
    <h1 class="contentTitle">New Task</h1>
    <form>
      <label>Description task</label>
      <input type="text" name="task" v-model="task"/>
      <br/>
      <label>Task Status</label>
      <input type="text" name="status" v-model="status"/>
      <br/>
      <label>Task Priority</label>
      <input type="text" name="priority" v-model="priority"/>
      <br/>
      <label>Task Assigners</label>
      <input type="text" name="assigners" v-model="assigners"/>
      <br/>
      <label>Completed? </label>
      <input type="checkbox" name="completed" v-model="completed"/>
      <br/>
      <button @click="addTask">Submit</button>
      <router-link :to="{ name: 'Home'}">
        <button>Go Home</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'formContent',
  data () {
    return {
      task: '',
      status: '',
      priority: '',
      assigners: [],
      completed: false
    }
  },
  methods: {
    ...mapActions('task', ['addNewTask']),
    addTask (event) {
      event.preventDefault()
      const taskItem = {
        task: this.task,
        assigners: this.assigners,
        status: this.status,
        priority: this.priority,
        completed: this.completed
      }
      this.addNewTask(taskItem)
      this.$router.push({ name: 'Home' })
    }
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
