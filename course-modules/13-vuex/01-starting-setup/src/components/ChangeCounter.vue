<template>
  <button @click="addAmount">Add One</button>
</template>

<script>
export default {
  methods: {
    addAmount() {
      this.$store.dispatch('increment');
    }
  }
};
</script>
