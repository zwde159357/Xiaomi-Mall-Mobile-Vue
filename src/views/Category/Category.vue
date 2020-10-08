<template>
	<div class="container">
		<div class="page-header"></div>
		<div class="page-content">
			<div class="left hide-scroll">
				<ul class="category-main">
					<li v-for="item in listMain" :key="item.id"
					    :class="{ active: item.id === activeId }"
					    @click="toggleId(item.id)">
						<span v-text="item.name"></span>
					</li>
				</ul>
			</div>
			<div class="right hide-scroll">
				<img :src="avatar" alt="" class="avatar"/>
				<p v-if="listSub.length === 0" class="empty">暂无相关商品</p>
				<ul v-else class="category-sub">
					<li v-for="item in listSub" :key="item.id">
						<router-link :to="`/list/${ item.id }`">
							<img :src="`${ item.avatar }`" alt="" />
							<span v-text="item.name"></span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="page-footer">
			<MiNav></MiNav>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MiNav from "../../components/MiNav";

	export default {
                name: "Category",
                components: {MiNav},
                data: function(){
                        return {
                                listMain: [],		// 一级分类的数据
                                activeId: 0,		// 当前激活的一级分类的id值
                                listSub: []			// 二级分类的数据
                        };
                },
                methods: {
                        toggleId(id){
                                this.activeId = id;
                                this.$http({
                                        method: 'get',
                                        url: '/category/list/' + id
                                })
                                        .then(data =>this.listSub = data);
                        }
                },
                computed: {
                        avatar: function() {
                                return this.activeId ? this.listMain.find(item => item.id === this.activeId).avatar : '';
                        }
                },
                created(){
                        // 发送ajax请求组件所需要的初始数据
                        this.$http({
                                method: 'get',
                                url: '/category/list/0'
                        })
                                .then(data =>{
                                        this.listMain = data;
                                        this.toggleId(data[0].id);
                                });	// catch绑定失败情况
                }
        }
</script>

<style lang="stylus" type="text/stylus" scoped>
	/* 页面框架布局样式 */
	.container
		width: 100%
		height: 100%
		display: flex
		flex-direction: column
		.page-header
			height: 45px
			flex-shrink: 0
		.page-footer
			height: 50px
			flex-shrink: 0
		.page-content
			flex-grow: 1
			border-top: 1px solid #b0b0b0
			border-bottom: 1px solid #b0b0b0
			display: flex
			overflow: hidden
			.left
				width: 95px
				flex-shrink: 0
				overflow: auto
				ul.category-main>li
					height: 50px
					display: flex
					justify-content: center
					align-items: center
					&>span
						margin: 0 10px
						line-height: 24px
						font-size: 13px
						color: #666666
						text-align: center
						flex-grow: 1
					&.active>span
						background-color: red
						border-radius: 12px
			.right
				flex-grow: 1
				border-left: 1px solid #b0b0b0
				background-color: #EEEEEE
				overflow: auto
				display: flex
				flex-direction: column
				align-items: center
				padding: 10px
				p.empty
					height: 40px
					line-height: 40px
					text-align: center
					border-radius: 10px
					margin-top: 10px
					font-size: 14px
					color: #999
					background-color: #fff
				img.avatar
					width: 100%
					border-radius: 10px
				ul.category-sub
					display: flex
					flex-wrap: wrap
					justify-content: center
					border-radius: 10px
					margin-top: 10px
					background-color: #fff
					li
						box-sizing: border-box
						padding: 10px 0
						a
							display: flex
							flex-direction: column
							justify-content: center
							align-items: center
							img
								width: 80px
							span
								font-size: 11px
								color: #666
</style>