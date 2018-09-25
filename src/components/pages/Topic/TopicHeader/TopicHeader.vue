<template>
    <div class="yan-topic">
		<div class="yan-topic-header">  
			<router-link tag="li" :to="{ path: '/topic/list', query: { type: index }}" class="yan-topin-header-box" v-for="(item, index) in header_items" 
				:key="index" :style="{'background-image': `url(${item.img})`}">
				<span class="yan-topic-header-title"> 
					{{item.item_name}}
				</span>
			</router-link>
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Topic Header',
            header_items: [{
                        item_name: '丁磊私物推荐',
						img: 'static/img/topicImage/topic-1.jpg',
                    },
                    {
                        item_name: '严选推荐',
						img: 'static/img/topicImage/topic-2.jpg',
                    },
                    {
                        item_name: '挑款师推荐',
						img: 'static/img/topicImage/topic-3.png',
                    },
                    {
                        item_name: '明星商品',
						img: 'static/img/topicImage/topic-4.png',
                    }]
        }
    },
}
</script>

<style scoped>
li{
	list-style: none;
}

.yan-topic{
	overflow: hidden;
	margin-bottom: 30px;
	background-color: #fff;
}
.yan-topic-header {
	padding: 20px 30px;
	overflow: auto;
    font-size: 35px;
	display: flex;
	justify-content: left;	
	align-items: center;
	flex-flow: row nowrap;
}
.yan-topin-header-box {
	/*position: relative;*/
	flex-shrink: 0;
	display: flex;
	align-items: center;
	margin-right: 25px;
	background-size: 100% 100%;
	border-radius: 10px;
	width: 350px;
	height: 200px;
}

.yan-topic-header-title{
	color: whitesmoke;
	text-align: center;
	flex: 1;
	/*position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 170px;*/
}

</style>

