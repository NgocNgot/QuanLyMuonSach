<template>
  <div class="container text-center">
    <div class="row">
    <div class="col-12 top-banner">
        <img src="../assets/img/topbanner.png"/>
        <!-- <div class="dropdown">            
            <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon class="icon user" :icon="['fas', 'user']" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #fff;">
                <li><a class="dropdown-item" href="#">Đăng ký</a></li>
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
            </ul>
        </div> -->
        
        <!-- <font-awesome-icon class="icon heart" :icon="['fas', 'heart']" />
        <font-awesome-icon class="icon cart" :icon="['fas', 'cart-shopping']" /> -->
    </div>

    </div>
    <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #225771;">
            <div class="container-fluid">
                <img class="navbar-brand" src="../assets/img/Logo.png" style="height: 40px; justify-self: center;"/>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"
                                :class="{ 'text-pink': isActive === 'home' }"
                                @click="isActive = 'home'"
                            >Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"
                                :class="{ 'text-pink': isActive === 'about' }"
                                @click="isActive = 'about'"
                            >Giới thiệu</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                :class="{ 'text-pink': isActive === 'category' }"
                                @click="isActive = 'category'"
                            >Danh mục</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #fff;">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"
                                :class="{ 'text-pink': isActive === 'contact' }"
                                @click="isActive = 'contact'"
                            >Liên hệ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"
                                :class="{ 'text-pink': isActive === 'news' }"
                                @click="isActive = 'news'"
                            >Tin tức</a>
                        </li>
                        
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Tìm kiếm</button>
                    </form>
                    <div>
                        <font-awesome-icon class="icon user" :icon="['fas', 'heart']" />
                        <font-awesome-icon class="icon heart" :icon="['fas', 'heart']" />
                        <font-awesome-icon class="icon cart" :icon="['fas', 'cart-shopping']" />
                    </div>
                    
                </div>
            </div>
        </nav>
    </div>
</div>

</template>



<style scoped>
    /* Reset các phần tử để đảm bảo hiển thị đồng nhất trên các trình duyệt */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Tổng thể trang web */
.container {
    width: 100%;
    align-items: center;
    font-family: 'Jost', sans-serif;
}

/* Banner trên cùng */

.top-banner img {
    width: 100%; /* Đảm bảo ảnh rộng 100% */
    height: auto; /* Giữ tỉ lệ của ảnh */

}
.top-banner {
    position: relative;
    padding: 0;
}
.top-banner img {
    width: 100%;
    height: auto;
}
/*Định dạng các biểu tượng*/
.icon {
    position: absolute;
    color: #225771;
    font-size: 24px;
}
.icon.user {
    bottom: 8px;
    right: 100px;
}

.icon.heart {
    bottom: 8px;
    right: 60px;
}
.icon.cart {
    bottom: 8px;
    right: 20px;
}

a {
    color: white;
}

.navbar-nav .nav-link {
    margin: auto 12px;
}
.text-pink {
  color: #FBA3CD !important;
  font-weight: bold;
}
.nav-link:hover {
    color: #FBA3CD;
}
.dropdown-item {
    color: #225771;
}

.d-flex {
    height: 40px;
    justify-content: center;
}
input {
    width: 200px;
}
button {
    border: 1.5px solid #fff;
    color: #fff;
    width: 96px;
}
button:hover {
    background-color: #f5c5dc;
    border: 1.5px solid #f5c5dc;
    color: #225771;
}



/* Responsive Design */
@media (max-width: 768px) {
  .navbar-brand {
    width: 90px;
    height: 30px;
  }
}


</style>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      isActive: 'home', // Mặc định trang chủ được chọn
    };
  },
};
</script>