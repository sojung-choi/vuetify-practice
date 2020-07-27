<template>
<v-container>
  <v-row>
    <v-col cols="10" sm="4" offset-sm="4">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <preview-image 
                    v-bind:img="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    v-bind:title="`image` + n"
                    v-bind:like="n"
                >
                </preview-image>
              </v-card>

            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
    import previewImage from "../presentational/PreviewImage";
    export default {
        name: "DefaultImageGrid",
        props:['data'],
        data() {
            return {
                item: {}
            }
        },
        components: {
            previewImage
        },
        mounted() {
            this.item = this.data;
        }
        // add method
    }
</script>