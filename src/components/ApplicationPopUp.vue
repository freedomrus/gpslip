<template>
	<div class="modal">
		<div class="modal-content">
			<div class="modal-close">
				<svg class="modal__close" @click="closeapplication()" width="44" height="44" viewBox="0 0 44 44"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z"
						fill="black"/>
				</svg>
			</div>
			<form ref="form" method="POST" @submit.prevent="sendEmail">
				<div class="form-wrapper">
					<span class="title-form">Заполните форму</span>
					<div class="group">
						<input

							class="textinput"
							type="text"
							:class="$v.fullName.$error ? 'is-invalid' : ''"
							v-model.trim="fullName"
							placeholder="Иванов Иван Иванович"
						>
						<span class="bar"></span>
						<label>ФИО</label>
						<p v-if="$v.fullName.$dirty && !$v.fullName.required" class="invalid-feedback">
							Обязательное поле
						</p>
					</div>

					<div class="group">
						<input

							class="textinput"
							type="text"
							v-model.trim="phone"
							v-imask="phoneNumberMask"
							maxlength="16"
							:class="$v.phone.$error ? 'is-invalid' : ''"
							@keypress="isNumber"
							placeholder="+7(912)312-31-23"

						>
						<span class="bar"></span>
						<label>Контактный телефон</label>
						<p v-if="$v.phone.$dirty && !$v.phone.required" class="invalid-feedback">
							Обязательное поле
						</p>
						<p v-if="$v.phone.$dirty && !$v.phone.minLength" class="invalid-feedback">
							Введите все цифры телефона
						</p>
					</div>

					<div class="group">
						<input

							class="emailinput"
							type="email"
							:class="$v.email.$error ? 'is-invalid' : ''"
							v-model.trim="email"
							placeholder="ztmlipetsk@gmail.com"
						>
						<span class="bar"></span>
						<label>Email</label>
						<p v-if="$v.email.$dirty && !$v.email.required" class="invalid-feedback">
							Обязательное поле
						</p>
						<p class="invalid-feedback">{{errorMessage}}</p>
					</div>
					<div class="group">
						<div class="wishes-title">Ваши пожелания</div>
						<div class="wishes">
							<textarea v-model="wishes" cols="30" rows="6" maxlength="1000"></textarea>
						</div>
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
import emailjs from 'emailjs-com';

export default {
	name: "ApplicationPopUp",
	mixins: [validationMixin,],

	props: ['application'],
	data() {
		return {
			fullName: "",
			phone: "",
			email: "",
			wishes: "",
			errorMessage: '',
			// bot config
			token: "6272564398:AAGU7TVTEZqw9JiXelsimOqIOx0ooqCtDuw",
			// chatId: '',
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

		// validateEmail(email) {
		// 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		// 		this.errorMessage = ''
		// 	} else {
		// 		this.errorMessage = 'Введите email по образцу'
		// 	}
		// },

		sendEmail() {
			this.$v.$touch()
			if (!this.$v.$error) {


				const SERVICE_ID = 'service_gpslip'; // ID вашего сервиса emailjs
				const TEMPLATE_ID = 'template_gpslip'; // ID вашего шаблона emailjs
				const USER_ID = 'YMXZ3pgLifxND2caD'; // ID вашего пользователя emailjs

				const params = {
					from_name: this.fullName,
					from_email: this.email,
					from_phone: this.phone,
					from_wishes: this.wishes,
					to_name: 'GpsLip', // Имя получателя
				};

				let fullMessage = `Заявка от клиента\nФИО: ${this.fullName}\nКонтактный телефон: ${this.phone}\nПочта: ${this.email}\nПожелания: "${this.wishes}"`
				this.$http.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`)
					.then(response => {
						console.log("Успешно", response)
					}, error => {
						console.log(error)
					})

				emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
					.then(() => {
						console.log('Email sent successfully!');
						this.phone = '';
						this.fullName = '';
						this.email = '';
						this.wishes = '';
						this.closeapplication()
					}, error => {
						console.error('Email failed to send:', error);
					});
			}
		},


		isNumber(e) {
			const regex = /[0-9]/
			if (!regex.test(e.key)) {
				e.returnValue = false;
				if (e.preventDefault) e.preventDefault();
			}
		},


		closeapplication() {
			this.$emit("closeapplication", this.application)
		},
		// submit() {
		// 	let fullMessage = `Заявка\nФИО: ${this.fullName}\nТелефон: ${this.phone}\nПочта: ${this.email}`
		// 	this.$http.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`)
		// 		.then(response => {
		// 			console.log("Успешно", response)
		// 			this.fullName = ''
		// 			this.phone = ''
		// 			this.email = ''
		// 			this.closeapplication()
		// 		}, error => {
		// 			console.log(error)
		// 		})
		// }

	},
	directives: {
		imask: IMaskDirective
	},
	// watch: {
	// 	email(value){
	// 		this.email = value;
	// 		this.validateEmail(value);
	// 	}
	// },
}
</script>

<style scoped lang="scss">
@import "animate.css";
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";

// Form

.is-invalid {
	box-shadow: 2px 2px 6px 2px rgba(224, 28, 34, 0.5);
}

.invalid-feedback {
	color: red;
	margin-top: size(10, 1920);
	font-size: size(24, 1920);
	font-weight: 600;
}


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
		font-weight: 600;
		font-size: size(50, 1920);
		line-height: size(65, 1920);
		color: white;
		margin-bottom: size(20, 1920);
	}

	//animate form
	.group {
		position: relative;
		margin: size(30, 1920) 0 size(10, 1920) 0;
	}

	.wishes-title {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: size(25, 1920);
		line-height: size(26, 1920);
		color: #FFFFFF;
		margin-bottom: size(10, 1920);

	}

	textarea {
		font-size: size(22, 1920);
		padding: size(20, 1920);
		width: size(460, 1920);
		height: size(150, 1920);
		color: #075985;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 2px 2px 6px 2px rgba(7, 89, 133, 0.5);
		border-radius: 10px;
		resize: none;
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
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: size(8, 1920);
		transition: 0.4s all;
		top: size(-20, 1920);
		font-size: size(16, 1920);
		color: white;
	}

	/* active state */

	//.emailinput:focus ~ label, .emailinput:valid ~ label {
	//	top: size(-20, 1920);
	//	font-size: size(16, 1920);
	//	color: white;
	//}
	//
	//.textinput:focus ~ label, .textinput:valid ~ label {
	//	top: size(-20, 1920);
	//	font-size: size(16, 1920);
	//	color: white;
	//}


	::placeholder {
		opacity: 0;
		transition: all 0.2s;
	}

	.textinput:focus::placeholder, .emailinput:focus::placeholder {
		opacity: 0.3;
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

	.textinput:invalid ~ .bar:before, .textinput:invalid ~ .bar:after, {
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
	height: 95%;
	background: linear-gradient(126.76deg, rgba(6, 123, 205, 0.4) 0%, rgba(224, 28, 34, 0.4) 100%);
	//background-color: rgba(255, 255, 255, 0.7);
	padding: size(40, 1920);
	border-radius: 5px;
	overflow-y: auto !important;
	overflow-x: hidden !important;
	//border: 3px solid rgba(255, 255, 255, 0.5);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

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


.modal-content::-webkit-scrollbar {
	width: size(10, 1920) !important;
	background-color: white !important;
}

.modal-content::-webkit-scrollbar-thumb {
	background: #075985 !important;
}

.modal-content::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(6, 123, 205, 0.3) !important;
}

</style>