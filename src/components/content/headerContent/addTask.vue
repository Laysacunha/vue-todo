<template>
<div id="addTask">
  <router-link :to="{ name: 'AddTask'}">
    <button name="addTask">
      <font-awesome-icon :icon="['far', 'plus-square']" />
      Add New
    </button>
  </router-link>

</div>
</template>

<script>
export default {
  name: 'addTask',
  components: {
  }
}
</script>

<style scoped>
  #addTask {
    padding:12px;
  }
  button{
    width: 139px;
    height: 34px;

    background: #884CB2;
    border: none;
    border-radius: 10px;
    color:white;
  }
</style>
