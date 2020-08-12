<template>
  <v-container>
    <v-row class="text-left">
        <v-btn v-on:click="fetchData"> get data </v-btn>
        <br/>
        <v-data-table
                :headers="headers"
                :items="articles"
                :loading="loading"
        />
        <br/>
        <v-btn v-on:click="cleanData"> clean data </v-btn>
    </v-row>
  </v-container>
</template>

<script>


  export default {
    name: 'DefaultTable',

    data () {
      return {
          articles: [],
          headers: [],
          loading: false
      };
    },
    methods: {
      fetchData () {
        this.$axios.get('https://jsonplaceholder.typicode.com/users/')
                .then((response) => {
                  console.log(response);
                  this.articles = response.data;
                })
                .catch((error) => {
                  console.log(error);
                });
      },
      cleanData () {
        this.articles = [];
      },
      initHeader () {
          this.$axios.get('http://localhost:8989/api/getMethod')
                .then((response) => {
                  console.log(response);
                  this.headers = response.data;
                  this.loading = false
                })
                .catch((error) => {
                  this.loading = false
                  console.log(error);
                });
      },
      initData () {
        if( this.loading) return
        this.loading =true;
          this.$axios.get('https://jsonplaceholder.typicode.com/users/')
                .then((response) => {
                  console.log(response);
                  this.articles = response.data;
                  this.loading = false
                })
                .catch((error) => {
                  this.loading = false
                  console.log(error);
                });
      },
    },
    mounted() {
      this.initHeader()  
      this.initData()
      
    }
  }
</script>
