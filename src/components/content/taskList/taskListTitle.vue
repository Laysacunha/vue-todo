<template>
  <label> {{title}}</label>
</template>

<script>
export default {
  name: 'taskListTitle',
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
  label {
    width: 102px;
    height: 27px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;

    color: #1D262C;
    padding: 20px 0px;
  }
</style>
