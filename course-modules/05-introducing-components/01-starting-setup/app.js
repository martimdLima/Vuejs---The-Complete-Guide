const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {id: "tf1", name: "John Doe", phone: 953283454, email: "test@test.com"},
                {id: "tf2", name: "Jane Doe", phone: 954853214, email: "test@test.com"}
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");