<template>
    <div>
      <h2>Edit Crowdfund</h2>
      <form @submit.prevent="updateCrowdfund">
        <label for="name">Name:</label>
        <input id="name" v-model="crowdfund.name" type="text" />
  
        <label for="target">Target:</label>
        <input id="target" v-model="crowdfund.target" type="number" />
  
        <label for="status">Status:</label>
        <select id="status" v-model="crowdfund.status">
          <option value="OPEN">Open</option>
          <option value="CLOSE">Close</option>
        </select>
  
        <button type="submit">Submit</button>
      </form>
      <button @click="$router.push('/admin-panel')">Back to Admin Panel</button>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import { getCrowdfundById, updateCrowdfund } from "@/services/api";
  
  export default {
    props: ['crowdfund_id'], // Props dari router
    data() {
      return {
        crowdfund: {}, // Data untuk form
      };
    },
    methods: {
      async fetchCrowdfund() {
        try {
          console.log("Fetching crowdfund with ID:", this.crowdfund_id);
          const response = await getCrowdfundById(this.crowdfund_id);
          this.crowdfund = response.data;
        } catch (error) {
          console.error("Error fetching crowdfund detail:", error);
          alert("Failed to fetch crowdfund details.");
        }
      },
      async updateCrowdfund() {
        try {
          console.log("Updating crowdfund:", this.crowdfund);
          await updateCrowdfund(this.crowdfund_id, this.crowdfund);
          alert("Crowdfund updated successfully.");
          this.$router.push('/admin-panel');
        } catch (error) {
          console.error("Error updating crowdfund:", error);
          alert("Failed to update crowdfund.");
        }
      },
    },
    mounted() {
      this.fetchCrowdfund(); // Fetch data saat komponen dimuat
    },
  };
  </script>
  
  <style scoped>
  /* Container */
  div {
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background-color: #ffffff; /* Putih bersih */
    max-width: 600px;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Efek bayangan */
  }
  
  /* Heading */
  h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Form styling */
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  /* Label */
  label {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  /* Input fields */
  input, select {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }
  
  input:focus, select:focus {
    border-color: #007bff; /* Warna biru saat fokus */
    outline: none;
    background-color: #ffffff;
  }
  
  /* Buttons */
  button {
    padding: 10px 15px;
    border: none;
    background-color: #007bff; /* Warna biru */
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  button:hover {
    background-color: #0056b3; /* Biru lebih gelap */
    transform: scale(1.05); /* Sedikit memperbesar saat hover */
  }
  
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  /* Tombol Kembali */
  button.back {
    background-color: #e74c3c; /* Merah */
  }
  
  button.back:hover {
    background-color: #c0392b; /* Merah lebih gelap */
  }
  
  /* Submit button */
  button[type="submit"] {
    background-color: #0056b3;
    font-weight: bold;
  }
  
  button[type="submit"]:hover {
    background-color: #218838; /* Hijau lebih gelap */
  }
  
  /* Responsive styling */
  @media (max-width: 480px) {
    div {
      padding: 15px;
    }
  
    input, select {
      font-size: 13px;
      padding: 8px;
    }
  
    button {
      font-size: 14px;
      padding: 8px 12px;
    }
  }
  </style>
  

  