<template>
    <div class="container py-4">
      <div class="row">
        <!-- Form thêm học sinh - Cột trái -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-white">
              <h5 class="card-title mb-0 fw-bold text-danger">{{ isEditing ? 'Sửa thông tin học sinh' : 'Thêm học sinh' }}</h5>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label class="form-label">Họ tên:</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="formData.hoTen" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label class="form-label">Điểm:</label>
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="formData.diem" 
                    step="0.1"
                    min="0"
                    max="10" 
                    required
                    @input="validateScore"
                  >
                  <div v-if="scoreError" class="text-danger mt-1">
                    {{ scoreError }}
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Ngày sinh:</label>
                  <input 
                    type="date" 
                    class="form-control" 
                    v-model="formData.ngaySinh" 
                    required
                  >
                </div>
                <button type="submit" class="btn btn-success w-100" :disabled="!!scoreError">
                  {{ isEditing ? 'Cập nhật' : 'Thêm' }}
                </button>
              </form>
            </div>
          </div>
        </div>
  
        <!-- Danh sách học sinh - Cột phải -->
        <div class="col-md-8">
          <div class="card">
            <div class="card-header bg-white">
                <h5 class="card-title mb-0 fw-bold text-danger">Danh sách học sinh</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Họ và tên</th>
                      <th>Điểm</th>
                      <th>Ngày sinh</th>
                      <th class="text-end">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(student, index) in students" :key="index">
                      <td>{{ student.hoTen }}</td>
                      <td>{{ student.diem }}</td>
                      <td>{{ formatDate(student.ngaySinh) }}</td>
                      <td class="text-end">
                        <button 
                          class="btn btn-warning btn-sm me-1" 
                          @click="editStudent(index)"
                        >
                          Sửa
                        </button>
                        <button 
                          class="btn btn-danger btn-sm" 
                          @click="deleteStudent(index)"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                    <tr v-if="students.length === 0">
                      <td colspan="4" class="text-center">Chưa có học sinh nào</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Lab6Bai4',
  setup() {
    // Danh sách học sinh
    const students = ref([])

    // Form data
    const formData = reactive({
      hoTen: '',
      diem: '',
      ngaySinh: ''
    })

    // Biến lưu lỗi điểm số
    const scoreError = ref('')

    // Biến kiểm tra trạng thái edit
    const isEditing = ref(false)
    const editingIndex = ref(-1)

    // Validate điểm số
    const validateScore = () => {
      const score = parseFloat(formData.diem)
      if (isNaN(score)) {
        scoreError.value = 'Vui lòng nhập số'
      } else if (score < 0 || score > 10) {
        scoreError.value = 'Điểm phải từ 0 đến 10'
      } else {
        scoreError.value = ''
      }
    }

    // Format date
    const formatDate = (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('vi-VN')
    }

    // Xử lý thêm hoặc cập nhật học sinh
    const handleSubmit = () => {
      // Kiểm tra điểm trước khi submit
      validateScore()
      if (scoreError.value) return

      if (isEditing.value) {
        students.value[editingIndex.value] = { ...formData }
        isEditing.value = false
        editingIndex.value = -1
      } else {
        students.value.push({ ...formData })
      }
      // Reset form
      formData.hoTen = ''
      formData.diem = ''
      formData.ngaySinh = ''
    }

    // Xử lý sửa học sinh
    const editStudent = (index) => {
      const student = students.value[index]
      formData.hoTen = student.hoTen
      formData.diem = student.diem
      formData.ngaySinh = student.ngaySinh
      isEditing.value = true
      editingIndex.value = index
      // Reset error khi edit
      scoreError.value = ''
    }

    // Xử lý xóa học sinh
    const deleteStudent = (index) => {
      if (confirm('Bạn có chắc muốn xóa học sinh này?')) {
        students.value.splice(index, 1)
      }
      // Reset form
      formData.hoTen = ''
      formData.diem = ''
      formData.ngaySinh = ''
    }

    return {
      students,
      formData,
      isEditing,
      editingIndex,
      scoreError,
      handleSubmit,
      editStudent,
      deleteStudent,
      formatDate,
      validateScore
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>