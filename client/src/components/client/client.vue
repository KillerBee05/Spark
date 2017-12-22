<template>
  <div class="test">
    <div v-for="client in clients">
      <p>
        <span>{{client.first_name}}</span>
        <span>{{client.last_name}}</span>
      </p>
    </div>
    <button v-on:click="greet()">Say Greeting</button>
  </div>
</template>

<script>
import clientService from '@/services/client/client.service'
  export default {
    name: 'clients',

    data(){
      return{
        clients: []
      }
    },
    mounted(){
      this.getClient()
    },
    methods:{
      greet(){
        alert('HIIII');
      },
      async getClient(){
        const response = await clientService.getClient()
        this.clients = response.data
      }
    }
  }
</script>

<style scoped>

</style>
