function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            playerAttack: 15,
            monsterHealth: 100,
            monsterAttack: 5,
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster() {
            const attackDamage = getRandomValue(5, 12);
            this.monsterHealth -= attackDamage;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackDamage = getRandomValue(8, 15);
            this.playerHealth -= attackDamage;
        },
    },
});

app.mount("#game");
