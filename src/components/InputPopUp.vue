<template>
	<div class="modal">
		<div class="modal-content">
			<div class="modal-close">
				<svg class="modal__close" @click="closeinput()" width="44" height="44" viewBox="0 0 44 44"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z"
						fill="black"/>
				</svg>
			</div>
			<span class="modal-title">Вход в систему</span>
			<a href="http://monitor.gpslip.ru/"><img src="../assets/temp/inputpopup/ztm.svg" alt=""></a>
			<a href="https://monitoring.aoglonass.ru/"><img src="../assets/temp/inputpopup/aoglonass.svg" alt=""></a>
			<a href="http://monitor.gpslip.ru/?token=b918e5c670d0cc3a14bbdc47368e9a8050C17B3496987D1D433280813F40B8D336F44B9F"><img src="../assets/temp/inputpopup/hosting.svg" alt=""></a>
		</div>
	</div>
</template>

<script>

export default {
	name: "Input",
	props: ['input'],
	data() {
		return {}
	},


	methods: {
		closeinput() {
			this.$emit("closeinput", this.input)
		},
	},
}
</script>

<style scoped lang="scss">
@import "animate.css";
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";

// Form

.is-invalid {
	border: 1px solid red;
}

.invalid-feedback {
	color: #F3CD00;
	margin-top: size(10, 1920);
	font-size: size(20, 1920);
}


.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999 !important;
	cursor: pointer;
	backdrop-filter: blur(5px);
}


.modal-content {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: size(800, 1920);
	height: 60%;
	background: linear-gradient(126.76deg, rgba(6, 123, 205, 0.4) 0%, rgba(224, 28, 34, 0.4) 100%);
	//background-color: rgba(255, 255, 255, 0.7);
	padding: size(40, 1920);
	border-radius: 5px;
	overflow-y: auto !important;
	overflow-x: hidden !important;
	//border: 3px solid rgba(255, 255, 255, 0.5);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	a {
		width: size(400, 1920);
		height: size(100, 1920) !important;
		margin-bottom: auto;
		img{
			width: 100%;
			height: 100%;
			transition: all 0.5s;
		}

		img:hover {
			width: 105%;
			height: 105%;
			transition: all 0.5s;
		}
	}


}

.modal-title {
	align-items: center;
	align-content: center;
	text-align: center;
	font-weight: 600;
	font-size: size(50, 1920);
	line-height: size(65, 1920);
	color: white;
	margin-bottom: size(30, 1920);
	font-family: 'Montserrat', sans-serif;
}

.modal-close {
	display: flex;
	justify-content: flex-end;
	width: size(700, 1920);
}


.modal__close {
	width: size(35, 1920);
	height: size(35, 1920);
	cursor: pointer;

	path {
		fill: white;
		transition: 0.3s;
	}
}

.modal__close:hover {
	path {
		fill: #075985;
		transition: 0.3s;
	}

}

</style>