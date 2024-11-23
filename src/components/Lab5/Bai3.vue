<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white text-center">
              <h4 class="card-title mb-0">
                <i class="bi bi-person-vcard me-2"></i>Thông Tin Cá Nhân
              </h4>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">
                    <i class="bi bi-person me-2 text-primary"></i>Họ và Tên
                  </label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                    <input 
                      v-model="userInfo.name" 
                      type="text" 
                      class="form-control" 
                      placeholder="Nhập họ và tên" 
                      required
                    />
                  </div>
                </div>
  
                <div class="mb-3">
                  <label class="form-label">
                    <i class="bi bi-calendar me-2 text-primary"></i>Tuổi
                  </label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-calendar"></i></span>
                    <input 
                      v-model="userInfo.age" 
                      type="number" 
                      class="form-control" 
                      placeholder="Nhập tuổi" 
                      min="0"
                      max="120"
                      required
                    />
                  </div>
                </div>
  
                <div class="mb-3">
                  <label class="form-label">
                    <i class="bi bi-envelope me-2 text-primary"></i>Email
                  </label>
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                    <input 
                      v-model="userInfo.email" 
                      type="email" 
                      class="form-control" 
                      placeholder="Nhập email" 
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
  
            <div class="card-footer bg-light">
              <div class="alert alert-info mb-0" role="alert">
                <h5 class="alert-heading">
                  <i class="bi bi-info-circle me-2"></i>Thông Tin Đã Nhập
                </h5>
                <hr>
                <p class="mb-1">
                  <strong>Họ và Tên:</strong> 
                  <span class="text-primary">{{ userInfo.name || 'Chưa nhập' }}</span>
                </p>
                <p class="mb-1">
                  <strong>Tuổi:</strong> 
                  <span class="text-primary">{{ userInfo.age || 'Chưa nhập' }}</span>
                </p>
                <p class="mb-0">
                  <strong>Email:</strong> 
                  <span class="text-primary">{{ userInfo.email || 'Chưa nhập' }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    name: 'Bai3Lab5',
    setup() {
      // Khai báo biến trạng thái sử dụng reactive
      const userInfo = reactive({
        name: '',
        age: null,
        email: '',
      });
  
      return {
        userInfo,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Một số CSS tùy chỉnh tối thiểu */
  .input-group-text {
    background-color: #f8f9fa;
  }
  </style>