<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions('auth', { login: 'login', logout: 'logout' })
  },
  computed: {
    ...mapGetters('auth', { isAuth: 'userIsAuthenticated' })
  }
};
</script>
