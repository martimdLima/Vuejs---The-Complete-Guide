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
            messageLog: [],
        };
    },
    computed: {
        monsterBarStyles() {
            return this.monsterHealth > 0
                ? { width: this.monsterHealth + "%" }
                : { width: "0%" };
        },
        playerBarStyles() {
            return this.playerHealth > 0
                ? { width: this.playerHealth + "%" }
                : { width: "0%" };
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
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.messageLog = [];
        },
        attackMonster() {
            const attackDamage = getRandomValue(5, 12);
            this.monsterHealth -= attackDamage;
            this.addLogMessage("player", "attacked", attackDamage);
            this.attackPlayer();
            this.currentRound++;
        },
        attackPlayer() {
            const attackDamage = getRandomValue(8, 15);
            this.playerHealth -= attackDamage;
            this.addLogMessage("monster", "attacked", attackDamage);
        },
        specialAttackMonster() {
            const attackDamage = getRandomValue(10, 25);
            this.monsterHealth -= attackDamage;
            this.addLogMessage("player", "specialAttacked", attackDamage);
            this.attackPlayer();
            this.currentRound++;
        },
        healPlayer() {
            const healValue = getRandomValue(5, 20);
            this.playerHealth =
                this.playerHealth + healValue < 100
                    ? (this.playerHealth += healValue)
                    : 100;
            this.addLogMessage("player", "healed", healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
            alert("The monster laughs in your puny human face!");
        },
        addLogMessage(actor, action, value) {
/*             let logMessage = {actionBy: actor, actionType: action, actionValue: value};
            console.log(logMessage) */
            this.messageLog.unshift({actionBy: actor, actionType: action, actionValue: value});
        }
    },
});

app.mount("#game");
