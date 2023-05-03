<template>
    <div class="detail-review">
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-md-4 review-img">
                    <img :src="path + review.image" class="image-responsive">
                </div>

                <div class="col-md-8 review-info-detail">
                    <div class="row" style="margin: 20px;">
                        <div class="col-md-12">
                            <h1 class="review-title text-capitalize">{{ review.name }}</h1>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                            <h4>Nội dung:</h4>
                            <p class="description text-justify">
                                {{ review.content }}
                            </p>
                        </div>
                    </div>

                    <div class="row add-to-cart">
                        <div class="col-md-4">
                            <h5>Reviewer: {{ review.reviewer }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import staticPath from '../assets/staticPath/index';

export default {
    data() {
        return {
            review: null
        }
    },

    computed: {
        id() {
            return this.$route.params.id;
        },

        path() {
            return staticPath;
        }
    },

    created() {
        axios
            .get('http://localhost:2903/reviews/' + this.id)
            .then(res => {
                this.review = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },
}
</script>

<style scoped>
.detail-review {
    margin: 68px auto;
}

.container {
    background-color: #eee;
    display: flex;
}

.review-img {
    flex: 1;
}

.image-responsive {
    width: 100%;
    margin: 20px;
}

.monospaced {
    font-family: 'Ubuntu Mono', monospaced;
}

.add-to-cart .btn {
    color: #fff;
}
</style>