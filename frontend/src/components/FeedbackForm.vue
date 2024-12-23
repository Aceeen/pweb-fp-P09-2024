<template>
  <form @submit.prevent="submitFeedback" class="feedback-form">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="feedback.name" :disabled="feedback.is_anonymous" />

    <label for="email">Email</label>
    <input type="email" id="email" v-model="feedback.email" :disabled="feedback.is_anonymous" />

    <label for="message">Message</label>
    <textarea id="message" v-model="feedback.message" required></textarea>

    <label for="anonymous">
      <input type="checkbox" id="anonymous" v-model="feedback.is_anonymous" />
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
        alert('Feedback submitted successfully!'); // Show alert on success
        // Clear the input fields
        this.feedback = {
          name: '',
          email: '',
          message: '',
          is_anonymous: false,
        };
      } catch (error) {
        alert('Failed to submit feedback. Please try again.'); // Show alert on error
        console.error('Feedback submission error:', error);
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
