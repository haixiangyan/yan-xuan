<template>
    <div class="yan-my-chat">

        <div></div>
    
        <div>
            <!-- 聊天内容 -->
            <div class="chat-content">
                <div class="arrow"></div>
                <p>{{message.content}}</p>
            </div>
    
            <!-- 头像 -->
            <div class="avatar">
                <img src="static/img/chat/robot.png" alt="my">
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
.yan-my-chat {
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.yan-my-chat div {
    display: flex;
    align-items: center;
}

/* 头像 */
.avatar {
    display: inline-flex;
    padding-left: 25px;
}

.avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}


/* 聊天内容 */

.chat-content {
    position: relative;
    padding: 35px;
    margin-left: 15px;
    display: inline-flex;
    border-radius: 10px;
    background: rgb(171, 43, 43);
}

.chat-content p {
    color: #fff;
}

.arrow {
    position: absolute;
    top: 18px;
    right: -24px;
    border-right: #f4f4f4;
    width: 25px;
    height: 25px;
    background: linear-gradient(-45deg, rgb(250, 250, 250) 60%, rgb(171, 43, 43) 0) bottom right,
    linear-gradient(-135deg, rgb(250, 250, 250) 60%, rgb(171, 43, 43) 0) top right;
    background-size: 100% 50%;
    background-repeat: no-repeat;
}

.arrow::before {
    display: block;
    content: '';
}
</style>
