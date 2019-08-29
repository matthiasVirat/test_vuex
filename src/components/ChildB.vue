<template>
    <div class="child childB">
        <h1>Result {{result}}</h1>
        <button v-on:click="changeScore(0)">Change score</button>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "ChildB",
        methods: {
            ...Vuex.mapActions({changeScore: 'resultBoard/incrementScore'})
        },
        computed: {
            result: function () {
                return this.$store.getters['resultBoard/score'];
            }
        }
    }
</script>

<style scoped>

</style>