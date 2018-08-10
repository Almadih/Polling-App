<template>
  <v-container>
    <v-layout row >
      <v-flex xs12 sm8 offset-sm2 fluid>
        <h1>New Poll</h1>
        <v-card >
          <v-card-text>
            <v-container>
              <form>
                <v-flex xs12>
                 <v-text-field label="Poll Title" v-model="title" >
                 </v-text-field>
                </v-flex>
                <v-flex>
                 <v-select :items="items" label="Number Of Options" v-model="numopt"></v-select>
                </v-flex>
                <v-flex>
                  <v-text-field v-for="option in options" :key="option.index" :label="option.label" v-model="option.value"></v-text-field>
                </v-flex>
                <v-btn color="gray" to="/">Cancel</v-btn>
                <v-btn color="primary" @click="send()">Add</v-btn> 
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import api from './api';
    export default {
        name: 'new',
        data() {
            return {

                title: null,
                numopt: "",
                items: [
                    '2',
                    '3',
                    '4',
                    '5'
                ],
                options: [

                ],
                uid:null

            }
        },
        methods: {
            send() {
                let opts = [];
                this.options.forEach((op) => {
                    opts.push(op.value)
                });
                let data = {};
                data.user = this.uid;
                data.title = this.title;
                data.options = opts;
                console.log(data);
                api.newPoll(data).then(() => this.$router.push('/'));
            }
        },
        watch: {
            'numopt': function() {
                this.options = [];
                for (let i = 0; i < this.numopt; i++) {
                    let opt = {
                        label: `Options ${i+1}`,
                        value: ''
                    };

                    this.options.push(opt)

                }
            }
        },
        created(){
            this.uid = JSON.parse(localStorage.user).id;
        }
    }

</script>
