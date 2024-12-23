<template>
    <div class="news-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsCard',
    props: {
      title: String,
      description: String,
    },
  };
  </script>
  
  <style scoped>
  .news-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 2px 2px 5px #ccc;
  }
  </style>
  