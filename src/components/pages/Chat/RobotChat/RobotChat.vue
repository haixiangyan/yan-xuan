<template>
    <div class="yan-robot-chat">
        <!-- 头像 -->
        <div class="avatar">
            <img src="static/img/chat/robot.png" alt="robot">
        </div>

        <!-- 聊天内容 -->
        <div class="chat-content">
            <div class="arrow"></div>
            <p>{{message.content}}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
.yan-robot-chat {
    padding: 25px 0;
    display: flex;
    align-items: center;
}

/* 头像 */
.avatar {
    display: inline-flex;
    padding-right: 25px;
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
    display: inline-flex;
    border: 2px solid rgb(204, 213, 216);
    border-radius: 10px;
    background: #f4f4f4;
}

.arrow {
    position: absolute;
    top: 18px;
    left: -24px;
    border-right: #f4f4f4;
    width: 25px;
    height: 25px;
    background: linear-gradient(45deg, rgb(250, 250, 250) 60%, rgb(204, 213, 216) 75%,  #f4f4f4 0) bottom left,
                linear-gradient(135deg, rgb(250, 250, 250) 60%, rgb(204, 213, 216) 75%, #f4f4f4 0) top left;
    background-size: 100% 50%;
    background-repeat: no-repeat;
}

.arrow::before {
    display: block;
    content: '';
}

.chat-content {
    margin-left: 15px;
}
</style>
