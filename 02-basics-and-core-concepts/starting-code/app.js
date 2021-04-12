const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Test Course Goal",
            vueLink: "https://vuejs.org",
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            if (randomNumber < 0.5) {
                return "Test Case 1";
            } else {
                return "Test Case 2";
            }
        },
    },
});

app.mount("#user-goal");
