<template >
		<div v-if="show" class="spin-wrapper">
			<div class="spinner">
			</div>
		</div>
</template>

<script>
export default {
	name: 'preloader',
	data(){
		return {
			show: true
		}
	},
	mounted(){
		if(Boolean(this.show)) this.showToggle()
		document.body.style.overflow = "hidden"
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = false
				document.body.style.overflow = "auto"
			}, 1200)
		}
	}
}
</script>

<style scoped lang="scss">

@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";


.spin-wrapper{
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgb(255, 255, 255);
	z-index: 999;



	.spinner{
		position: absolute;
		height: 60px;
		width: 60px;
		border: 3px solid transparent;
		border-top-color: #254E70;
		top: 50%;
		left: 50%;
		margin: -30px;
		border-radius: 50%;
		animation: spin 2s linear infinite;

		&:before, &:after{
			content:'';
			position: absolute;
			border: 3px solid transparent;
			border-radius: 50%;
		}

		&:before{
			border-top-color: #A04668;
			top: -12px;
			left: -12px;
			right: -12px;
			bottom: -12px;
			animation: spin 3s linear infinite;
		}

		&:after{
			border-top-color: #A04668;
			top: 6px;
			left: 6px;
			right: 6px;
			bottom: 6px;
			animation: spin 4s linear infinite;
		}
	}
}

@keyframes spin{
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
}

</style>