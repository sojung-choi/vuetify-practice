<template>
     <v-container center>
     <div>
        like {{count}} count*count {{multiply}}

      <v-btn class="ma-2" text icon color="blue lighten-2" @click="thumbup">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn class="ma-2" text icon color="red lighten-2" @click="thumbdown">
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
    </div>
    </v-container>
</template>

<script>  
    //import store from '../../store/index.js' -> main에서 store import > this.$store로 접근 가능
    import {mapState, mapGetters, mapMutations} from 'vuex';
    export default {
        name: 'Like',
        computed: {
            //count () {
            //    //return this.$store.state.count(mapState사용전)
            //    return this.count;
            //},
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'multiply'
            ])
        },
        methods: {
            //thumbup () {
            //    this.$store.commit('thumbup');
            //},
            //thumbdown () {
            //    this.$store.commit('thumbdown');
            //}
            ...mapMutations({
                thumbup: 'thumbup',
                thumbdown: 'thumbdown'
            })
        }
    }
</script>

<style scoped>

</style>
