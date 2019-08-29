<template>
    <div class="child childA">
        <h1>Score {{score}}</h1>
        <button @click="changeScore(0)">Change score</button>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "ChildA",
        methods: {
            ...Vuex.mapActions({changeScore: 'scoreBoard/incrementScore'})
        },
        computed: {
            score: function () {
                return this.$store.getters['scoreBoard/score'];
            }
        },
    }
</script>

<style scoped>

</style>