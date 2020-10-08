<template>
	<div class="container">
		<div class="page-container" v-show="id === 1">
			<div class="page-top" :class="{ active: showTop}">
				<div class="icon-myback">
					<img src="../../assets/images/top-back.png" alt="" class="top-back"
					     :class="{ active: !showTop}" @click="$router.back()"/>
					<img src="../../assets/images/back.png" alt="" class="back"
					     :class="{ active: showTop}" @click="$router.back()" />
				</div>
				<ul class="title" >
					<li :class="{ active: index === 1 }"   @click="goToWhere(1)" >商品</li>
					<li :class="{ active: index === 2 }"  @click="goToWhere(2)">评价</li>
					<li :class="{ active: index === 3 }"  @click="goToWhere(3)">详情</li>
					<li :class="{ active: index === 4 }"  @click="goToWhere(4)">推荐</li>
				</ul>
				<div class="icon-ellipsis">
					<img src="../../assets/images/top-ellipsis3.png" alt="" class="top-ellipsis" :class="{ active: !showTop}"/>
					<img src="../../assets/images/ellipsis.png" alt="" class="ellipsis" :class="{ active: showTop}" />
				</div>
			</div>
			<div class="title" v-show="showTitle">
				<ul class="title-detail">
					<li class="active">概述</li>
					<li>参数</li>
					<li>安装服务</li>
					<li>常见问题</li>
				</ul>
			</div>
			<div class="page-content hide-scroll" ref="scroll">
				<div class="detail">
					<div class="banner part" ref="banner">
						<MiBanner :arr="bannerImgs"></MiBanner>
					</div>
					<div class="detail-price">
						<span class="price" v-text="`￥${product.price}`"></span>
						<img src="../../assets/images/collection.png" alt="" />
					</div>
					<div class="detail-name">
						<span class="icon-small-rice">小米自营</span>
						<span class="name" v-text="product.name"></span>
					</div>
					<div class="detail-brief">
						<span class="brief" v-text="product.brief"></span>
					</div>
					<div class="detail-introduce">
						<span class="introduce">小米空调大放价！抽奖赢小米65英寸电视！爆款直降1000元！</span>
					</div>
					<div class="detail-buy">
						<span class="now-buy">立即抢购 &gt; &gt; &gt;</span>
					</div>
					<div class="detail-null"></div>
					<div class="detail-red">
						<img src="../../assets/images/red.png" alt="" />
					</div>
					<div class="detail-null"></div>
					<div class="detail-num">
						<span class="title">已选</span>
						<span class="content" v-text="`${ count }件`"></span>
						<i class="iconfont icon-arrow-right" @click="isPop = true"></i>
					</div>
					<div class="detail-address">
						<span class="title">送至</span>
						<span class="content">北京市 海淀区</span>
						<i class="iconfont icon-arrow-right"></i>
					</div>
					<div class="detail-service">
						<span class="title">服务</span>
						<span class="content">
							<i class="iconfont icon-allright"></i>包邮
							<i class="iconfont icon-allright"></i>小米自营
							<i class="iconfont icon-allright"></i>7天无理由
						</span>
						<i class="iconfont icon-arrow-right"></i>
					</div>
					<div class="detail-null"></div>
					<div class="detail-ranking">
						55-60英寸好评榜排名第二名
					</div>
					<div class="detail-null"></div>
					<div class="detail-evalute part" ref="evalute">
						<div class="user-evalute">
							<div class="top">
								<span class="left">用户评价(3275)</span>
								<span class="right">96%满意<i class="iconfont icon-arrow-right"></i></span>
							</div>
							<div class="bottom">
								<span>有图(280)</span>
								<span>追评(6)</span>
								<span>好评(581)</span>
								<span>性价比高(204)</span>
							</div>
						</div>
						<div class="user-detail hide-scroll">
							<div class="wrapper">
								<ul class="evalution">
									<li>
										<router-link to="">
											<img src="../../assets/images/user1.jpg" alt="">
										</router-link>
									</li>
									<li>
										<router-link to="">
											<img src="../../assets/images/user2.jpg" alt="">
										</router-link>
									</li>
									<li>
										<router-link to="">
											<img src="../../assets/images/user3.jpg" alt="">
										</router-link>
									</li>
									<li>
										<router-link to="">
											<img src="../../assets/images/user4.jpg" alt="">
										</router-link>
									</li>
									<li>
										<router-link to="">
											<img src="../../assets/images/user5.jpg" alt="">
										</router-link>
									</li>
								</ul>
								<span class="more">查看更多评价</span>
							</div>
						</div>
					</div>
					<div class="detail-null"></div>
					<div class="detail-ask">
						<span class="ask-us">暂无问答</span>
						<div class="wrapper">
							<img src="../../assets/images/ask.png" alt="" />
							<span class="text">好不好，问大家</span>
							<span class="go-to-ask">去提问</span>
						</div>
					</div>
					<div class="detail-null"></div>
					<div class="detail-title part" ref="detail">
						<ul class="title-detail">
							<li class="active">概述</li>
							<li>参数</li>
							<li>安装服务</li>
							<li>常见问题</li>
						</ul>
					</div>
					<div class="detail-images">
						<ul class="images">
							<li v-for="item in otherImgs" :key="item">
								<img :src="item" alt="" />
							</li>
						</ul>
					</div>
					<div class="detail-null"></div>
					<div class="detail-other part" ref="other">
						<span class="other">您可能还喜欢</span>
					</div>
					<div class="detail-recommend">
						<ul>
							<li>
								<router-link to="/detail/1">
									<img src="../../assets/images/product/01.png" alt="">
									<span class="name">小米电视4A 55英寸</span>
									<span class="brief">极致超窄边框，4K超高清</span>
									<span class="price">￥1599</span>
								</router-link>
							</li>
							<li>
								<router-link to="/detail/2">
									<img src="../../assets/images/product/02.png" alt="">
									<span class="name">小米电视4C 32英寸</span>
									<span class="brief">卧室推荐，人工智能系统</span>
									<span class="price">￥599</span>
								</router-link>
							</li>
							<li>
								<router-link to="/detail/3">
									<img src="../../assets/images/product/03.png" alt="">
									<span class="name">小米电视4A 60英寸</span>
									<span class="brief">4K HDR 超高清/ 人工智能语音</span>
									<span class="price">￥1899</span>
								</router-link>
							</li>
							<li>
								<router-link to="/detail/4">
									<img src="../../assets/images/product/04.png" alt="">
									<span class="name">小米电视4C 43英寸</span>
									<span class="brief">人工智能，钢琴烤漆，杜比音效</span>
									<span class="price">￥999</span>
								</router-link>
							</li>
							<li>
								<router-link to="/detail/5">
									<img src="../../assets/images/product/05.png" alt="">
									<span class="name">小米电视4A 70英寸</span>
									<span class="brief">人工智能语音系统，4K HDR，内置小爱同学，海量片源</span>
									<span class="price">￥2999</span>
								</router-link>
							</li>
							<li>
								<router-link to="/detail/6">
									<img src="../../assets/images/product/06.png" alt="">
									<span class="name">小米全面屏电视55英寸</span>
									<span class="brief">全面屏，内置小爱同学，64位四核处理器</span>
									<span class="price">￥1599</span>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="page-bottom">
				<div class="small-rice">
					<img src="../../assets/images/small-rice.png" alt="" />
					<span>小米</span>
				</div>
				<div class="cart" @click="goToCart">
					<img src="../../assets/images/cart.png" alt="" />
					<span class="cart">购物车</span>
					<span class="count" v-text="cartCount || 0" v-show="$cookies.get('token')"></span>
				</div>
				<div class="buttons">
					<div class="wrapper">
						<span class="add-to-cart" @click="isPop=true">加入购物车</span>
						<span class="go-to-by">立即抢购</span>
					</div>
				</div>
			</div>
			<i class="rocket iconfont icon-top" :class="{ active: showRocket }" @click="goToTop"></i>
			<div class="pop-cart" :class="{ active: isPop}">
				<i class="close iconfont icon-searchclose" @click="isPop = false"></i>
				<div class="product">
					<div class="image-wrapper">
						<img :src="product.avatar" alt=""  />
					</div>
					<div class="detail-wrapper">
						<span class="price" v-text="`￥${ product.price }`"></span>
						<span class="num" v-text="`已选: ${ count }件`"></span>
					</div>
				</div>
				<div class="count-wrapper">
					<div class="count">
						<span class="title">数量</span>
						<MiCount @increase="count = count + 1" @decrease="count = count - 1" :count="count" :max-count="5"></MiCount>
					</div>
				</div>
				<div class='button-wrapper'  :class="{ active: isPop}">
					<span class="button-ok" @click="submit">确定</span>
				</div>
			</div>
			<div class="curtain"  :class="{ active: isPop}"></div>
		</div>
		<div class="empty" v-show="id !== 1">
			<p>暂无该商品详情信息，敬请期待</p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MiCount from '../../components/MiCount/MiCount.vue';
        import IScroll from 'iscroll/build/iscroll-probe';
        import imagesLoaded from 'imagesloaded';
        import MiBanner from '../../components/MiBanner/MiBanner.vue';

	export default {
	        name: "Detail",
		components: { MiCount, MiBanner },
		data() {
	                return {
	                        id: parseInt(this.$route.params.pid),
		                product: {},
		                otherImgs: [],
                                bannerImgs: [],
		                showRocket: false,
                                showTop: false,
		                showTitle: false,
		                index: 1,
		                parts: [],
		                count: 1,
		                isPop: false,
                                cartCount: 0            // 购物车中该商品的数量
	                };
		},
		computed: {
		},
		methods: {
	                _bandIScroll() {
				imagesLoaded(this.$refs.scroll, () => {
					this.$nextTick(() => {
					        if(!this.scroll) {
					                this.scroll = new IScroll(this.$refs.scroll, {
                                                                deceleration: 0.003		,// 滚动的摩擦系数
                                                                bounce: true		 	,// 关闭回弹效果
                                                                momentum: true			,// 关闭惯性滚动
                                                                click: true				,// 取消滚动区域的点击事件
                                                                probeType: 2			,// 指定scroll事件触发的频率等级
                                                                preventDefault: false,
					                });
					                this.scroll.on('scroll', () => {
                                                                this.showRocket = Math.abs(this.scroll.y) >= 250;
                                                                this.showTop = Math.abs(this.scroll.y) >= 100;
                                                                this.parts[0] = this.$refs.banner.getBoundingClientRect().top - this.scroll.y;
                                                                this.parts[1] = this.$refs.evalute.getBoundingClientRect().top - this.scroll.y;
                                                                this.parts[2] = this.$refs.detail.getBoundingClientRect().top - this.scroll.y;
                                                                this.parts[3] = this.$refs.other.getBoundingClientRect().top - this.scroll.y;
                                                                this.showTitle = Math.abs(this.scroll.y) >= this.parts[2];
                                                                if(Math.abs(this.scroll.y) >= this.parts[3] ) this.index = 4;
                                                                else if(Math.abs(this.scroll.y) >= this.parts[2]) {
                                                                        this.index = 3;
                                                                        this.showTitle = true;
                                                                }
                                                                else if(Math.abs(this.scroll.y) >= this.parts[1]) this.index = 2;
                                                                else this.index = 1;
					                 })
					        }
                                                else this.scroll.refresh();
					});
				});
	                },
                        goToTop() {
	                        this.scroll.scrollTo(0,0,600);
                                this.showTop = false;
                                this.showRocket = false;
                                this.showTitle = false;
                        },
                        goToWhere(i) {
	                        if(this.index === i) return;
	                        this.index = i;
	                        if( this.index === 1) {
	                                this.showTop = false;
                                        this.showRocket = false;
                                }
                                this.scroll.scrollTo(0,-parseInt(this.parts[this.index - 1]), 600);
                                this.showTitle = this.parts[this.index - 1] >= this.parts[2];
                        },
                        _getCartCount() {
                                // 如果登录了
                                if(this.$cookies.get('token')) {
                                        this.$http({
                                                method: 'get',
                                                url: '/cart/total'
                                        })
                                                .then(data => this.cartCount = data);
                                }
                        },
                        submit() {
	                        if(!this.$cookies.get('token'))
	                                this.$router.push({ path: '/login', query: { back: this.$route.path } });
				this.$http({
					method: 'post',
					url: '/cart/add',
					data: {
						pid:  this.id,
						count: this.count
					}
				})
					.then(data => {
					        this.$alert('商品添加成功');
                                                _getCartCount();
					});
                        },
                        goToCart() {
	                        if(!this.$cookies.get('token'))
                                        this.$router.push({ path: '/login', query: { back: this.$route.path } });
	                        else
                                        this.$router.push('/cart');

                        },
		},
		created() {
			this.$http({
				method: 'get',
				url: '/product/model/' + this.id,
			})
				.then(data => {
				        this.product = data;
				        this.bannerImgs = data.bannerImgs.split(',')  ;
				        this.otherImgs = data.otherImgs.split(',');
                                });
		},
                updated() {
                        this._bandIScroll();
                        this._getCartCount();
                }
	};
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
	}

	.container>.empty {
		text-align: center;
		font-weight: bold;
		font-size: 24px;
	}

	.page-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	/* 页头 */
	.page-container>.page-top {
		width: 100%;
		height: 45px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		display: flex;
		justify-content: space-around;
		background-color: ;
		align-items: center;
		transition: all 2s ease-out;
	}

	.page-container>.page-top.active {
		background-color: rgba(239,239,240,1);
	}

	.page-container>.page-top>.icon-myback {
		width: 50px;
		position: absolute;
		left: 0;
		top: 0;
		align-self: center;
	}

	.page-container>.page-top>.icon-myback>img {
		width: 100%;
		height: 50px;
		display: none;
	}

	.page-container>.page-top>.icon-myback>img.active {
		display: inline-block;
	}

	.page-container>.page-top>ul.title {
		width: 200px;
		flex-shrink: 0;
		display: flex;
		opacity: 0;
		transition: all 0.6s ease-out;
	}

	.page-container>.page-top.active>ul.title {
		opacity: 1;
	}

	.page-container>.page-top>ul.title>li {
		width: 25%;
		line-height: 43px;
		font-size: 14px;
		text-align: center;
	}

	.page-container>.page-top>ul.title>li.active {
		color: red;
		border-bottom: 1px solid black;
	}

	.page-container>.page-top>.icon-ellipsis {
		width: 31px;
		position: absolute;
		right: 0;
		top: 10px;
		flex-shrink: 0;
		margin-right: 10px;
		align-self: center;
	}

	.page-container>.page-top>.icon-ellipsis>img {
		width: 100%;
		display: none;
	}

	.page-container>.page-top>.icon-ellipsis>img.active {
		display: block;
	}

	.page-container>.title {
		width: 100%;
		height: 41px;
		display: flex;
		position: fixed;
		top: 45px;
		left: 0;
		background-color: white;
		z-index: 99;
		transition: all 0.6s ease-out;
	}

	.title>ul.title-detail {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.title>ul.title-detail>li {
		flex-shrink: 0;
		color: rgba(51,51,51);
	}

	.title>ul.title-detail>li.active {
		color: red;
	}

	.page-container>.page-content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		overflow: auto;
		overflow: hidden;
		touch-action: pan-y;
	}

	/* 轮播图 */
	.page-container>.page-content>.detail>.banner {
		width: 100%;
		flex-shrink: 0;
		position: relative;
	}

	.page-container>.page-content>.detail>.banner>span.now-page {
		position: absolute;
		bottom: 15px;
		right: 15px;
		border-radius: 12px;
		background-color: rgba(0,0,0,0.5);
		width: 31px;
		height: 20px;
		font-size: 11px;
		color: white;
		text-align: center;
		line-height: 20px;
	}

	.page-container>.page-content>.detail>.banner>ul {
		width: 100%;
		font-size: 0;
		white-space: nowrap;
	}

	.page-container>.page-content>.detail>.banner>ul>li {
		display: inline-block;
	}

	.page-container>.page-content>.detail>.banner>ul>li>.wrapper {}

	.page-container>.page-content>.detail>.banner>ul>li>.wrapper>img {
		width: 100%;
	}

	.page-container>.page-content>.detail {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.page-container>.page-content>.detail>.detail-price {
		height: 38px;
		flex-shrink: 0;
		padding: 10px 15px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.page-container>.page-content>.detail>.detail-price>span.price {
		flex-shrink: 0;
		width: 74px;
		line-height: 38px;
		font-size: 24px;
		color: red;
	}

	.page-container>.page-content>.detail>.detail-price>img {
		flex-shrink: 0;
		width: 38px;
	}

	.page-container>.page-content>.detail>.detail-name {
		height: 24px;
		padding: 0 15px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.page-container>.page-content>.detail>.detail-name>span.icon-small-rice {
		flex-shrink: 0;
		width: 50px;
		height: 18px;
		border-radius: 12px;
		background-color: rgba(255,133,33);
		font-size: 11px;
		color: white;
		line-height: 18px;
		text-align: center;
	}

	.page-container>.page-content>.detail>.detail-name>span.name {
		margin-left: 10px;
		line-height: 18px;
		font-size: 16px;
		font-weight: 600;
		color: black;
	}

	.page-container>.page-content>.detail>.detail-brief {
		height: 30px;
		padding: 10px 15px 0;
		flex-shrink: 0;
		display: flex;
	}

	.page-container>.page-content>.detail>.detail-brief>span.brief {
		font-size: 13px;
		color: #666666;
	}

	.page-container>.page-content>.detail>.detail-introduce {
		display: flex;
		height: 30px;
		margin-top: 5px;
		padding: 5px 15px 0;
		flex-shrink: 0;
	}

	.page-container>.page-content>.detail>.detail-introduce>span.introduce {
		font-size: 13px;
		color: red;
	}

	.page-container>.page-content>.detail>.detail-buy {
		display: flex;
		height: 30px;
		margin-top: 5px;
		padding: 5px 15px 0;
		flex-shrink: 0;
	}

	.page-container>.page-content>.detail>.detail-buy>span.now-buy {
		height: 20px;
		padding: 2px 10px;
		border: 1px solid #DDDDDD;
		border-radius: 12px;
		line-height: 20px;
		font-size: 11px;
		color: red;
	}

	.page-container>.page-content>.detail>.detail-null {
		height: 10px;
		flex-shrink: 0;
		background-color: #DDDDDD;
	}

	.page-container>.page-content>.detail>.detail-red {
		flex-shrink: 0;
		height: 42px;

	}

	.page-container>.page-content>.detail>.detail-red>img {
		width: 100%;
	}

	.page-container>.page-content>.detail>.detail-num {
		flex-shrink: 0;
		height: 48px;
		padding: 0 10px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-num>span {
		font-size: 11px;
	}

	.page-container>.page-content>.detail>.detail-num>span.title {
		width: 28px;
		flex-shrink: 0;
		margin-right: 11px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-num>span.content {
		flex-grow: 1;
	}

	.page-container>.page-content>.detail>.detail-num>i {
		flex-shrink: 0;
		font-size: 12px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-address {
		flex-shrink: 0;
		height: 48px;
		padding: 0 10px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-address>span {
		font-size: 11px;
	}

	.page-container>.page-content>.detail>.detail-address>span.title {
		width: 28px;
		flex-shrink: 0;
		margin-right: 11px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-address>span.content {
		flex-grow: 1;
	}

	.page-container>.page-content>.detail>.detail-address>i {
		flex-shrink: 0;
		font-size: 12px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-service {
		flex-shrink: 0;
		height: 48px;
		padding: 0 10px;
		display: flex;
		align-items: center;
	}

	.page-container>.page-content>.detail>.detail-service>span {
		font-size: 11px;
	}

	.page-container>.page-content>.detail>.detail-service>span.title {
		width: 28px;
		flex-shrink: 0;
		margin-right: 11px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-service>span.content {
		flex-grow: 1;
	}

	.page-container>.page-content>.detail>.detail-service>span.content>i {
		color: orange;
		font-size: 11px;
		margin: 0 5px;
	}

	.page-container>.page-content>.detail>.detail-service>i {
		flex-shrink: 0;
		font-size: 12px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-ranking {
		flex-shrink: 0;
		padding-left: 50px;
		display: flex;
		align-items: center;
		height: 46px;
		background-image: url(/images/ranking.png);
		background-size: 100% 100%;
		font-size: 12px;
		font-weight: bold;
		color: rgba(53,53,53);
	}

	.page-container>.page-content>.detail>.detail-evalute {
		flex-shrink: 0;
		height: 309px;
		display: flex;
		flex-direction: column;
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute {
		flex-shrink: 0;
		height: 60px;
		padding: 10px 10px 0;
		display: flex;
		flex-direction: column;
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute>.top {
		flex-shrink: 0;
		height: 20px;
		padding: 3px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute>.top>span.left {
		color: rgba(51,51,51);
		font-weight: bold;
		font-size: 13px;
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute>.top>span.right {
		font-size: 11px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute>.top>span.right>i {
		font-size: 12px;
		color: rgba(153,153,153);
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute>.bottom {
		flex-shrink: 0;
		height: 30px;
		display: flex;
		align-items: center;
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-evalute>.bottom>span {
		flex-shrink: 0;
		margin-right: 8px;
		padding: 2px 4px;
		line-height: 15px;
		border-radius: 12px;
		font-size: 11px;
		color: rgba(51,51,51);
		height: 15px;
		background-color: rgba(244,231,206);
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-detail {
		flex-grow: 1;
		display: flex;
		z-index: 100;
		/*overflow: hidden;*/
		/*touch-action: pan-x;*/
		overflow: auto;
	}

	.page-container>.page-content>.detail>.detail-evalute>.user-detail>.wrapper {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}
	.page-container>.page-content>.detail>.detail-evalute>.user-detail>.wrapper>span.more {
		flex-shrink: 0;
		width: 40px;
		text-align: center;
		box-sizing: border-box;
		padding: 45px 10px;
		font-size: 11px;
		margin-right: 10px;
		height: 208px;
		background-color: rgba(248,248,248);
	}
	ul.evalution {
		display: flex;
		font-size: 0;
	}

	ul.evalution>li {
		flex-grow: 1;
		padding: 10px;
		box-sizing: border-box;
		display: flex;
	}

	ul.evalution>li>a {
		flex-grow: 1;
		display: flex;
	}

	ul.evalution>li>a>img {
		width: 308px;
		flex-shrink: 0;
	}

	.page-container>.page-content>.detail>.detail-ask {
		flex-shrink: 0;
		height: 114px;
		padding: 20px 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.detail-ask>span.ask-us {
		flex-shrink: 0;
		height: 18px;
		color: rgba(51,51,51);
		font-weight: bold;
		font-size: 12px;
	}

	.detail-ask>.wrapper {
		flex-shrink: 0;
		display: flex;
		height: 57px;
		padding: 22px 0 10px;
		box-sizing: border-box;
		align-items: center;
	}

	.detail-ask>.wrapper>img {
		width: 12px;
	}

	.detail-ask>.wrapper>span.text {
		margin-left: 10px;
		font-size: 11px;
		color: rgba(51,51,51);
	}

	.detail-ask>.wrapper>span.go-to-ask {
		font-size: 11px;
		border: 1px solid orange;
		border-radius: 12px;
		padding: 2px 15px;
		margin-left: 180px;
	}

	.page-container>.page-content>.detail>.detail-title {
		flex-shrink: 0;
		height: 41px;
		display: flex;
	}

	.detail-title>ul.title-detail {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.detail-title>ul.title-detail>li {
		flex-shrink: 0;
		color: rgba(51,51,51);
	}

	.detail-title>ul.title-detail>li.active {
		color: red;
	}

	.page-container>.page-content>.detail>.detail-images {
		flex-grow: 1;
		display: flex;
	}

	.detail-images>ul.images {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		font-size: 0;
	}

	.detail-images>ul.images>li {
		flex-grow: 1;
		width: 100%;
	}

	.detail-images>ul.images>li>img {
		width: 100%;
	}

	.page-container>.page-content>.detail>.detail-other {
		flex-shrink: 0;
		height: 46px;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.detail-other>span.other {
		flex-shrink: 0;
		line-height: 46px;
		font-size: 15px;
		color: rgba(51,51,51);
	}

	.page-container>.page-content>.detail>.detail-recommend {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		background-color: rgba(244,244,244);
	}

	.detail-recommend>ul {
		display: flex;
		font-size: 0;
		flex-wrap: wrap;
		padding: 5px;
		box-sizing: border-box;
		justify-content: space-around;
	}

	.detail-recommend>ul>li {
		flex-shrink: 0;
		flex-grow: 1;
		width: 50%;
		padding: 5px;
		box-sizing: border-box;
	}

	.detail-recommend>ul>li>a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: white;
	}

	.detail-recommend>ul>li>a>img {
		width: 100%;
	}

	.detail-recommend>ul>li>a>span {
		font-size: 11px;
		margin-bottom: 5px;
	}

	.detail-recommend>ul>li>a>span.name {
		color: rgba(51,51,51);
	}

	.detail-recommend>ul>li>a>span.brief {
		color: #999999;
	}

	.detail-recommend>ul>li>a>span.price {
		font-size: 17px;
		color: red;
	}
	/* 页底 */
	.page-container>.page-bottom {
		flex-shrink: 0;
		height: 55px;
		background-color: white;
		display: flex;
		/* justify-content: space-around; */
		align-items: center;
	}

	.page-container>.page-bottom>.small-rice {
		flex-shrink: 0;
		width: 41px;
		margin-left: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.page-container>.page-bottom>.small-rice>img {
		flex-shrink: 0;
		width: 29px;
	}

	.page-container>.page-bottom>.small-rice>span {
		flex-grow: 1;
		flex-basis: 0;
		font-size: 11px;
		color: #666666;
	}

	.page-container>.page-bottom>.cart {
		flex-shrink: 0;
		width: 47px;
		margin: 0 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.page-container>.page-bottom>.cart>img {
		width: 29px;
	}

	.page-container>.page-bottom>.cart>span.cart {
		font-size: 11px;
		line-height: 12px;
		color: #666666;
	}

	.page-container>.page-bottom>.cart>span.count {
		position: absolute;
		top: 0;
		right: 4px;
		background-color: red;
		color: white;
		min-width: 16px;
		height: 16px;
		border-radius: 50%;
		font-size: 11px;
		text-align: center;
		line-height: 16px;
	}

	.page-container>.page-bottom>.buttons {
		flex-grow: 1;
		margin: 0 5px;
		display: flex;
	}

	.page-container>.page-bottom>.buttons>.wrapper {
		flex-grow: 1;
		display: flex;
	}

	.page-container>.page-bottom>.buttons>.wrapper>span {
		width: 50%;
		text-align: center;
		line-height: 38px;
		font-size: 14px;
		color: white;
	}

	.page-container>.page-bottom>.buttons>.wrapper>span.add-to-cart {
		background-color: rgb(238,203,118);
		border-top-left-radius: 19px;
		border-bottom-left-radius: 19px;
	}

	.page-container>.page-bottom>.buttons>.wrapper>span.go-to-by {
		background-color: rgb(237,70,42);
		border-top-right-radius: 19px;
		border-bottom-right-radius: 19px;
	}

	/* 返回顶部 */
	i.rocket {
		position: fixed;
		bottom: 80px;
		right: 20px;
		height: 36px;
		width: 36px;
		background-color: rgb(0,0,0,0.5);
		z-index: 999;
		border-radius: 50%;
		text-align: center;
		line-height: 36px;
		color: white;
		opacity: 0;
		transition: all 0.6s ease-out;
	}

	i.rocket.active {
		opacity: 1;
	}

	.pop-cart {
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: white;
		width: 100%;
		max-height: 0;
		z-index: 101;
		display: flex;
		flex-direction: column;
		transition: all 0.6s ease-out;
	}

	.pop-cart.active {
		max-height: 510px;
	}

	.pop-cart>i.close {
		position: absolute;
		right: 5px;
		top: 5px;
	}

	.pop-cart>.product {
		flex-shrink: 0;
		height: 118px;
		padding: 14px;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #ddd;
	}

	.pop-cart>.product>.image-wrapper {
		flex-shrink: 0;
		width: 90px;
	}

	.pop-cart>.product>.image-wrapper>img {
		width: 100%;
	}

	.pop-cart>.product>.detail-wrapper {
		flex-grow: 1;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.pop-cart>.product>.detail-wrapper>span.price {
		font-size: 20px;
		color: rgb(182,9,9);
	}

	.pop-cart>.product>.detail-wrapper>span.num {
		margin-top: 8px;
		color: rgb(102,102,102);
		font-size: 13px;
	}

	.pop-cart>.count-wrapper {
		flex-shrink: 0;
		height: 331px;
		display: flex;
		flex-direction: column;
	}

	.pop-cart>.count-wrapper>.count {
		flex-shrink: 0;
		height: 62px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
	}

	.pop-cart>.count-wrapper>.count>span.title {
		flex-shrink: 0;
		font-size: 13px;
		color: rgb(153,153,153);
	}

	.pop-cart>.count-wrapper>.count>.count-content {
		flex-shrink: 0;
		width: 130px;
	}

	.pop-cart>.count-wrapper>.count>.count-content>span {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}

	.pop-cart>.count-wrapper>.count>.count-content>span.button-decrease {
		width: 30px;
		color: white;
		background-color: #c62e2e;
		margin-right: -4px;
	}

	.pop-cart>.count-wrapper>.count>.count-content>span.button-decrease.disabled {
		color: rgb(144,144,144);
	}

	.pop-cart>.count-wrapper>.count>.count-content>span.content {
		width: 48px;
		background-color: rgb(244,244,244);
	}

	.pop-cart>.count-wrapper>.count>.count-content>span.button-increase {
		width: 30px;
		color: white;
		background-color: #c62e2e;
		margin-left: -4px;
	}

	.pop-cart>.count-wrapper>.count>.count-content>span.button-increase.disabled {
		color: rgb(144,144,144);
	}

	.pop-cart>.button-wrapper {
		flex-grow: 1;
		padding: 0 15px;
	}

	.pop-cart>.button-wrapper>span.button-ok {
		display: inline-block;
		width: 100%;
		height: 44px;
		line-height: 40px;
		color: white;
		text-align: center;
		background: linear-gradient(to right, rgb(240, 78, 46), rgb(213, 16, 16));
		border-radius: 22px;
		font-size: 14px;
	}

	.curtain {
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: rgb(111,111,111, 0.5);
		width: 100%;
		height: 100%;
		z-index: 99;
		display: none;
	}

	.curtain.active {
		display: block;
	}
</style>