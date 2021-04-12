const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            num: 5,
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
        add(num) {
            this.counter += num;
        },
        subtract(num) {
            this.counter -= num;
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        resetInput() {
            this.name = "";
        },
    },
});

app.mount("#events");
