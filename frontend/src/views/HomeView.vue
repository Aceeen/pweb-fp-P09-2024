<template>
  <div class="homepage">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Landing Page -->
      <section id="landing" class="section landing-section">
        <h1>Welcome to Funding Dana BisaKita</h1>
        <p>Support your favorite crowdfunding campaigns and make a difference today!</p>
      </section>

      <!-- News Section -->
      <section id="news" class="section news-section">
        <h2>Latest News</h2>
        <div class="news-container">
          <div class="news-card">
            <h3>Campaign 1 Launched!</h3>
            <p>We are excited to announce our new campaign! Join us in making a difference.</p>
          </div>
          <div class="news-card">
            <h3>Donation Milestone Reached!</h3>
            <p>Thanks to your support, we hit 50% of our goal! Keep up the great work!</p>
          </div>
        </div>
      </section>

      <!-- Login Section -->
      <section id="login" class="section login-section">
        <div class="login-container">
          <h2>Login</h2>
          <LoginForm />
        </div>
      </section>

      <!-- Feedback Section -->
      <section id="feedback" class="section feedback-section">
        <div class="feedback-container">
          <h2>Feedback</h2>
          <FeedbackForm />
        </div>
      </section>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/NavbarComponent.vue';
import Footer from '../components/FooterComponent.vue';
import FeedbackForm from '../components/FeedbackForm.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    FeedbackForm,
    LoginForm,
  },
};
</script>

<style scoped>
/* General Layout */
.homepage {
  background: url('../assets/background.jpg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  color: #fff;
}

.main-content {
  flex: 1;
  padding-top: 60px; /* Offset for fixed navbar */
}

/* Navbar */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #007bff;
  z-index: 1000;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

/* Footer */
footer {
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 20px;
  bottom: 0;
}

/* Sections */
.section {
  padding: 100px 20px; /* Increased padding for more spacing */
  text-align: center;
}

/* Landing Section */
.landing-section h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.landing-section p {
  font-size: 1.5rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

/* News Section */
.news-section {
  border-radius: 20px;
  padding: 50px;
}

.news-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.news-card {
  background: #007bff;
  color: #fff;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-card h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(255, 255, 255, 0.7);
}

.news-card p {
  font-size: 1rem;
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(255, 255, 255, 0.7);
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

/* Login Section */
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 50px 40px; /* Added more padding */
  width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
}

/* Feedback Section */
.feedback-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feedback-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 50px 40px; /* Added more padding */
  width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #333;
}

/* Section Headings */
h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #007bff;
}
</style>
