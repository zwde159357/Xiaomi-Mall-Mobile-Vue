<template>
	<div class="page-container">
		<div class="page-content hide-scroll">
			<div class="content-top">
				<div class="top">
					<i class="iconfont icon-arrow-left back" @click="$router.push('/cart')"></i>
					<span class="name">确认订单</span>
				</div>
				<div class="bottom" :class="{ active: address.id }">
					<div class="wrapper">
						<span class="name" v-text="address.receiveName"></span>
						<span class="phone" v-text="address.receivePhone"></span>
					</div>
					<span class="address" v-text="`${address.receiveRegion} ${address.receiveDetail}`"></span>
					<i class="iconfont icon-arrow-right go-address" @click="$router.push({ path: '/address', query: { back: $route.path, ids: $route.query.ids } })"></i>
				</div>
				<div class="no-bottom" :class="{ active: !address.id }">
					<span>没有默认地址，请添加</span>
					<i class="iconfont icon-arrow-right go-address"></i>
				</div>
			</div>

			<div class="content-wrapper">
				<div class="top">
					<img src="../../assets/images/milogo.png" alt="" />
					<span class="title">小米自营</span>
				</div>
				<ul class="selected-product">
					<li v-for="item in orderList" :key="item.id" @click="$router.push(`/detail/${item.pid}`)">
						<div class="product-wrapper">
							<img :src="item.avatar" alt="" />
							<div class="detail-wrapper">
								<span class="name" v-text="item.name"></span>
								<div class="count-wrapper">
									<span class="price" v-text="`￥${ item.price }`"></span>
									<span class="count" v-text='`x${ item.count }`'></span>
								</div>
								<span class="text">七天无理由退换</span>
							</div>
						</div>
						<div class="give">
							<span class="title">赠品</span>
							<span class="text">保修服务2年</span>
							<span class="count">x1</span>
						</div>
					</li>
				</ul>
				<div class="type">
					<span class="title">发票类型</span>
					<span class="text">个人电子发票<i class="iconfont icon-arrow-right"></i></span>
				</div>
				<div class="message">
					<span class="title">买家留言</span>
					<input type="text" placeholder='填写内容需与商家协商并确认,45字以内' />
				</div>
			</div>


			<div class="discount-wrapper">
				<div class="discount">
					<span class="title">优惠券</span>
					<span class="text">暂无可用<i class="iconfont icon-arrow-right"></i></span>
				</div>
				<div class="translation">
					<span class="title">配送方式</span>
					<span class="text">快速配送</span>
				</div>
			</div>

			<div class="account-wrapper">
				<div class="account">
					<span class="title">商品金额</span>
					<span class="text" v-text="`￥${ account }`"></span>
				</div>
				<div class="translation-fee">
					<span class="title">运费</span>
					<span class="text">+￥0.00</span>
				</div>
			</div>

		</div>


		<div class="page-footer">
			<div class="account-wrapper">
				<span class="title">合计：</span>
				<span class="account" v-text="`￥${ account }`"></span>
			</div>
			<span class="btn-generate-order" @click="generateOrder">提交订单</span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                name: "OrderConfirm",
	        data() {
			return {
				orderList: [],
				address: {},
			};
	        },
	        computed: {
			account() {
			        let account = 0;
                                this.orderList.forEach(item => {
					account += item.price * item.count;
                                });
			        return account.toFixed(2);
			}
	        },
	        methods: {
                        generateOrder() {
                                if(!this.address.id)
                                        this.$alert('请填写收货地址');
                                this.$http({
	                                method: 'post',
	                                url: '/order/confirm',
	                                data: {
                                                ids: this.$route.query.ids.split(','),
		                                account: this.account,
		                                addressId: this.address.id
	                                }
                                })
	                                .then(data => {
						this.$cookies.set('orderId', data);
						this.$router.push('/pay');
	                                });
                        }
	        },
	        created() {
                        this.$http({
	                        method: 'post',
	                        url: '/cart/list_ids',
	                        data: { ids: this.$route.query.ids.split(',') }
                        })
	                        .then(data => this.orderList = data);
                        this.$http({
                                method: 'get',
                                url: '/address/get_default'
                        })
                                .then(address => this.address = address);
	        }
        };
</script>

<style scoped>
	.page-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.page-container>.page-content {
		flex-grow: 1;
		background-color: rgba(244,244,244);
		display: flex;
		flex-direction: column;
		overflow: auto;
	}

	.page-content>.content-top {
		flex-shrink: 0;
		height: 170px;
		background-image: url(../../assets/images/order_confirm/bg_page_header.png);
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
	}

	.page-content>.content-top>.top {
		flex-shrink: 0;
		height: 88px;
		display: flex;
		align-items: center;
		position: relative;
	}

	.page-content>.content-top>.top>i.back {
		width: 15px;
		height: 15px;
		color: rgba(238,238,238);
		position: absolute;
		left: 10px;
		top: 34px;
	}

	.page-content>.content-top>.top>span.name {
		flex-grow: 1;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		color: white;
	}

	.page-content>.content-top>.bottom {
		flex-shrink: 0;
		height: 82px;
		background-color: white;
		margin: 0 10px;
		border-radius: 10px;
		display: none;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding: 0 10px;
	}

	.page-content>.content-top>.bottom.active {
		display: flex;
	}

	.page-content>.content-top>.no-bottom {
		flex-shrink: 0;
		height: 82px;
		background-color: white;
		margin: 0 10px;
		border-radius: 10px;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding: 0 10px;
		display: none;
	}

	.page-content>.content-top>.no-bottom.active {
		display: flex;
	}

	.page-content>.content-top>.no-bottom>span {
		flex-grow: 1;
		text-align: center;
		line-height: 82px;
		font-size: 16px;
		color: rgba(51,51,51);
	}

	.page-content>.content-top>.no-bottom>i {
		position: absolute;
		width: 13px;
		height: 13px;
		right: 10px;
		top: calc(50% - 13px);
	}

	.page-content>.content-top>.bottom>.wrapper {
		flex-shrink: 0;
		height: 20px;
	}

	.page-content>.content-top>.bottom>.wrapper>span {
		font-size: 16px;
		font-weight: bold;
		color: rgba(51,51,51);
	}

	.page-content>.content-top>.bottom>.wrapper>span.name {
		margin-right: 15px;
	}

	.page-content>.content-top>.bottom>span.address {
		font-size: 13px;
		color: rgba(51,51,51);
		margin-top: 8px;
	}

	.page-content>.content-top>.bottom>i.go-address {
		width: 13px;
		height: 13px;
		color: rgba(153,153,153);
		position: absolute;
		right: 10px;
		top: calc(50% - 13px);
	}

	.page-content>.content-wrapper {
		flex-grow: 1;
		margin: 10px;
		background-color: white;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		padding: 0 10px;
	}

	.page-content>.content-wrapper>.top {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
	}

	.page-content>.content-wrapper>.top>img {
		flex-shrink: 0;
		width: 24px;
	}

	.page-content>.content-wrapper>.top>span.title {
		font-size: 14px;
		font-weight: bold;
		margin-left: 5px;
	}

	.page-content>.content-wrapper>ul.selected-product {
		flex-grow: 1;
		padding: 10px 0;
		display: flex;
		flex-direction: column;
	}

	ul.selected-product>li {
		flex-shrink: 0;
		height: 142px;
		display: flex;
		flex-direction: column;
	}

	ul.selected-product>li>.product-wrapper {
		flex-shrink: 0;
		height: 110px;
		display: flex;
		align-items: center;
		padding: 11px 0 13px;
		box-sizing: border-box;
	}

	ul.selected-product>li>.product-wrapper>img {
		flex-shrink: 0;
		width: 86px;
		background-color: rgba(244,244,244);
		height: 86px;
	}

	ul.selected-product>li>.product-wrapper>.detail-wrapper {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}

	ul.selected-product>li>.product-wrapper>.detail-wrapper>span.name {
		flex-shrink: 0;
		height: 36px;
		font-size: 14px;
		color: rgba(51,51,51);
	}

	ul.selected-product>li>.product-wrapper>.detail-wrapper>.count-wrapper {
		flex-shrink: 0;
		height: 19px;
		margin-top: 8px;
		display: flex;
		justify-content: space-between;
	}

	ul.selected-product>li>.product-wrapper>.detail-wrapper>.count-wrapper>span.price {
		font-size: 15px;
		color: rgba(191,17,17);
	}

	ul.selected-product>li>.product-wrapper>.detail-wrapper>.count-wrapper>span.count {
		font-size: 12px;
		font-weight: bold;
		color: rgba(51,51,51);
	}

	ul.selected-product>li>.product-wrapper>.detail-wrapper>span.text {
		font-size: 10px;
		color: rgba(191,17,17);
		margin-top: 8px;
		opacity: 0.8;
	}

	ul.selected-product>li>.give {
		flex-shrink: 0;
		height: 20px;
		display: flex;
	}

	ul.selected-product>li>.give>span.title {
		flex-shrink: 0;
		font-size: 12px;
		font-weight: bold;
		color: rgba(51,51,51);
	}

	ul.selected-product>li>.give>span.text {
		flex-grow: 1;
		font-size: 12px;
		font-weight: 300;
		margin-left: 10px;
	}

	ul.selected-product>li>.give>span.count {
		flex-shrink: 0;
		font-size: 12px;
		font-weight: bold;
		color: rgba(51,51,51);
	}

	.page-content>.content-wrapper>.type {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-content>.content-wrapper>.type>span {
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.content-wrapper>.message {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-content>.content-wrapper>.message>span {
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.content-wrapper>.message>input {
		flex-grow: 1;
		margin-left: 10px;
	}

	.page-content>.discount-wrapper {
		flex-shrink: 0;
		height: 84px;
		margin: 0 10px;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
	}

	.page-content>.discount-wrapper>.discount {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-content>.discount-wrapper>.discount>span {
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.discount-wrapper>.translation {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-content>.discount-wrapper>.translation>span {
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.account-wrapper {
		flex-shrink: 0;
		height: 84px;
		margin: 10px;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
	}

	.page-content>.account-wrapper>.account {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-content>.account-wrapper>.account>span {
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.account-wrapper>.translation-fee {
		flex-shrink: 0;
		height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-content>.account-wrapper>.translation-fee>span {
		font-size: 14px;
		color: rgba(191,17,17);
	}

	.page-container>.page-footer {
		flex-shrink: 0;
		height: 54px;
		display: flex;
		align-items: center;
		padding-left: 20px;
	}

	.page-footer>.account-wrapper {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	.page-footer>.account-wrapper>span.title {
		font-size: 14px;
		color: rgba(51,51,51);
		font-weight: bold;
	}

	.page-footer>.account-wrapper>span.account {
		font-size: 22px;
		line-height: 30px;
		color: rgba(191,17,17);
	}

	.page-footer>.btn-generate-order {
		margin-right: 10px;
		flex-shrink: 0;
		width: 100px;
		background-color: rgba(191,17,17);
		color: white;
		border-radius: 20px;
		font-size: 15px;
		font-weight: bold;
		text-align: center;
		line-height: 38px;
	}
</style>