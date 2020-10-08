<template>
	<div id="root">
		<!-- 存放当前组件对应的html模板 -->
		<keep-alive include="List">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script type="text/ecmascript-6">
	// 存放当前组件对应的js代码
	export default {
	        name: "App",
	}
</script>

<style>
	/* 存放当前模板对应的CSS代码  适合放项目公共样式，但不是复位样式*/
	html, body { height: 100%; width: 100%; }
	.ellipsis { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
	.hide-scroll::-webkit-scrollbar { display: none; }
	input,button { border: none; outline: none; background-color: transparent; }
	#root {  width: 100%; height: 100%;  }
</style>