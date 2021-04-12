const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            num: 5,
            name: "",
            lastName: "LastName",
            confirmedName: "",
        };
    },
    computed: {
        computedFullName() {
            return this.name === "" ? "" : this.name + " " + this.lastName;
        },
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
        setName(event) {
            this.name = event.target.value;
        },
        resetInput() {
            this.name = "";
        },
        outputFullName() {
            return this.name === "" ? "" : this.name + " " + this.lastName;
        },
    },
});

app.mount("#events");
