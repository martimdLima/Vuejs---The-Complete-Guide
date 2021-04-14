<template>
  <ul>
    <li>
      <h2>{{ name }} {{ friendIsfavorite ? "(Favorite)" : "" }}</h2>
      <button @click="toggleFavorite">Toogle Favorite</button>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ phoneNumber }}
        </li>
        <li>
          <strong>Email:</strong>
          {{ emailAddress }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function (value) {
        return value || !value;
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "tf1",
        name: "John Doe",
        phone: "953283454",
        email: "test@test.com",
      },
      friendIsfavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      /*       if (this.friendIsfavorite === "1") {
        this.friendIsfavorite = "0";
      } else {
        this.friendIsfavorite = "1";
      } */
      this.friendIsfavorite = !this.friendIsfavorite;
    },
  },
};
</script>