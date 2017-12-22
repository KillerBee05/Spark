import Api from '@/services/api'

export default {

  // retrieving ClientService
  getClient() {
    return Api().get('client')
  },

  //add Client
  addClient(newClient){
    return Api().post('client', newClient)
  },

  //update
  updateClient(newClient){
    return Api().put('client/'+newClient._id, newClient)
  },

  //delete
  deleteClient(id){
    return Api().delete('client/'+id)
  }

}
