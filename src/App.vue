<template>
	<div id="app">
		<MainView/>
		<router-view/>
	</div>
</template>
<script>

import MainView from "@/views/MainView";
import { Hooper, Slide } from 'hooper';
export default {
	components: {MainView,Hooper,
		Slide}
}
</script>

<style lang="scss">
@import "src/assets/scss/styles.scss";

.hooper-track{
	max-width: size(1745, 1920);
}

.hooper-list{
	padding-top: size(20, 1920);
	height: size(300, 1920);
}

.parners-pagination, .hooper-pagination{
	top: size(180 ,1920);
}



.hooper-indicators{

	li{
		button{
			width:size(10, 1920);
			height: size(5, 1920);
			background: white;
			border: 1px solid #067BCD;

		}
	}
}


</style>