<template>
  <div class="test">
    <div v-for="client in clients">
      <p>
        <input type="text" v-model="client.first_name" name="first_name" placeholder="First Name">
        <input type="text" v-model="client.last_name" name="last_name" placeholder="Last Name">
        <input type="text" v-model="client.phone" name="phone" placeholder="Say Something Nice">
        <button type="button" v-on:click="updateClient(client)">Update</button>
        <button type="button" v-on:click="deleteClient(client._id)">Delete</button>
      </p>
    </div>
    <hr />
    <div class="rium">
      <form class="" action="index.html" method="post">
          <input type="text" v-model="first_name" name="first_name" placeholder="First Name">
          <input type="text" v-model="last_name" name="last_name" placeholder="Last Name">
          <input type="text" v-model="phone" name="phone" placeholder="Say Something Nice">
      </form>
      <button v-on:click="addClient()">Add Person</button>
    </div>
  </div>

</template>

<script>
import clientService from '@/services/client/client.service'
  export default {
    name: 'client',

    data(){
      return{
        clients: [],
        client:{
          first_name: '',
          last_name:'',
          phone:''
        },
        first_name: '',
        last_name:'',
        phone:''
      }
    },
    mounted(){
      this.getClient()
    },
    methods:{
      async getClient(){
        const response = await clientService.getClient()
        this.clients = response.data
      },
      addClient(){
        const newClient = {
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone
         }
         const response = clientService.addClient(newClient)
       },
       updateClient(client){
         const Client ={
            _id: client._id,
            first_name: client.first_name,
            last_name: client.last_name,
            phone: client.phone
          }
          const response = clientService.updateClient(Client)
       },
      deleteClient(id){
        const response = clientService.deleteClient(id)
      }
    }
  }
</script>

<style scoped>

</style>
