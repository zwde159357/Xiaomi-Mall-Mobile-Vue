<template>
	<div class="page-container">
		<div class="page-header">
			<div class="page-header-top">
				<router-link to="/category" class="back iconfont icon-back"></router-link>
				<input type="text" class="search" />
				<i class="show-mode iconfont icon-card" @click="showWithCard = !showWithCard"></i>
			</div>
			<div class="page-header-order">
				<i class="order-dir iconfont" :class="`icon-sort-${ orderDir }`" @click="toggleOrderDir"></i>
				<span class="order-col" @click="toggleOrderCol('price')" :class="{ active: orderCol === 'price' }">价格</span>
				<span class="order-col" @click="toggleOrderCol('sale')" :class="{ active: orderCol === 'sale' }">销量</span>
				<span class="order-col" @click="toggleOrderCol('rate')" :class="{ active: orderCol === 'rate' }">评价</span>
			</div>
		</div>
		<div class="page-content hide-scroll scroll" ref="scroll">
			<div class="scroll-content">
				<ul class="product-list" :class="showWithCard ? 'card' : 'list'">
					<li v-for="item in list" :key="item.id">
						<router-link :to='`/detail/${ item.id }`'>
							<div class='image-wrapper'>
								<img :src='item.avatar ' />
							</div>
							<div class='content-wrapper'>
								<span class='name ellipsis' v-text="item.name"></span>
								<span class='brief ellipsis' v-text="item.brief"></span>
								<span class='price' v-text="`￥${ item.price }`"></span>
								<div class='bottom'>
									<span class='rate' v-text="`${ item.rate }条评论`"></span>
									<span class='sale' v-text="`销量：${ item.sale }件`"></span>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
				<p class="info" v-text="info"></p>
			</div>
		</div>
		<i class="rocket iconfont icon-top" v-show="rocketShow" @click="goToTop"></i>
	</div>
</template>

<script type="text/ecmascript-6">
	import IScroll from 'iscroll/build/iscroll-probe';
	import imagesLoaded from 'imagesloaded';

	export default {
	        name: "List",
		data: function() {
	                return {
	                        cid: 0,                            // 当前查看商品的id
		                name: '',                       // 要搜索的关键字
		                orderDir: 'asc',             // 表示当前排序方向
		                orderCol: 'price',         // 表示当前排序的列
				pageSize: 6,                 // 每次向服务器拿出6条商品记录
		                isLoading: false,          // 标识当前是否处于ajax交互状态
                                hasMore: true,            // 标识按当前条件查找商品还有没有更多
		                list: [],                          // 保存当前显示的商品数据
		                rocketShow: false,         // 标识返回顶部的火箭是否显示
		                showWithCard: false,    // 是否以卡片形式展示
                                isTriggerLoadMore: false, // 标识是否触发了上拉加载更多
	                };
		},
		computed: {
	                // computed注重的是监听一个或多个数据的变化“得到一个新的结果”
	                info: function() {
	                        if(this.isLoading) return "加载中..";
				else if(this.list.length === 0) return "暂无相关商品，敬请期待..";
				else if(this.isTriggerLoadMore)  return "放手立即加载";
				else if(this.hasMore) return "上拉加载更多..";
				else return "已到达底部..";
	                }
		},
		activated() {
	                if(this.cid === 0 || this.cid !== parseInt(this.$route.params.cid)) {
	                        this.cid = parseInt(this.$route.params.cid);
                                this._updateProductList();
	                }
		},
		methods: {
	                // 当函数不对模板公开，只在组件中调用，用_
                        _updateProductList(isLoadMore = false) {
                                this.isLoading = true;			// 进入loading状态
			        if(!isLoadMore) {
			                if(this.scroll) this.scroll.scrollTo(0,0,0);
			                this.rocketShow = false; // 根据是否加载更多来处理ul.product-list
					this.list = [];
			         }
			        setTimeout(() => {
			                this.$http({
			                        method: 'post',
			                        url: '/product/list',
			                        data:
                                                        {
                                                                name: this.name,
                                                                cid: this.cid,				// ES6技术，键值对简写
                                                                orderCol: this.orderCol,
                                                                orderDir: this.orderDir,
                                                                begin: this.list.length,
                                                                pageSize: this.pageSize
                                                        }
			                })
                                                .then(data => {
                                                        this.isLoading = false;		// 结束loading状态
                                                        this.hasMore = data.length === this.pageSize;	//更新全局变量hasMore
                                                        this.list = this.list.concat(data);       // 更新dom需要时间
                                                        this.$nextTick(() => this._initOrRefreshScroll() );     // 初始化或更新滚动对象
                                                });
			        }, 800);
	                },
			toggleOrderDir() {
				if(this.isLoading) {
				        alert('您的操作太频繁了..');
				        return;
				}
				this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc';
				this._updateProductList();
			},
			toggleOrderCol(order) {
                                if(this.isLoading) {
                                        alert('您的操作太频繁了..');
                                        return;
                                }
                                if(this.orderCol === order) return;
                                this.orderCol = order;
                                this._updateProductList();
			},
                        _initOrRefreshScroll() {
                                imagesLoaded(this.$refs.scroll, () => {
                                       this.$nextTick(() => {
                                               if(!this.scroll) {
                                                       this.scroll = new IScroll(this.$refs.scroll, {
                                                               deceleration: 0.003,
                                                               bounce: false,
                                                               probeType: 2,
                                                               click: true
                                                       });
                                                       this.scroll.on('scroll', () => {
                                                               this.rocketShow = Math.abs(this.scroll.y) >= 100;
								// 如果可以加载更多且当前没有处于loading状态
                                                               if(this.hasMore && !this.isLoading)
                                                                      // 如果达到上拉加载更多的临界点
	                                                               this.isTriggerLoadMore = this.scroll.y - this.scroll.maxScrollY === 0;

                                                       });
                                                       this.scroll.on('scrollEnd', () => {
                                                               if(this.isTriggerLoadMore) {
                                                                       this.isTriggerLoadMore = false;
                                                                       this._updateProductList(true);
                                                               }
                                                       });
                                               }
                                               else this.scroll.refresh();
                                       });
                                });
                        },
			goToTop() {
                                if(this.scroll) this.scroll.scrollTo(0,0,400);
                                this.rocketShow = false;
			}
		},
		watch: {
	                // watch更注重的是根据某一个数据的变化“做一系列的操作”
			// 监听指定数据的变化，可以监听data,props,computed,$route路由中的数据
	                showWithCard: function() {
				this.$nextTick(() => this._initOrRefreshScroll());
	                }
		},
		beforeDestroy() {
	                if(this.scroll) {       // 销毁iscroll对象，释放一定内存
	                        this.scroll.destroy();
	                        this.scroll = null;
	                }
		}
	};
</script>

<style scoped>
	.page-container {
		width: 100%; height: 100%;
		display: flex;
		flex-direction: column;
		background-color: rgba(244,244,244);
		overflow: hidden;
	}

	.page-header {
		flex-shrink: 0;
	}

	.page-header>.page-header-top {
		height: 45px;
		line-height: 45px;
	}

	.page-header>.page-header-top>a.back {
		display: inline-block;
		vertical-align: middle;
		font-size: 24px;
		margin: 0 10px;
	}

	.page-header>.page-header-top>input.search {
		vertical-align: middle;
		width: 75%;
		height: 32px;
		border-radius: 10px;
		background-color: white;
	}

	.page-header>.page-header-top>i.show-mode {
		display: inline-block;
		vertical-align: middle;
		margin: 0 10px;
	}

	.page-header>.page-header-order {
		height: 36px;
		line-height: 36px;
	}

	.page-header>.page-header-order>i {
		margin: 0 14px;
	}

	.page-header>.page-header-order>span {
		margin: 0 32px;
		font-size: 14px;
	}

	.page-header>.page-header-order>span.active {
		color: red;
	}

	.page-content {
		overflow: hidden;
		flex-grow: 1;
		background-color: rgba(200,200,200);
		touch-action: pan-y;
	}

	.page-content>.scroll-content {
		overflow: auto;
	}

	.page-content>.scroll-content>ul.product-list.list {
		display: flex;
		flex-direction: column;
	}

	.page-content>.scroll-content>ul.product-list.list>li {
		height: 146px;
		box-sizing: border-box;
		padding: 10px;
		display: flex;
		background-color: white;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a {
		display: flex;
		max-width: 100%;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.image-wrapper {
		width: 126px;
		flex-shrink: 0;
		align-self: center;
		background-color: rgba(250,250,250);
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.image-wrapper>img {
		width: 100%;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper>span {
		flex-grow: 1;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper>span.name {
		color: black;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper>span.brief {
		color: #666666;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper>span.price {
		color: #FF0000;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper>.bottom {
		font-size: 11px;
		color: #666666;
	}

	.page-content>.scroll-content>ul.product-list.list>li>a>.content-wrapper>.bottom>span {
		margin-right: 10px;
	}

	.page-content>.scroll-content>ul.product-list.card {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 5px;
		box-sizing: border-box;
	}

	.page-content>.scroll-content>ul.product-list.card>li {
		flex-shrink: 0;
		width: 50%;
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: white;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.image-wrapper {
		flex-shrink: 0;
		height: 138px;
		margin-top: 5px;
		align-self: center;
		background-color: rgba(250,250,250);
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.image-wrapper>img {
		width: 138px;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper>span {
		margin-left: 5px;
		flex-grow: 1;
		font-size: 14px;
		margin-bottom: 5px;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper>span.name {
		color: black;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper>span.brief {
		color: #666666;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper>span.price {
		color: #FF0000;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper>.bottom {
		margin-left: 5px;
		margin-bottom: 5px;
		font-size: 11px;
		color: #666666;
	}

	.page-content>.scroll-content>ul.product-list.card>li>a>.content-wrapper>.bottom>span {
		margin-right: 10px;
	}

	.page-content>.scroll-content>p {
		text-align: center;
		line-height: 36px;
		font-size: 16px;
		background-color: rgba(255,255,255);
		margin-top: 20px;
		color: grey;
	}

	/* 返回顶部 */
	i.rocket {
		position: fixed;
		bottom: 20px;
		right: 20px;
		height: 50px;
		width: 50px;
		background-color: rgba(0,0,0,0.5);
		z-index: 999;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		color: white;
	}
</style>