<template>
  <div class="bg-darkBackground window-height window-width row q-pa-md justify-center items-center">
    <div class="column">
      <!-- <img class="loga" src="../../src/assets/timeonbeead.png" alt="logo"> -->
      <div class="row">
        <q-card square bordered class="q-pa-lg bg-darkBackgroundLayer">
          <q-card-section>
            <q-form>
              <q-input color="teal-14" label-color="teal-14" dark outlined v-model="email" type="email" label="Email"/>
              <q-input color="teal-14" label-color="teal-14" dark outlined v-model="password" type="password" label="Password"/>

            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn size="lg" class="full-width bg-deep-purple-7" label="Login" @click="login"/>
          </q-card-actions>
          <!-- <q-card-actions class="q-px-md">
            <q-btn size="sm" class="full-width bg-deep-purple-4" label="devRegister" @click="devRegister"/>
          </q-card-actions> -->
        </q-card>
      </div>

      <!-- <q-btn class="q-mt-xl bg-darkBackgroundLayer" text-color="teal-14" unelevated label="Go Home" no-caps @click="home"/> -->

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AdminLogin',
  data () {
    return {
      email: '',
      password: '',
      loginError: false,
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    home: function () {
      this.$router.push({ path: '/' })
    },
    login: function () {
      this.loading = true
      const user = { email: this.email, password: this.password }
      console.log(user)
      this.loginUser(user)
        .then(u => {
          this.$router.push('/AdminPage')
        })
        .catch(error => {
          console.error('Email-Password login:', error)
          this.loginError = true
          this.loading = false
        })
    },
    devRegister: function () {
      console.log(this.email + ' ' + this.password)
    }
  }
}

</script>

<style>
  /* .loga{
    width : 10%;
    height: auto;
    align-self: center;
  } */
  .bg-darkBackground {
    background-color: #121212;
  }
  .bg-darkBackgroundLayer {
     background-color: #1F1B24;
  }
</style>
