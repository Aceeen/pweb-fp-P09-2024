<template>
    <nav class="navbar">
      <ul>
        <li><a href="#landing">Home</a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  };
  </script>
  
  <style scoped>
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
    background-color: #007bff;
    padding: 10px;
    margin: 0;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  