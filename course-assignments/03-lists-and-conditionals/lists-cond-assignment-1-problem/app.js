const app = Vue.createApp({
    data() {
        return { tasks: [], enteredTask: "", displayList: true, buttonCaption: "Hide",  user: { name: "Test", age: 32 } };
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
            this.buttonCaption = this.displayList === true ? "Hide" : "Show";
        }
    },
});

app.mount("#assignment");
