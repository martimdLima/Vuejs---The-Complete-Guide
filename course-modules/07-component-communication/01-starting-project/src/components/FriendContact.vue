<template>
  <ul>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
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
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggleFavorite"],
  /*   emits: {
    "toggle-favorite": function(id) {
      return id ? true : false;
    } 
  },*/
  data() {
    return {
      detailsAreVisible: false,
      //friendIsfavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //Emitting Custom Events (Child => Parent Communication)
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>