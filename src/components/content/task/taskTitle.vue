<template>
  <label id="taskTitle"> {{title}}</label>
</template>

<script>
export default {
  name: 'taskTitle',
  props: {
    title: {
      required: true,
      type: String
    }
  },
  components: {
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  #taskTitle {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    width: 350px;

    color: #000000;
    margin-left: 5px;
  }
</style>
