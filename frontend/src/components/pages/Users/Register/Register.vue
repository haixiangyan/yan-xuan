<template>
    <div class="yan-register-wrapper">
        <div class="yan-register-body">
            <form class="yan-register-body-form">
                <div class="form-item">
                    <input v-model="form.name" placeholder="请输入手机号" size="large"></input>
                </div>
                <div class="form-item">
                    <input type="password" v-model="form.password" placeholder="请输入密码" size="large"></input>
                </div>
                <div class="form-item">
                    <input type="password" v-model="form.confirm" placeholder="请确认密码" size="large"></input>
                </div>
            </form>
    
            <!-- 验证 -->
            <div class="yan-register-verify">
                <input v-model="form.verifyCode" type="text">
                <button @click="sendCode">发送验证码</button>
            </div>
    
            <div class="form-submit">
                <button v-on:click="onSubmit">下一步</button>
            </div>
            <div class="tips">
                用户注册即代表同意
                <a href="//reg.163.com/agreement_wap.shtml?20160825">《服务条款》</a>
                和
                <a href="//reg.163.com/agreement_game_wap.shtml?20160825">《网络游戏用户隐私保护和个人信息利用政策》</a>
            </div>
        </div>
    
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <yan-modal v-show="isShowModal" :title="modalText"></yan-modal>
        </transition>
    </div>
</template>
<script>
// 引入模态框
import YanModal from '@/components/commons/Modal/Modal';

export default {
    data() {
        return {
            form: {
                name: '',
                password: '',
                confirm: '',
                verifyCode: ''
            },
            modalText: '',
            isShowModal: false
        }
    },
    components: {
        YanModal
    },
    methods: {
        sendCode() {
            let isTimeout = true;
            this.isShowModal = true;
            this.modalText = '正在发送';

            // 发送验证码
            Bmob.Sms.requestSmsCode({ "mobilePhoneNumber": this.form.name })
                .then((obj) => {
                    console.log('send success')
                        
                    this.isShowModal = true;
                    this.modalText = '发送成功';

                    isTimeout = false;

                    setTimeout(() => {
                        this.isShowModal = false;
                    }, 1000);

                },(err) => {
                    console.log('send fail')
                    
                    this.isShowModal = true;
                    this.modalText = '发送失败';

                    isTimeout = false;

                    setTimeout(() => {
                        this.isShowModal = false;
                    }, 1000);
                });

            // 如果超时则显示超时的提示
            setTimeout(() => {
                if (isTimeout) {
                    this.isShowModal = true;
                    this.modalText = '发送超时';
                    setTimeout(() => {
                        this.isShowModal = false;
                    }, 1000)
                }
            }, 10000);
        },
        regist() {
            // POST /
            this.$http.post('/users/register',
                {
                    telephone: this.form.name,
                    password: this.form.password
                }
            ).then(response => {
                let result = response.body.result;
                if (result === 'success') {
                    this.$router.push({ name: 'Login' });
                }

            }, response => {
                // error callback
            });
        },

        onSubmit() {
            // 短信验证
            Bmob.Sms.verifySmsCode(this.form.name, this.form.verifyCode)
                .then((obj) => {
                    if (this.form.password !== this.form.confirm) {
                        //页面跳出一个提示显示 “请确认密码”
                        console.log('请确认密码');
                        this.isShowModal = true;
                        this.modalText = '密码不一致'
                        setTimeout(() => {
                            this.isShowModal = false;
                        }, 1000);
                    }
                    else if (this.form.name.length !== 11) {
                        this.isShowModal = true;
                        this.modalText = '电话号码不正确'
                        setTimeout(() => {
                            this.isShowModal = false;
                        }, 1000);
                    } 
                    else {
                        this.regist();
                    }
                }, 
                (err) => {
                    this.isShowModal = true;
                    this.modalText = '验证码错误';

                    setTimeout(() => {
                        this.isShowModal = false;
                    }, 1000);

                    return;
                });
        }

    },
    mounted() {
        // 初始化短信验证
        Bmob.initialize("957976cc64b41cd7933b37b4260c45b4", "a7ebd23778be3f1ec8c2cfab481bd1ba");
    }
}
</script>

<style scoped>
.yan-register-body {
    margin: 0 auto;
    width: 86%;
    padding: 100px 0 100px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    color: rgb(155, 155, 155);
}

.yan-register-body-form {
    flex: 1;
    /*width: 100%;*/
    height: 450px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
}

.form-item {
    height: 100px;
    display: flex;
    justify-content: center;
    border: 2px solid #d9d9d9;
    border-radius: 15px;
    overflow: hidden;
    font-size: 32px;
}

input::-webkit-input-placeholder {
    color: rgb(155, 155, 155);
    opacity: 1;
}

.form-item input {
    height: 100%;
    color: #333;
    width: 100%;
    font-size: 35px;
    text-indent: 40px;
    border: none;
    background: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.form-submit {
    margin-top: 20px;
    overflow: hidden;
}

.form-submit button {
    height: 120px;
    width: 100%;
    background: #b7272d;
    font-size: 32px;
    color: white;
    border: none;
    border-radius: 15px;
}

.form-item input:focus {
    outline: none;
}

a {
    color: #0095ff;
    outline: none;
    text-decoration: none;
}

.tips {
    width: 100%;
    margin: 30px 0 30px;
    font-size: 32px;
    line-height: 50px;
}

/* 验证部分 */
.yan-register-verify {
    display: flex;
    align-items: center;
    border: 2px solid #d9d9d9;
    border-radius: 15px;
    padding-left: 35px;
}

.yan-register-verify input {
    flex-grow: 2;
    outline: none;
    border: none;
}

.yan-register-verify button {
    font-size: 32px;
    background: rgb(183, 39, 45);
    color: #fff;
    border: none;
    outline: none;
    padding: 25px;
    border-radius: 0 15px 15px 0;
}
</style>