<template>
	<div id="app">
		<MainView/>
		<router-view/>
	</div>
</template>
<script>

import MainView from "@/views/MainView";

export default {
	components: {MainView}
}
</script>

<style lang="scss">
@import "src/assets/scss/styles.scss";


</style>