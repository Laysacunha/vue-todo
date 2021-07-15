<template>
  <MainLayout>
    <Header />
    <FormContent />
  </MainLayout>
</template>

<script>
import MainLayout from './MainLayout.vue'
import Header from './header/header.vue'
import FormContent from './formContent/formContent.vue'
export default {
  name: 'layout',
  components: {
    Header,
    MainLayout,
    FormContent
  }
}
</script>

<style scoped>
</style>
