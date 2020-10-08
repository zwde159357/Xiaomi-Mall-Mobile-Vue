<template>
	<ul class="mi-nav">
		<li>
			<router-link to="/" exact>
				<i></i><span>首页</span>
			</router-link>
		</li>
		<li>
			<router-link to="/category">
				<i></i><span>分类</span>
			</router-link>
		</li>
		<li>
			<router-link to="/taste">
				<i></i><span>品味</span>
			</router-link>
		<li>
			<router-link to="/cart">
				<i></i><span>购物车</span><span class="count">0</span>
			</router-link>
		</li>
		<li>
			<router-link to="/profile">
				<i></i><span>个人</span>
			</router-link>
		</li>
	</ul>
</template>

<script type="text/ecmascript-6">
        export default {
                name: "MiNav"
        };
</script>

<style scoped lang="stylus" type="text/stylus">
	ul.mi-nav
		flex-grow: 1
		height: 100%
		display: flex
		li
			flex-grow: 1
			flex-basis: 0
			display: flex
			a
				display: flex
				flex-direction: column
				flex-grow: 1
				justify-content: center
				align-items: center
				position: relative
				span
					font-size: 11px
					color: #666
				span.count
					position: absolute
					top: 0
					right: 15px
					min-width: 16px
					height: 16px
					line-height: 16px
					text-align: center
					background-color: rgb(111,111,111)
					color: white
					border-radius: 50%
					display: none
					&.active
						display: block

				i
					width: 24px
					height: 24px
					background-image: url('nav_bg.png')
					background-size: 24px 240px
			&:nth-child(1)
				a>i
					background-position: 0 0
				a.router-link-active>i
					background-position: 0 -24px
			&:nth-child(2)
				a>i
					background-position: 0 -48px
				a.router-link-active>i
					background-position: 0 -72px
			&:nth-child(3)
				a>i
					background-position: 0 -96px
				a.router-link-active>i
					background-position: 0 -120px
			&:nth-child(4)
				a>i
					background-position: 0 -144px
				a.router-link-active>i
					background-position: 0 -168px
			&:nth-child(5)
				a>i
					background-position: 0 -192px
				a.router-link-active>i
					background-position: 0 -216px
			a.router-link-active>span
				color: #9f8052

</style>