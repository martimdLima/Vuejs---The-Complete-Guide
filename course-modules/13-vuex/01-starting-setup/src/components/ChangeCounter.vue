<template>
  <button @click="inc">Add 1</button>
  <button @click="increase({value: 10})">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase'])
    ...mapActions({
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>