<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4">Xếp loại học sinh</h2>
      <input 
        v-model.number="dtb" 
        type="number" 
        class="form-control mb-3" 
        placeholder="Nhập điểm trung bình" 
      />
      <p v-if="dtb < 5 && dtb !== null">Xếp loại: Yếu</p>
      <p v-else-if="dtb < 6.5">Xếp loại: Trung bình</p>
      <p v-else-if="dtb < 8">Xếp loại: Khá</p>
      <p v-else-if="dtb < 9">Xếp loại: Giỏi</p>
      <p v-else-if="dtb >= 9">Xếp loại: Xuất sắc</p>
      <p v-else>Vui lòng nhập điểm hợp lệ!</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Bai1Lab6',
    setup() {
      // Khai báo biến trong setup
      const dtb = ref(null);
  
      // Trả về biến để sử dụng trong template
      return {
        dtb,
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
  