<template>
  <div class="register-main">
    <div class="main">
      <div class="img-icon">
        <img src="../assets/img/img_icon.png" alt="img_icon"/>
      </div>
      <div class="form">
        <form class="register" @submit.prevent="register">
          <div class="title">ĐĂNG KÝ</div>
          <div class="content">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <label for="hoLot">Họ lót:</label>
                  <input type="text" id="hoLot" v-model="hoLot" placeholder="VD: Nguyễn Thị">
                  <p v-if="errors.hoLot">{{ errors.hoLot }}</p>
                </div>
                <div class="col-sm">
                  <label for="ten">Tên:</label>
                  <input type="text" id="ten" v-model="ten" placeholder="VD: Bích Ngọc">
                  <p v-if="errors.ten">{{ errors.ten }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <label for="ngaySinh">Ngày sinh:</label>
                  <input type="date" id="ngaySinh" v-model="ngaySinh">
                  <p v-if="errors.ngaySinh">{{ errors.ngaySinh }}</p>
                </div>
                <div class="col-sm">
                  <label for="phai">Phái:</label>
                  <select id="phai" v-model="phai">
                    <option value="">Chọn phái của bạn</option>
                    <option value="nam">Nam</option>
                    <option value="nữ">Nữ</option>
                    <option value="khác">Khác</option>
                  </select>
                  <p v-if="errors.phai">{{ errors.phai }}</p>
                </div>

              </div>
              <div class="row">
                <div class="col-sm">
                  <label for="diaChi">Địa chỉ:</label>
                  <input type="text" id="diaChi" v-model="diaChi">
                  <p v-if="errors.diaChi">{{ errors.diaChi }}</p>
                </div>
                <div class="col-sm">
                  <label for="dienThoai">Số điện thoại:</label>
                  <input type="text" id="dienThoai" v-model="dienThoai" maxlength="10">
                  <p v-if="errors.dienThoai">{{ errors.dienThoai }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <label for="email">Email:</label>
                  <input type="email" id="email" v-model="email" placeholder="Nhập vào email của bạn">
                  <p v-if="errors.email">{{ errors.email }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <label for="password">Mật khẩu:</label>
                  <input type="password" id="password" v-model="password" placeholder="Nhập mật khẩu">
                  <p v-if="errors.password">{{ errors.password }}</p>
                </div>
                <div class="col-sm">
                  <label for="password-confirmation">Nhập lại mật khẩu:</label>
                  <input type="password" id="password-confirmation" v-model="passwordconfirm" placeholder="Nhập lại mật khẩu">
                  <p v-if="errors.passwordconfirm">{{ errors.passwordconfirm }}</p>
                </div>
              </div>
              <button type="submit">Đăng ký</button>
              <div class="bottom">
                  Bạn đã có tài khoản? <RouterLink to="/login" style="text-decoration: none; color: #FBA3CD;"> Đăng nhập tại đây</RouterLink>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.register-main {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-family: Roboto, sans-serif;
  background: #F3FBFF;
}

.main {
  margin: 20px auto;
  width: 60%;
  background: #CAEBFA;
  border-radius: 10px;
  padding: 20px;
}
.form {
  background: #fff;
  border-radius: 10px;
  padding: 10px 32px;
  margin: 0px 40px 8px 40px;
}
.img-icon {
  display: flex;
  justify-content: center;
}
.img-icon img {
  width: 120px;
  height: auto;
  padding-bottom: 4px;

}
.title {
  color: #000;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}
p {
  color: #FBA3CD;
  margin-bottom: 4px;
}
.container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  margin-bottom: 8px;
}

.col-sm {
  flex: 1;
  margin-right: 0px;
}

.col-sm:last-child {
  margin-right: 0;
}

label {
  display: block;
  margin-bottom: 2px;
  color: #000;
}

input, select {
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #F1F1F1;
  border-radius: 5px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  margin: 12px auto;
  background: #225771;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
}

button:hover {
  background: #1d4c68;
}
.bottom {
  text-align: center;
  font-size: 13px;
}

</style>


<script>
import UsersService from '@/services/UserService';

  export default {
    name: "Register",
    data(){
      return {
        hoLot: "",
        ten: "",
        birthday: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        passwordconfirm: "",
        address: "",
        errors: {},
        check: true,
      };
    },

    methods: {
    register() {
      this.errors = {};
      this.check = true;
      this.ValidateFirstName();
      this.ValidateLastName();
      this.ValidateBirthday();
      this.ValidateGender();
      this.ValidateAddress();
      this.ValidatePhone();
      this.ValidateEmail();
      this.CheckAcc();
      this.ValidatePassword();
      this.ValidateRePass();

      if(this.check == true) {
        const newUser = {
          hoLot: this.hoLot,
          ten: this.ten,
          ngaySinh: this.ngaySinh,
          phai: this.phai,
          diaChi: this.diaChi,
          dienThoai: this.dienThoai,
          email: this.email,
          password: this.password,
        };
        UsersService.createUser(newUser)
        .then((res) => {
          alert("Đăng ký tài khoản thành công.");
          this.$router.push("/login");
        })
        .catch((error) => {
          alert("Đăng ký tài khoản thất bại!");
          console.log(error);
        })
      }
    },
    ValidateFirstName(){
          if(this.hoLot == ""){
            this.errors.hoLot = "Vui lòng nhập họ lót";
            this.check = false;
            return false;
          }
        },
    ValidateLastName(){
          if(this.ten == ""){
            this.errors.ten = "Vui lòng nhập tên";
            this.check = false;
            return false;
          }
        },
        ValidateBirthday(){
          var today = new Date()
          if(this.ngaySinh == ""){
            this.errors.ngaySinh = "Vui lòng chọn ngày sinh";
            this.check = false;
            return false;
          } else if(Date.parse(this.ngaySinh) >= today){
            this.errors.ngaySinh = "Vui lòng chọn ngày sinh hợp lệ";
            this.check = false;
            return false;
          }
        },
        ValidateGender(){
          if(this.phai == ""){
            this.errors.phai = "Vui lòng chọn phái";
            this.check = false;
            return false;
          }
        },
        ValidateEmail() {
          var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(this.email == ""){
            this.errors.email = "Vui lòng nhập email";
            this.check = false;
            return false;
          } else if (this.email.match(validRegex)) {

          } else {
            this.errors.email = "Vui lòng nhập đúng định dạng email";
            this.check = false;
            return false;
          }

        },
        CheckAcc(){
          UsersService.checkAccount(this.email)
          .then((res) => {
            if(res.data.length != 0){
              this.errors.email = "Email đã được sử dụng!";
              this.check = false;
            }
          })
          .catch((err) => console.log(err))
        },


        ValidatePhone(){
          var regexPhone = /^0[0-9]*$/;
          if(this.dienThoai == ""){
            this.errors.dienThoai = "Vui lòng nhập số điện thoại";
            return false;
          } else if(this.phone.match(regexPhone)) {

          } else {
            this.errors.dienThoai = "Vui lòng nhập số điện thoại đúng định dạng";
            this.check = false;
            return false;
          }
        },
        ValidatePassword() {
          
          if (this.password.length < 6) {
            this.errors.password = "Vui lòng nhập mật khẩu lớn hơn 6 ký tự";
            this.check = false;
            return false;
    
          }
        },
        ValidateRePass(){
          if(this.passwordconfirm != this.password){
            this.errors.passwordconfirm = "Vui lòng nhập lại mật khẩu";
            this.check = false;
            return false;
          }
        },
        ValidateAddress(){
          if(this.diaChi == ""){
            this.errors.diaChi = "Vui lòng nhập địa chỉ";
            this.check = false;
            return false;
    
          }
        }
  },
  }

  


</script>