const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        add() {
            this.counter += 5;
        },
        subtract() {
            this.counter -= 5;
        },
    },
});

app.mount("#events");
