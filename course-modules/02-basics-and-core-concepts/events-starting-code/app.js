const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "Test",
            confirmedName: "",
        };
    },
    methods: {
        updateInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
            alert("Submitted!");
        },
        add() {
            this.counter += 5;
        },
        subtract() {
            this.counter -= 5;
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
    },
});

app.mount("#events");
