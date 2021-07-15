<template>
  <label v-if="inactive" class="inactive">Inactive</label>
  <label v-else class="active">Active</label>
</template>

<script>
export default {
  name: 'taskListStatus',
  props: {
    inactive: {
      required: true,
      type: Boolean
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  .inactive{
    background: rgba(235, 87, 87, 0.2);
    border-radius: 8.5px;

    height: 18px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 18px;

    text-align: center;
    letter-spacing: -0.0676923px;

    color: #EB5757;
    padding: 3px 10px;
  }
  .active{
    background: rgba(142, 202, 157, 0.2);
    border-radius: 8.5px;

    height: 18px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 18px;

    text-align: center;
    letter-spacing: -0.0676923px;

    color: #1c5724;
    padding: 3px 10px;
  }
</style>
