<template>
    <div id="parent">
        <ChildA />
        <ChildB />
        <h1>Score</h1>
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
    }
</script>

<style scoped>

</style>