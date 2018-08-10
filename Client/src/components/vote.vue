<template>
<v-container>
<v-layout row>
  <v-flex xs12 sm8 offset-sm2 >
    <h1>Vote</h1>
    <v-card v-if="!error">
      <v-card-text>
        <v-container>
            <div id="chartContainer" style="height: 360px; width: 100%;"></div>
          <h4>{{data.title}}</h4>
            <v-radio-group v-model="op">
            <v-radio v-for="op in data.options" :label="op.text" :value="op.text" :key="op.index"></v-radio>
            </v-radio-group>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-btn color="primary" @click="vote" :disabled="ema">Vote </v-btn>
        </v-container>
      </v-card-text>
    </v-card>
      <v-flex xs12 sm8 offset-sm3 v-if="error">
      <h1>Error 404 Poll Not Found</h1>
      </v-flex>
      
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
    import api from './api'
    export default {
        data() {
            return {
                data: {},
                op: '',
                email: '',
                error: false,
                chartOptions: {
                    animationEnabled: true,
                    title: {
                        text: ""
                    },
                    data: [{
                        type: "column",
                        dataPoints: [

                        ]
                    }]
                },
                chart: null
            }
        },
        created() {
            this.getdata()

        },
        methods: {
            vote() {
                let data = {};
                data.email = this.email;
                data.response = this.op;
                data.id = this.$route.params.id;
                api.vote(data).then(res => {
                     setTimeout(()=>{
                   this.getdata() 
                },400)
                });
               
                
            },
            render() {
                this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);
                this.chart.render();
            },
            getdata(){
                 api.getPollData(this.$route.params.id).then(data => {
                this.data = data;
                if (this.data.msg) {
                    console.log(this.data.msg);
                    this.error = true;
                }
                this.chartOptions.title.text = data.title
                let arr = []
                data.data.forEach((d)=>{
                    let obj = {
                        label:d.name,
                        y:d.count
                    };
                    
                    arr.push(obj)
                   
                })
                 this.chartOptions.data[0].dataPoints = arr
                this.render()
            }).catch(err => console.log(err));
            }
        },
        computed:{
        ema(){
            return this.email == ''
        }
    }
    }

</script>
