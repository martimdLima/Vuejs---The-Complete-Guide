const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            fullName: "",
            confirmedName: "",
        };
    },
    computed: {
        computedFullName() {
            return this.name === "" || this.lastName === ""
                ? ""
                : this.name + " " + this.lastName;
        },
    },
    watch: {
        /*         name(value) {
            this.fullName = value === "" ? "" : value + " " + this.lastName;
            //this.fullName = value + " " + this.lastName;
        },
        lastName(value) {
            this.fullName = value === "" ? "" : this.name + " " + value;
        } */
        counter(value) {
            this.value = this.value < 50 ? this.counter : (this.counter = 0);
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
