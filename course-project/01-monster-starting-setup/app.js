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
            currentRound: 0,
            winner: null,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerHealth + "%" };
        },
        isSpecialAttackAvailable() {
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            }

            if (value <= 0) {
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            }

            if (value <= 0) {
                this.winner = "player";
            }
        },
    },
    methods: {
        attackMonster() {
            const attackDamage = getRandomValue(5, 12);
            this.monsterHealth -= attackDamage;
            this.attackPlayer();
            this.currentRound++;
        },
        attackPlayer() {
            const attackDamage = getRandomValue(8, 15);
            this.playerHealth -= attackDamage;
        },
        specialAttackMonster() {
            const attackDamage = getRandomValue(10, 25);
            this.monsterHealth -= attackDamage;
            this.attackPlayer();
            this.currentRound++;
        },
        healPlayer() {
            const healValue = getRandomValue(5, 20);
            this.playerHealth =
                this.playerHealth + healValue < 100
                    ? (this.playerHealth += healValue)
                    : 100;
            this.attackPlayer();
        },
    },
});

app.mount("#game");
