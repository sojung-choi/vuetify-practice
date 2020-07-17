<template>
    <div>
        <default-card-list></default-card-list>
        <default-table></default-table>
    </div>
</template>

<script>
    import defaultTable from "../components/container/DefaultTable";
    import defaultCardList from "../components/container/DefaultCardList";

    export default {
        name: "Home",
        components: {
            defaultTable,
            defaultCardList
        },
    }
</script>

<style scoped>

</style>
