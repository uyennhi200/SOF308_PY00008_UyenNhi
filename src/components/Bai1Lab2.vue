<template>
    <div class="container my-4 ">
        <h2 class="text-center" style="color: red;">Bảng Thành Phần Dinh Dưỡng</h2>
        <table class="table table-bordered text-left">
            <thead class="table-warning" >
                <tr class ="text-center">
                    <th class ="align-middle" rowspan="2">Thành Phần</th>
                    <th colspan="2">Giá trị</th>
                    
                </tr>
                <tr>
                    <th>Khối lượng</th>
                    <th>%DV*</th>
                </tr>
            </thead>
            <tbody>
                <tr class="align-left">
                    <td>Calories</td>
                    <td>200 kcal</td>
                    <td>20%</td>
           
                </tr>
                <tr>
                    <td>Chất béo</td>
                    <td>9 g</td>
                    <td>14%</td>
           
                </tr>
                <tr>
                    <td>Chất Béo Bão Hòa</td>
                    <td>4 g</td>
                    <td>20%</td>
           
                </tr>
                <tr>
                    <td>Chất Đạm </td>
                    <td>8 g</td>
                    <td>16%</td>
           
                </tr>
                <tr>
                    <td>Chất Xơ</td>
                    <td>5 g</td>
                    <td>20%</td>
           
                </tr>
                <tr>
                    <td>Đường</td>
                    <td>12 g</td>
                    <td>-</td>
  
                </tr>
                <tr>
                    <td class ="align-middle" rowspan="2">Vitamin</td>
                    <td>Vitamin C</td>
                    <td>25%</td>

                </tr>
                <tr>
                    <td>Vitamin D</td>
                    <td>10%</td>

                </tr>
                
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
name:"Bai1Lab2"
}
</script>

<style>

</style>