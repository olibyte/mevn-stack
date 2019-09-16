<template>
  <div>
    <h1>Register Route</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
         <div class="form-group">
        <label for="username">First Name</label>
        <input v-model="first" type="text" class="form-control" id="first" placeholder="First Name" />
      </div>
       <div class="form-group">
        <label for="username">Last Name</label>
        <input type="text" class="form-control" id="last" placeholder="Last Name" />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  import * as auth from '../../services/AuthService'
  export default {
    name: 'register',
    data: function() {
        return {
            username: '',
            password: '',
            first: '',
            last: ''
        }
    },
    methods: {
      onSubmit: function() {
        auth.login();
        this.$router.push({ name: 'home'})
      }
    }
  }
</script>