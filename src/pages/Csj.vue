<template>
      <v-card>
    <v-tabs 
        background-color="#FAFAFA"   
        fixed-tabs  
    >
      <v-tab to="/csj/list">
        list
      </v-tab>
      <v-tab to="/csj/photo">
        photo
      </v-tab>
      <v-tab to="/csj/like">
        like
      </v-tab>
      <v-tab to="/csj/btable">
        table
      </v-tab>
       <v-tab to="/csj/table">
        Dtable
      </v-tab>

    </v-tabs>
    <router-view></router-view>
  </v-card>
</template>

<script>
    //import defaultList from "../components/container/DefaultList";
    //import defaultImageGrid from "../components/container/DefaultImageGrid";
    //import like from "../components/presentational/Like";
    //import defaultBuefyTable from "../components/container/DefaultBuefyTable";
    //import defaultTable from "../components/container/DefaultTable";

    export default {
        name: "Csj",
        components: {
          //  defaultList,
          //  'default-imagegrid': defaultImageGrid,
          //  like,
          //  'default-b-table': defaultBuefyTable,
          //  'default-table': defaultTable
        }
    }
</script>

<style scoped>

</style>
