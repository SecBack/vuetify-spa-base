<template>
  <div>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Register form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="formData.name"
                  :rules="nameRules"
                  prepend-icon="person"
                  label="Name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="formData.email"
                  :rules="emailRules"
                  prepend-icon="person"
                  label="Email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="formData.password"
                  :rules="passwordRules"
                  prepend-icon="lock"
                  label="Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model.trim="formData.rePassword"
                  :rules="rePasswordRules"
                  prepend-icon="lock"
                  label="Confirm Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="handleRegister()">Register</v-btn>
            </v-card-actions>
          </v-card>
          <v-alert v-if="errors" type="error">
            {{ errors }}
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'register',

  data() {
    return {
      errors: null,
      formData: {
        name: '',
        email: '',
        password: '',
        rePassword: '',
      },
      nameRules: [
        v => !!v || 'Name is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v && v.length >= 8 || 'Minimum 8 characters',
      ],
    }
  },
  computed: {
    rePasswordRules() {
      return [
        v => (v === this.password) || 'Passwords must match',
      ]
    }
  },
  methods: {
    handleRegister: function() {
      axios.post('/register', {
        name: this.formData.name,
        email: this.formData.email,
        password: this.formData.password,
      })
      .then((response) => {
        console.log(response)
        this.$router.push({ name: 'login'})
      })
    }
  }
}
</script>

<style scoped>

</style>