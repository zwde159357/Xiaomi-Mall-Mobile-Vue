<template>
	<swiper ref="mySwiper" :options="swiperOptions" class="container">
		<swiper-slide class="content" v-for="item in arr" :key="item">
			<img :src="item" alt=""/>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script type="text/ecmascript-6">
        import Vue from 'vue';
	import 'swiper/swiper-bundle.css';
        import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/core';
        import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

        SwiperClass.use([Pagination, Mousewheel, Autoplay]);
        const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

        export default {
                name: 'MiBanner',
                components: {
                        Swiper,
                        SwiperSlide
                },
                props: {
                        arr: {
                                type: Array,
                                required: true,
                        }
                },
                data() {
                        return {
                                swiperOptions: {
                                        pagination: {
                                                el: '.swiper-pagination'
                                        },
                                        loop: true,
                                        autoplay: {
                                                delay: 2000,
                                                disableOnInteraction: false
                                        },
                                }
                        }
                },
                computed: {
                        swiper() {
                                return this.$refs.mySwiper.$swiper;
                        }
                },
                mounted() {
                        this.$nextTick(function() {
                                this.swiper.slideTo(1, 1000, false);
                        });
                },
        };
</script>

<style scoped>
	.container {
		flex-shrink: 0;
		width: 100%;
	}

	.content {
		width: 100%;
	}
	.content>img {
		width: 100%;
		height: 100%;
	}
</style>