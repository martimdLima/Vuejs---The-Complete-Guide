<template>
  <section>
    <ul>
      <li>
        <strong>Name:</strong>
        {{ username }}
      </li>
      <li>
        <strong>Age:</strong>
        {{ age }}
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  props: {
    id: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: String, required: true },
  },
  data() {
    return {
      user: {
        id: new Date("2020/04/14").toISOString(),
        username: "test",
        age: "32",
      },
    };
  },
};
</script>

// ActiveUser should output a username (h2) and age (h3)