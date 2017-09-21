<template>
    <div class="yan-search-result">
        <!-- 结果头部 -->
        <div class="yan-result-header">
            <!-- 综合排序 -->
            <div @click="sortByDefault" :class="['yan-filter-item', {'is-active': selected === 1}]">
                综合
            </div>

            <!-- 价格排序 -->
            <div @click="sortByPrice" :class="['yan-filter-item', {'is-active': (selected === 2 || selected === 3)}]">
                价格
                <div class="yan-price-filter-label">
                    <i :class="['fa fa-angle-up', {'is-active': selected === 2}]" aria-hidden="true"></i>
                    <i :class="['fa fa-angle-down', {'is-active': selected === 3}]" aria-hidden="true"></i>
                </div>
            </div>

            <!-- 分类排序 -->
            <div @click="showCategory" :class="['yan-filter-item', {'is-active': selected === 4}]">
                分类
            </div>
        </div>

        <!-- 结果内容 -->
        <div class="yan-result-content">
            <!-- 结果的分类 -->
             <div class="yan-result-category-wrapper">
                 <div v-show="isShowCategory" class="yan-result-category"> 
                     <yan-search-category class="yan-result-category-item" v-for="(category, index) in categories" :key="index" :hotLabel="category"></yan-search-category> 
                 </div> 
            </div> 

            <div class="yan-search-catalog-wrapper">
                <yan-search-catalog class="yan-search-catalog" :catalog="filterResult" :more="filterResult.data.length % 2 !== 0"></yan-search-catalog>
            </div>
        </div>
    </div>
</template>

<script>
// 引入热搜的标签
import YanSearchCategory from '@/components/pages/Search/HotSearch/HotSearchItem/HotSearchItem';
// 引入商品的组件
import YanSearchCatalog from '@/components/pages/Home/Catalog/Catalog';

export default {
    props: ['result'],
    data() {
        return {
            selected: 1,
            selectedCategory: -1,
            categories: [
                {
                    title: '全部',
                    type: 0
                },
                {
                    title: '居家',
                    type: 1
                },
                {
                    title: '配件',
                    type: 1
                },
                {
                    title: '婴童',
                    type: 1
                },
                {
                    title: '杂货',
                    type: 1
                },
                {
                    title: '服装',
                    type: 1
                },
                {
                    title: '餐厨',
                    type: 1
                }
            ],
            isShowCategory: false,
        }
    },
    computed: {
        filterResult() {
            // 复制数组，用于排序
            let tempResult = {
                data: Array.from(this.result.data)
            }
            
            switch(this.selected) {
                case 1: // 默认排序
                    return tempResult;
                case 2: // 升序
                    // 注意此处显示是降序，但是为了显示，此数组做的是升序
                    tempResult.data.sort((prevGood, nextGood) => {
                        return nextGood.price - prevGood.price;
                    });
                    return tempResult;
                case 3: // 降序
                    // 注意此处显示是升序，但是为了显示，此数组做的是降序
                    tempResult.data.sort((prevGood, nextGood) => {
                        return prevGood.price - nextGood.price;
                    });
                    return tempResult;
                case 4: // 按分类来排序
                    return tempResult;
                default:
                    return ;
            }
        }
    },
    methods: {
        // 以默认的方法来排序
        sortByDefault() {
            // 显示指定的颜色
            this.selected = 1;
        },
        // 以价格的方法来排序
        sortByPrice() {
            let previous = this.selected;

            if (previous === 2) {
                // 降序
                this.selected = 3;
            }
            else {
                // 升序
                this.selected = 2;
            }
        },
        // 显示分类
        showCategory() {
            this.selected = 4;
            this.isShowCategory = !this.isShowCategory;
        }
    },
    components: {
        YanSearchCategory,
        YanSearchCatalog
    }
}
</script>

<style scoped>
.yan-search-result {
    background: #fff;
}

/* 头部 */
.yan-result-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

/* 过滤子项 */
.yan-filter-item {
    width: 250px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.yan-price-filter-label {
    margin-left: 20px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.is-active {
    color: rgb(180, 40, 45);
}

/* 结果的内容 */
.yan-result-content {
    border-top: 1px solid rgb(200, 200, 200);    
}

/* 分类显示 */
.yan-result-category-wrapper {
    position: relative;
    z-index: 3;
}

.yan-result-category {
     position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    padding-top: 50px;
    padding-right: 50px;
    background: #fff;
}

/* 结果分类的子项 */
.yan-result-category-item {
    margin: 0 0 50px 50px;
}

/* 商品的展示 */
.yan-search-catalog-wrapper {
    padding-top: 30px;
    border-top: 1px solid rgb(200, 200, 200);       
}
</style>
