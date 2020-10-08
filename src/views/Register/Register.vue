<template>
	<div class="page-container">
		<div class="page-top">
			<span class="title">注册小米账号</span>
			<img src="../../assets/images/help.png" alt=""/>
		</div>
		<div class="page-content">
			<form action="" class="content">
				<div class="phone-wrapper wrapper">
					<span class="title">+86 &gt;</span>
					<input type="text" class="phone" placeholder="请输入手机号" v-model="phone"/>
				</div>
				<div class="name-wrapper wrapper">
					<span class="title">name &gt;</span>
					<input type="text" class="name" placeholder="请输入用户名" v-model="name"/>
				</div>
				<div class="pwd-wrapper wrapper">
					<span class="title">pwd &gt;</span>
					<input type="password" class="pwd" datatype='pwd' placeholder="请输入密码" v-model="pwd"/>
				</div>
				<div class="repwd-wrapper wrapper">
					<span class="title">repwd &gt;</span>
					<input type="password" class="repwd" placeholder="请再次输入密码" v-model="rePwd"/>
				</div>
				<div class="code-wrapper wrapper">
					<span class="title">code &gt;</span>
					<input type="text" class="code" placeholder="请输入验证码" v-model="code"/>
					<span class="icon-code" @click="getCode" v-text="codeStr || '获取验证码'"></span>
				</div>
				<span class="protocol">已阅读并同意：小米用户协议和隐私政策</span>
				<span class="btn-register" @click="register">立即注册</span>
			</form>
			<div class="bottom">
				<ul class="wrapper">
					<li>
						<span>简体</span>|
					</li>
					<li>
						<span>繁体</span>|
					</li>
					<li>
						<span>English</span>|
					</li>
					<li>
						<span>常见问题</span>
					</li>
				</ul>
			</div>
		</div>
		<img src="../../assets/images/back.png" class="back" @click="$router.push('/login')"/>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                name: 'Register',
	        data() {
                        return {
                                name: '',
	                        pwd: '',
	                        phone: '',
	                        rePwd: '',
	                        code: '',
	                        codeStr: ''
                        };
	        },
	        methods: {
                        getCode() {
                                if(this.codeStr) this.codeStr = '';
                                let codes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
                                        'R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
                                for(let i = 0; i < 4; i++) {
                                        this.codeStr += codes[Math.floor(Math.random()*codes.length)];
                                }
                        },
                        register() {
                                this.$http({
	                                method: 'get',
	                                url: '/user/check_name/' + this.name
                                })
	                                .then(data => {});
                                this.$http({
                                        method: 'get',
                                        url: '/user/check_name/' + this.phone
                                })
                                        .then(data => {});
                                if(this.pwd !== this.rePwd) this.$alert('两次密码不一致');
                                if(this.code.toUpperCase() !== this.codeStr) this.$alert('验证码错误');
                                this.$http({
                                        method: 'post',
                                        url: '/user/register',
	                                data: {
                                                name: this.name,
		                                pwd: this.pwd,
		                                phone: this.phone
	                                }
                                })
                                        .then(data => {
                                                this.$router.push('/login');
                                        });
                        }
	        }
        };
</script>

<style lang="stylus" type="text/stylus" scoped>
	.page-container
		width: 100%
		height: 100%
		display: flex
		flex-direction: column
		.page-top
			flex-shrink: 0
			height: 105px
			padding: 35px 0 30px
			box-sizing: border-box
			display: flex
			justify-content: center
			align-items: center
			position: relative
			span.title
				line-height: 40px
				font-size: 24px
				color: rgb(0,0,0,0.8)
			img
				position: absolute
				top: 12px
				right: 12px
				width: 24px
		.page-content
			flex-grow: 1
			display: flex
			flex-direction: column
			.content
				flex-shrink: 0
				display: flex
				flex-direction: column
				padding: 0 27px
				.wrapper
					flex-shrink: 0
					height: 53px
					background-color: rgba(0,0,0,0.06)
					border-radius: 18px
					padding: 0 10px
					flex-wrap: wrap
					display: flex
					align-items: center
					margin-bottom: 30px
					position: relative
					span.title
						flex-shrink: 0
						width: 70px
						color: #9B9B9B
						text-align: right
					input
						padding-left: 10px
						flex-grow: 1
						height: 100%
					span.icon-code
						position: absolute
						right: 10px
						top: 6px
						width: 80px
						height: 20px
						padding: 10px
						background-color: rgb(191,17,17)
						white-space: nowrap
						border-radius: 10px
						color: white
						text-align: center
						z-index: 99
				span.protocol
					flex-shrink: 0
					height: 16px
					font-size: 12px
					color: #9B9B9B
				span.btn-register
					flex-shrink: 0
					height: 47px
					line-height: 47px
					font-weight: bold
					background-color: #ff6700
					color: white
					margin: 15px 0
					text-align: center
					border-radius: 47px
			.bottom
				flex-shrink: 0
				height: 21px
				display: flex
				justify-content: center
				align-items: center
				ul.wrapper
					flex-grow: 1
					display: flex
					justify-content: center
					li
						flex-shrink: 0
						text-align: center
						span
							font-size: 13px
							padding: 0 10px
							color: #9b9b9b

		img.back
			position: absolute
			left: 0
			top: 0
			width: 45px

</style>