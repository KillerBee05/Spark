import Api from '@/services/Api'

export default {
  getClient() {
    return Api().get('client')
  }
}
