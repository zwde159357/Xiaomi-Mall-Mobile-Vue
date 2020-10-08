<template>
	<div class="wrapper">
		<input type="text" placeholder="请输入用户名" v-model.trim="name" class="username"/>
		<input type="password" placeholder="请输入密码" v-model.trim="pwd" class="pwd"/>
		<i class="eye iconfont icon-eye"></i>
		<i class="keyboard iconfont icon-jianpan"></i>
		<span class="login" @click="login">立即登录</span>
	</div>
</template>

<script type="text/ecmascript-6">

        export default {
		name: 'LoginPwd',
	        data: function() {
		        return {
		                name: '',
			        pwd: ''
		        };
	        },
	        methods: {
		        login: function() {
				this.$http({
						method: 'post',
						url: '/user/login_pwd',
						data:{
							name: this.name,
							pwd: this.pwd
						}
					})
		                        .then(token => {
                                                this.$cookies.set('token', token);
                                                this.$cookies.set('name', this.name);
                                                this.$router.replace(this.$route.query.back || '/');
			                });
		        }
	        }
        };
</script>

<style lang="stylus" type="text/stylus" scoped>
	.wrapper
		flex-grow: 1
		display: flex
		flex-direction: column
		position: relative
		text-align: center
		input
			flex-shrink: 0
			font-size: 12px
			height: 55px
			border-bottom: 1px solid #DDDDDD
			padding: 16px 0
			box-sizing: border-box
		i
			position: absolute
		i.keyboard
			right: 24px
			bottom: 90px
			font-size: 18px
		i.eye
			right: 0
			bottom: 94px
			font-size: 11px
		span.login
			flex-shrink: 0
			height: 48px
			line-height: 48px
			text-align: center
			font-size: 14px
			margin-bottom: 14px
			border-radius: 22px
			background-color: #e4bb7e
			color: white
			margin-top: 10px
</style>