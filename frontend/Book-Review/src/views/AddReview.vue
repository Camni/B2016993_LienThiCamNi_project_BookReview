<template>
    <div class="add-review container-fluid">
        <h1 class="text-center my-4" id="title">Thêm bài viết</h1>
        <div class="container">
            <form method="POST" @submit.prevent="addNewReview" class="container">
                <div class="form-group">
                    <label for="ID" class="text-dark">Mã bài viết</label>
                    <input type="text" class="form-control" id="ID" v-model="posts.ID">
                </div>

                <div class="form-group">
                    <label for="name-review" class="text-dark">Tên bài viết</label>
                    <input type="text" class="form-control" id="name-review" v-model="posts.name">
                </div>

                <div class="form-group">
                    <label for="name-writer" class="text-dark">Tên người đánh giá</label>
                    <input type="text" class="form-control" id="name-writer" v-model="posts.reviewer">
                </div>

                <div class="form-group">
                    <label for="descript" class="text-dark">Nội dung</label>
                    <textarea class="form-control" id="descript" v-model="posts.content"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label text-dark" for="pathURL">Chọn ảnh bìa</label><br>

                    <input type="file" id="pathURL" class="text-dark" accept="image/jpeg,image/gif,image/png"
                        multiple="multiple">
                </div>
                <button type="submit" class="btn btn-primary mt-4" @click="getNameFileImg">Thêm</button>
                <button type="button" v-on:click="comebackHome()" class="btn btn-secondary btn  mx-3 mt-4">Về trang
                    chủ</button>
            </form>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts: {
                ID: null,
                name: null,
                content: null,
                reviewer: null,
                image: null
            }
        }
    },
    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },
        addNewReview() {
            axios.post('http://localhost:2903/reviews/store', this.posts)
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm bài viết mới thành công")
                        this.posts.ID = ""
                        this.posts.name = "";
                        this.posts.content = "";
                        this.posts.reviewer = "";

                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status === 500) {
                        window.alert("Thêm bài viết mới thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
        comebackHome() {
            this.$router.push("/");
        },
    }
}
</script>
<style scoped>
.add-review {
    margin: 18px auto;
}
</style>