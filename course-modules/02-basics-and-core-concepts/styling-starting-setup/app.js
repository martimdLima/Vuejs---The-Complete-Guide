const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            if (box === "A") {
                this.boxASelected = !this.boxASelected;
            }

            if (box === "B") {
                this.boxBSelected = !this.boxBSelected;
            }

            if (box === "C") {
                this.boxCSelected = !this.boxCSelected;
            }

/*             switch (box) {
                case box==="A":
                    this.boxASelected = true;
                    break;
                case box==="B":
                    this.boxBSelected = true;
                    break;
                case box==="C":
                    this.boxCSelected = true;
                    break;
                default:
            } */
        },
    },
});

app.mount("#styling");
