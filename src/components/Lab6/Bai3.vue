<template>
    <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <div class="img-wrapper">
            <img
              :src="item.image"
              :alt="item.title"
              class="card-img-top"
            />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text flex-grow-1">{{ item.content }}</p>
            <button class="btn btn-info mt-auto">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  // Import hình ảnh
  import img1 from "../../assets/orange_300x300.jpg";
  import img2 from "../../assets/sesameoil_300x300.jpg";
  import img3 from "../../assets/spinach_300x300.jpg";
  
  export default {
    name: "Lab6Bai3",
    setup() {
      const items = ref([
        {
          title: "8 loại rau củ quả giàu canxi",
          content:
            "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...",
          image: img1,
        },
        {
          title: "Các loại gia vị tốt cho sức khỏe",
          content:
            "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...",
          image: img2,
        },
        {
          title: "9 loại đậu bổ dưỡng nên dùng nhiều",
          content:
            "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...",
          image: img3,
        },
      ]);
  
      return {
        items,
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
  height: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.img-wrapper {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 0.9rem;
  color: #666;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;
}

.btn-info:hover {
  background-color: #138496;
}
</style>