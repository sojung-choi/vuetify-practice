<template>
  <v-container>
    <v-row class="text-left">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
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
  import axios from 'axios';

  export default {
    name: 'Table',

    data () {
      return {
          articles: [],
          headers: [
              { text: 'address', value: 'address.street', sortable: true, class: 'hidden-sm-and-down' },
              { text: 'company', value: 'company.name', sortable: true },
              { text: 'email', value: 'email', sortable: false },
              { text: 'id', value: 'id', sortable: true },
              { text: 'name', value: 'name', sortable: true },
              { text: 'phone', value: 'phone', sortable: true },
              { text: 'username', value: 'username', sortable: true },
              { text: 'website', value: 'website', sortable: true },
          ],
          loading: false
      };
    },
    methods: {
      fetchData () {
        axios.get('https://jsonplaceholder.typicode.com/users/')
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
      initData () {
        if( this.loading) return
        this.loading =true;
        axios.get('https://jsonplaceholder.typicode.com/users/')
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
      this.initData()
    }
  }
</script>
