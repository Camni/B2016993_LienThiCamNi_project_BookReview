<template>
    <div class="home-view container">
        <div class="sections row mb-3 justify-content-center">
            <!-- Search reviews -->
            <form class="form-inline my-2 my-lg-0">
                <label class=" form-label my-2 my-sm-0 mr-3">Tìm kiếm bài viết: </label>
                <input class="form-control mr-sm-2 col-xs-4" type="search" placeholder="Tên bài viết hoặc reviewer" v-model="search" aria-label="Search">
            </form>
        </div>

        <div class="sections row">
            <template v-for="(review, index) in filteredList" :key="index">

                <div v-if="index < 20" class="card" style="width: 16rem;">
                    <router-link :to="'/reviews/' + review._id">
                        <img class="card-img-top" :src="path + review.image" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ review.name }}</h5>
                        <p class="card-text">{{ review.reviewer }}</p>
                    </div>
                </div>

            </template>


        </div>
    </div>
</template>

<script>

import axios from 'axios'
import staticPath from '../assets/staticPath';

export default {
    data() {
        return {
            search: '',
            reviews: []
        };
    },

    created() {
        axios
            .get("http://localhost:2903/")
            .then(res => {
                this.reviews = res.data.reviews;
            })
            .catch(err => {
                console.log(err);
            });
    },

    computed: {
        filteredList() {
            return this.reviews.filter(review => {
                return review.name.toLowerCase().includes(this.search.toLowerCase()) || review.reviewer.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        path() {
            return staticPath
        }
    },
}


</script>

<style scoped>
.home-view {
    margin: 16px auto;
}

.card {
    display: inline-block;
    margin: 12px 8px;
}

.card .card-body .card-title {
    min-height: 4.5rem;
    color: rgb(245, 139, 10);
}

.id-book {
    color: rgb(72, 186, 243);
}
.card-img-top{
    height: 200px;
}
</style>