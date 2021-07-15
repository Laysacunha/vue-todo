<template>
  <label id="taskStatus">{{status}}</label>
</template>

<script>
export default {
  name: 'taskStatus',
  props: {
    status: {
      required: true,
      type: String
    }
  },
  components: {
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
  #taskStatus {
    background: rgba(242, 153, 74, 0.2);
    border-radius: 8.5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;

    text-align: center;
    letter-spacing: -0.0676923px;
    padding: 3px 18px;
    color: #F2994A;
    width: 40px;
  }
</style>
