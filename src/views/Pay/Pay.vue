<template>
	<div class="container-wrapper">
		<div class="page-container">
			<div class="page-top">
				<span class="title">有品收银台</span>
				<img src="../../assets/images/back.png" alt="" class="back" @click="back"/>
			</div>
			<div class="page-content">
				<div class="content-top">
					<span class="account" v-text="`￥${ account }`"></span>
					<span class="timer" v-text="time"></span>
				</div>
				<div class="content-pay">
					<div class="pay-top">
						<img src="../../assets/images/pay/pay_alipay.png" alt="" class="pay" />
						<span class="title">支付宝</span>
						<span class="recommend">推荐</span>
						<img src="../../assets/images/icon_uncheck.png" alt="" class="checkbox unchecked" :class="{ active: isChecked }" @click="isChecked = !isChecked"/>
						<img src="../../assets/images/icon_check_red.png" alt="" class="checkbox checked" :class="{ active: !isChecked }" @click="isChecked = !isChecked"/>
					</div>
					<div class="pay-bottom">
						<img src="../../assets/images/pay/pay_mipay.png" alt="" class="pay" />
						<span class="title">小米钱包</span>
						<img src="../../assets/images/icon_uncheck.png" alt="" class="checkbox unchecked" :class="{ active: !isChecked }" @click="isChecked = !isChecked"/>
						<img src="../../assets/images/icon_check_red.png" alt="" class="checkbox checked"  :class="{ active: isChecked }"  @click="isChecked = !isChecked"/>
					</div>
				</div>
			</div>
			<div class="page-footer" @click="isPop = true">
				<span class="btn-pay">确认支付<span class="account" v-text="`￥${ account }`"></span></span>
			</div>
		</div>
		<div class="pay-wrapper" :class="{ active: isPop }">
			<img src="../../assets/images/pay/pay.jpg" alt=""/>
			<span class="account" v-text="`￥${ account }`"></span>
			<div class="btn-wrapper">
				<span class="pay" @click="pay" v-text="isPay ? '已支付' : '确认支付' "></span>
				<span class="cancel" @click="isPop = false">取消</span>
			</div>
			<i class="iconfont icon-searchclose close" @click="isPop = false"></i>
		</div>
		<div class="curtain" :class="{ active: isPop }" @click="isPop = false"></div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                name: 'Pay',
	        data() {
			return {
                                id: this.$cookies.get('orderId'),
				account: 0,
				time: '',
                                startTime: 0,
                                endTime: 0,
                                timer: null,
				isChecked: false,
				isPop: false,
                                isPay: false,
			};
	        },
	        methods: {
                        pay() {
                                this.$http({
	                                method: 'get',
	                                url: '/order/pay/' + this.id,
                                })
	                                .then(data => {
                                                if(this.timer) clearInterval(this.timer);
                                                this.isPay = true;
                                                this.$alert('支付成功');
	                                });
                        },
		        back() {
                                if(!this.isPay) this.$alert('您还没有付款，确定要离开支付页面吗？');
                                this.$router.push('/order');
		        }
	        },
	        created() {
			this.$http({
				method: 'get',
				url: '/order/account/' + this.id,
			})
				.then(data => this.account = data.toFixed(2));
                        this.$http({
                                method: 'get',
                                url: '/order/list_all'
                        })
                                .then(data => {
                                        this.startTime = new Date(data.find(item => item.orderId === this.id).orderTime).getTime();
                                        this.endTime = this.startTime + 2*3600*1000;
                                });
	        },
	        mounted() {
                        this.$nextTick(() => {
                                this.timer = setInterval(() => {
                                        let diff = this.endTime - new Date().getTime();
                                        if(diff <= 0) {
                                                clearInterval(this.timer);
                                                return;
                                        }
                                        let hourTen = 0;
                                        let hourBit = parseInt(diff / 3600000) ;
                                        let minuteTen = parseInt(diff % 3600000 / 60000 / 10);
                                        let minuteBit = parseInt(diff % 3600000 / 60000 % 10);
                                        let secondTen = parseInt(diff % 3600000 % 60000 / 1000 / 10);
                                        let secondBit = parseInt(diff % 3600000 % 60000 / 1000 % 10);
                                        this.time = `支付剩余时间${ hourTen }${ hourBit }:${ minuteTen }${ minuteBit }:${ secondTen }${ secondBit }`;
                                }, 1000);
                        }, 200);
	        },
	        destroyed() {
                        if(this.timer) {
                                clearInterval(this.timer);
                        }
	        }

        };
</script>

<style scoped>
	.container-wrapper {
		width: 100%;
		height: 100%;
	}
	.page-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.page-container>.page-top {
		flex-shrink: 0;
		height: 45px;
		background-color: rgba(244,244,244);
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.page-top>span.title {
		font-size: 16px;
		margin: 0 45px;
	}

	.page-top>img.back {
		position: absolute;
		left: 0;
		top: 0;
		width: 39px;
	}

	.page-container>.page-content {
		flex-grow: 1;
		background-color: rgba(244,244,244);
		display: flex;
		flex-direction: column;
	}

	.page-content>.content-top {
		flex-shrink: 0;
		margin-top: 12px;
		height: 75px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.page-content>.content-top>span.account {
		flex-shrink: 0;
		font-size: 24px;
		color: rgba(215,29,29);
	}

	.page-content>.content-top>span.timer {
		flex-shrink: 0;
		font-size: 12px;
		color: rgba(215,29,29);
	}

	.page-content>.content-pay {
		flex-shrink: 0;
		height: 120px;
		background-color: white;
		display: flex;
		flex-direction: column;
		margin: 0 10px;
		border-radius: 10px;
	}

	.page-content>.content-pay>.pay-top {
		flex-shrink: 0;
		height: 60px;
		border-bottom: 1px solid rgba(224,224,224);
		display: flex;
		align-items: center;
		padding-right: 10px;
		position: relative;
	}

	.page-content>.content-pay>.pay-top>img.pay {
		flex-shrink: 0;
		width: 30px;
		margin: 0 10px;
	}

	.page-content>.content-pay>.pay-top>span.title {
		flex-shrink: 0;
		margin-right: 8px;
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.content-pay>.pay-top>span.recommend {
		flex-shrink: 0;
		font-size: 9px;
		background-color: rgba(191,17,17);
		color: white;
		border-radius: 10px;
		width: 30px;
		height: 15px;
		line-height: 15px;
		text-align: center;
	}

	.page-content>.content-pay>.pay-top>img.checkbox {
		flex-shrink: 0;
		display: none;
		width: 16px;
		text-align: left;
		position: absolute;
		right: 10px;
		top: calc(50% - 8px);
	}

	.page-content>.content-pay>.pay-top>img.checkbox.active {
		display: block;
	}

	.page-content>.content-pay>.pay-bottom {
		flex-shrink: 0;
		height: 60px;
		display: flex;
		align-items: center;
		padding-right: 10px;
		position: relative;
	}

	.page-content>.content-pay>.pay-bottom>img.pay {
		flex-shrink: 0;
		width: 30px;
		margin: 0 10px;
	}

	.page-content>.content-pay>.pay-bottom>span.title {
		flex-shrink: 0;
		margin-right: 8px;
		font-size: 14px;
		color: rgba(51,51,51);
	}

	.page-content>.content-pay>.pay-bottom>img.checkbox {
		flex-shrink: 0;
		display: none;
		width: 16px;
		text-align: left;
		position: absolute;
		right: 10px;
		top: calc(50% - 8px);
	}

	.page-content>.content-pay>.pay-bottom>img.checkbox.active {
		display: block;
	}


	.page-container>.page-footer {
		flex-shrink: 0;
		height: 54px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.page-footer>span.btn-pay {
		flex-shrink: 0;
		width: 345px;
		font-weight: 500;
		font-size: 15px;
		text-align: center;
		padding: 8px 0;
		background-color: rgba(191,17,17);
		color: white;
		border-radius: 20px;
	}

	.pay-wrapper {
		position: fixed;
		left: 10%;
		top: 25%;
		background-color: white;
		width: 300px;
		height: 300px;
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.pay-wrapper.active {
		display: flex;
		z-index: 50;
	}

	.pay-wrapper>img {
		flex-basis: 0;
		width: 50%;
		margin-top: 20px;
	}

	.pay-wrapper>span.account {
		flex-basis: 0;
		font-size: 24px;
		font-weight: 400;
		color: rgba(191,17,17);
	}

	.pay-wrapper>.btn-wrapper {
		margin-bottom: 20px;
		flex-shrink: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.pay-wrapper>.btn-wrapper>span.pay {
		flex-shrink: 0;
		background-color: rgba(191,17,17);
		color: white;
		padding: 5px 15px;
		border-radius: 15px;
	}

	.pay-wrapper>.btn-wrapper>span.cancel {
		flex-shrink: 0;
		background-color: rgba(191,17,17);
		color: white;
		padding: 5px 15px;
		border-radius: 15px;
	}

	.pay-wrapper>i.close {
		position: absolute;
		right: 5px;
		top: 5px;
		font-size: 32px;
	}

	.curtain {
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.2);
		width: 100%;
		height: 100%;
		display: none;
	}

	.curtain.active {
		display: block;
		z-index: 49;
	}
</style>