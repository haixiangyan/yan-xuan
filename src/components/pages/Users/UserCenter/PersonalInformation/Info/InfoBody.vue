<template>
    <div class="info-body">
         <div class="img">
            <img :src="mountedUser.photo" alt="">
            <div id="dd" class="avatar-uploader" v-on:click="saveLocal">
                <input id="inputUpload" class="avatar-upload" v-on:change="uploadFile" type="file" name="file" required /> 
                <img  id="previewImg" src="" class="avatar" style="display:none">
                <i id="afterUploadImg" class="el-icon-plus avatar-uploader-icon" style="display: block">
                    <div class="avatar-prompt">更换头像</div>
                </i>
            </div>
        </div>
        <ul>
            <li class="list-item">
                <span>用户ID</span>
                <span>{{mountedUser.telephone}}</span>
            </li>
            <li class="list-item">
                <span>昵称</span>
                <input type="text" v-model="mountedUser.name">
            </li>
            <li class="list-item">
                <span>性别</span>
                <div class="list-item-sex">
                    <input type="radio" name="sex" value="man" v-model="mountedUser.gender" v-if="mountedUser.gender==='man'" checked>
                    <input type="radio" name="sex" value="man" v-model="mountedUser.gender" v-else>
                    <label for="man">男</label>
                    <input type="radio" name="sex" value="woman" v-model="mountedUser.gender" v-if="mountedUser.gender==='woman'" checked>
                    <input type="radio" name="sex" value="woman" v-model="mountedUser.gender" v-else>
                    <label for="woman">女</label>
                </div>
            </li>
        </ul>

        <div v-on:click="routeToInterest()" class="info-body-li">
            <div class="info-body-li-left">
                <span>感兴趣的分类</span>
            </div>
            <div class="info-body-li-right">
                <div><img class="render" src="static/img/loginImage/render.png" alt=""></div>
            </div>
        </div> 

        <div class="info-body-select">
            <div class="info-body-select-cancle" v-on:click="cancel()">
                取消
            </div>
            <div class="info-body-select-confirm" v-on:click="submit()">
                保存
            </div>
        </div>

        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <yan-modal v-show="isShowModal" :title="'已提交'"></yan-modal>
        </transition>
    </div>
</template> 
<script>
// 引入模态框
import YanModal from '@/components/commons/Modal/Modal';

export default {
    props: ['id'],
    data() {
        return{
            mountedUser : {
                "_id": "",
                "telephone": "",
                "password": "",
                "__v": 0,
                "address": [{ name: "", telephone: "", address: "" }],
                "interest": [""],
                "name": '',
                "gender": "",
                "photo": ""
            },
            isShowModal: false
        }
    },
    components: {
        YanModal
    },
    methods:{
        saveLocal(){
            document.getElementById('inputUpload').click();
        },
        routeToInterest(){
            this.$router.push({name: 'User Center Info Interest Category', params: { userId: this.id }});
        },
        cancel(){
            this.$router.push({name: 'User Center', params: { userId: this.id }});
        },
        submit(){
            let userForm = new FormData();
            userForm.append('telephone', this.mountedUser.telephone);
            // userForm.append('address', this.mountedUser.address);
            userForm.append('interest', this.mountedUser.interest);
            userForm.append('name', this.mountedUser.name);
            userForm.append('gender', this.mountedUser.gender);
            if(this.file){
                userForm.append('photo', this.file);
            }else{
                userForm.append('photo', new File([""], ''));
            }
            this.$http({
                method: 'patch',
                url: '/users/changeInformation',
                body: userForm,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                this.status = response.body.result;
                if(this.status === 'success'){
                    //this.$router.push({name: 'User Center', params: { userId: response.body.user.telephone }})
                    //提示成功
                    this.isShowModal = true;
                    setTimeout(() => {
                        this.isShowModal = false;
                        this.$router.push('/');
                    }, 1000)
                }
            }, response => {
                // error callback
            });
        },
        previewImg(tempFile){
            let reader = new FileReader();
            reader.readAsDataURL(tempFile);
            reader.onload = function()
            {
                document.getElementById('previewImg').style.display = 'block';
                document.getElementById('previewImg').setAttribute('src', reader.result);
                document.getElementById('afterUploadImg').style.display = 'none';
            };
            this.$store.commit('editFile', {
                file: tempFile
            });
        },
        uploadFile (e) {
            let tempFile = e.target.files[0];
            let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
            if (tempFile && supportedTypes.indexOf(tempFile.type) >= 0) {
                this.previewImg(tempFile);
            } else {
                alert('文件格式只支持：jpg、jpeg 和 png');
                this.clearFile();
            }
        }
    },
    computed:{
        user() {
            return this.$store.getters.user;
        },
        file() {
            return this.$store.getters.file;
        },
        historyFile(){
            return this.$store.getters.historyFile;
        },
        historyUser(){
            return this.$store.getters.historyUser;
        }
    },
    mounted(){

        this.mountedUser = JSON.parse(JSON.stringify(this.user))

        if(this.historyUser.telephone != ''){

            this.mountedUser.name = this.historyUser.name;
            this.mountedUser.gender = this.historyUser.gender;
            this.mountedUser.address = this.historyUser.address;
            this.$store.commit('cleanHistoryUser', {
                historyUser: null
            });
        }
        if(this.historyFile){
            this.previewImg(this.historyFile)
            this.$store.commit('editHistoryFile', {
                historyFile: null
            });
        }
    }
}
</script>

<style scoped>
.avatar-uploader .avatar-upload {
    width: 200px;
    height: 200px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    z-index: -1; 
  }
  /* .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  } */
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    position: relative;

  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    z-index: 3; 
  }

.avatar-uploader .avatar-prompt{
    position: absolute; 
    font-size: 32px;
    width: 200px;
    height: 200px;
     bottom: -40px;  
    z-index: 2;
}


 .info-body .img{
    margin-top: 116px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: white;
}

.info-body .img img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-right: 30px;
}
.info-body .img>img{
    margin-right: 30px;
}

ul{
    background-color: white;
}

ul li{
    font-size: 38px;
    border-bottom: 1px solid #d9d9d9;
    padding-left: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    min-height: 150px;
}

ul li span,input[type="text"]{
    display: block;
    height: 150px;
    line-height: 150px;
}

ul li span:first-child{
    flex: 1;
}
ul li span:last-child{
    flex: 3;
    color: #7f7f7f;
}
ul li input[type="text"]{
    flex: 3;
    color: #7f7f7f;
    border: none;
    font-size: 38px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
input:focus {
    outline:none;
}

ul li .list-item-sex{
    flex: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
}

ul li input[type="radio"]{
    width: 50px;
    height: 50px;
    display: block;
    margin-right: 25px;
}

ul li label[for="male"]{
    margin-right: 200px;
}

.info-body-li{
    background-color: white;
    height: 150px;
    margin-top: 30px;
    width: 90%;
    padding: 0 5% 0 5%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #f4f4f4;
}

.info-body-li .info-body-li-left{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

 .info-body-li-left span{
    font-size: 38px;
    color: #333;;
} 
.info-body-li .info-body-li-right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    width: 220px;
}

.info-body-li-right img.render{
    width: 60px;
    height: 60px;
} 
.info-body-select{
    position: fixed;
    bottom: 0;
    background-color: white;
    height: 150px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
}

.info-body-select div{
    flex: 1;
    text-align: center;
    font-size: 38px;
    line-height: 150px;
}

.info-body-select .info-body-select-confirm{
    background-color: #b4282d;
    color: white;
}
</style>