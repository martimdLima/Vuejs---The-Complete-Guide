<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="changesSaved">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      // navigationg programatically
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userPrompt = confirm(
        'You have unsaved changes, are you sure you wanna leave?'
      );
      next(userPrompt);
    }
  },
  unmounted() {
    console.log('unmounted!');
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
  inject: ['users']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
