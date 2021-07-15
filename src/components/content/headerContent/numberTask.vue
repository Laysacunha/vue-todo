<template>
  <label id="numberTask"> {{taskCount2}} tasks </label>
</template>

<script>
import { mockList } from '../../../services/mocker.js'
export default {
  name: 'numberTask',
  components: {
  },
  computed: {
    taskCount2 () {
      return mockList.filter((item) => {
        return !item.completed
      }).length
    }
  },
  methods: {
    taskCount () {
      return mockList.filter((item) => {
        return !item.completed
      }).length
    }
  }
}
</script>

<style scoped>
  #numberTask {
    color: #FF1493;
  }
</style>
