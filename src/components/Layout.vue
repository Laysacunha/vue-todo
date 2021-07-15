<template>
  <MainLayout>
    <Header />
    <Content />
  </MainLayout>
</template>

<script>
import MainLayout from './MainLayout.vue'
import Header from './header/header.vue'
import Content from './content/content.vue'
export default {
  name: 'layout',
  components: {
    Header,
    Content,
    MainLayout
  }
}
</script>

<style scoped>
</style>
