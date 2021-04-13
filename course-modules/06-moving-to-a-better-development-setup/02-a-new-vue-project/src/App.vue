<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "tf1",
          name: "John Doe",
          phone: 953283454,
          email: "test@test.com",
        },
        {
          id: "tf2",
          name: "Jane Doe",
          phone: 954853214,
          email: "test@test.com",
        },
      ],
    };
  },
};
</script>
