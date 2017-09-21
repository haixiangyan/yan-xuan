<template>
    <div class="yan-chat">
        <!-- 头部 -->
        <yan-chat-header></yan-chat-header>
    
        <!-- 聊天内容 -->
        <div class="chat-content">
            <div v-for="(message, index) in chatContent" :key="index">
                <yan-robot-chat v-if="!message.isMe" :message="message"></yan-robot-chat>
                <yan-my-chat v-if="message.isMe" :message="message"></yan-my-chat>
            </div>
        </div>
    
        <!-- 脚注 -->
        <yan-chat-footer v-on:send="send"></yan-chat-footer>
    </div>
</template>

<script>
// 引入聊天的头部
import YanChatHeader from '@/components/pages/Chat/Header/Header';
// 引入机器人的聊天组件
import YanRobotChat from '@/components/pages/Chat/RobotChat/RobotChat';
// 引入我的聊天组件
import YanMyChat from '@/components/pages/Chat/MyChat/MyChat';
// 引入聊天的脚注
import YanChatFooter from '@/components/pages/Chat/Footer/Footer';

export default {
    data() {
        return {
            socket: {}
        }
    },
    computed: {
        chatContent() {
            return this.$store.getters.chatContent;
        }
    },
    components: {
        YanChatHeader,
        YanRobotChat,
        YanMyChat,
        YanChatFooter
    },
    methods: {
        send(text) {
            // 将内容添加到聊天记录中
            this.$store.commit('setChatContent', {
                chatContent: {
                    content: text,
                    time: new Date().getTime(),
                    isMe: true
                }
            });
        }
    }
}
</script>

<style scoped>
.chat-content {
    position: fixed;
    top: 126px;
    left: 0;
    right: 0;
    bottom: 140px;
    padding: 35px 45px;
    background: rgb(250, 250, 250);
    overflow: auto;
}
</style>
