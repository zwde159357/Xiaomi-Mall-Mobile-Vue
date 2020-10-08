<template>
	<div class="page-container">
		<div class="page-top">
			<img src="../../assets/images/user1.png" alt="" />
			<span class="go-to-login" @click="$router.push({ path: '/login', query: { back: $route.path } })"
			v-show="name === undefined">请登录</span>
			<span class="user" v-text="name" v-show="name!== undefined"></span>
			<i class="iconfont icon-arrow-right close" @click="$router.push({ path: '/login', query: { back: $route.path } })"
			   v-show="name === undefined"></i>
		</div>
		<div class="page-content hide-scroll">
			<div class="first">
				<div class="my-order">
					<span class="title" @click="$router.push('/order')">我的订单</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
				<ul class="operate">
					<li>
						<a href="#">
							<img src="../../assets/images/operate1.png" alt="" />
							<span class="name">待付款</span>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/images/operate2.png" alt="" />
							<span class="name">待收货</span>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/images/operate3.png" alt="" />
							<span class="name">评论</span>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/images/operate4.png" alt="" />
							<span class="name">退款/售后</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="second">
				<div class="my-propety">
					<img src="../../assets/images/my-property.png" alt="" />
					<span class="name">我的资产</span>
					<span class="other">优惠券/积分</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
				<div class="my-collection">
					<img src="../../assets/images/my-collection.png" alt="" />
					<span class="name">我的收藏</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
				<div class="my-address">
					<img src="../../assets/images/my-address.png" alt="" />
					<span class="name">地址管理</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
			</div>
			<div class="third">
				<div class="my-license">
					<img src="../../assets/images/my-license.png" alt="" />
					<span class="name">资质证件</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
				<div class="my-protocol">
					<img src="../../assets/images/my-protocol.png" alt="" />
					<span class="name">协议规则</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
				<div class="my-help">
					<img src="../../assets/images/my-help.png" alt="" />
					<span class="name">帮助与反馈</span>
					<i class="iconfont icon-arrow-right"></i>
				</div>
			</div>
			<div class="forth">
				<span class="quit" v-show="name !== undefined" @click="quit">退出</span>
			</div>
		</div>
		<div class="page-footer">
			<MiNav></MiNav>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MiNav from "../../components/MiNav/index.vue";

	export default {
	        name: "profile",
		components: { MiNav },
		data: function() {
	                return {
	                        name: this.$cookies.get('name')
	                };
		},
		methods: {
                        quit() {
                                this.name = undefined;
                                this.$cookies.remove('name');
                                this.$cookies.remove('token');
                        }
		}
	};
</script>

<style scoped>
	.page-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.page-container>.page-top {
		flex-shrink: 0;
		height: 100px;
		display: flex;
		align-items: center;
		background-image: url(../../assets/images/bg_personal.png);
		background-size:  center center;
	}

	.page-top>img {
		flex-shrink: 0;
		width: 60px;
		padding-left: 25px;
	}

	.page-top>span {
		color: white;
		flex-shrink: 0;
		width: 235px;
		padding-left: 20px;
		font-size: 12px;
	}

	.page-top>i.close {
		flex-shrink: 0;
		font-size: 20px;
		color: #999999;
		font-weight: bold;
	}

	.page-container>.page-content {
		flex-grow: 1;
		background-color: rgb(243,243,243);
		display: flex;
		flex-direction: column;
		overflow: auto;
	}

	.page-content>.first {
		flex-shrink: 0;
		height: 110px;
		display: flex;
		flex-direction: column;
		margin-top: 5px;
		background-color: white;
	}

	.page-content>.first>.my-order {
		flex-shrink: 0;
		height: 41px;
		border-bottom: 1px solid rgb(229,229,229);
		padding: 0 10px 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.first>.my-order>span.title {
		flex-grow: 1;
		font-size: 14px;
		color: rgb(51,51,51);
	}

	.first>.my-order>i {
		flex-shrink: 0;
		margin-right: 12px;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
	}

	.page-content>.first>ul.operate {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	ul.operate>li {
		flex-shrink: 0;
		width: 25%;
	}

	ul.operate>li>a {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	ul.operate>li>a>img {
		flex-shrink: 0;
		width: 40px;
	}

	ul.operate>li>a>span.name {
		font-size: 12px;
		color: rgba(0,0,0,0.6);
	}

	.page-content>.second {
		flex-shrink: 0;
		height: 150px;
		margin-top: 5px;
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	.second>.my-propety {
		flex-shrink: 0;
		height: 49px;
		border-bottom: 1px solid rgb(229,229,229);
		display: flex;
		align-items: center;
	}

	.second>.my-propety>img {
		flex-shrink: 0;
		width: 38px;
		padding-left: 15px;
	}

	.second>.my-propety>span.name {
		flex-grow: 1;
		color: rgb(51,51,51);
		font-size: 14px;
	}

	.second>.my-propety>span.other {
		flex-shrink: 0;
		color: rgb(153,153,153);
		font-size: 12px;
	}

	.second>.my-propety>i {
		flex-shrink: 0;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
		margin-right: 12px;
	}

	.second>.my-collection {
		flex-shrink: 0;
		height: 49px;
		border-bottom: 1px solid rgb(229,229,229);
		display: flex;
		align-items: center;
	}

	.second>.my-collection>img {
		flex-shrink: 0;
		width: 38px;
		padding-left: 15px;
	}

	.second>.my-collection>span.name {
		flex-grow: 1;
		color: rgb(51,51,51);
		font-size: 14px;
	}

	.second>.my-collection>i {
		flex-shrink: 0;
		margin-right: 12px;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
	}

	.second>.my-address {
		flex-shrink: 0;
		height: 49px;
		display: flex;
		align-items: center;
	}

	.second>.my-address>img {
		flex-shrink: 0;
		width: 38px;
		padding-left: 15px;
	}

	.second>.my-address>span.name {
		flex-grow: 1;
		color: rgb(51,51,51);
		font-size: 14px;
	}

	.second>.my-address>i {
		flex-shrink: 0;
		margin-right: 12px;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
	}

	.page-content>.third {
		flex-shrink: 0;
		height: 150px;
		margin-top: 5px;
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	.third>.my-license {
		flex-shrink: 0;
		height: 49px;
		border-bottom: 1px solid rgb(229,229,229);
		display: flex;
		align-items: center;
	}

	.third>.my-license>img {
		flex-shrink: 0;
		width: 38px;
		padding-left: 15px;
	}

	.third>.my-license>span.name {
		flex-grow: 1;
		color: rgb(51,51,51);
		font-size: 14px;
	}

	.third>.my-license>i {
		flex-shrink: 0;
		margin-right: 12px;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
	}

	.third>.my-protocol {
		flex-shrink: 0;
		height: 49px;
		border-bottom: 1px solid rgb(229,229,229);
		display: flex;
		align-items: center;
	}

	.third>.my-protocol>img {
		flex-shrink: 0;
		width: 38px;
		padding-left: 15px;
	}

	.third>.my-protocol>span.name {
		flex-grow: 1;
		color: rgb(51,51,51);
		font-size: 14px;
	}

	.third>.my-protocol>i {
		flex-shrink: 0;
		margin-right: 12px;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
	}

	.third>.my-help {
		flex-shrink: 0;
		height: 49px;
		display: flex;
		align-items: center;
	}

	.third>.my-help>img {
		flex-shrink: 0;
		width: 38px;
		padding-left: 15px;
	}

	.third>.my-help>span.name {
		flex-grow: 1;
		color: rgb(51,51,51);
		font-size: 14px;
	}

	.third>.my-help>i {
		flex-shrink: 0;
		margin-right: 12px;
		font-size: 16px;
		color: #999999;
		font-weight: bold;
	}

	.page-content>.forth {
		flex-shrink: 0;
		height: 85px;
		margin-top: 5px;
		justify-content: center;
		display: flex;
	}

	.forth>span.quit {
		flex-shrink: 0;
		width: 100px;
		height: 45px;
		border: 1px solid rgb(178,178,178);
		border-radius: 5px;
		background-color: white;
		line-height: 45px;
		text-align: center;
	}
	.page-container>.page-footer {
		flex-shrink: 0;
		height: 50px;
		display: flex;
	}
</style>