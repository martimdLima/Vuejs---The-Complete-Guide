const app = Vue.createApp({
    data() {
        return { goals: [], enteredGoal: "", user: { name: "Test", age: 32 } };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoal);
        },
    },
});

app.mount("#user-goals");
