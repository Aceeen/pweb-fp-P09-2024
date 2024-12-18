<template>
    <form @submit.prevent="submitFeedback" class="feedback-form">
      <label>Name</label>
      <input type="text" v-model="feedback.name" :disabled="feedback.is_anonymous" />
  
      <label>Email</label>
      <input type="email" v-model="feedback.email" :disabled="feedback.is_anonymous" />
  
      <label>Message</label>
      <textarea v-model="feedback.message" required></textarea>
  
      <label>
        <input type="checkbox" v-model="feedback.is_anonymous" />
        Submit anonymously
      </label>
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { submitFeedback } from '../services/api';
  
  export default {
    name: 'FeedbackFormComponent',
    data() {
      return {
        feedback: {
          name: '',
          email: '',
          message: '',
          is_anonymous: false,
        },
      };
    },
    methods: {
      async submitFeedback() {
        try {
          await submitFeedback(this.feedback);
          alert('Feedback submitted successfully!');
        } catch (error) {
          console.error('Error submitting feedback:', error);
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .feedback-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  