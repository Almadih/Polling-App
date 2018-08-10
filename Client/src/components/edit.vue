<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <h1>New Poll</h1>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
                <v-flex xs12>
                 <v-text-field label="Poll Title" v-model="title" :v-model="title">
                 </v-text-field>
                </v-flex>
                <v-btn color="gray" to="/">Cancel</v-btn>
                <v-btn color="primary" @click="update">Save</v-btn> 
              </form>
            </v-container>
              
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import api from './api'
export default {
    name : 'edit',
    data (){
        return {
            title:'',
            id:''  ,
            uid:null

        }
    },
    
    created(){
    this.uid = JSON.parse(localStorage.user).id;
    let data ={
        id:this.$route.params.id,
        uid:this.uid
    };
    api.getPoll(data).then(data =>{
        this.title = data.title;
        this.id = data.id;
    });
},
    
    methods:{
        update(){
            let data = {};
            data.title = this.title;
            data.id = this.id;
            api.updatePoll(data).then(()=> this.$router.push('/'));
        }
    }
}

</script>