<template>
    <div class="child childB">
        <h1>Result {{result}}</h1>
        <button v-on:click="changeResult(1000)">Change score</button>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "ChildB",
        methods: {
            ...Vuex.mapActions({changeResult: 'increaseResult'})
        },
        computed: {
            result: function () {
                return this.$store.getters.result;
            }
        }
    }
</script>

<style scoped>

</style>