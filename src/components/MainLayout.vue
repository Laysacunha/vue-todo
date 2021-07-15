<template>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'MainLayout'

}
</script>

<style scoped>
  main{
    width: 915px;
    height: 825px;
    margin: 0 auto;

    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;
    padding: 40px;
  }
</style>
