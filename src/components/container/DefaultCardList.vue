<template>
    <v-container fluid>
        <v-row dense>
            <v-col
                        v-for="card in todolist"
                        :key="card.id"
                        :cols="card.flex"
                >
                <card :data="card" @remove="deleteTodo"></card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import constant from '../../store/constant'
    import { mapState, mapMutations } from 'vuex'
    import card from '../presentational/Card'

    export default {
        name: 'DefaultCardList',
        components: {
            card
        },
        computed: mapState(['todolist']),
        methods: {
            ...mapMutations([
                constant.DELETE_TODO,
            ])
        }
    }
</script>

<style scoped>

</style>
