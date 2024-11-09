<template>
  <div class="container-fluid">
    <nav class="row bg-info p-2">
      <nav class="navbar navbar-expand-sm navbar-dark">
        <a class="navbar-brand" href="/lab3">
          <img
            src="../assets/logo-energy-pilates.png"
            alt=""
            class="navbar-logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/lab3bai3"
                ><i class="fa-solid fa-list"></i> Bài viết</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-film"></i> Video</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-circle-info"></i> Giới thiệu</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-calendar-days"></i> Sự kiện</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                ><i class="fa-solid fa-user"></i> Tài khoản</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                <li>
                  <a class="dropdown-item" href="#">Đăng ký thành viên</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav d-flex navbar-language">
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Tiếng Anh</a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  </div>

  <div class="container">
    <div class="row">
      <aside class="col-8">
        <h2 class="text-info text-center mt-5 w-100">
          Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
        </h2>
        <img
          src="../assets/tap-pilates1.jpg"
          alt="Pilates exercise"
          class="img-fluid w-100"
        />
        <p class="w-100">
          Tập Pilates là một phương pháp tập luyện giúp cải thiện sức khỏe và
          thể hình một cách toàn diện. Nó không chỉ giúp duy trì vóc dáng, cải
          thiện sự linh hoạt, dẻo dai mà còn có thể giúp phục hồi chấn thương
          cột sống. Bài viết này sẽ tìm hiểu sâu hơn về những lợi ích của việc
          tập luyện Pilates.
        </p>
        <h5 class="w-100 fw-bold">
          Pilates giúp phục hồi chấn thương cột sống nhanh chóng
        </h5>
        <p class="w-100">
          Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn
          phòng, đó là đau lưng,thoát vị địa đệm.Tuy nhiên, nếu điều trị không
          đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm có thể bao gồm: Ví
          dụ, điều trị bằng laser không đúng cách hoặc tập yoga không đúng cách
          có thể khiến bệnh nhân nằm liệt giường
        </p>
        <img
          src="../assets/tap-piltes.jpg"
          alt="Pilates exercise"
          class="img-fluid w-100"
        />
        <h5 class="w-100 fw-bold">Phương pháp tập Pilates Cat Low</h5>
        <p class="w-100">
          Các bước thực hiện: <br />
          <i class="bi bi-dot fs-4"></i> Bắt đầu với tư thế 4 điểm. Vai và cổ
          tay của bạn phải thẳng hàng và vuông góc với thảm, lưng của bạn phải
          bằng phẳng và xương chậu của bạn phải cân đối.<br />
          <i class="bi bi-dot fs-4"></i> Hít vào, võng lưng, nâng cằm lên, mở
          rộng ngực.<br />
          <i class="bi bi-dot fs-4"></i> Thở ra, cong xương cụt, nâng cong lưng
          và đưa cằm về gần khoang ngực.<br />
          <i class="bi bi-dot fs-4"></i> Lặp đi lặp lại động tác từ 5-7 lần.
        </p>
        <h5 class="w-100 fw-bold">Lời kết</h5>
        <p class="w-100">
          Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống
          nhanh chóng. Để đạt được kết quả tập luyện như mong muốn, bạn cần duy
          trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết hợp chế độ
          ăn uống khoa học.
        </p>

        <!-- Thêm nội dung chi tiết về cách Pilates giúp phục hồi chấn thương cột sống -->
      </aside>

      <article class="col-4">
        <h4 class="text-dark mt-5 w-100 fw-bold">Bình luận bài viết tại đây</h4>
        <input
          type="comment"
          class="form-control w-100"
          id="comment"
          placeholder="Nhập bình luận của bạn"
          required
        />
        <br />
        <button class="btn btn-success">Gửi bình luận</button>
        <br />
        <h4 class="text-dark mt-3 w-100 fw-bold">Danh sách các bình luận:</h4>
        <p class="w-100">
          <i class="bi bi-dot fs-4"></i>Bình An: Bài viết rất hữu ích <br />
          <i class="bi bi-dot fs-4"></i>Bình An: Cảm ơn những chia sẻ bổ ích
          <br />
        </p>
      </article>
    </div>
  </div>
  <footer class="bg-dark p-3 footer">Hồ Uyển Nhi-PY00008</footer>
</template>

<script>
export default {
  name: "Bai4Lab3",
};
</script>

<style>
.footer {
  text-align: center;
  color: white;
}
</style>
