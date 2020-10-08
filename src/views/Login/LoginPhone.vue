<template>
	<div class="wrapper">
		<input type="text" placeholder="请输入手机号码"  v-model.trim="phone" class="phone" autocomplete='off' />
		<input type="text" placeholder="请输入验证码"  v-model.trim="code"  class="code" autocomplete='off'/>
		<span class="phone-icon">+86&gt;</span>
		<span class="code-icon" @click="getCode" v-text="codeStr || '获取验证码'"></span>
		<span class="login" @click="login">立即登录</span>
	</div>
</template>

<script type="text/ecmascript-6">

        export default {
                name: 'LoginPhone',
	        data: function() {
                        return {
                                phone: '',
	                        code: '',
	                        codeStr: ''
                        };
	        },
	        methods: {
                        login: function() {
                                this.$http({
                                        method: 'post',
                                        url: '/user/login_phone',
                                        data: { phone: this.phone }
                                })
                                        .then(data => {
                                                this.$cookies.set('token', data);
                                                this.$router.replace(this.$route.query.back || '/');
                                        });
                        },
                        getCode() {
                                if(this.codeStr) this.codeStr = '';
                                let codes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
                                        'R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
                                for(let i = 0; i < 4; i++) {
                                        this.codeStr += codes[Math.floor(Math.random()*codes.length)];
                                }
                        }
	        }
        };
</script>

<style  lang="stylus" type="text/stylus" scoped>
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
		input.phone
			padding-left: 38px
		span.code-icon
			position: absolute
			right: 0
			bottom: 80px
			text-align: right
			color: red
			width: 90px
			padding-top: 1px
			line-height: 39px
			font-size: 13px
		span.phone-icon
			position: absolute
			left: 0
			top: 16px
			width: 38px
			padding-top: 1px
			line-height: 20px
			font-size: 13px
			color: #999
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