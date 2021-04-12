const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: "",
            underMessage: "Not there yet",
            overMessage: "Too much!",
        };
    },
    computed: {
        result() {
            /*             return (this.message =
                this.counter >= 37
                    ? (this.message = "Too much!")
                    : this.message);
        }, */

            if (this.counter < 37) {
                return "Not there yet";
            }

            if (this.counter === 37) {
                return this.counter;
            }

            if (this.counter >= 37) {
                return "Too much!";
            }
        },
    },
    watch: {
        counter(value) {
            if (value >= 37) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 5000);
            }
        },
    },
    methods: {
        add(num) {
            this.counter += num;
        },
    },
});

app.mount("#assignment");
