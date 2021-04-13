const app = Vue.createApp({
    data() {
        return { userInput: "", confirmedUserInput: "" };
    },
    methods: {
        showAlert() {
            alert("Test Alert");
        },
        setUserInput(event) {
            this.userInput = event.target.value;
        },
        confirmUserInput() {
            this.confirmedUserInput = this.userInput;
        },
    },
});

app.mount("#assignment");
