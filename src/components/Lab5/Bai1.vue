<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white text-center">
              <h5 class="card-title mb-0">Thay Đổi Thông Điệp</h5>
            </div>
            <div class="card-body text-center">
              <p class="card-text fs-5 mb-4 text-muted">{{ message }}</p>
              <button 
                @click="updateMessage" 
                class="btn btn-primary btn-lg rounded-pill shadow-sm hover-effect"
              >
                <i class="bi bi-chat-dots me-2"></i>Thay Đổi Thông Điệp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Bai1Lab5',
    setup() {
      const message = ref('Thông điệp ban đầu');
  
      const updateMessage = () => {
        message.value = 'Thông điệp đã được thay đổi!';
      };
  
      return {
        message,
        updateMessage,
      };
    },
  };
  </script>
  
  <style scoped>
  .hover-effect {
    transition: transform 0.2s ease-in-out;
  }
  
  .hover-effect:hover {
    transform: scale(1.05);
  }
  
  .card {
    border-radius: 15px;
  }
  
  .card-header {
    background-color: #007bff !important;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>