<template>
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0"><i class="bi bi-pencil-square me-2"></i>Tạo bài viết mới</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitPost">
        <div class="mb-3">
          <label class="form-label">Tiêu đề</label>
          <input 
            v-model="title" 
            class="form-control" 
            placeholder="Nhập tiêu đề"
            required 
          />
        </div>
        
        <div class="mb-3">
          <label class="form-label">Tác giả</label>
          <input 
            v-model="author" 
            class="form-control" 
            placeholder="Nhập tên tác giả"
            required 
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Nội dung</label>
          <textarea 
            v-model="content" 
            class="form-control" 
            rows="4" 
            placeholder="Nhập nội dung bài viết"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary w-100">
          <i class="bi bi-send me-2"></i>Đăng bài
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add-post"]);
const title = ref("");
const content = ref("");
const author = ref("");

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    };
    emit("add-post", newPost);
    title.value = "";
    content.value = "";
    author.value = "";
  } else {
    alert("Vui lòng điền đầy đủ thông tin bài viết!");
  }
}
</script>