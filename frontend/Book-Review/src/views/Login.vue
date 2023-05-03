<template>
    <div class="login">
        <section class="vh-100">
            <div class="container-fluid py-5 h-100">
                <div class="row d-flex vh-100 justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <form method="POST" @submit.prevent="loginAdmin">
                                    <h3 class="mb-5">Sign in</h3>
                                    <div class="form-outline mb-4">
                                        <input type="text" id="typeEmailX-2" class="form-control form-control-lg"
                                            v-model="login.username" />
                                        <label class="form-label" for="typeEmailX-2">Username</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg"
                                            v-model="login.password" />
                                        <label class="form-label" for="typePasswordX-2">Password</label>
                                    </div>



                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                </form>

                                <hr class="my-4">
                                <router-link to="/" class="btn btn-lg btn-block btn-secondary mb-2" >
                                Về Trang chủ </router-link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            login: {
                username: null,
                password: null
            }
        }
    },

    methods: {

        async loginAdmin() {
            await axios.post('http://localhost:2903/admin/auth/login', this.login)
                .then(res => {
                    if (res.data.status == 200) {
                        const value = res.data.user.name;
                        localStorage.setItem('admin', JSON.stringify(value));
                        this.$router.push('/admin/list-review');
                    }

                    if (res.data.status == 404) {
                        window.alert("Sai tài khoản hoặc mật khẩu")
                    }
                })
                .catch(err => console.log(err));
        },
    }
}
</script>
<style scoped></style>