<template>
    <form @submit.prevent="loginUser" class="login-form">
      <label>Email</label>
      <input type="email" v-model="login.email" required />
  
      <label>Password</label>
      <input type="password" v-model="login.password" required />
  
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import { loginUser } from '../services/api';
  
  export default {
    name: 'LoginFormComponent',
    data() {
      return {
        login: { email: '', password: '' },
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await loginUser(this.login);
          localStorage.setItem('token', response.data.token);
          alert('Login successful!');
        } catch (error) {
          console.error('Error during login:', error);
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  