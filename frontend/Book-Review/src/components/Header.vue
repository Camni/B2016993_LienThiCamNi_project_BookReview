<template >
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light navigate">
            <img src="../assets/img/logo1.png" alt="..." class="logo ml-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                    </li>

                    <li class="nav-item" v-if="this.admin">
                        <router-link to="/admin/list-review" class="nav-link">Danh sách bài viết <span
                                class="sr-only">(current)</span></router-link>
                    </li>

                    <li class="nav-item" v-if="this.admin">
                        <router-link to="/admin/add-review" class="nav-link">Thêm bài viết <span
                                class="sr-only">(current)</span></router-link>
                    </li>
                </ul>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <h1 class="text-white">Book Review</h1> 
                    </li>
                </ul>


                <ul class="nav navbar-nav navbar-right d-flex align-items-center" v-if="this.admin">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> {{ this.admin }} <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="btn bg-success nav-link" v-on:click="logout()">
                            Đăng xuất
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    computed: {
        admin() {
            const name = JSON.parse(localStorage.getItem("admin"));
            return name || null;
        }
    },
    methods: {

        logout() {
            localStorage.clear();
            this.$router.push('/');

            setTimeout(window.location.reload.bind(window.location), 200)
        }
    },
}
</script>
<style scoped>
.logo {
    width: 40px;
}

.navigate {
    background-color: rgb(74, 80, 86);
}

.nav-link {
    color: #fff !important;
}
</style>