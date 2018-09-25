<template>
  <div v-show="curNum !== totalNum" class="yan-empty-images">
    <form class="upload" enctype="multipart/form-data" ref="uploadForm">
        <input v-for="(cur, index) in totalNum" 
            v-show="curNum+1 === cur"
            ref="uploadInput" 
            :key="index"
            @change="selectFile" 
            name="picture"
            type="file">
    </form>

    <img src="static/icons/video.png" alt="video">

    <span v-show="curNum === 0">添加图片</span>

    <span v-show="0 < curNum && curNum < totalNum">
        {{`${curNum} / ${totalNum}`}}
    </span>
  </div>
</template>

<script>
export default {
    props: ['curNum', 'totalNum'],
    methods: {
        selectFile(event) {
            // 获取表单的内容
            let fileFormData = new FormData(this.$refs.uploadForm);
            let file = event.target.files[0];
            this.$emit('selectSrc', {
                src: window.URL.createObjectURL(file),
                fileFormData: fileFormData
            });
        }
    }
}
</script>

<style scoped>
.upload {
    opacity: 0; 
    position: absolute;
    width: 150px;
    height: 150px;
}

.upload input {
    width: 100%;
    height: 100%;
}

.yan-empty-images {
    position: relative;
    display: inline-flex;
    width: 150px;
    height: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #999;;
}

.yan-empty-images img {
    width: 70px;
    margin-bottom: 10px;
}

.yan-empty-images span {
    color: #999;
    font-size: 24px;
}
</style>
