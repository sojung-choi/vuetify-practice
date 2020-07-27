<template>
  <v-container>
    <v-card>
    <v-subheader>COMMENTS</v-subheader>
    <v-list>
      <v-list-item two-line
        v-for="item in items"
        :key="item.writer"
      >
        <v-list-item-content>
            <v-list-item-title>{{item.comment}}</v-list-item-title>
            <v-list-item-subtitle>{{item.writer}} | {{item.date}}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
    </v-list>
    </v-card>

  </v-container>
</template>

<script>


  export default {
    name: 'DefaultList',

    data () {
      return {
          items: [],
          
      };
    },
    methods: {
      getData () {
        this.$axios.get('http://localhost:8989/api/getComment')
                .then((response) => {
                  console.log(response);
                  this.items = response.data;
                })
                .catch((error) => {
                  console.log(error);
                });
      },
    },
    mounted() {
      this.getData()
    }
  }
</script>
