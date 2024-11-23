<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4">Xác định mùa</h2>
      <input 
        v-model.number="month" 
        type="number" 
        class="form-control mb-3" 
        placeholder="Nhập tháng (1-12)" 
      />
      <p v-if="month < 1 || month > 12">Vui lòng nhập tháng từ 1 đến 12!</p>
      <p v-else-if="month >= 3 && month <= 5">Mùa: Xuân</p>
      <p v-else-if="month >= 6 && month <= 8">Mùa: Hè</p>
      <p v-else-if="month >= 9 && month <= 11">Mùa: Thu</p>
      <p v-else>Mùa: Đông</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Bai2Lab6',
    setup() {
      // Khai báo biến trong setup
      const month = ref(null);
  
      // Trả về biến để sử dụng trong template
      return {
        month,
      };
    },
  };
  </script>
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
  }
  </style>
  