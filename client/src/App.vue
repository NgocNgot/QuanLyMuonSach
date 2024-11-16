<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue';
  export default {
    data() {
      return {

      }
    },
    components: {
      Header,
      Footer,
    }
  }
</script>

<template>
  <div class="app-container">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style>
.app-container {
  max-width: 1280px;
  margin: 0 auto; /* Căn giữa trang */
  padding: 0;
  width: 100%; /* Đảm bảo trang bao phủ toàn bộ chiều rộng */
}

@media (max-width: 768px) {
  .app-container {
    padding: 0 10px; /* Điều chỉnh padding cho màn hình nhỏ */
  }
}
</style>