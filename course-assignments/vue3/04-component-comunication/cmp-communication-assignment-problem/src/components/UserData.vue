// UserData should output two input fields => for name and age
<template>
  <form @submit.prevent="submitData()">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Name" v-model="usernameInput" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" placeholder="Age" v-model="ageInput" />
    </div>
    <div>
      <button>Change User</button>
    </div>
  </form>
</template>



<script>
export default {
  emits: ["change-user"],
  data() {
    return {
      usernameInput: "",
      ageInput: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("change-user", this.usernameInput, this.ageInput);
    },
  },
};
</script>