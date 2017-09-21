<template>
    <div class="yan-search-wrapper">
        <!-- 搜索框头部 -->
        <div class="yan-search-header">
            <!-- 回到首页 -->
            <router-link v-show="isShowHome" class="yan-search-home" to="/">
                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            </router-link>
            <!-- 搜索框 -->
            <yan-search-input v-on:getSuggest="getSuggest" v-on:getResult="getResult" class="yan-search-input"></yan-search-input>
            <!-- 取消按钮 -->
             <router-link class="yan-search-cancel" @click.prevent="back" to="/">
                取消
            </router-link>    
        </div>
    
        <!-- 热门的搜索 -->
        <div v-show="isShowSuggest" class="yan-hot-search-wrapper">
            <yan-hot-search class="yan-hot-search"></yan-hot-search>
        </div>  
    
        <!-- 搜索建议 -->
        <div v-show="isShowSuggestList" class="yan-search-suggest-wrapper">
            <div class="yan-search-suggest-inner">
                <yan-search-suggest v-on:getResult="getResult" class="yan-search-suggest" v-for="(suggest, index) in searchSuggest" :key="index" :suggest="suggest"></yan-search-suggest> 
            </div>
        </div>

        <!-- 搜索结果 -->
        <div v-if="isShowResult" class="yan-search-result-wrapper">
            <yan-search-result :result="result"></yan-search-result>
        </div>
    </div>
</template>

<script>
// 引入搜索框组件
import YanSearchInput from '@/components/pages/Search/SearchInput/SearchInput';
// 引入热门的搜索组件
import YanHotSearch from '@/components/pages/Search/HotSearch/HotSearch';
// 引入搜索建议组件
import YanSearchSuggest from '@/components/pages/Search/SearchSuggest/SearchSuggest';
// 引入入搜索结果组件
import YanSearchResult from '@/components/pages/Search/SearchResult/SearchResult';

export default {
    data() {
        return {
            searchSuggest: [],
            isShowSuggest: true,
            isShowHome: false,
            isShowResult: false,
            isShowSuggestList: false,
            result: {}
        }
    },
    methods: {
        getSuggest(suggest) {
            // 判断是否为空
            if (suggest.length === 0) {
                // 隐藏建议列表
                this.isShowSuggestList = false;
                this.isShowResult = false;                
                // 显示建议标签
                this.isShowSuggest = true;
            }
            else {
                this.searchSuggest = suggest;
                // 显示建议列表
                this.isShowSuggestList = true;
                // 隐藏建议标签
                this.isShowSuggest = false;
            }
        },
        getResult(result) {
            this.result = result;
            // 隐藏热门推荐
            this.isShowSuggest = false;
            this.isShowSuggestList = false;
            // 显示结果
            this.isShowResult = true;
        },
        back() {
            this.$router.go(-1);
        }
    },
    components: {
        YanSearchInput,
        YanHotSearch,
        YanSearchSuggest,
        YanSearchResult
    }
}
</script>

<style scoped>
/* 回到首页 */
.yan-search-home i {
    margin-right: 20px;
    color: #666;
}

/* 取消 */
.yan-search-cancel {
    margin-left: 20px;
}

.yan-search-wrapper {
    background: #f4f4f4;
}

/* 搜索框头部 */
.yan-search-header {
    padding: 20px 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
}

.yan-search-input {
    flex-grow: 1;
}

/* 热门搜索 */
.yan-hot-search {
    padding: 0 35px 30px;
    border-top: 1px solid rgb(200, 200, 200);
}

/* 搜索建议 */
.yan-search-suggest-wrapper {
    position: relative;
    background: #fff;
    border-top: 1px solid rgb(200, 200, 200);
}

.yan-search-suggest-inner {
    position: absolute;
    padding-left: 35px;    
    top: 0;
    left: 0; 
    right: 0;
    z-index: 4;
    background: #fff;
}
</style>
