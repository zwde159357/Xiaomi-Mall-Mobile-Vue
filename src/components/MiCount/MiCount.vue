<template>
	<div class="mi-count">
		<button @click="$emit('decrease')" :disabled="count === 1">-</button>
		<span v-text="count"></span>
		<button @click="$emit('increase')" :disabled="count === maxCount">+</button>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                name: 'MiCount',
                props: {
                        count: {
                                type: Number,
                                required: true,
                        },
                        maxCount: {
                                type: Number,
                        }
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.mi-count {
		display: flex;
		align-items: center;
	}
	.mi-count>button {
		vertical-align: middle;
		width: 20px;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
	}

	.mi-count>span {
		font-size: 14px;
		line-height: 20px;
		background-color: #ddd;
		padding: 0 8px;
		color: black;
	}
</style>