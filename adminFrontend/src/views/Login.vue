<template>
  <el-form :model="loginForm"  ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        account: '',
        checkPass: ''
      },
      checked: true
    };
  },
  methods: {
    login() {
      // 发送请求，判断是否登录成功
      this.$axios({
        method: 'post',
        url: '/admin/login',
        data: {
          account: this.loginForm.account,
          password: this.loginForm.checkPass
        }
      }).then(res => {
        let data = res.data;

        if (data.result == 'success') {
          // 提交到后台
          this.$store.commit('initadmin', {
            admin: {
              adminID: data.adminID,
              isLogin: true
            }
          });

          this.$router.push('/order')
        } else {
          this.$message.error({
            title: 'Error',
            message: '登录失败'
          });
        }
      }).catch(error => {
        this.$message.error({
          title: 'Error',
          message: '登录失败'
        });
      })
    }
  },
}

</script>

<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>