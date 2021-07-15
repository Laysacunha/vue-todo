<template>
  <label>{{priority}}</label>
</template>

<script>
export default {
  name: 'taskPriority',
  props: {
    priority: {
      required: true,
      type: String
    }
  },
  components: {
  }
}
</script>

<style scoped>
  label{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #5C626D;
    margin-left: 2px;
  }
</style>
