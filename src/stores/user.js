import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    username: ''
  }),
  actions: {
    setUserInfo(email, username) {
      this.email = email
      this.username = username
    }
  }
})
