<template>
<div class="container">
  <div class="banner">
    <img src="../assets/img/banner.png" alt="banner" />
  </div>
  <div class="section">
    <div class="section-header">
      <h2>SÁCH PHỔ BIẾN</h2>
      <div class="section-line"></div>
      <button class="view-all">
        <RouterLink to="/login" style="color: #ffff; text-decoration: none;">Xem tất cả 
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </RouterLink>
      </button>
    </div> 
    <div class="book-list" v-if="books && books.length">
      <div class="book-item" v-for="book in books" :key="book._id">
        <img :src="book.chiTiet.hinhAnh[0]" :alt="book.tenSach">
        <div class="book-title text-ellipsis">{{ book.tenSach }}</div>
        <div class="book-actions">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cart-icon"/>
          <button class="borrow-button">MƯỢN NGAY</button>
        </div>
        
      </div>
    </div>
    <div v-else>
      <p>No book.</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  padding: 0;
  margin: 0 auto; /* Căn giữa container */
  width: 100%;
  font-family: Roboto, sans-serif;
}

.banner {
  display: flex;
  justify-content: center;
  width: 100%; /* Đảm bảo banner rộng 100% của container */
  padding: 0px;
  margin: 0px;
}

.banner img {
  max-width: 100%; /* Đảm bảo ảnh không vượt quá chiều rộng của container */
  width: 100%;
  height: auto; /* Giữ nguyên tỷ lệ ảnh */
}
h2 {
  color: #225771;
  padding: 12px 0;
  font-weight: bold;
}
.section {
  margin-bottom: 40px;
  position: relative;
}
.section-header { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  position: relative;
  padding-top: 12px; 
} 

.view-all { 
  text-decoration: none; 
  background: #225771;
  border-radius: 90px;
  padding: 12px 24px; 
  margin: 8px auto;
} 
.view-all:hover { 
  background: #CAEBFA;
} 
.section-line { 
  flex-grow: 1; 
  height: 2px; 
  background-color: #225771; 
  margin: 0 16px; 
}
.book-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.book-item {
  width: 23%;
  background-color: #fff;
  border: 1px solid #225771;
  border-radius: 5px;
  padding: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
}
.book-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.book-title {
  font-size: 16px;
  color: #34495e;
  margin: 8px 12px;
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap;
}
.book-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-icon {
  font-size: 28px;
  color: #225771;
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.borrow-button {
  background: #225771;
  border-radius: 90px;
  color: #fff;
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0;
}
.borrow-button:hover {
  background: #FFDCE2;
  color: #225771;
}
.cart-icon:hover {
  color: #FFDCE2;
}

</style>

<script>
import BookService from '@/services/BookService';
export default {
  name: "Home",
  data() {
    return {
      books: [],
    };
  },

  created() {
    this.fetchBooks();
  },

  methods: {
    fetchBooks() {
      BookService.getAll()
      .then((res) => {
        this.books = res.data;
      })
      .catch((err) => console.log(err))
    },
  }
}
</script>