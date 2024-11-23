<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white text-center">
              <h5 class="card-title mb-0">Nhập Liệu Tương Tác</h5>
            </div>
            <div class="card-body">
              <div class="input-group mb-4">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-pen"></i>
                </span>
                <input 
                  v-model="userInput" 
                  placeholder="Nhập dữ liệu vào đây" 
                  class="form-control"
                  aria-label="Nhập dữ liệu"
                  aria-describedby="basic-addon1"
                />
              </div>
              
              <div class="alert alert-info text-center" role="alert">
                <strong>Giá trị bạn nhập:</strong> 
                <span class="text-primary">{{ userInput || 'Chưa có dữ liệu' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Bai2Lab5',
    setup() {
      // Khai báo biến trong Composition API
      const userInput = ref('FPL');
  
      return {
        userInput,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Giữ lại một số CSS tối thiểu nếu cần */
  .input-group-text {
    background-color: #f8f9fa;
  }
  </style>