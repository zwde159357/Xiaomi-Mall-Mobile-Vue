<template>
	<div class='page-container'>
		<div class="page-content">
			<div class="title">
				<span>欢迎登录小米有品</span>
			</div>
			<div class="input-area">
				<router-view></router-view>
			</div>
			<div class="button-wrapper">
				<router-link to="/login/pwd" v-show="$route.path === '/login/phone' " class="switch">用户名密码登录</router-link>
				<router-link to="/login/phone" v-show="$route.path === '/login/pwd' " class="switch">手机验证码登录</router-link>
			</div>
			<div class="no-code" v-show="$route.path === '/login/phone' ">收不到验证码？</div>
			<div class="go-to-register" v-show="$route.path === '/login/pwd' ">
				<router-link to="/register">立即注册</router-link> |
				<router-link to="">忘记密码?</router-link>
			</div>
			<div class="other-login">
				<span>其他登录方式</span>
				<ul>
					<li>
						<router-link to="">
							<i class="one"></i>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<i class="two"></i>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<i class="three"></i>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<i class="four"></i>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="page-bottom">
			<ul>
				<li><a href="#">简体</a></li>
				<li><a href="#">繁体</a></li>
				<li><a href="#">English</a></li>
				<li><a href="#">常见问题</a></li>
				<li><a href="#">隐私政策</a></li>
			</ul>
		</div>
		<img src="../../assets/images/back.png" class="back" @click="$router.push('/profile')"/>
		<img src="../../assets/images/help.png" class="help" />
	</div>
</template>

<script type="text/ecmascript-6">

	export default {
		name: "Login"
	};
</script>

<style lang="stylus" type="text/stylus" scoped>
	.page-container
		height: 100%
		background-image: url(../../assets/images/bgdImg.png)
		background-size: 100%  100%
		display: flex
		flex-direction: column
		position: relative
		.page-content
			flex-shrink: 0
			height: 563px
			padding: 0 46px
			display: flex
			flex-direction: column
			.title
				flex-shrink: 0
				height: 133px
				padding: 60px 0 10px
				box-sizing: border-box
				text-align: center
				span
					font-size: 22px
					line-height: 64px
					color: rgb(51,51,51)
			.input-area
				flex-shrink: 0
				display: flex
			.button-wrapper
				flex-shrink: 0
				display: flex
				flex-direction: column
				a
					flex-shrink: 0
					height: 48px
					line-height: 48px
					text-align: center
					font-size: 14px
					margin-bottom: 14px
					border-radius: 22px
					background-color: rgba(0,0,0,.06)
					color: rgb(51,51,51)
			.no-code
				margin-top: 20px
				flex-shrink: 0
				line-height: 21px
				font-size: 12px
				color: #999999
				text-align: center
			.go-to-register
				margin-top: 20px
				flex-shrink: 0
				line-height: 21px
				font-size: 12px
				color: #999999
				text-align: center
				a
					color: #999999
			.other-login
				flex-shrink: 0
				height: 110px
				padding-top: 40px
				box-sizing: border-box
				display: flex
				flex-direction: column
				span
					flex-shrink: 0
					font-size: 11px
					color: #999
					text-align: center
					&:before
						content: '-------------'
					&::after
						content: '-------------'
				ul
					flex-shrink: 0
					font-size: 0
					display: flex
					justify-content: space-around
					padding: 0 40px
					box-sizing: border-box
					li
						flex-shrink: 0
						width: 30px
						height: 30px
						margin: 5px
						a
							display: block
							width: 100%
							height: 100%
							border-radius: 50%
							position: relative
							i
								position: absolute
								left: 6px
								top: 4px
								display: block
								width: 18px
								height: 18px
								background-image: url(../../assets/images/icons_type.png)
								background-repeat: no-repeat
								&.one
									background-position: -38px 0
								&.two
									background-position: -57px 0
								&.three
									background-position: -84px 0
								&.four
									background-image: url(/images/apple.png)
						&:nth-child(1)>a
							background-color: #ed9090
						&:nth-child(2)>a
							background-color: rgb(107,182,243)
						&:nth-child(3)>a
							background-color: rgb(0,190,0)
						&:nth-child(4)>a
							background-color: black
		.page-bottom
			flex-grow: 1
			display: flex
			justify-content: center
			ul
				flex-grow: 1
				font-size: 0
				padding: 0 46px
				display: flex
				box-sizing: border-box
				justify-content: center
				align-items: center
				li
					flex-shrink: 0
					padding: 0 10px
					border-right: 1px solid #999999
					text-align: center
					&:nth-child(5)
						border: none
					a
						font-size: 12px
						color: #999
					&:nth-child(1)>a
						color: #4a4a4a
		img.back
			position: absolute
			left: 0
			top: 0
			width: 45px
		img.help
			position: absolute
			right: 12px
			top: 12px
			width: 24px
</style>