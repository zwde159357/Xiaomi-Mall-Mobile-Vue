<template>
	<div class="mi-cart">
		<div class="page-top">
			<i class="iconfont icon-arrow-left"></i>
			<span class="title">购物车</span>
			<span class="edit" v-text="isEdit? '完成' : '编辑' "></span>
		</div>

		<div class="page-content hide-scroll">
			<div class="scroll-content">
				<div class="detail-wrapper" v-show="cartList.length !== 0">
					<div class="detail">
						<div class="detail-top">
							<i class="iconfont icon-arrow-left" @click="$router.back()"></i>
							<span class="title">购物车</span>
							<span class="edit" @click="isEdit = !isEdit" v-text="isEdit? '完成' : '编辑' "></span>
						</div>
						<div class="cart-top">
							<div class="left-wrapper normal active" v-show="!isEdit">
								<img src="../../assets/images/icon_check_red.png" alt="" class='checked all' v-show="isAllChecked" @click="changeCheckedAll"/>
								<img src="../../assets/images/icon_uncheck.png" alt="" class="unchecked all" v-show="!isAllChecked" @click="changeCheckedAll"/>
								<span>小米自营</span>
							</div>
							<div class="left-wrapper edit"  v-show="isEdit">
								<img src="../../assets/images/icon_check_red.png" alt="" class='checked all' v-show="isAllChecked2" @click="changeCheckedAll2"/>
								<img src="../../assets/images/icon_uncheck.png" alt="" class="unchecked all active" v-show="!isAllChecked2" @click="changeCheckedAll2"/>
								<span>小米自营</span>
							</div>
							<div class="right-wrapper">
								<img src="../../assets/images/icon_tip_black.png" alt="" />
								<span class="detail">已免运费</span>
							</div>
						</div>
						<div class="wrapper">
							<ul class="cart-list">
								<li v-for="item in cartList" :key="item.id">
									<div class="detail">
										<div class="image active normal" v-show="!isEdit">
											<img src="../../assets/images/icon_check_red.png" alt="" class="checkbox checked" v-show="item.isChecked"  @click='item.isChecked = !item.isChecked'/>
											<img src="../../assets/images/icon_uncheck.png" alt="" class="checkbox unchecked" v-show="!item.isChecked" @click='item.isChecked = !item.isChecked'/>
										</div>
										<div class="image edit" v-show="isEdit">
											<img src="../../assets/images/icon_check_red.png" alt="" class="checkbox  checked" v-show="item.isChecked2"  @click='item.isChecked2 = !item.isChecked2'/>
											<img src="../../assets/images/icon_uncheck.png" alt="" class="checkbox unchecked active" v-show="!item.isChecked2" @click='item.isChecked2 = !item.isChecked2'/>
										</div>
										<router-link to=''>
											<div class="product">
												<img :src="`${item.avatar}`" alt="" class="left"/>
												<div class="text">
													<span class="name" v-text="item.name"></span>
													<div class="price-count">
														<span class="price" v-text="`￥${ item.price }`"></span>
														<MiCount @increase="increase(item.id)" @decrease="decrease(item.id)" :count="item.count" :max-count="8"></MiCount>
													</div>
												</div>
											</div>
										</router-link>
									</div>
									<div class="service">
										<span class="left">服务</span>
										<span class="middle">安装服务|延长保障</span>
										<span class="right">选服务</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="detail-empty" v-show="cartList.length === 0">
					<img src="../../assets/images/no_result_cart.png" alt="" />
					<span class="text">购物车还没有商品~</span>
					<router-link class="btn-go" to="/category">去逛逛</router-link>
				</div>
				<!-- 推荐 -->
				<div class="recommend">
					<img src="../../assets/images/recheader_left.png" alt="" class="left"/>
					<span>为你推荐</span>
					<img src="../../assets/images/recheader_right.png" alt="" class="right"/>
				</div>
				<div class="scroll">
					<div class="content">
						<ul class="product-list card">
							<li v-for="item in staticData" :key="item.id">
								<router-link to="/">
									<div class='image-wrapper'>
										<img :src='`${ item.avatar }`' />
									</div>
									<div class='content-wrapper'>
										<span class='name ellipsis' v-text="item.name"></span>
										<span class='brief ellipsis' v-text="item.brief"></span>
										<span class='price' v-text="item.price"></span>
										<div class='bottom'>
											<span class='rate' v-text="item.rate"></span>
											<span class='sale' v-text="item.sale"></span>
										</div>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="page-bottom normal" v-show="cartList && !isEdit">
			<div class="left">
				<div class="select-wrapper">
					<img src="../../assets/images/icon_check_red.png" alt="" class='checked all' v-show="isAllChecked" @click="changeCheckedAll"/>
					<img src="../../assets/images/icon_uncheck.png" alt="" class="unchecked all" v-show="!isAllChecked" @click="changeCheckedAll"/>
					<span>全选</span>
				</div>
				<div class="account-wrapper">
					<span class="title">合计：</span>
					<span class="account" v-text="`￥${ account }`"></span>
				</div>
			</div>
			<div class="right">
		<span class="button-settle" @click="settlement">
			结算<span class="count" v-text="`(${countAll})`" v-show="countAll"></span>
		</span>
			</div>
		</div>
		<div class="page-bottom" v-show="cartList && isEdit">
			<div class="left">
				<div class="select-wrapper">
					<img src="../../assets/images/icon_check_red.png" alt="" class='checked all' v-show="isAllChecked2" @click="changeCheckedAll2"/>
					<img src="../../assets/images/icon_uncheck.png" alt="" class="unchecked all active" v-show="!isAllChecked2" @click="changeCheckedAll2"/>
					<span>全选</span>
				</div>
			</div>
			<div class="right">
		<span class="button-settle" @click="deleteChecked">
			删除<span class="count" v-text="`(${countAll2})`" v-show="countAll2"></span>
		</span>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MiCount from '../../components/MiCount/MiCount.vue';

	export default {
	        name: "Cart",
		components: { MiCount },
                data: function() {
                        return {
                                cartList: [],
                                staticData: [
                                        { id: 1, avatar: 'images/product/01.png', name: '小米电视4A 55英寸',
                                                brief: '极致超窄边框，4K超高清，蓝牙语音遥控，人工智能操作系统', price: '￥1599',
                                                rate: '2474条评论', sale: '销量：534件'},
                                        { id: 2, avatar: 'images/product/02.png', name: '小米电视4C 32英寸',
                                                brief: '卧室推荐，人工智能系统', price: '￥599',rate: '2887条评论', sale: '销量：245件'},
                                        { id: 3, avatar: 'images/product/03.png', name: '小米电视4A 60英寸',
                                                brief: '4K HDR 超高清/ 人工智能语音 / 2G+8G大存储', price: '￥1899',rate: '688条评论',
                                                sale: '销量：65件'},
                                        { id: 4, avatar: 'images/product/04.png', name: '小米电视4C 43英寸',
                                                brief: '人工智能，钢琴烤漆，杜比音效，杜比音效，海量片源', price: '￥999',rate: '2738条评论',
                                                sale: '销量：1000件'}
                                ],
                                isEdit: false,				// 判断时候为编辑状态
                                index: true
                        };
                },
                methods: {
                        increase(id) {
                                this.$http({
                                        method: "post",
                                        url: "/cart/increase/" + id
                                })
                                        .then(data => {
                                                let count = this.cartList.find(item => item.id === id).count;
                                                this.cartList.find(item => item.id === id).count = count + 1;
                                                this.$alert('增加成功');
                                        });
                        },
                        decrease(id) {
                                this.$http({
                                        method: "post",
                                        url: "/cart/decrease/" + id,
                                })
                                        .then(data => {
                                                let count = this.cartList.find(item => item.id === id).count;
                                                this.cartList.find(item => item.id === id).count = count - 1;
                                                this.$alert('减少成功');
                                        });
                        },
                        changeCheckedAll() {
                                let flag = this.isAllChecked;
                                this.cartList.forEach(item => {
                                        item.isChecked = !flag
                                });
                        },
                        changeCheckedAll2() {
                                let flag = this.isAllChecked2;
                                this.cartList.forEach(item => {
                                        item.isChecked2 = !flag
                                });
                        },
                        deleteChecked() {
                                let ids = [];
                                // 删除选中的
                                this.cartList.forEach(item => {
                                        if(item.isChecked2)
                                                ids.push(item.id);
                                });
                                if(!ids.length) {
                                        this.$alert('请勾选');
                                        return;
                                }
                                this.$http({
                                        method: "post",
                                        url: "/cart/remove",
                                        data: { ids }
                                })
                                        .then(data => {
                                                ids.forEach(item => {
	                                                let i = this.cartList.findIndex(item2 => item2.id === item.id );
	                                                this.cartList.splice(i,1);
	                                                this.$alert('删除成功');
                                                });
                                        });
                        },
                        settlement() {
                                let ids = [];
                                // 删除选中的
                                this.cartList.forEach(item => {
                                        if(item.isChecked)
                                                ids.push(item.id);
                                });
                                if(!ids.length) {
                                        this.$alert('请勾选');
                                        return;
                                }
                                // 跳转至订单确认组件，并传id
                                this.$router.push({ path: "/order_confirm", query: { ids: ids.join(',') } });
                        }
                },
                computed: {
                        isAllChecked: function() {
                                return this.cartList.every(item => item.isChecked);
                        },
                        isAllChecked2: function() {
                                return this.cartList.every(item => item.isChecked2);
                        },
                        account: function() {
                                let account = 0;
                                this.cartList.forEach(item => {
                                        if(item.isChecked) {
                                                account += item.count * item.price;
                                        }
                                });
                                return account;
                        },
                        countAll: function() {
                                let count = 0;
                                this.cartList.forEach(item => {
                                        if(item.isChecked) {
                                                count += item.count;
                                        }
                                });
                                return count;
                        },
                        countAll2: function() {
                                let count = 0;
                                this.cartList.forEach(item => {
                                        if(item.isChecked2) {
                                                count += item.count;
                                        }
                                });
                                return count;
                        }
                },
                created() {
                        this.$http({
                                method: 'post',
                                url: '/cart/list',
                        })
                                .then(data => {
                                        let temp= data;
                                        temp.forEach(item => {
                                                item.isChecked = true;
                                                item.isChecked2 = false
                                        });
                                        this.cartList = JSON.parse(JSON.stringify(temp));
                                });
                }
	};
</script>

<style scoped>
	.mi-cart {
		width: 100%;
		height: 100%;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		align-items: center;
	}

	.mi-cart>.page-top {
		width: 100%;
		height: 45px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
		background-color: white;
		line-height: 45px;
		display: flex;
		justify-content: space-between;
		opacity: 0;
	}

	.page-top.active {
		opacity: 1;
		z-index: 99;
	}

	.page-top>i {
		margin-left: 10px;
	}

	.page-top>span.title {
		color: rgb(51,51,51);
	}

	.page-top>span.edit {
		margin-right: 10px;
		font-size: 13px;
	}

	.mi-cart>.page-content {
		flex-grow: 1;
		display: flex;
		overflow: auto;
	}

	.mi-cart>.page-content>.scroll-content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		background-color: rgb(244,244,244);
	}

	.scroll-content>.detail-wrapper {
		flex-grow: 1;
		display: flex;
	}

	.scroll-content>.detail-wrapper>.detail {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		background-image: url(../../assets/images/bg_page_header.png);
	}

	.scroll-content>.detail-wrapper .detail-top {
		flex-shrink: 0;
		height: 88px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.scroll-content>.detail-wrapper .detail-top>i {
		flex-shrink: 0;
		width: 42px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: rgb(244,255,255);
	}

	.scroll-content>.detail-wrapper .detail-top>span.title {
		flex-shrink: 0;
		font-size: 20px;
		color: white;
		font-weight: bold;
		width: 60px;
		height: 25px;
		line-height: 25px;
	}

	.scroll-content>.detail-wrapper .detail-top>span.edit {
		width: 57px;
		height: 28px;
		font-size: 14px;
		color: white;
		padding: 5px 5px 19px 0;
		box-sizing: border-box;
	}

	.scroll-content .cart-top {
		flex-shrink: 0;
		height: 44px;
		margin: 20px 10px 0;
		background-color: white;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.scroll-content .cart-top>.left-wrapper {
		flex-shrink: 0;
		padding-left: 10px;
		display: flex;
	}

	.scroll-content .cart-top>.left-wrapper>img {
		width: 18px;
		height: 18px;
	}


	.scroll-content .cart-top>.left-wrapper>span {
		font-size: 14px;
		color: rgb(51,51,51);
		margin-left: 7px;
	}

	.scroll-content .cart-top>.right-wrapper {
		flex-shrink: 0;
		padding-right: 10px;
		display: flex;
		align-items: center;
	}

	.scroll-content .cart-top>.right-wrapper>img {
		width: 12px;
		height: 12px;
	}

	.scroll-content .cart-top>.right-wrapper>span.detail {
		font-size: 11px;
		color: rgb(102,102,102);
		margin-left: 4px;
	}

	.scroll-content>.detail-wrapper>.detail>.wrapper {
		flex-shrink: 0;
		background-color: rgb(244,244,244);
	}

	.scroll-content ul.cart-list {
		flex-grow: 1;
		font-size: 0;
		display: flex;
		flex-direction: column;
		margin: 0 10px;
		background-color: white;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	ul.cart-list>li {
		flex-shrink: 0;
		height: 134px;
		padding: 0 10px;
		box-sizing: border-box;
	}

	ul.cart-list>li>.detail {
		flex-shrink: 0;
		height: 96px;
		display: flex;
		align-items: center;
		padding-top: 10px;
		box-sizing: border-box;
	}

	ul.cart-list>li>.detail>a {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	ul.cart-list>li>.detail>.image {
		flex-shrink: 0;
		width: 18px;
		padding-right: 10px;
	}

	ul.cart-list>li>.detail>.image>img {
		width: 18px;
		height: 18px;
		padding-right: 10px;
	}

	ul.cart-list>li>.detail>a>.product {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul.cart-list>li>.detail>a>.product>img {
		flex-shrink: 0;
		width: 86px;
		background-color: rgb(244,244,244);
	}

	ul.cart-list>li>.detail>a>.product>.text {
		flex-shrink: 0;
		width: 212px;
		height: 86px;
		display: flex;
		flex-direction: column;
	}

	ul.cart-list>li>.detail>a>.product>.text>span.name {
		flex-shrink: 0;
		height: 40px;
		text-align: left;
		color: rgba(51,51,51);
		line-height: 20px;
		font-size: 14px;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count {
		flex-shrink: 0;
		height: 21px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>span.price {
		flex-shrink: 0;
		width: 50px;
		font-size: 15px;
		text-align: left;
		color: rgba(191,17,17);
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count {
		flex-grow: 1;
		height: 21px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count>span {
		flex-shrink: 0;
		width: 21px;
		height: 21px;
		text-align: center;
		line-height: 21px;
		font-size: 13px;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count>span.btn-decrease {
		color: black;
		font-weight: bold;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count>span.btn-decrease.disabled {
		color: #DDDDDD;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count>span.content {
		width: 26px;
		color: rgba(51,51,51);
		background-color: #DDDDDD;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count>span.btn-increase {
		color: black;
		font-weight: bold;
	}

	ul.cart-list>li>.detail>a>.product>.text>.price-count>.count>span.btn-increase.disabled {
		color: #DDDDDD;
	}


	ul.cart-list>li>.service {
		flex-shrink: 0;
		height: 26px;
		padding-top: 10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul.cart-list>li>.service>span {
		font-size: 12px;
	}

	ul.cart-list>li>.service>span.left {
		flex-shrink: 0;
		width: 24px;
		font-weight: bold;
		color: rgb(187,158,144);
	}

	ul.cart-list>li>.service>span.middle {
		flex-grow: 1;
		text-align: left;
		margin-left: 5px;
		color: rgb(102,102,102);
	}

	ul.cart-list>li>.service>span.right {
		width: 43px;
		text-align: center;
		color: rgb(51,51,51);
		font-weight: bold;
	}

	.scroll-content>.recommend {
		flex-shrink: 0;
		height: 42px;
		margin: 10px 0;
		background-color: rgb(244,244,244);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.recommend>img {
		width: 18px;
	}

	.recommend>span {
		font-size: 15px;
		color: rgb(51,51,51);
		font-weight: bold;
		padding: 0 8px;
	}

	.scroll-content>.scroll {
		flex-shrink: 0;
		background-color: rgb(244,244,244);
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

	.mi-cart>.page-bottom {
		flex-shrink: 0;
		height: 54px;
		display: flex;
	}

	.page-bottom>.left {
		flex-shrink: 0;
		width: 262px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page-bottom>.left>.select-wrapper {
		flex-shrink: 0;
		display: flex;
		width: 63px;
		box-sizing: border-box;
		padding: 8px 0 8px 12px;
	}

	.page-bottom>.left>.select-wrapper>img {
		width: 18px;
		height: 18px;
	}

	.page-bottom>.left>.select-wrapper>span {
		font-size: 11px;
		margin-left: 8px;
		margin-top: 2px;
	}

	.page-bottom>.left>.account-wrapper {
		flex-grow: 1;
		text-align: right;
	}

	.page-bottom>.left>.account-wrapper>span.title {
		color: rgba(0,0,0,0.9);
		font-size: 13px;
		font-weight: bold;
	}

	.page-bottom>.left>.account-wrapper>span.account {
		display: inline-block;
		width: 100px;
		text-align: center;
		font-size: 16px;
		color: rgb(191,17,17);
	}

	.page-bottom>.right {
		flex-grow: 1;
		margin-right: 10px;
		width: 96px;
		display: flex;
		align-items: center;
	}

	.page-bottom>.right>span.button-settle {
		margin-left: 2px;
		display: inline-block;
		width: 96px;
		height: 38px;
		border-radius: 19px;
		line-height: 38px;
		text-align: center;
		color: white;
		background: linear-gradient(to right, rgb(240, 78, 46), rgb(213, 16, 16));
	}

	.page-content>.scroll-content>.detail-empty {
		flex-shrink: 0;
		height: 246px;
		padding: 40px 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.page-content>.scroll-content>.detail-empty>img {
		flex-shrink: 0;
		height: 90px;
	}

	.page-content>.scroll-content>.detail-empty>span.text {
		flex-shrink: 0;
		padding-top: 13px;
		font-size: 12px;
		color: rgb(102,102,102);
	}

	.page-content>.scroll-content>.detail-empty>a.btn-go {
		flex-shrink: 0;
		color: rgb(102,102,102);
		font-size: 13px;
		margin-top: 10px;
		padding: 8px 14px;
		border: 1px solid rgb(102,102,102);
		border-radius: 16px;
	}
</style>