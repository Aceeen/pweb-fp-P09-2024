<template>
    <div>
      <h2>Detail Crowdfund</h2>
      <p><strong>Name:</strong> {{ crowdfund.name }}</p>
      <p><strong>Target:</strong> {{ crowdfund.target }}</p>
      <p><strong>Current Donation:</strong> {{ crowdfund.current_donation }}</p>
      <p><strong>Status:</strong> {{ crowdfund.status }}</p>
  
      <h3>Comments</h3>
      <ul v-if="crowdfund.comments && crowdfund.comments.length > 0">
        <li v-for="comment in crowdfund.comments" :key="comment._id">
          {{ comment.message }}
        </li>
      </ul>
      <p v-else>No comments available.</p>
  
      <button @click="editCrowdfund(crowdfund._id)">Edit</button>
      <button @click="deleteCrowdfund(crowdfund._id)">Delete</button>
      <button @click="$router.push('/admin-panel')">Back to Admin Panel</button>
    </div>
  </template>
  
  
  <script>
import { getCrowdfundById, deleteCrowdfund } from "@/services/api";

export default {
  props: ['crowdfund_id'], // Pastikan menerima props
  data() {
    return {
      crowdfund: {}, // State untuk detail crowdfund
    };
  },
  methods: {
    async fetchCrowdfund() {
      try {
        console.log("Fetching crowdfund with ID:", this.crowdfund_id); // Log ID untuk memastikan
        const response = await getCrowdfundById(this.crowdfund_id);
        this.crowdfund = response.data;
      } catch (error) {
        console.error("Error fetching crowdfund detail:", error);
        alert("Failed to fetch crowdfund details.");
      }
    },
    async deleteCrowdfund(crowdfundId) {
      try {
        const confirmation = confirm("Are you sure you want to delete this crowdfund?");
        if (confirmation) {
          console.log("Deleting crowdfund with ID:", crowdfundId); // Log ID crowdfund
          await deleteCrowdfund(crowdfundId); // Panggil API untuk menghapus crowdfund
          alert("Crowdfund deleted successfully.");
          this.$router.push('/admin-panel'); // Redirect ke Admin Panel
        }
      } catch (error) {
        console.error("Error deleting crowdfund:", error);
        alert("Failed to delete crowdfund.");
      }
    },
    editCrowdfund(crowdfundId) {
      console.log("Navigating to edit page for ID:", crowdfundId); // Log ID crowdfund
      this.$router.push(`/admin/${crowdfundId}/edit`); // Redirect ke halaman edit
    },
  },
  mounted() {
    this.fetchCrowdfund(); // Ambil data saat halaman dimuat
  },
};
</script>

<style scoped>
/* Gaya umum untuk elemen halaman */
div {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9; /* Warna latar lembut */
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px; /* Sudut membulat */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Efek bayangan */
  background: white;
}

/* Heading */
h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

/* Styling untuk teks deskripsi */
p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}

/* Daftar komentar */
ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  border-top: 1px solid #ddd; /* Garis pemisah */
  padding-top: 20px;
}

li {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px; /* Sudut membulat */
  display: flex;
  justify-content: space-between; /* Tombol delete berada di kanan */
  align-items: center;
}

/* Tombol */
button {
  padding: 8px 12px;
  border: none;
  background-color: #007bff; /* Biru */
  color: white;
  cursor: pointer;
  border-radius: 5px; /* Sudut membulat */
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin: 0 5px; /* Jarak antar tombol */
}

button:hover {
  background-color: #0056b3; /* Biru lebih gelap saat hover */
}

button:disabled {
  background-color: #cccccc; /* Tombol tidak aktif */
  cursor: not-allowed;
}

/* Tombol Delete */
button.delete {
  background-color: #e74c3c; /* Merah */
}

button.delete:hover {
  background-color: #c0392b; /* Merah lebih gelap */
}

/* Tombol Back to Admin Panel */
button.back {
  background-color: #f39c12; /* Oranye */
  margin-top: 20px;
}

button.back:hover {
  background-color: #e67e22; /* Oranye lebih gelap */
}

/* Tombol dalam satu baris */
.button-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button-group button {
  margin: 0 10px; /* Jarak antar tombol dalam grup */
}
</style>


  