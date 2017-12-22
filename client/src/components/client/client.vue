<template>
  <div class="test">
    <div v-for="user in users">
      <p>
        <span>{{client.first_name}}</span>
        <span>{{client.last_name}}</span>
      </p>
    </div>
    <button >Say Greeting</button>
  </div>
</template>

<script>
import clientService from '@/services/client/client.service'
  export default {
    name: 'clients',

    data(){
      return{
        users: []
      }
    },
    methods:{
      async getClient(){
        debugger;
        const response = await clientService.getClient()
        this.clients = response.data
      }
    }
  }
</script>

<style scoped>

</style>
