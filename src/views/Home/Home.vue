<template>
	<div class="page-container">
		<div class="page-top">
			<img src="../../assets/images/index1.png" alt="" />
			<div class="input">
				<img src="../../assets/images/search.png" alt="" />
				<span>搜一搜</span>
			</div>
		</div>
		<div class="page-content">
			<div class="scroll-content hide-scroll">
				<MiBanner :arr="arr"></MiBanner>
				<div class="icon-wrapper">
					<div class="top">
						<ul class="icon">
							<li>
								<img src="../../assets/images/index/index001.jpg" alt="" />
								<span>每日上新</span>
							</li>
							<li>
								<img src="../../assets/images/index/index002.jpg" alt="" />
								<span>小米众筹</span>
							</li>
							<li>
								<img src="../../assets/images/index/index003.jpg" alt="" />
								<span>有品秒杀</span>
							</li>
							<li>
								<img src="../../assets/images/index/index004.jpg" alt="" />
								<span>热销排行</span>
							</li>
							<li>
								<img src="../../assets/images/index/index005.jpg" alt="" />
								<span>小米自营</span>
							</li>
						</ul>
					</div>
					<div class="bottom">
						<ul class="icon">
							<li>
								<img src="../../assets/images/index/index006.jpg" alt="" />
								<span>下单立返</span>
							</li>
							<li>
								<img src="../../assets/images/index/index007.jpg" alt="" />
								<span>9.9包邮</span>
							</li>
							<li>
								<img src="../../assets/images/index/index008.jpg" alt="" />
								<span>有品直播</span>
							</li>
							<li>
								<img src="../../assets/images/index/index009.jpg" alt="" />
								<span>小米庄园</span>
							</li>
							<li>
								<img src="../../assets/images/index/index010.jpg" alt="" />
								<span>智能生活</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="discount-wrapper">
					<img src="../../assets/images/index/discount001.jpg" alt="" />
					<img src="../../assets/images/index/discount002.jpg" alt="" />
					<img src="../../assets/images/index/discount003.jpg" alt="" />
					<img src="../../assets/images/index/discount004.jpg" alt="" />
				</div>
				<div class="day-update">
					<div class="title-wrapper">
						<span class="title">每日上新</span>
						<span class="other">更多<i class="iconfont icon-arrow-right"></i></span>
					</div>
					<div class="scroll-wrapper">
						<div class="scroll hide-scroll">
							<ul class="scroll-area">
								<li><img src="../../assets/images/index/scroll001.jpg" alt=""><span>小米10 青春版5G</span></li>
								<li><img src="../../assets/images/index/scroll002.jpg" alt=""><span>宁美电脑一体机</span></li>
								<li><img src="../../assets/images/index/scroll003.jpg" alt=""><span>米家保温杯500ML</span></li>
								<li><img src="../../assets/images/index/scroll004.jpg" alt=""><span>即热饮水机C1</span></li>
								<li><img src="../../assets/images/index/scroll005.jpg" alt=""><span>米家洗烘一体机</span></li>
								<li><img src="../../assets/images/index/scroll006.jpg" alt=""><span>蝴蝶小姐系列</span></li>
								<li><img src="../../assets/images/index/scroll007.jpg" alt=""><span>Halou GT1 Pro</span></li>
								<li><img src="../../assets/images/index/scroll008.jpg" alt=""><span>九阳可视化蒸汽饭</span></li>
								<li><img src="../../assets/images/index/scroll009.jpg" alt=""><span>全价无谷猫粮</span></li>
								<li><img src="../../assets/images/index/scroll010.jpg" alt=""><span>小米对讲机Lite</span></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="crowfunding">
					<img src="../../assets/images/index/other.jpg" alt="" />
				</div>
				<div class="hot">
					<div class="title-wrapper">
						<span class="title">热销榜</span>
						<span class="content">排序由销量、搜索、好评等综合...</span>
						<span class="other">更多<i class="iconfont icon-arrow-right"></i></span>
					</div>
					<div class="scroll-wrapper">
						<div class="scroll hide-scroll">
							<ul class="scroll-hot">
								<li>
									<img src="../../assets/images/index/hot001.jpg" alt="" class="image" />
									<span class="name">智能扫地机器人</span>
									<span class="brief">米家扫地机器人</span>
									<img src="../../assets/images/index/rank001.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot002.jpg" alt="" class="image" />
									<span class="name">21.9超宽鱼屏...</span>
									<span class="brief">小米显示器34英寸</span>
									<img src="../../assets/images/index/rank002.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot003.jpg" alt="" class="image" />
									<span class="name">AI语音控制</span>
									<span class="brief">云米大屏冰箱450L</span>
									<img src="../../assets/images/index/rank003.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot004.jpg" alt="" class="image" />
									<span class="name">600加仑大流量</span>
									<span class="brief">小米净水器600G</span>
									<img src="../../assets/images/index/rank004.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot005.jpg" alt="" class="image" />
									<span class="name">智能一键洗衣机</span>
									<span class="brief">云米8kg波轮</span>
									<img src="../../assets/images/index/rank005.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot006.jpg" alt="" class="image" />
									<span class="name">一步推拉，6种...</span>
									<span class="brief">智能门锁推拉式</span>
									<img src="../../assets/images/index/rank006.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot007.jpg" alt="" class="image" />
									<span class="name">300m³/h大风...</span>
									<span class="brief">米家新风机</span>
									<img src="../../assets/images/index/rank007.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot008.jpg" alt="" class="image" />
									<span class="name">澎湃动力，净...</span>
									<span class="brief">米家空净Pro</span>
									<img src="../../assets/images/index/rank008.jpg" alt="" class="rank" />
								</li>
								<li>
									<img src="../../assets/images/index/hot009.jpg" alt="" class="image" />
									<span class="name">OLED智慧彩屏</span>
									<span class="brief">睿米吸尘器NEX2</span>
									<img src="../../assets/images/index/rank009.jpg" alt="" class="rank" />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="seckill">
					<div class="title-wrapper">
						<span class="title">有品秒杀</span>
						<span class="timer">14点场</span>
						<span class="other">更多<i class="iconfont icon-arrow-right"></i></span>
					</div>
					<div class="scroll-wrapper">
						<div class="scroll hide-scroll">
							<ul class="scroll-seckill">
								<li>
									<img src="../../assets/images/index/seckill001.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥179</span>
										<span class="prev-price">￥199</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill002.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥2499</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill003.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥889</span>
										<span class="prev-price">￥899</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill004.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥999</span>
										<span class="prev-price">￥1299</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill005.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥1499</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill006.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥49</span>
										<span class="prev-price">￥59</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill007.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥29.9</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill008.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥149</span>
										<span class="prev-price">￥198</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill009.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥57.9</span>
									</div>
								</li>
								<li>
									<img src="../../assets/images/index/seckill010.jpg" alt="" />
									<div class="wrapper">
										<span class="price">￥779</span>
										<span class="prev-price">￥899</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="sale-wrapper">
					<img src="../../assets/images/index/sale.jpg" alt="" />
				</div>
				<div class="recommend-wrapper">
					<div class="title-wrapper">
						<ul class="title">
							<li><span class="active">推荐</span><div class="active"></div></li>
							<li><span>智能</span><div></div></li>
							<li><span>电器</span><div></div></li>
							<li><span>生活</span><div></div></li>
						</ul>
					</div>
					<div class="content-wrapper">
						<ul class="content">
							<li>
								<a href="#">
									<img src="../../assets/images/index/recommend001.jpg" alt="" />
									<span class="name">彩虹五号电池（10粒装）</span>
									<span class="brief">日立Maxell,电池核心,...</span>
									<span class="price">￥9.9</span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="../../assets/images/index/recommend002.jpg" alt="" />
									<span class="name">米物工具箱</span>
									<span class="brief">德国红点奖产品</span>
									<span class="price">￥149 <span class="prev">￥179</span></span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="../../assets/images/index/recommend003.jpg" alt="" />
									<span class="name">Joypal智能AI按摩椅...</span>
									<span class="brief">蒙发利制造两年质量保证</span>
									<span class="price">￥7799<span class="prev">￥8599</span></span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="../../assets/images/index/recommend004.jpg" alt="" />
									<span class="name">墨案超级阅读器</span>
									<span class="brief">水墨大屏 舒适阅读</span>
									<span class="price">￥99</span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="../../assets/images/index/recommend005.jpg" alt="" />
									<span class="name">简约时尚百搭T恤</span>
									<span class="brief">舒适透气吸汗不沾身</span>
									<span class="price">￥59<span class="prev">￥109</span></span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="../../assets/images/index/recommend006.jpg" alt="" />
									<span class="name">智能公网对讲机</span>
									<span class="brief">内置小爱同学，全国对讲</span>
									<span class="price">￥39</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="page-footer">
			<MiNav></MiNav>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import MiNav from '../../components/MiNav/index.vue';
	import MiBanner from '../../components/MiBanner/MiBanner.vue';

	export default {
	        name: "Home",
		components: { MiNav, MiBanner },
		data() {
	                return {
                                arr: [
                                        require('../../assets/images/index/banner001.jpg'),
                                        require('../../assets/images/index/banner002.jpg'),
	                                require('../../assets/images/index/banner003.jpg'),
	                                require('../../assets/images/index/banner004.jpg'),
	                                require('../../assets/images/index/banner005.jpg')
                                ]
	                };
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
			height: 56px
			display: flex
			padding-right: 12px
			align-items: center
			background-color: rgb(132,93,50)
			img
				flex-shrink: 0
				margin-left: 12px
				width: 36px
				height: 28px
			.input
				margin-left: 11px
				width: 304px
				height: 32px
				border-radius: 16px
				background-color: white
				display: flex
				align-items: center
				img
					width: 20px
					height: 20px
					margin-left: 10px
				span
					margin-left: 10px
					flex-shrink: 0
					width: 200px
					font-size: 13px
					opacity: 0.4
					color: rgb(51,51,51)
		.page-content
			flex-grow: 1
			background-color: rgb(244,244,244)
			display: flex
			flex-direction: column
			overflow: hidden
			.scroll-content
				flex-grow: 1
				display: flex
				flex-direction: column
				overflow: auto
				.swiper-container
					flex-shrink: 0
					width: 100%
					height: 160px
					.swiper-wrapper
						width: 100%
						height: 100%
						.swiper-slide
							width: 100%
							img
								width: 100%
				.icon-wrapper
					flex-shrink: 0
					margin: 14px 0 1px
					display: flex
					flex-direction: column
					.top
						flex-shrink: 0
						height: 72px
						padding-bottom: 14px
						display: flex
					.bottom
						flex-shrink: 0
						height: 72px
						padding-bottom: 14px
						display: flex
				.discount-wrapper
					flex-shrink: 0
					height: 130px
					display: flex
					padding: 0 10px
					box-sizing: border-box
					justify-content: space-between
					img
						flex-shrink: 0
						width: 85.5px
						border-radius: 4px
				.day-update
					flex-shrink: 0
					height: 190px
					display: flex
					flex-direction: column
					background-color: white
					margin: 10px
					border-radius: 6px
					.title-wrapper
						flex-shrink: 0
						height: 43px
						display: flex
						justify-content: space-between
						align-items: center
						padding: 0 9px
						span.title
							font-size: 18px
							line-height: 25px
							font-weight: bold
							color: rgb(51,51,51)
						span.other
							font-size: 12px
							line-height: 25px
							color: rgb(151,151,151)
							i
								font-size: 12px
					.scroll-wrapper
						margin-top: 10px
						flex-shrink: 0
						height: 135px
						display: flex
						overflow: hidden
						.scroll
							flex-grow: 1
							display: flex
							overflow: auto
							ul.scroll-area
								flex-grow: 1
								display: flex
								justify-content: space-between
								padding-left: 10px
								box-sizing: border-box
								li
									flex-shrink: 0
									width: 93px
									display: flex
									flex-direction: column
									align-items: center
									img
										flex-shrink: 0
										height: 93px
									span
										flex-shrink: 0
										height: 32px
										margin-left: 7px
										font-size: 11px
										color: rgb(51,51,51)
										text-align: center
				.crowfunding
					flex-shrink: 0
					height: 179px
					margin: 0 10px
					img
						width: 100%
				.hot
					flex-shrink: 0
					height: 190px
					display: flex
					flex-direction: column
					background-color: white
					margin: 10px
					border-radius: 6px
					.title-wrapper
						flex-shrink: 0
						height: 43px
						display: flex
						justify-content: space-between
						align-items: center
						padding: 0 9px
						span.title
							font-size: 18px
							line-height: 25px
							font-weight: bold
							color: rgb(51,51,51)
						span.content
							font-size: 11px
							color: rgb(151,151,151)
						span.other
							font-size: 12px
							line-height: 25px
							color: rgb(151,151,151)
							i
								font-size: 12px
					.scroll-wrapper
						margin-top: 10px
						flex-shrink: 0
						height: 135px
						display: flex
						overflow: hidden
						.scroll
							flex-grow: 1
							display: flex
							overflow: auto
							ul.scroll-hot
								flex-grow: 1
								display: flex
								justify-content: space-between
								padding-left: 10px
								box-sizing: border-box
								li
									flex-shrink: 0
									width: 93px
									display: flex
									flex-direction: column
									align-items: center
									margin-right: 10px
									position: relative
									img.image
										flex-shrink: 0
										height: 93px
										background-color: rgb(247,247,247)
									span.brief
										flex-shrink: 0
										width: 100%
										height: 32px
										padding-top: 9px
										font-size: 11px
										color: rgb(125,68,2)
										text-align: center
										border-bottom-left-radius: 10px
										border-bottom-right-radius: 10px
										background-color: rgb(251,217,163)
									span.name
										position: absolute
										left: center
										top: 88px
										background-color: rgb(255,90,27)
										color: white
										font-size: 11px
									img.rank
										position: absolute
										top: 0
										left: 0
										width: 22px
				.seckill
					flex-shrink: 0
					height: 190px
					display: flex
					flex-direction: column
					background-color: white
					margin: 10px
					border-radius: 6px
					.title-wrapper
						flex-shrink: 0
						height: 43px
						display: flex
						justify-content: space-between
						align-items: center
						padding: 0 9px
						span.title
							font-size: 18px
							line-height: 25px
							font-weight: bold
							color: rgb(51,51,51)
						span.other
							font-size: 12px
							line-height: 25px
							color: rgb(151,151,151)
							i
								font-size: 12px
					.scroll-wrapper
						margin-top: 10px
						flex-shrink: 0
						height: 135px
						display: flex
						overflow: hidden
						.scroll
							flex-grow: 1
							display: flex
							overflow: auto
							ul.scroll-seckill
								flex-grow: 1
								display: flex
								justify-content: space-between
								padding-left: 10px
								box-sizing: border-box
								li
									flex-shrink: 0
									width: 93px
									display: flex
									flex-direction: column
									align-items: center
									margin-right: 5px
									img
										flex-shrink: 0
										height: 93px
										background-color: rgb(244,244,244)
									.wrapper
										flex-shrink: 0
										height: 32px
										display: flex
										align-items: center
										span
											flex-shrink: 0
											font-size: 11px
											color: rgb(51,51,51)
										span.price
											font-size: 14px
											color: rgb(254,31,29)
										span.prev-price
											color: rgb(153,153,153)
											text-decoration: line-through
											margin-left: 4px
				.sale-wrapper
					flex-shrink: 0
					height: 155px
					margin: 0 10px
					img
						width: 100%
						border-radius: 6px
				.recommend-wrapper
					flex-grow: 1
					display: flex
					flex-direction: column
					.title-wrapper
						flex-shrink: 0
						height: 51px
						display: flex
						ul.title
							flex-grow: 1
							display: flex
							align-items: center
							li
								flex-shrink: 0
								width: 25%
								height: 100%
								display: flex
								flex-direction: column
								justify-content: center
								align-items: center
								span
									font-size: 15px
									color: rgb(51,51,51)
									line-height: 17px
									font-weight: bold
									&.active
										font-size: 20px
										color: rgb(195,13,35)
										line-height: 20px
										margin-bottom: 4px
								div
									display: none
									width: 25px
									margin-top: 3px
									border-bottom: 1px solid rgb(195,13,35)
									border-bottom-width: 3px
									&.active
										display: block
					.content-wrapper
						flex-grow: 1
						display: flex
						ul.content
							flex-grow: 1
							padding: 5px
							box-sizing: border-box
							display: flex
							flex-wrap: wrap
							li
								flex-grow: 1
								width: 50%
								padding: 5px
								box-sizing: border-box
								display: flex
								a
									flex-grow: 1
									display: flex
									flex-direction: column
									background-color: white
									img
										flex-shrink: 0
										height: 171px
									span
										flex-shrink: 0
										font-size: 14px
										margin-left: 3px
									span.name
										line-height: 21px
										color: rgb(51,51,51)
										padding: 10px 3px 0
									span.brief
										font-size: 11px
										color: rgb(153,153,153)
										margin-left: 6px
									span.price
										color: rgb(227,13,13)
										margin-left: 4px
										span
											margin-left: 4px
											font-size: 14px
											color: rgb(153, 153, 153)
											text-decoration: line-through
											margin-bottom: 0.5px
											height: 20px
		.page-footer
			flex-shrink: 0
			height: 50px
			display: flex
	ul.icon
		flex-shrink: 0
		width: 100%
		display: flex
		padding: 0 10px
		box-sizing: border-box
		li
			flex-shrink: 0
			width: 20%
			display: flex
			flex-direction: column
			align-items: center
			img
				flex-shrink: 0
				width: 50px
			span
				flex-shrink: 0
				height: 17px
				margin-top: 5px
				line-height: 17px
				font-size: 11px
				color: black
</style>