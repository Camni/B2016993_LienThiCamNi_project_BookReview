<template>
    <div class="list-review">
        <h1 class="text-uppercase">Quản lý bài viết</h1>
        <hr color="black">
        <div class="list-reviews">

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên bài đánh giá</th>
                        <th scope="col">Người đánh giá</th>
                        <th scope="col" colspan="2"></th>
                    </tr>
                </thead>
                <tbody v-for="(review, index) in reviews" :key="index">
                    <tr class="text-justify">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ review.name }}</td>
                        <td>{{ review.reviewer }}</td>
                        <td>
                            <a href="" class="btn btn-link" @click="getIdReview(review)" :data-id="review._id"
                                data-toggle="modal" data-target="#delete-review-modal">Xóa</a>
                        </td>
                    </tr>
                </tbody>
            </table>


            <div class="modal fade" id="delete-review-modal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Xóa bài viết?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn xóa bài viết này?
                        </div>
                        <div class="modal-footer">
                            <button type="button" @click="deleteReview()" class="btn btn-danger">Xóa
                                bỏ</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            reviews: [],
            id: null
        }
    },
    created() {
        axios.get('http://localhost:2903/')
            .then(res => {
                this.reviews = res.data.reviews;
            })
            .catch(err => {
                console.log(err)
            });
    },
    methods: {
        getIdReview(review) {
            this.id = review._id;
        },
        deleteReview() {
            axios.delete('http://localhost:2903/reviews/' + this.id)
                .then(() => {
                    this.$router.push('/admin/list-reviews');
                    window.alert("Xóa thành công")
                    window.location.reload()
                })
                .catch(err => console.log(err));
        },
    }
}
</script>
<style scoped>
.list-review {
    margin-top: 18px;
}
</style>