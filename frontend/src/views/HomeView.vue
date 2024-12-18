<template>
    <div>
      <Navbar />
  
      <!-- Landing Page -->
      <section id="landing" class="section">
        <h1>Welcome to Funding Dana BisaKita</h1>
        <p>Support your favorite crowdfunding campaigns and make a difference today!</p>
      </section>
  
      <!-- News Section -->
      <section id="news" class="section">
        <h2>Latest News</h2>
        <NewsCard title="Campaign 1 Launched!" description="We are excited to announce our new campaign!" />
        <NewsCard title="Donation Milestone Reached!" description="Thanks to your support, we hit 50% of our goal!" />
      </section>
  
      <!-- Login Section -->
      <section id="login" class="section">
        <h2>Login</h2>
        <LoginForm />
      </section>
  
      <!-- Feedback Section -->
      <section id="feedback" class="section">
        <h2>Feedback</h2>
        <FeedbackForm />
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/NavbarComponent.vue';
  import Footer from '../components/FooterComponent.vue';
  import FeedbackForm from '../components/FeedbackForm.vue';
  import LoginForm from '../components/LoginForm.vue';
  import NewsCard from '../components/NewsCard.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Footer,
      FeedbackForm,
      LoginForm,
      NewsCard,
    },
  };
  </script>
  
  <style scoped>
  .section {
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  h2 {
    color: #007bff;
  }
  </style>
  