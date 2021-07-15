<template>
  <!--TODO FAZER ARRAY DE IMAGENS E USAR VFOR PRA ASSOCIAR DENTRO DA DIV-->
  <img src="../../../assets/assigners.svg"/>
  <!-- <TaskItem v-for="(item, index) in mockListCompleted" :key="index" :item="item"/> -->
</template>

<script>
// import { mockAvatars } from '../../../services/mocker.js'
export default {
  name: 'taskAssigners',
  props: {
    assigners: {
      required: true,
      type: Array
    }
  },
  components: {
  },
  computed: {
    /* mockAvatarsComputed() {
      return mockAvatars.filter(() => {

      }) */
  }
}
</script>

<style scoped>
</style>
