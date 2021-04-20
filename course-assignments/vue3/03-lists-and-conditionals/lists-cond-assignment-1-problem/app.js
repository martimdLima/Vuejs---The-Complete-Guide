const app = Vue.createApp({
    data() {
        return { tasks: [], enteredTask: "", displayList: true };
    },
    computed: {
        buttonCaption() {
            return this.displayList === true ? "Hide" : "Show";
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        listHandler() {
            this.displayList = !this.displayList;
            //this.buttonCaption = this.displayList === true ? "Hide" : "Show";
        },
    },
});

app.mount("#assignment");
