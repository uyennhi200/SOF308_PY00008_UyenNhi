<template>
  <div class="container mt-5">
        <!-- Khung viền ngoài cùng -->
        <div class="border p-4 rounded">
            <div class="row">
                <!-- Form Đăng Ký -->
                <div class="col-md-6">
                    
                        <h4>Form Đăng Ký Thông Tin</h4>
                        <div class="border p-4 rounded">
                        <form class="was-validated">
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Họ và Tên</label>
                                <input type="text" class="form-control" id="fullName" placeholder="Nhập họ và tên" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="phone" class="form-label">Số Điện Thoại</label>
                                <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Xác Nhận Mật khẩu</label>
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Xác nhập mật khẩu" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Giới Tính</label>
                                <div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="male" checked>
                                        <label class="form-check-label" for="male">Nam</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="female">
                                        <label class="form-check-label" for="female">Nữ</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="language" class="form-label">Ngôn Ngữ</label>
                                <select class="form-select" id="language">
                                    <option selected>Tiếng Việt</option>
                                    <option selected>Tiếng Anh</option>
                                    <option selected>Tiếng Nhật</option>
                                </select>
                            </div>
                            
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="terms" required>
                                <label class="form-check-label" for="terms">Tôi đồng ý với các điều khoản và điều kiện</label>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng tick vào ô này</div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Đăng ký</button>
                        </form>
                    </div>
                </div>
                
                <!-- Form Đăng nhập -->
                <div class="col-md-6">
                    
                        <h4>Form Đăng nhập</h4>
                        <div class="border p-4 rounded">
                        <form class="was-validated">
                            <div class="mb-3">
                                <label for="loginEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="loginPassword" class="form-label">Mật Khẩu</label>
                                <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu" required>
                                <div class="valid-feedback">Hợp lệ</div>
                                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Bai2Lab2"

}
</script>

<style>

</style>