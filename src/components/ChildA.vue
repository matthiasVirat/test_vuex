<template>
    <div class="child childA">
        <h1>Score {{score}}</h1>
        <button @click="changeScore()">Change score</button>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "ChildA",
        methods: {
            ...Vuex.mapActions({changeScore: 'incrementScore'})
        },
        computed: {
            ...Vuex.mapGetters(['score']),
        },
    }
</script>

<style scoped>

</style>