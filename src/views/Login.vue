<template>
  <v-container
    class="d-flex flex-column align-center justify-center w-100 h-screen">
    <v-row class="d-flex flex-column align-center justify-center bg-red w-100">
      <v-card class="d-flex flex-column align-center justify-center w-50">
        <v-card-title
          class="d-flex bg-blue w-100 flex-column align-center justify-center">
          <v-card-text
            class="bg-green w-100 d-flex flex-column align-center justify-center m-0 p-0">
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              dense
              class="w-100"></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              outlined
              dense
              class="w-100"></v-text-field>
            <v-btn class="m-0 p-0" @click="login">Login</v-btn>
          </v-card-text>
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import supabase from '../supabase'
export default {
  name: 'login-register-page',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const res = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      })
      console.log(res)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #201f20ff;
  color: whitesmoke;
  height: 100vh;
  width: 100vw;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  color: #eaeaea;
}
</style>
