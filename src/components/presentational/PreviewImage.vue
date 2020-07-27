
<template>
        <v-card>
        <v-img
            :src=img
            :lazy-src=img
            aspect-ratio="1"
            class="grey lighten-2"
            height=120
            width=100
        >
            <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
            </template>
            
            <v-btn icon color="pink" v-if="like > 3">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon color="gray" v-else>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            
        </v-img>
        <v-card-subtitle>{{title}}</v-card-subtitle>
        </v-card>
</template>

<script>
    export default {
        name: "PreviewImage",
        props: ['img', 'title', 'like']
    }
</script>

<style scoped>

</style>
