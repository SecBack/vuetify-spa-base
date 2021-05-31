
<template>
  <v-container fluid fill-height align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12 mb-4">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="formData.email"
              prepend-icon="person"
              name="login"
              label="Email"
              type="text"
              :rules="emailRules"
            ></v-text-field>
            <v-text-field
              v-model="formData.password"
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
              :rules="passwordRules"
            ></v-text-field>
            <v-card-actions>
              <v-card-text>
                Don't have an account?
                <v-btn
                  to="/register"
                  class="ml-4"
                > Sign up here </v-btn>
              </v-card-text>
              <v-spacer></v-spacer>
              <v-btn
                @click="handleLogin"
                color="primary"
              >Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
      <v-alert v-if="errors" type="error">
        {{ errors }}
      </v-alert>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      errors: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'E-mail is required',
      ],
      formData: {
        email: '',
        password: '',
      },
    }
  },
  mounted() {
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('login', {
          email: this.formData.email,
          password: this.formData.password
        })
        .then((response) => {
          console.log(response)
          this.$router.push({ name: 'welcome'})
        })
        .catch(error => {
          console.log(error)
          this.errors = 'Incorrect email or password'
        })
    },
  }
}
</script>

<style scoped>
</style>