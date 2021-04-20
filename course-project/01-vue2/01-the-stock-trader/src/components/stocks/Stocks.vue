<template>
    <div>
       <app-stock v-for="stock in stocks"></app-stock>
    </div>
</template>

<script>
    import Stock from "./Stock.vue";


export default {
    components: {
        appStock: Stock,
    },
    data() {
        return {
            stocks: [
                {id: 1, name: "bmw", price: 110},
                {id: 2, name: "tesla", price: 150},
                {id: 3, name: "google", price: 200},
                {id: 4, name: "J.P. Morgan", price: 210},
            ]
        }
    }
}
</script>