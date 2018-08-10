<template>
<div>
    <h1>home</h1>
        <v-btn fixed dark fab bottom right color="pink" append to="/new">
              <v-icon >add</v-icon>
            </v-btn> 
      <v-container fluid style="min-height: 0;" grid-list-lg>
          <v-flex xs12 lg6 md6 v-for="poll in data" :key="poll.id">
            <v-card color="blue" class="white--text" hover transition="slide-y-transition">
              <v-card-title primary-title>
            <div><h2>{{poll.title}}</h2><br>
                <div>Total Votes :  {{poll.num}}</div></div>
              </v-card-title>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon v-bind:to="{name:'edit',params:{id:poll.id}}">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn icon @click="del(poll.id)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                      <v-btn icon  v-bind:to="{name:'vote',params:{id:poll.id}}">
                    <v-icon>content_copy</v-icon>
                  </v-btn>
                      <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
          </v-flex>
     <v-layout row wrap slot="activator" v-if="loading">
          <v-progress-circular indeterminate color="primary" :size="40"></v-progress-circular>
    </v-layout>
    </v-container>
</div>
</template>

<script>
    import api from './api'
    export default {
        name: 'home',
        data() {
            return {
                loading: true,
                data: [],
                uid:null
            }
        },

        created() {
            this.uid = JSON.parse(localStorage.user).id;
            api.getAll({id:this.uid}).then(data => {
                this.data = data;
                this.loading = false
            });
            
        },
        methods: {
            del(id) {
                api.deletePoll(id).then(res => api.getAll({id:this.uid}).then(data => this.data = data));
            },

        }
    }

</script>

<style scoped>
    .btn--floating .icon {
        height: auto;
        width: auto;
    }

    .progress-circular {
        left: 50%;
        top: 50%;
        position: fixed;
    }

</style>
