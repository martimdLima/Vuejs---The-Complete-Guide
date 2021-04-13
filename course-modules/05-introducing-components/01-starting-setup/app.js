const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
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
    methods: {},
});

app.component("friend-contact", {
    template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
  `,
    data() {
        return {
            detailsAreVisible: false,
            friend:    {
                    id: "tf1",
                    name: "John Doe",
                    phone: 953283454,
                    email: "test@test.com",
                },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");
