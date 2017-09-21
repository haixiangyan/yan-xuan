<template>
    <div class="yan-navbar-wrapper">
        <!--搜索框头部-->
        <yan-search-header></yan-search-header>
    
        <div class="yan-navbar-bar">
            <!--导航条部分-->
            <div v-for="(item, index) in catalog" :key="index" :class="[{'is-active':  selectedIndex === index}, 'yan-navbar-item']" @click="changeIndex(index)">
                <router-link :to="item.url">
                    <span>{{item.name}}</span>
                </router-link>
            </div>
        </div>
    
    </div>
</template>

<script>
// 引入搜索框
import YanSearchHeader from '@/components/commons/SearchHeader/SearchHeader';

export default {
    data() {
        return {
            yanNavbarItem: 'yan-navbar-item',
            // 分类
            catalog: [
                {
                    name: '推荐',
                    url: '/home/recommend'
                },
                {
                    name: '居家',
                    url: '/home/household'
                },
                {
                    name: '餐厨',
                    url: '/home/cook'
                },
                {
                    name: '配件',
                    url: '/home/accessories'
                },
                {
                    name: '服装',
                    url: '/home/clothes'
                },
                {
                    name: '洗护',
                    url: '/home/care'
                },
                {
                    name: '婴童',
                    url: '/home/children'
                },
                {
                    name: '杂货',
                    url: '/home/groceries'
                },
                {
                    name: '饮食',
                    url: '/home/food'
                },
                {
                    name: '志趣',
                    url: '/home/interest'
                }
            ]
        }
    },
    computed: {
        selectedIndex() {
            return this.$store.getters.navbarIndex;
        }
    },
    components: {
        YanSearchHeader,
    },
    methods: {
        changeIndex(index) {
            this.selectedIndex = index;
        }
    }
}
</script>

<style scoped>
/*外围样式*/
.yan-navbar-wrapper {
    background: #fff;
}

/*导航条样式*/
.yan-navbar-bar {
    padding: 0 30px;    
    overflow: auto;
    white-space: nowrap;
    border-bottom: 2px solid #ddd;
    background: #fff;
}

/*选中的样式*/
.is-active {
    margin: 0;
    border-bottom: 4px solid rgb(180, 40, 45);
}

.is-active span {
    color: rgb(180, 40, 45);
}

/*导航栏的项目样式*/
.yan-navbar-item {
    display: inline-block;
    width: 140px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
}

.yan-navbar-item span {
    line-height: 75px;
}
</style>
