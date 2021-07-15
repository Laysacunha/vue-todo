<template>
  <font-awesome-icon :class=setColor(priority) :icon="['far', 'circle']" />
</template>

<script>
export default {
  name: 'taskMenu',
  props: {
    priority: {
      required: false,
      type: String
    },
    color: {
      required: false,
      type: String
    }
  },
  components: {
  },
  methods: {
    setColor (priority) {
      switch (priority) {
        case 'minor':
          return 'green'
        case 'normal':
          return 'yellow'
        case 'critical':
          return 'red'
        default:
          return 'default'
      }
    }
  }
}
</script>

<style scoped>
  .green{
    color: green
  }
  .yellow{
    color: yellow
  }
  .red{
    color: red
  }
  .default{
    background: linear-gradient(133.9deg, rgba(243, 71, 122, 0.7) 0.24%, rgba(136, 76, 178, 0.7) 95.04%);
    color: white;
  }
</style>
