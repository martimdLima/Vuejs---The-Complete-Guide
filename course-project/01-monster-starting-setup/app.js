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
            const healValue = getRandomValue(20, 5);
            this.playerHealth = this.playerHealth + healValue < 100 ? this.playerHealth+=healValue : 100;
            this.attackPlayer();
        }
    },
});

app.mount("#game");
