<template>
    <div class="card shadow-sm">
      <div class="card-header bg-success text-white">
        <h5 class="mb-0"><i class="bi bi-list-ul me-2"></i>Danh sách bài viết</h5>
      </div>
      <div class="card-body">
        <div v-if="posts.length === 0" class="alert alert-info">
          Chưa có bài viết nào!
        </div>
        <div v-for="(post, index) in posts" :key="index" class="post card mb-3">
          <div class="card-body">
            <h4 class="card-title text-primary">
              <i class="bi bi-bookmark me-2"></i>{{ post.title }}
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
              <i class="bi bi-person me-2"></i>{{ post.author }}
            </h6>
            <p class="card-text mt-3">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostList",
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>