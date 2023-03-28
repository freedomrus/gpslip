<template>
	<div class="modal">
		<div class="modal-content">
			<div class="modal-close">
				<svg class="modal__close" @click="closeapplication()" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z" fill="black"/>
				</svg>
			</div>
			<form action="/" method="POST" @submit.prevent="submit">
				<div class="form-wrapper">
					<span class="title-form">Оставить заявку</span>
					<div class="group">
						<input
							class="textinput"
							type="text"
							v-model="fullName"
						>
						<span class="bar"></span>
						<label>ФИО</label>
					</div>

					<div class="group">
						<input
							class="textinput"
							type="text"
							v-model.trim="phone"
							v-imask="phoneNumberMask"
							maxlength="16"
							@keypress="isNumber"
							placeholder="+7(912)312-31-23"

						>
						<span class="bar"></span>
						<label>Контактный телефон</label>
					</div>

					<div class="group">
						<input
							re
							class="emailinput"
							type="email"
							v-model="email"
						>
						<span class="bar"></span>
						<label>Email</label>
					</div>

					<button class="sendbtn" type="submit">Отправить</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength} from 'vuelidate/lib/validators'
import {IMaskDirective} from 'vue-imask'

export default {
	name: "ApplicationPopUp",
	mixins: [validationMixin],
	props: ['application'],
	data(){
		return{
			fullName: "",
			phone: "",
			email: "",
			// bot config
			token: "6272564398:AAGU7TVTEZqw9JiXelsimOqIOx0ooqCtDuw",
			chatId: -702085161,
			phoneNumberMask: {
				mask: '+{0}(000)000-00-00',
				lazy: true
			},

		}
	},


	validations: {
		fullName: {required},
		phone: {required, minLength: minLength(16)},
		email: {required},
	},


	methods: {
		isNumber (e) {
			const regex = /[0-9]/
			if (!regex.test(e.key)) {
				e.returnValue = false;
				if (e.preventDefault) e.preventDefault();
			}
		},



			closeapplication() {
			this.$emit("closeapplication", this.application)
		},
		submit() {
			let fullMessage = `Заявка\nФИО: ${this.fullName}\nТелефон: ${this.phone}\nПочта: ${this.email}`
			this.$http.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`)
				.then(response => {
					console.log("Успешно", response)
					this.fullName = ''
					this.phone = ''
					this.email = ''
				}, error => {
					console.log(error)
				})
		}

	},
	directives: {
		imask: IMaskDirective
	},
}
</script>

<style scoped lang="scss">
@import "animate.css";
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";

// Form



form {
	width: size(700, 1920);
	height: auto;
	font-family: 'Montserrat', sans-serif;

	.form-wrapper__send {
		margin-top: size(45, 1920);
	}

	.form-wrapper {
		@extend %disdirect;
		margin: 0 auto;
		align-items: center;
	}

	.title-form {
		font-weight: 400;
		font-size: size(50, 1920);
		line-height: size(65, 1920);
		color: #075985;
	}

	//animate form
	.group {
		position: relative;
		margin: size(30, 1920) 0 size(10, 1920) 0;
	}

	input {
		font-size: size(22, 1920);
		padding: size(10, 1920) size(10, 1920) size(10, 1920) size(5, 1920);
		display: block;
		width: size(460, 1920);
		height: size(46, 1920);
		color: #075985;
		border: none;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 2px 2px 6px 2px rgba(7, 89, 133, 0.5);
		border-radius: 10px 10px 0 0;
	}

	input:focus {
		outline: none;
	}

	/* LABEL ======================================= */
	label {
		color: #075985;
		font-size: size(18, 1920);
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: size(8, 1920);
		top: size(14, 1920);
		transition: 0.4s all;
	}

	/* active state */

	.emailinput:focus ~ label, .emailinput:invalid ~ label {
		top: size(-20, 1920);
		font-size: size(16, 1920);
		color: white;
	}

	.textinput:focus ~ label, .textinput:invalid ~ label {
		top: size(-20, 1920);
		font-size: size(16, 1920);
		color: white;
	}

	::placeholder{
		opacity: 0;
		transition: all 0.5s;
	}

	.textinput:focus::placeholder {
			opacity: 0.5;
			color: black;
			font-size: size(18, 1920);
			transition: all 1s;
	}



	/* BOTTOM BARS ================================= */
	.bar {
		position: relative;
		display: block;
		width: size(460, 1920);
	}

	.bar:before, .bar:after {
		content: '';
		height: size(3, 1920);
		width: 0;
		bottom: 0;
		position: absolute;
		background: #075985;
		transition: 0.4s all;

	}

	.bar:before {
		left: 50%;
	}

	.bar:after {
		right: 50%;
	}

	/* active state */
	.emailinput:invalid ~ .bar:before, .emailinput:invalid ~ .bar:after, {
		width: 50%;
	}

	.textinput:valid ~ .bar:before, .textinput:valid ~ .bar:after, {
		width: 50%;
	}

	input:focus ~ .bar:before, input:focus ~ .bar:after, {
		width: 50%;
	}

	/* HIGHLIGHTER ================================== */
	.highlight {
		position: absolute;
		height: 60%;
		width: size(100, 1920);
		top: 25%;
		left: 0;
		pointer-events: none;
		opacity: 0.5;
	}

	/* active state */
	input:focus ~ .highlight {
		-webkit-animation: inputHighlighter 0.3s ease;
		-moz-animation: inputHighlighter 0.3s ease;
		animation: inputHighlighter 0.3s ease;
	}

	/* ANIMATIONS ================ */
	@-webkit-keyframes inputHighlighter {
		from {
			background: #075985;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@-moz-keyframes inputHighlighter {
		from {
			background: #075985;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
	@keyframes inputHighlighter {
		from {
			background: #075985;
		}
		to {
			width: 0;
			background: transparent;
		}
	}
}

.sendbtn {
	width: size(400, 1920) !important;
	height: size(50, 1920) !important;
	margin-top: size(30, 1920) !important;
	background: rgba(255, 255, 255, 0.8) !important;
	border-radius: 20px !important;
	font-family: 'Montserrat', sans-serif !important;
	font-weight: 700 !important;
	font-size: size(25, 1920) !important;
	line-height: size(26, 1920) !important;
	color: #075985 !important;
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	transition: 0.3s !important;
	cursor: pointer !important;
}

.sendbtn:hover {
	font-size: size(30, 1920) !important;
	width: size(425, 1920) !important;
	height: size(50, 1920) !important;
	line-height: size(30, 1920) !important;
	box-shadow: -10px 10px 20px rgba(6, 123, 205, 0.2), 10px 0 20px rgba(6, 123, 205, 0.2) !important;
	transition: 0.3s !important;
}

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999 !important;
	cursor: pointer;
}



.modal-content {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: size(800, 1920);
	height: 60%;
	background-color: rgba(255, 255, 255, 0.5);
	padding: size(40, 1920);
	border-radius: 5px;
	overflow-y: auto !important;
	overflow-x: hidden !important;
	border: 3px solid rgba(6, 123, 205, 0.3);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

.modal-close{
	display: flex;
	justify-content: flex-end;
	width: size(700, 1920);
}


.modal__close{
	width: size(35, 1920) ;
	height: size(35, 1920) ;
	cursor: pointer;
	path{
		fill:white;
	}

}

//.modal-content::-webkit-scrollbar {
//	width: size(10, 1920) !important;
//	background-color: white !important;
//}
//
//.modal-content::-webkit-scrollbar-thumb {
//	background: #075985 !important;
//}
//
//.modal-content::-webkit-scrollbar-track {
//	-webkit-box-shadow: inset 0 0 6px rgba(6,123,205,0.3) !important;
//}

</style>