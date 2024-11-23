<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center text-primary mb-4">QUẢN LÝ BLOG</h1>
          <div class="row">
            <div class="col-md-4">
              <CreateList @add-post="addPost" />
            </div>
            <div class="col-md-8">
              <PostList :posts="posts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai4",
  };
  </script>
  
  <script setup>
  import { ref } from "vue";
  import PostList from './PostList.vue';
  import CreateList from "./CreatePost.vue";
  
  const posts = ref([]);
  
  function addPost(post) {
    posts.value.push(post);
  }
  </script>