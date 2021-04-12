const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Test Course Goal",
            vueLink: "https://vuejs.org",
        };
    },
});

app.mount("#user-goal");
