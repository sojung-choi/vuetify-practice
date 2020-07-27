<template>
      <v-card>
    <v-tabs 
        vertical 
        height="785"
        background-color="#FAFAFA"     
    >
      <v-tab>
        list
      </v-tab>
      <v-tab>
        photo
      </v-tab>
      <v-tab>
        like
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <default-list></default-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <default-imagegrid></default-imagegrid>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
          <like></like>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
    import defaultList from "../components/container/DefaultList";
    import defaultImageGrid from "../components/container/DefaultImageGrid";
    import like from "../components/presentational/Like";

    export default {
        name: "Csj",
        components: {
            defaultList,
            'default-imagegrid': defaultImageGrid,
            like
        }
    }
</script>

<style scoped>

</style>
