<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script>
import 'swiper/css';
import MainView from "@/views/MainView";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
	components: {MainView}
}
</script>

<style lang="scss">
@import "src/assets/scss/styles.scss";


html::-webkit-scrollbar {
	width: size(10, 1920) !important;
	background-color: white !important;
}

html::-webkit-scrollbar-thumb {
	background: #075985 !important;
}

html::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(6,123,205,0.3) !important;
}


	html {
	scroll-behavior: smooth !important;
}

.partner-slider {
	.VueCarousel-navigation {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		text-align: center;
		[title]::after {
			content: ""; /* Пустое содержимое псевдоэлемента */
			display: none; /* Скрыть псевдоэлемент */
		}

		button {
			position: relative;
			align-items: center;
			align-content: center;
			justify-content: space-between;
			text-align: center;
			padding: 0 !important;
			margin-left: 0 !important;
			width: size(50, 1920) !important;
			height: size(50, 1920) !important;
			color: white;
			border-radius: 50%;
			background: #067BCD;
			opacity: 0.5;
			top: size(-70, 1920);
			transition: all 0.3s;
		}

		button:hover {
			opacity: 1;
			transition: all 0.3s;
		}
	}


	.VueCarousel-dot-container {
		width: size(150, 1920) !important;
		height: size(50, 1920);
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0 !important;

		.VueCarousel-dot {
			width: size(20, 1920) !important;
			height: size(10, 1920) !important;
			background-clip: border-box !important;
			box-sizing: border-box !important;
			margin-right: size(10, 1920) !important;
			border-radius: 5px !important;
			padding: 0 !important;
			margin-top: 0 !important;
			background: #067BCD !important;
			opacity: 0.2;
			transition: all 0.2s;
		}

		//.VueCarousel-dot:hover {
		//	width: size(30, 1920) !important;
		//	height: size(10, 1920) !important;
		//	transition: all 0.2s;
		//
		//}

		.VueCarousel-dot--active {
			background: #067BCD !important;
			opacity: 1;
			width: size(30, 1920) !important;
			height: size(10, 1920) !important;
		}
	}


	.VueCarousel-wrapper {
		width: size(1745, 1920);
		margin: 0 auto;

		justify-content: space-between;
	}




	.VueCarousel-slide {
		width: min-content !important;
		height: size(133, 1920) !important;
		display: flex !important;
		align-items: center !important;
		justify-content: space-between !important;
		z-index: 1;
		padding: size(20, 1920);
		img {
			background: #FFFFFF;
			display: flex;
			background-size: cover;
			box-shadow: 2px 2px 5px rgba(6, 123, 205, 0.3);
			border-radius: 5px;
			overflow: hidden;
			object-fit: cover;
			cursor: pointer;
			transition: all 0.3s;
			margin: 0;
		}
		img:hover {
			box-shadow: 2px 5px 5px rgba(6, 123, 205, 0.5);
			transition: all 0.3s;
		}

	.hooperone, .hoopertwo, .hooperfour, .hooperfive {
			width: size(353, 1920);
			height: size(72, 1920);
		}

		.hooperthree {
			width: size(360, 1920);
			height: size(90, 1920);
		}

		.hoopersix {
			width: size(213, 1920);
			height: size(93, 1920);
		}

		.hooperseven {
			width: size(210, 1920);
			height: size(100, 1920);
		}

		.hoopereight {
			width: size(268, 1920);
			height: size(103, 1920);
		}

		.hoopernine {
			width: size(295, 1920);
			height: size(81, 1920);
		}

		.hooperten {
			width: size(323, 1920);
			height: size(57, 1920);
		}

		.hoopereleven {
			width: size(266, 1920);
			height: size(61, 1920);
		}

		.hoopertwelve {
			width: size(127, 1920);
			height: size(103, 1920);
		}
	}
}

//FOOTER SLIDER --------------


.articles-slider {
	.VueCarousel-navigation {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		text-align: center;

		button {
			position: relative;
			align-items: center;
			align-content: center;
			justify-content: space-between;
			text-align: center;
			padding: 0 !important;
			margin-left: 0 !important;
			width: size(50, 1920) !important;
			height: size(50, 1920) !important;
			color: white;
			border-radius: 50%;
			background: #067BCD;
			opacity: 0.5;
			top: size(-70, 1920);
			transition: all 0.3s;
		}

		button:hover {
			opacity: 1;
			transition: all 0.3s;
		}
	}


	.VueCarousel-dot-container {
		width: size(350, 1920) !important;
		height: size(50, 1920);
		display: none !important;
		justify-content: space-between;
		align-items: center;
		margin-top: 0 !important;


		.VueCarousel-dot {
			width: size(100, 1920) !important;
			height: size(5, 1920) !important;
			background-clip: border-box !important;
			box-sizing: border-box !important;
			margin-right: size(20, 1920) !important;
			border-radius: 5px !important;
			padding: 0 !important;
			margin-top: 0 !important;
			background: #067BCD !important;
			opacity: 0.4;
			transition: all 0.2s;
		}

		.VueCarousel-dot:hover {
			width: size(100, 1920) !important;
			height: size(8, 1920) !important;
			transition: all 0.2s;

		}

		.VueCarousel-dot--active {
			background: #067BCD !important;
			opacity: 1;
			height: size(8, 1920) !important;

		}
	}


	.VueCarousel-wrapper {
		width: size(1745, 1920);
		margin: 0 auto;
		overflow: hidden !important;
	}

	.VueCarousel-slide {
		height: size(251, 1920) !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		overflow: hidden;
		z-index: 1;
	}


}


</style>