<template>
	<header>
		<div class="white-header">
			<div class="white-header__block">
				<router-link to="/" exact><img src="../assets/temp/Header/logo.svg" alt=""></router-link>
			</div>
			<div class="white-header__line">
				<nav>
					<ul>
						<li class="dropdown">
							<router-link to="/equipment" active-class="active">Оборудование</router-link>
							<img class="header__arrow" src="../assets/temp/Header/arrow.png" alt="">
							<div class="dropdown-eq">
								<router-link to="/glonassequipment" active-class="active activeback">ГЛОНАСС/GPS
									ОБОРУДОВАНИЕ
								</router-link>
								<a href="#">ZTM ОБОРУДОВАНИЕ</a>
								<a href="#">ТЕЛЬТОНИКА</a>
							</div>
						</li>
						<li class="dropdown">
							<router-link to="/about#about" active-class="active " class="header__indent">Статьи
							</router-link>
							<img class="header__arrow" src="../assets/temp/Header/arrow.png" alt="">
							<div class="dropdown-indent">
								<router-link to="/about#about" active-class="active activeback">О нас</router-link>
								<a href="#">Постановление № 969</a>
								<a href="#">Видеонаблюдение на транспорт</a>
							</div>
						</li>
						<li>
							<router-link to="/jobopening#jobopening" class="header__indent" active-class="active">
								Вакансии
							</router-link>
						</li>
						<li>
							<router-link to="/partner#partner" class="indent-nav" active-class="active">Партнёры
							</router-link>
						</li>
						<li>
							<router-link to="/contact#contact" class="indent-nav" active-class="active">Контакты
							</router-link>
						</li>
						<li class="logo-singin">
							<a href="#" @click="openinput()"><img src="../assets/temp/Header/singin.png" alt=""></a>
						</li>
					</ul>
				</nav>
				<InputPopUp
					v-if="input"
					:input="input"
					@closeinput="input = false"/>
			</div>
		</div>
		<div class="wrapper_header">
			<div class="header-block">
				<div class="header_title">
					<span class="header_tittle__main">Спутниковый мониторинг автотранспорта</span>
					<span class="header_title__text">Тахографы и карты водителя в Липецке</span>
					<span class="header_title__small">Доверьте решение вопросов команде настоящих профессионалов </span>
				</div>

				<div class="form-wrapper">
					<span class="title-form">Оставить заявку</span>
					<button class="sendbtn" type="submit" @click="openapplication()">Открыть форму</button>
					<ApplicationPopUp
						v-if="application"
						:application="application"
						@closeapplication="application = false"/>
				</div>
			</div>
		</div>
	</header>


</template>

<script>
import InputPopUp from "@/components/InputPopUp";
import ApplicationPopUp from "@/components/ApplicationPopUp";

export default {
	name: "Header",
	components: {
		ApplicationPopUp,
		InputPopUp,
	},

	data() {
		return {
			application: false,
			input: false,
		}
	},

	watch: {
		application: function () {
			if (this.application) {
				document.body.style.overflow = "hidden"
				return
			}
			document.body.style.overflow = "auto"
		},
		input: function () {
			if (this.input) {
				document.body.style.overflow = "hidden"
				return
			}
			document.body.style.overflow = "auto"
		}
	},

	methods: {
		openapplication() {
			this.application = true;
		},
		openinput() {
			this.input = true;
		},
	}
}


</script>

<style scoped lang="scss">
@import "animate.css";
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";
//-----header
header {
	width: 100%;
	height: size(817, 1920);
	background: url("../assets/temp/Header/fon.png") no-repeat;
	background-size: cover;
}

.white-header {
	display: flex;
}

.active {
	color: #E01C22 !important;
	transition: all 300ms
}

.activeback {
	transition: all 300ms;
	border-left: 0 solid white;
}

.activeback:hover {
	color: white !important;
	border-left: 5px solid #E01C22;
	transition: all 300ms
}

.white-header__block {
	width: size(648, 1920);
	height: size(136, 1920);
	background: $white;
	box-shadow: 4px 2px 6px rgba(7, 89, 133, 0.25);
	border-radius: 0 0 10px 0;
	z-index: 10;
	display: flex;
	padding: size(0, 1920) size(54, 1920) size(0, 1920) size(52, 1920);

	img {
		width: size(542, 1920);
		height: size(136, 1920);
	}
}


.dropdown:hover {
	img {
		transform: rotate(180deg);
	}
}

.dropdown-eq {
	display: none;
	position: absolute;
	background-color: white;
	width: size(250, 1920);
	height: size(180, 1920);
	box-shadow: 0 8px 16px 5px rgba(0, 0, 0, 0.2);
	transition: all 500ms ease-in-out;
	z-index: 10;
}

.dropdown-eq a {
	height: size(60, 1920);
	padding: size(12, 1920) size(16, 1920);
	display: block;
	text-align: left;
	font-size: size(18, 1920) !important;
}

.dropdown-eq a:hover {
	color: white;
	background-color: #075985;
	transition: all 300ms ease-in-out;
	z-index: 5;
}

.dropdown:hover .dropdown-eq {
	display: block;
	top: size(90, 1920);
	border-radius: 5px;
	transition: all 500ms ease-in-out;

	.header__arrow {
		transform: rotate(180deg);
	}
}


.dropdown-indent {
	display: none;
	position: absolute;
	background-color: white;
	width: size(240, 1920);
	height: size(175, 1920);
	box-shadow: 0 8px 16px 5px rgba(0, 0, 0, 0.2);
	transition: all 500ms ease-in-out;
	z-index: 10;
}

.dropdown-indent a {
	padding: size(12, 1920) size(16, 1920);
	display: block;
	text-align: left;
}

.dropdown-indent a:hover {
	color: white;
	background-color: #075985;
	transition: all 250ms ease-in-out;
}

.dropdown:hover .dropdown-indent {
	display: block;
	top: size(90, 1920);
	margin-left: size(15, 1920);
	transition: all 500ms ease-in-out;
	border-radius: 5px;

	.header__arrow {
		transform: rotate(180deg);
	}
}

.white-header__line {
	@extend %disaling;
	justify-content: space-between;
	height: size(90, 1920);
	width: size(1272, 1920);
	margin-top: size(24, 1920);
	box-shadow: 0 5px 6px 5px rgba(7, 89, 133, 0.25);
	background: rgba(255, 255, 255, 0.8);
	z-index: 5;

	nav {
		margin-left: size(139, 1920);

		ul {
			width: size(862, 1920);
			@extend %dispacebetween;

			.logo-singin {
				align-items: center;
				display: flex;
				margin-left: size(180, 1920);

				a {
					img {
						width: size(50, 1920);
						height: size(50, 1920);
					}
				}
			}

			li {
				@extend %disaling;

				a {
					@extend %header-fonts
				}

				a {

				}

				.header__arrow {
					margin-left: size(5, 1920);
					width: size(12, 1920);
					height: size(10, 1920);
					transition: all 250ms ease-in-out;
				}

				.header__indent {
					margin-left: size(48, 1920);
				}

				.indent-nav {
					margin-left: size(65, 1920);
				}
			}
		}
	}
}


.wrapper_header {
	width: $wrapper;
	margin: size(100, 1920) auto;

	.header-block {
		display: flex;
		justify-content: space-between;
		margin-top: size(150, 1920);

		.header_title {
			width: size(850, 1920);
			color: #FFFFFF;
			align-items: flex-start;
			justify-content: center;
			font-family: 'PT Sans', sans-serif;
			@extend %disdirect;

			.header_tittle__main{
				font-weight: 400;
				font-size: size(40, 1920);
				line-height: size(33, 1920);
				letter-spacing: size(5, 1920);
				margin-bottom: size(10, 1920);
			}

			.header_title__text {
				font-weight: 700;
				font-size: size(76, 1920);
				line-height: size(83, 1920);
				letter-spacing: size(5, 1920);
				margin-bottom: size(14, 1920);
			}

			.header_title__small {
				font-weight: 400;
				font-size: size(30, 1920);
				line-height: size(33, 1920);
				letter-spacing: size(5, 1920);
			}
		}


		//    FORM

		.form-wrapper {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-content: center;
			align-items: center;
			margin-top: size(50, 1920);
			width: size(600, 1920);
			height: size(200, 1920);
			border-radius: 10px;
			box-shadow: -5px 4px 10px 5px rgba(1, 123, 205, 0.4), 6px -5px 20px rgba(224, 28, 34, 0.6);
			//border: 2px solid rgba(255, 255, 255, 0.4);
			transition: all 0.5s;
		}

		.form-wrapper:hover {
			transition: all 0.5s;
			box-shadow: -5px 4px 10px 5px rgba(224, 28, 34, 0.4), 6px -7px 20px rgba(1, 123, 205, 0.6) ;
		}
		//6, 123, 205, 0.4
		//224, 28, 34, 0.4
		.title-form {
			font-family: 'Montserrat', sans-serif !important;
			font-weight: 600;
			font-size: size(60, 1920);
			line-height: size(65, 1920);
			color: white ;
			transition: all 0.5s;
		}

		.sendbtn {
			width: size(300, 1920) ;
			height: size(50, 1920) ;
			margin-top: size(30, 1920) ;
			background: #075985 ;
			border-radius: 20px ;
			font-family: 'Montserrat', sans-serif ;
			font-weight: 700 ;
			font-size: size(25, 1920) ;
			line-height: size(26, 1920) ;
			color: white ;
			display: flex ;
			align-items: center ;
			justify-content: center ;
			transition: 0.5s ;
			cursor: pointer ;
		}

		.sendbtn:hover {
			font-size: size(28, 1920) !important;
			width: size(310, 1920) !important;
			height: size(50, 1920) !important;
			line-height: size(30, 1920) !important;
			box-shadow: -10px 10px 20px rgba(6, 123, 205, 0.2), 10px 0 20px rgba(6, 123, 205, 0.2) !important;
			transition: 0.4s !important;

		}


	}
}

</style>