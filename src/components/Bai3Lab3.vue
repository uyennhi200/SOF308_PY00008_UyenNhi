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
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/banner1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/banner2.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/banner3.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container">
    <main>
      <section class="row content-section">
        <aside class="col-4">
          <h3 class="text-info mt-2">Chuyên mục</h3>
          <ul class="list-group">
            <li
              class="list-group-item active bg-info d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ tập</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>
          <br/>
          <div class="card">
            <div class="card-header text-info font-weight-bold">
            <h3 class="card-title blog-title text-info">Bài viết nổi bật</h3>
          </div>
          
            <div class="blog-item">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="../assets/spinach_300x300.jpg"
                    alt="Spinach"
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h6 class="card-title fw-bold">
                      Lợi ích khi ăn rau mỗi ngày
                    </h6>
                    <p class="card-text content">
                      Tiêu thụ rau xanh hằng ngày sẽ giúp tăng cường thị lực,
                      kiểm soát cân nặng, ngăn ngừa ung thư.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-item">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="../assets/orange_300x300.jpg"
                    alt="Spinach"
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h6 class="card-title fw-bold">
                      9 tác dụng tuyệt vời của quả cam
                    </h6>
                    <p class="card-text content">
                      Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng
                      chất chống oxy hóa cao...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-item">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="../assets/sesameoil_300x300.jpg"
                    alt="Spinach"
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h6 class="card-title fw-bold">
                      10 công dụng bất ngờ từ dầu dừa
                    </h6>
                    <p class="card-text content">
                      Dầu dừa như một loài kem dưỡng ẩm tự nhiên cho cơ thể,
                      giúp việc sản xuất collagen trong các tế bào...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <article class="col-8">
          <h3 class="text-info mt-2">Tất cả bài viết</h3>
          <div class="card blog-content blog-bg content-padding">
            <div class="row">
              <div class="col-6">
                <div class="card">
                  <h6 class="card-title blog-title fw-bold">
                    Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                    <i class="bi bi-chat-left"></i>16
                  </h6>
                  <img
                    src="../assets/tap-piltes.jpg"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt,
                      dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc
                      dài hơn, kéo giãn...
                    </p>
                    <br />
                  </div>
                </div>
                <br />
                <div class="card">
                  <h6 class="card-title blog-title fw-bold">
                    Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn
                    <i class="bi bi-chat-left"></i>5
                  </h6>
                  <img
                    src="../assets/tim-mach.jpg"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và
                      linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim
                      mạch.Bài viết này sẽ tìm hiểu sâu hơn về tác động tích cực
                      của việc tập Pilates đối với sức khỏe tim mạch...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card">
                  <h6 class="card-title blog-title fw-bold">
                    Đây là những gì 1 giờ tập Pilates có thể làm cho cơ thể của
                    bạn <i class="bi bi-chat-left"></i>8
                  </h6>
                  <a href="/lab3bai4">
                    <img
                      src="../assets/tap-pilates1.jpg"
                      class="card-img-top blog-image"
                      alt="Pilates exercise"
                    />
                  </a>
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn
                      bài tập này đã trở thành một cái tên quen thuộc nhờ có rất
                      nhiều người nổi tiếng theo dõi.
                    </p>
                  </div>
                </div>
                <br />
                <div class="card">
                  <h6 class="card-title blog-title fw-bold">
                    EAT CLEAN: Nên hay không nên ăn những thực phẩm nào?
                    <i class="bi bi-chat-left"></i>3
                  </h6>
                  <img
                    src="../assets/eat-clean.png"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Chúng ta luôn chủ động lựa chọn thực phẩm sạch và duy trì
                      lối sống lành mạnh. Vậy chế độ ăn Eat Clean nên và không
                      nên ăn những gì trong thực đơn hằng ngày để cân bằng tháp
                      dinh dưỡng cho cơ thể?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <nav
              aria-label="Page navigation example"
              class="d-flex justify-content-center mt-3"
            >
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </section>
    </main>
  </div>
  <footer class="bg-dark p-3 footer">Hồ Uyển Nhi-PY00008</footer>
</template>

<script>
export default {
  name: "Bai3Lab3",
};
</script>

<style>
.footer {
  text-align: center;
  color: white;
}
</style>
