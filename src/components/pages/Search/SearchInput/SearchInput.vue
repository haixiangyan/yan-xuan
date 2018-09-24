<template>
    <div class="yan-search-input">
        <!-- 搜索图标 -->
        <div class="yan-search-input-wrapper">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input @keyup.enter="search" v-model="keyword" type="text" placeholder="Levis制造商平角内裤仅59元2条">
            <span @click="removeKeyword" v-show="isShowCancel"><i class="fa fa-times" aria-hidden="true"></i></span>
        </div>
    </div>
</template>

<script>
// 引入搜索的资源
import SearchRes from '@/components/pages/Search/SearchRes/SearchRes.json';

export default {
    data() {
        return {
            keyword: '',
            isShowCancel: false,
            searchRes: SearchRes
        }
    },
    watch: {
        keyword: function (newKeyword) {
            let suggest = [];
            this.isShowCancel = false;

            if (newKeyword.length !== 0) {
                // 显示按钮
                this.isShowCancel = true;

                // 发送请求获取结果内容
                suggest = this.suggest(newKeyword);
            }

            // 将建议返回到父组件
            this.$emit('getSuggest', suggest);
        }
    },
    methods: {
        removeKeyword() {
            this.keyword = '';
        },
        // 根据关键字来搜索推荐内容
        suggest(keyword) {
            let suggest = [];

            this.searchRes.forEach((elem) => {
                if (elem.category.indexOf(keyword) !== -1) {
                    suggest =  elem.subCategory;
                }
            });

            // 如果找不到结果则返回空
            return suggest;
        },
        // 根据关键字来搜索内容
        search() {
            let result = {
                data: []
            };

            // 发送请求获取搜索内容
            this.$http({
                method: 'post',
                url: `/goods/search`,
                body: {
                    key: this.keyword
                }
            })
            .then((res) => {
                result.data = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });

            // 将结果返回到父组件
            this.$emit('getResult', result);
        }
    }
}
</script>

<style scoped>
.yan-search-input {
    display: flex;
    align-items: center;
    background: #fff;
}

/* 图标 */
.yan-search-input-wrapper {
    width: 100%;
    padding: 10px 0 10px 25px;
    display: inline-block;
    background: rgb(237, 237, 237);
    border-radius: 10px;
}

.yan-search-input-wrapper i {
    color: #666;
}

/* 输入框 */
.yan-search-input input {
    display: inline-block; 
    width: 80%;
    outline: none;
    background: rgb(237, 237, 237);
    border: none;
}

</style>

