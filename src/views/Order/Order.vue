<template>
	<div class="page-container">
		<div class="page-top">
			<div class="top">
				<span class="title">我的订单</span>
				<img src="../../assets/images/back.png" alt="" class="back"  @click="$router.push('/profile')"/>
				<img src="../../assets/images/order/icon_search_black.png" alt="" class="search"/>
			</div>
			<div class="bottom">
				<ul class="title-wrapper">
					<li>
						<span class="title" :class="{ active: index === 1 }" @click="changeIndex(1)">全部</span>
					</li>
					<li>
						<span class="title" :class="{ active: index === 2}" @click="changeIndex(2)">待付款</span>
						<span class="num" v-text="noPay.length"></span>
					</li>
					<li>
						<span class="title" :class="{ active: index === 3 }" @click="changeIndex(3)">待收货</span>
						<span class="num" v-text="hasPay.length"></span>
					</li>
					<li>
						<span class="title" :class="{ active: index === 4 }" @click="changeIndex(4)">退款订单</span>
					</li>
					<li>
						<span class="title" :class="{ active: index === 5 }" @click="changeIndex(5)">已收货</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="page-content hide-scroll">
			<div class="content-wrapper all" :class="{ active: index === 1}">
				<div class="head">
					<img src="../../assets/images/order/group_title.png" alt="" class="left" />
					<img src="../../assets/images/order/icon_arrow_right_darkgray.png" alt="" class="right" />
				</div>
				<ul class="order-list" v-show='orderList.length !== 0'>
					<li  v-for="item in orderList" :key="item.id">
						<div class="order-title">
							<div class="left">
								<img src="../../assets/images/milogo.png" alt="" />
								<span class="title">小米自营</span>
							</div>
							<span class="right" v-text="nowStatus(item)"></span>
						</div>
						<div class="product-wrapper">
							<div class="detail-product" v-for="item2 in item.details" :key="item2.id">
								<img :src="item2.avatar" alt="" />
								<div class="right">
									<div class="name-price">
										<span class="name" v-text="item2.name"></span>
										<span class="price" v-text="`￥${ item2.price.toFixed(2)} `"></span>
									</div>
									<span class="count" v-text="`x${ item2.count }`"></span>
								</div>
							</div>
						</div>
						<div class="account-wrapper">
					<span class='text'>共有<span class="num" v-text="total(item.orderId)"></span>商品，
					总金额<span class="account" v-text="`￥${ item.account.toFixed(2) }`"> </span></span>
						</div>
						<div class="btn-wrapper zero" :class="{ active: !item.pay&& item.isValid }">
							<span class="btn-delete" @click="remove(item.orderId)">删除订单</span>
							<span class="btn-rebuy" @click="reBuy(item)">再次购买</span>
						</div>
						<div class="btn-wrapper one" :class="{ active: !item.pay&& !item.isValid }">
							<span class="time" v-text="`支付剩余时间:${ item.time }`"></span>
							<span class="btn-pay" @click="payMoney(item.orderId)">付款</span>
						</div>
						<div class="btn-wrapper two" :class="{ active: item.pay }">
							<span class="btn-delete" @click="remove(item.orderId)">删除订单</span>
							<span class="btn-refund" @click="$alert('进我口袋的钱还想要回去，没门！')">退款</span>
						</div>
					</li>
				</ul>
				<div class="wrapper" v-show="!orderList.length">
					<img src="../../assets/images/order/no_result_order.png" alt="" />
					<span>目前没有订单</span>
				</div>
			</div>

			<div class="content-wrapper no-pay" :class="{ active: index === 2}">
				<ul class="order-list" v-if="noPay.length !== 0">
					<li  v-for="item in noPay" :key="item.id">
						<div class="order-title">
							<div class="left">
								<img src="../../assets/images/milogo.png" alt="" />
								<span class="title">小米自营</span>
							</div>
							<span class="right" v-text="nowStatus(item)"></span>
						</div>
						<div class="product-wrapper">
							<div class="detail-product" v-for="item2 in item.details" :key="item2.id">
								<img :src="item2.avatar" alt="" />
								<div class="right">
									<div class="name-price">
										<span class="name" v-text="item2.name"></span>
										<span class="price" v-text="`￥${ item2.price.toFixed(2)} `"></span>
									</div>
									<span class="count" v-text="`x${ item2.count }`"></span>
								</div>
							</div>
						</div>
						<div class="account-wrapper">
					<span class='text'>共有<span class="num" v-text="total(item.orderId)"></span>商品，
					总金额<span class="account" v-text="`￥${ item.account.toFixed(2) }`"> </span></span>
						</div>
						<div class="btn-wrapper one" :class="{ active: !item.pay&& !item.isValid }">
							<span class="time" v-text="`支付剩余时间:${ item.time }`"></span>
							<span class="btn-pay" @click="payMoney(item.orderId)">付款</span>
						</div>
					</li>
				</ul>
				<div class="wrapper" v-else>
					<img src="../../assets/images/order/no_result_order.png" alt="" />
					<span>目前没有待付款订单</span>
				</div>
				<span class="num"></span>
			</div>

			<div class="content-wrapper no-receive" :class="{ active: index === 3}">
				<ul class="order-list" v-if="hasPay.length !== 0">
					<li  v-for="item in hasPay" :key="item.id">
						<div class="order-title">
							<div class="left">
								<img src="../../assets/images/milogo.png" alt="" />
								<span class="title">小米自营</span>
							</div>
							<span class="right" v-text="nowStatus(item)"></span>
						</div>
						<div class="product-wrapper">
							<div class="detail-product" v-for="item2 in item.details" :key="item2.id">
								<img :src="item2.avatar" alt="" />
								<div class="right">
									<div class="name-price">
										<span class="name" v-text="item2.name"></span>
										<span class="price" v-text="`￥${ item2.price.toFixed(2)} `"></span>
									</div>
									<span class="count" v-text="`x${ item2.count }`"></span>
								</div>
							</div>
						</div>
						<div class="account-wrapper">
					<span class='text'>共有<span class="num" v-text="total(item.orderId)"></span>商品，
					总金额<span class="account" v-text="`￥${ item.account.toFixed(2) }`"> </span></span>
						</div>
						<div class="btn-wrapper two" :class="{ active: item.pay }">
							<span class="btn-delete" @click="remove(item.orderId)">删除订单</span>
							<span class="btn-refund" @click="$alert('进我口袋的钱还想要回去，没门！')">退款</span>
						</div>
					</li>
				</ul>
				<div class="wrapper" v-else>
					<img src="../../assets/images/order/no_result_order.png" alt="" />
					<span>目前没有待收货订单</span>
				</div>
				<span class="num"></span>
			</div>

			<div class="content-wrapper refund" :class="{ active: index === 4}">
				<ul class="order-list"></ul>
				<div class="wrapper">
					<img src="../../assets/images/order/no_result_order.png" alt="" />
					<span>目前没有退款订单</span>
				</div>
			</div>

			<div class="content-wrapper receive" :class="{ active: index === 5}">
				<ul class="order-list"></ul>
				<div class="wrapper">
					<img src="../../assets/images/order/no_result_order.png" alt="" />
					<span>目前没有已收货订单</span>
				</div>
			</div>

			<div class="recommend">
				<img src="../../assets/images/recheader_left.png" alt="" class="left"/>
				<span>为你推荐</span>
				<img src="../../assets/images/recheader_right.png" alt="" class="right"/>
			</div>

			<div class="scroll">
				<div class="content">
					<ul class="product-list card">
						<li>
							<a href='#'>
								<div class='image-wrapper'>
									<img src='../../assets/images/product/01.png' />
								</div>
								<div class='content-wrapper'>
									<span class='name ellipsis'>小米电视4A 55英寸</span>
									<span class='brief ellipsis'>极致超窄边框，4K超高清，蓝牙语音遥控，人工智能操作系统</span>
									<span class='price'>￥1599</span>
									<div class='bottom'>
										<span class='rate'>2474条评论</span>
										<span class='sale'>销量：534件</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<div class='image-wrapper'>
									<img src='../../assets/images/product/02.png' />
								</div>
								<div class='content-wrapper'>
									<span class='name ellipsis'>小米电视4C 32英寸</span>
									<span class='brief ellipsis'>卧室推荐，人工智能系统</span>
									<span class='price'>￥599</span>
									<div class='bottom'>
										<span class='rate'>2887条评论</span>
										<span class='sale'>销量：245件</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<div class='image-wrapper'>
									<img src='../../assets/images/product/03.png' />
								</div>
								<div class='content-wrapper'>
									<span class='name ellipsis'>小米电视4A 60英寸</span>
									<span class='brief ellipsis'>4K HDR 超高清/ 人工智能语音 / 2G+8G大存储</span>
									<span class='price'>￥1899</span>
									<div class='bottom'>
										<span class='rate'>688条评论</span>
										<span class='sale'>销量：65件</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<div class='image-wrapper'>
									<img src='../../assets/images/product/04.png' />
								</div>
								<div class='content-wrapper'>
									<span class='name ellipsis'>小米电视4C 43英寸</span>
									<span class='brief ellipsis'>人工智能，钢琴烤漆，杜比音效，杜比音效，海量片源</span>
									<span class='price'>￥999</span>
									<div class='bottom'>
										<span class='rate'>2738条评论</span>
										<span class='sale'>销量：1000件</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                name: 'Order',
	        data() {
                        return {
                                index: 1,
	                        orderList: [],
	                        time: []
                        };
	        },
	        computed: {
			noPay() {
			        return this.orderList.filter(item => !item.pay&& !item.isValid);
			},
		        hasPay() {
                                return this.orderList.filter(item => item.pay);
		        }
	        },
                methods: {
                        nowStatus(order) {
                                if(order.pay) return '待收货';
                                else if(order.isValid) return '已取消';
                                else return "未付款";
                        },
	                reBuy(order) {
				let cartList = [];
				let reProduct = {};
				let ids = [];
				order.details.forEach(item =>  {
				        ids.push(item.id);
					reProduct.id = item.id;
                                        reProduct.count = item.count;
                                        cartList.push(reProduct);
				});
		                // 向购物车中添加商品
                                cartList.forEach(item => {
                                        this.$http({
                                                method: 'post',
                                                url: '/cart/add',
                                                data: {
                                                        pid: item.id,
	                                                count: item.count
                                                }
                                        })
                                                .then(data => {});
                                });
				// 删除这条订单记录
                                this.$http({
                                        method: 'get',
                                        url: '/order/remove/' + order.orderId
                                })
                                        .then(data => {
						this.$router.push('/cart');
                                        });
	                },
                        total(id){
                                let count = 0;
                                this.orderList.find(item => item.orderId === id).details.forEach(
                                        item => count += item.count
                                );
                                return count;
                        },
		        changeIndex(i) {
                                if(this.index === i) return;
                                this.index = i;
		        },
		        remove(id) {
                                this.$http({
	                                method: 'get',
	                                url: '/order/remove/' + id
                                })
	                                .then(data => {
	                                        this.$alert('删除成功');
	                                        let i = this.orderList.findIndex(item => item.orderId === id);
	                                        this.orderList.splice(i,1);
	                                });
		        },
		        payMoney(id) {
				this.$cookies.set('orderId', id);
				this.$router.push({ path: '/pay', query: { back: this.$route.path } });
		        },
		        getTimer(order) {
                                let endTime = new Date(order.orderTime).getTime() + 2*3600*1000;
                                let j = this.orderList.findIndex(item => item.orderId === order.orderId);
                                this.$nextTick(() => {
                                        let timer=null;
                                        timer = setInterval(() => {
                                                let diff = endTime - new Date().getTime();
                                                if(diff <= 0) {
                                                        clearInterval(timer);
                                                        order.isValid = true;
                                                        this.orderList.splice(j,1,order);
                                                        return;
                                                }
                                                let hourTen = 0;
                                                let hourBit = parseInt(diff / 3600000) ;
                                                let minuteTen = parseInt(diff % 3600000 / 60000 / 10);
                                                let minuteBit = parseInt(diff % 3600000 / 60000 % 10);
                                                let secondTen = parseInt(diff % 3600000 % 60000 / 1000 / 10);
                                                let secondBit = parseInt(diff % 3600000 % 60000 / 1000 % 10);
                                                order.time =`${ hourTen }${ hourBit }:${ minuteTen }${ minuteBit }:${ secondTen }${ secondBit }`;
	                                        this.orderList.splice(j,1,order);
                                        }, 1000);
                                }, 2000);
		        },
	        },
                async created() {
			this.$http({
				method: 'get',
				url: '/order/list_all'
			})
				.then(data => {
                                        this.orderList = data;
                                        this.orderList.forEach(item => {
                                                item.isValid = false;
                                                item.time = '';
                                        });
                                });
	        },
	        updated() {
                        this.orderList.filter(item => !item.isValid&&!item.pay).forEach(item =>this.getTimer(item));
	        },
        };
</script>

<style  scoped>
	.page-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.page-container>.page-top {
		flex-shrink: 0;
		height: 85px;
		display: flex;
		flex-direction: column;
		background-color: rgba(244,244,244);
	}

	.page-top>.top {
		flex-shrink: 0;
		height: 45px;
		display: flex;
		align-items: center;
		position: relative;
	}

	.page-top>.top>span.title {
		flex-grow: 1;
		text-align: center;
		margin: 0 45px;
		font-size: 16px;
	}

	.page-top>.top>img {
		position: absolute;
		top: 0;
	}

	.page-top>.top>img.back {
		left: 0;
		width: 39px;
	}

	.page-top>.top>img.search {
		right: 0;
		width: 16px;
		padding: 10px;
	}

	.page-top>.bottom {
		flex-shrink: 0;
		height: 40px;
		display: flex;
	}

	.page-top>.bottom>ul.title-wrapper {
		flex-grow: 1;
		height: 100%;
		display: flex;
	}

	ul.title-wrapper>li {
		flex-basis: 0;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	ul.title-wrapper>li>span.title {
		flex-shrink: 0;
		font-size: 13px;
		color: rgba(102,102,102);
	}

	ul.title-wrapper>li>span.title.active {
		padding: 0 10px;
		font-size: 13px;
		color: white;
		background-color: rgba(223,180,87);
		border-radius: 10px;
	}

	ul.title-wrapper>li>span.num {
		position: absolute;
		top: 5px;
		right: 0;
		width: 16px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		font-size: 11px;
		background-color: rgba(191,17,17);
		color: white;
		border-radius: 50%;
	}


	.page-container>.page-content {
		flex-grow: 1;
		background-color: rgba(244,244,244);
		display: flex;
		flex-direction: column;
		overflow: auto;
	}

	.page-content>.content-wrapper {
		flex-grow: 1;
		display: none;
		flex-direction: column;
		margin: 0 10px;
	}

	.page-content>.content-wrapper.active {
		display: flex;
	}

	.page-content>.content-wrapper>.head {
		flex-shrink: 0;
		height: 24px;
		background-color: white;
		border-radius: 10px;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.page-content>.content-wrapper>.head>img {
		flex-shrink: 0;
	}

	.page-content>.content-wrapper>.head>img.left {
		height: 21px;
	}

	.page-content>.content-wrapper>.head>img.right {
		height: 12px;
	}

	.page-content>.content-wrapper>ul.order-list {
		flex-grow: 1;
		display: flex;
		padding: 5px 0;
		flex-direction: column;
	}

	ul.order-list>li {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		padding: 0 10px;
		background-color: white;
		border-radius: 10px;
		margin-bottom: 10px;
	}

	ul.order-list>li>.order-title {
		flex-shrink: 0;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul.order-list>li>.order-title>.left {
		flex-shrink: 0;
		width: 92px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul.order-list>li>.order-title>.left>img {
		flex-shrink: 0;
		width: 25px;
	}

	ul.order-list>li>.order-title>.left>span.title {
		flex-shrink: 0;
		font-size: 14px;
		font-weight: bold;
		color: rgba(51,51,51);
	}

	ul.order-list>li>.order-title>span.right {
		font-size: 14px;
		flex-shrink: 0;
		color: rgba(153,153,153);
	}

	ul.order-list>li>.product-wrapper {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	ul.order-list>li>.product-wrapper>.detail-product {
		flex-shrink: 0;
		height: 114px;
		padding: 12px 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	ul.order-list>li>.product-wrapper>.detail-product>img {
		flex-shrink: 0;
		width: 90px;
		background-color: rgba(244,244,244);
	}

	ul.order-list>li>.product-wrapper>.detail-product>.right {
		flex-grow: 1;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-left: 10px;
	}

	ul.order-list>li>.product-wrapper>.detail-product>.right>.name-price {
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
	}

	ul.order-list>li>.product-wrapper>.detail-product>.right>.name-price>span {
		flex-shrink: 0;
		line-height: 24px;
	}

	ul.order-list>li>.product-wrapper>.detail-product>.right>.name-price>span.name {
		font-size: 15px;
		color: rgba(51,51,51);
	}

	ul.order-list>li>.product-wrapper>.detail-product>.right>.name-price>span.price {
		font-size: 13px;
		color: rgba(153,153,153);
	}

	ul.order-list>li>.product-wrapper>.detail-product>.right>span.count {
		align-self: flex-end;
		font-size: 13px;
		line-height: 24px;
		color: rgba(153,153,153);
	}

	ul.order-list>li>.account-wrapper {
		flex-shrink: 0;
		height: 39px;
		padding: 10px 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	ul.order-list>li>.account-wrapper>span.text {
		flex-grow: 1;
		font-size: 12px;
		color: rgba(51,51,51);
		text-align: right;
	}

	ul.order-list>li>.account-wrapper>span.text>span {
		color: rgba(191,17,17);
		font-size: 13px;
	}

	ul.order-list>li>.btn-wrapper {
		flex-shrink: 0;
		height: 48px;
		display: none;
		justify-content: space-between;
		align-items: center;
	}

	ul.order-list>li>.btn-wrapper.active {
		display: flex;
	}

	ul.order-list>li>.btn-wrapper>span {
		flex-shrink: 0;
		font-size: 14px;
		color: rgba(191,17,17);
	}

	ul.order-list>li>.btn-wrapper>span.btn-delete {
		color: rgba(153,153,153);
	}

	ul.order-list>li>.btn-wrapper>span.btn-rebuy {
		width: 76px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: rgba(191,17,17);
		border: 1px solid rgba(191,17,17);
		border-radius: 14px;
	}

	ul.order-list>li>.btn-wrapper>span.btn-pay {
		width: 76px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: rgba(191,17,17);
		border: 1px solid rgba(191,17,17);
		border-radius: 14px;
	}

	ul.order-list>li>.btn-wrapper>span.btn-refund {
		width: 76px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: rgba(191,17,17);
		border: 1px solid rgba(191,17,17);
		border-radius: 14px;
	}

	.page-content>.content-wrapper>.wrapper {
		flex-shrink: 0;
		height: 198px;
		padding: 40px 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.page-content>.content-wrapper>.wrapper>img {
		flex-shrink: 0;
		width: 90px;
	}

	.page-content>.content-wrapper>.wrapper>span {
		flex-shrink: 0;
		margin-top: 13px;
		font-size: 12px;
		color: rgba(102,102,102);
	}

	.recommend {
		flex-shrink: 0;
		height: 42px;
		margin: 10px 0;
		background-color: rgba(244,244,244);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.recommend>img {
		width: 18px;
	}

	.recommend>span {
		font-size: 15px;
		color: rgba(51,51,51);
		font-weight: bold;
		padding: 0 8px;
	}

	.scroll-content>.scroll {
		flex-shrink: 0;
		background-color: rgba(244,244,244);
		display: flex;
		flex-direction: column;
	}

	.scroll>.content {
		flex-grow: 1;
		display: flex;
	}

	.scroll>.content>ul.product-list.card {
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
		padding: 5px;
		box-sizing: border-box;
	}

	.scroll>.content>ul.product-list.card>li {
		flex-shrink: 0;
		width: 50%;
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.scroll>.content>ul.product-list.card>li>a {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: white;
	}

	.scroll>.content>ul.product-list.card>li>a>.image-wrapper {
		flex-shrink: 0;
		height: 172px;
		align-self: center;
		background-color: rgba(250,250,250);
	}

	.scroll>.content>ul.product-list.card>li>a>.image-wrapper>img {
		width: 100%;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		padding: 5px;
		box-sizing: border-box;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper>span {
		flex-shrink: 0;
		font-size: 11px;
		margin-bottom: 5px;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper>span.name {
		color: black;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper>span.brief {
		color: #666666;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper>span.price {
		color: #FF0000;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper>.bottom {
		margin-bottom: 5px;
		font-size: 11px;
		color: #666666;
	}

	.scroll>.content>ul.product-list.card>li>a>.content-wrapper>.bottom>span {
		margin-right: 10px;
	}
</style>