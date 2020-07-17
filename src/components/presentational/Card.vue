
<template>
    <v-card class="mx-auto" max-width="400" width="300">
        <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        >
            <v-card-title>{{item.title}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{item.subTitle}}</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>{{item.desc}}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="orange" text>공유</v-btn>
            <v-btn color="orange" text @click.stop="remove">삭제</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: ['data'],
        data() {
            return {
                item: {}
            }
        },
        mounted() {
            this.item = this.data;
        },
        methods: {
            remove () {
                this.$emit('remove', this.item.id)
            }
        }
    }
</script>

<style scoped>

</style>
