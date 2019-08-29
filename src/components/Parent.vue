<template>
    <div id="parent">
        <ChildA />
        <ChildB />
        <h1>Score cumulé {{cumulScore}}</h1>
    </div>
</template>

<script>
    import ChildA from "./ChildA";
    import ChildB from "./ChildB";

    export default {
        name: "Parent",
        components: {
            ChildA,
            ChildB
        },
        computed: {
            cumulScore: function () {
                return this.$store.getters['cumulBoard/cumulScore']
            }
        }
    }
</script>

<style scoped>

</style>