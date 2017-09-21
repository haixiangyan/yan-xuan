<template>
  <div class="yan-home-footer">
    <!--使用不同版本来查看网页-->
    <div class="yan-version-btns">
        <a class="yan-version-btn left-btn" href="/">下载APP</a>

        <a class="yan-version-btn" href="/">电脑版</a>
    </div>

    <div class="yan-copyright">
        <p>网易公司版权所有 © 1997-2017</p>

        <p>食品经营许可证：JY13301080111719</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.yan-home-footer {
    padding: 60px 20px 30px;
    background: rgb(65, 65, 65);
}

/*版本按钮*/
.yan-version-btns {
    display: flex;
    justify-content: center;;
    align-items: center;
}

.yan-version-btn {
    height: 80px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 32px;
    border-radius: 6px;
    border: 1px solid rgb(153, 153, 153);
}

.left-btn {
    margin-right: 70px;
}

/*版权*/
.yan-copyright {
    margin-top: 50px;
}

.yan-copyright p {
    font-size: 32px;
    line-height: 40px;
    color: rgb(153, 153, 153);
    text-align: center;
}
</style>
