<template>
	<div class="container">
		<div class="page-content hide-scroll">
			<div class="recommend">
				<img src="../../assets/images/recheader_left.png" alt="" class="left"/>
				<span>为你推荐</span>
				<img src="../../assets/images/recheader_right.png" alt="" class="right"/>
			</div>
			<div class="content">
				<ul>
					<li>
						<router-link to="/detail/1">
							<img src="../../assets/images/product/01.png" alt="">
							<span class="name">小米电视4A 55英寸</span>
							<span class="brief">极致超窄边框，4K超高清</span>
							<span class="price">￥1599</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/2">
							<img src="../../assets/images/product/02.png" alt="">
							<span class="name">小米电视4C 32英寸</span>
							<span class="brief">卧室推荐，人工智能系统</span>
							<span class="price">￥599</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/3">
							<img src="../../assets/images/product/03.png" alt="">
							<span class="name">小米电视4A 60英寸</span>
							<span class="brief">4K HDR 超高清/ 人工智能语音</span>
							<span class="price">￥1899</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/4">
							<img src="../../assets/images/product/04.png" alt="">
							<span class="name">小米电视4C 43英寸</span>
							<span class="brief">人工智能，钢琴烤漆，杜比音效</span>
							<span class="price">￥999</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/5">
							<img src="../../assets/images/product/05.png" alt="">
							<span class="name">小米电视4A 70英寸</span>
							<span class="brief">人工智能语音系统，4K HDR，内置小爱同学，海量片源</span>
							<span class="price">￥2999</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/6">
							<img src="../../assets/images/product/06.png" alt="">
							<span class="name">小米全面屏电视55英寸</span>
							<span class="brief">全面屏，内置小爱同学，64位四核处理器</span>
							<span class="price">￥1599</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/7">
							<img src="../../assets/images/product/07.png" alt="">
							<span class="name">Redmi 智能电视 X65</span>
							<span class="brief">全金属边框，全面屏97%高屏占比，4K高清，MEMC运动补偿</span>
							<span class="price">￥2999</span>
						</router-link>
					</li>
					<li>
						<router-link to="/detail/8">
							<img src="../../assets/images/product/08.png" alt="">
							<span class="name">小米电视4A 50英寸</span>
							<span class="brief">4KHDR，人工智能语音遥控，海量片源，2G+8G大存储</span>
							<span class="price">￥1399</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<MiNav></MiNav>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MiNav from '../../components/MiNav/index.vue';

        export default {
                name: "Taste",
		components: { MiNav }
        };
</script>

<style lang="stylus" type="text/stylus" scoped>
	.container
		width: 100%
		height: 100%
		display: flex
		flex-direction: column
		.page-content
			flex-grow: 1
			display: flex
			flex-direction: column
			background-color: rgb(244,244,244)
			overflow: auto
			.recommend
				flex-shrink: 0
				height: 42px
				margin: 10px 0
				background-color: rgb(244,244,244)
				display: flex
				justify-content: center
				align-items: center
				span
					font-size: 15px
					color: rgb(51,51,51)
					font-weight: bold
					padding: 0 8px
				img
					width: 18px
			.content
				flex-grow: 1
				display: flex
				ul
					flex-grow:  1
					display: flex
					font-size: 0
					flex-wrap: wrap
					padding: 5px
					box-sizing: border-box
					justify-content: space-around
					overflow: auto
					li
						flex-shrink: 0
						flex-grow: 1
						width: 50%
						padding: 5px
						box-sizing: border-box
						a
							display: flex
							flex-direction: column
							justify-content: center
							background-color: white
							img
								width: 100%
							span
								font-size: 11px
								margin-bottom: 5px
							span.name
								color: rgb(51,51,51)
							span.brief
								color: #999999
							span.price
								font-size: 17px
								color: red
		.footer
			flex-shrink: 0
			display: flex
</style>