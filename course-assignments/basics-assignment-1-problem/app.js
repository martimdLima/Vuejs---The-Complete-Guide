const app = Vue.createApp({
    data() {
        return {
            name: "Test",
            age: 30,
            imgLink:
                "https://cdn.vox-cdn.com/thumbor/DguuAZdbrvcEFg4BcSFazw6iESk=/0x0:1360x1021/1200x800/filters:focal(572x403:788x619)/cdn.vox-cdn.com/uploads/chorus_image/image/59621519/GettyImages_82770182.0.jpg",
        };
    },
    methods: {
        randomAge() {
            const randomNumber = Math.random();
            let newAge = 0;

            if (randomNumber < 0.5) {
                newAge = this.age + 5;
                return newAge;
            } else {
                return this.age;
            }
        },
        randomNum() {
            const randomNumber = Math.random();

            return randomNumber;
        },
    },
});

app.mount("#assignment");
