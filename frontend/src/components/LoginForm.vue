<template>
  <form @submit.prevent="loginUser" class="login-form">
    <label>Email</label>
    <input type="email" v-model="login.email" required />

    <label>Password</label>
    <input type="password" v-model="login.password" required />

    <button type="submit">Login</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '../services/api';

export default {
  name: 'LoginFormComponent',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async loginUser() {
      this.errorMessage = '';
      this.successMessage = '';
      try {
        const response = await loginUser(this.login);
        const { token, role } = response.data;

        localStorage.setItem('token', token);
        this.successMessage = 'Login successful!';

        // Redirect based on user role
        if (role === 'admin') {
          this.$router.push('/admin-panel');
        } else {
          this.$router.push('/user-dashboard');
        }
      } catch (error) {
        this.errorMessage =
          error.response?.data?.error || 'Login failed! Please try again.';
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

.error {
  color: red;
}

.success {
  color: green;
}
</style>
