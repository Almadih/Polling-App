<template>
     <v-app>
         
<div id="app">
  <v-toolbar dark color="primary">
    <v-toolbar-title>Polling App</v-toolbar-title>
        
      <v-spacer></v-spacer>
      <h4 v-if="loggedin">{{email}}</h4>
        <v-toolbar-items>
            
            <v-btn flat v-if="!loggedin" to="/login">Login</v-btn>
            <v-btn flat v-if="!loggedin" to="/signup">Signup</v-btn>
          <v-btn flat @click="test" v-if="loggedin">Logout</v-btn>
        </v-toolbar-items>
  </v-toolbar>
      <div class="container">
    <router-view/>
      </div>
</div>
    </v-app>
</template>


<script>
export default {
  name: 'App',
     data() {
      return {
          email:''
      }
    },
    methods:{
    test(){
     localStorage.user = null;
        this.$router.go({path:this.$route.path});
        this.$router.push('/login')
    }
},
    computed:{
        loggedin(){
            if(localStorage.user){
            return JSON.parse(localStorage.user) !== null;
            }else{
                return false;
            }
        }
    },
    created(){
       if(localStorage.user){
      let user = JSON.parse(localStorage.user); 
           if(user !== null){
            
            this.email = user.email;
            
        }
       }
        
    }
}
</script>


