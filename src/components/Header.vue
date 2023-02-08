<template>
	<header>
		<div class="white-header">
			<div class="white-header__block">
				<img src="../assets/temp/Header/logo.png" alt="">
			</div>
			<div class="white-header__line">
				<nav>
					<ul>
						<li>
							<a href="#">Оборудование</a>
							<img class="header__arrow" src="../assets/temp/Header/arrow.png" alt="">
						</li>
						<li class="dropdown">
							<a href="#" class="header__indent">Статьи</a>
							<img class="header__arrow" src="../assets/temp/Header/arrow.png" alt="">
							<div class="dropdown-indent">
								<a href="#">Ссылка 1</a>
								<a href="#">Ссылка 2</a>
								<a href="#">Ссылка 3</a>
							</div>
						</li>
						<li>
							<a href="#" class="header__indent">Вакансии</a>
						</li>
						<li>
							<a href="#" class="indent-nav">Партнёры</a>
						</li>
						<li>
							<a href="#" class="indent-nav">Контакты</a>
						</li>
						<li class="logo-singin">
							<a href="#"><img src="../assets/temp/Header/singin.png" alt=""></a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="wrapper_header">
			<div class="header-block">
				<div class="header_title">
					<span class="header_title__text">Тахографы и карты водителя в Липецке</span>
					<span class="header_title__small">Доверьте решение вопросов команде настоящих профессионалов </span>
				</div>
				<form action="">
					<div class="form-wrapper">
						<span class="title-form">Оставить заявку</span>

						<div class="group">
							<input type="text" required>
							<span class="highlight"></span>
							<span class="bar"></span>
							<label>ФИО</label>
						</div>

						<div class="group">
							<input type="text" required>
							<span class="highlight"></span>
							<span class="bar"></span>
							<label>Контактный телефон</label>
						</div>

						<div class="group">
							<input type="text" required>
							<span class="highlight"></span>
							<span class="bar"></span>
							<label>Email</label>
						</div>

						<input class="btn send" type="submit">
					</div>
				</form>
			</div>
		</div>
	</header>


</template>

<script>
export default {
	name: "Header"

}


</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";

//-----header

header {
	height: size(817, 1920);
	background: url("../assets/temp/Header/fon.png") no-repeat;
	background-size: cover;
}

.white-header {
	display: flex;
}

.white-header__block {
	width: size(648, 1920);
	height: size(136, 1920);
	background: $white;
	box-shadow: 4px 2px 6px rgba(7, 89, 133, 0.25);
	border-radius: 0 0 10px 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: size(452, 1920);
		height: size(100, 1920);
	}
}

.dropdown-indent {
	display: none;
	position: absolute;
	background-color: white;
	width: size(160,1920);
	height: size(135, 1920);
	box-shadow: 0 8px 16px 5px rgba(0,0,0,0.2);
	z-index: 10;
}

.dropdown-indent a {
	padding: size(12, 1920) size(16, 1920);
	display: block;
	text-align: left;

}

.dropdown-indent a:hover{
	color: white ;
	background-color: #075985;
	transition: all 150ms ease-in-out;
	border-radius: 8px;
}


.dropdown:hover .dropdown-indent{
	display: block;
	top:size(70, 1920);
	border-radius: 10px;
	margin-left: size(15, 1920);
	transition: all 150ms ease-in-out;

}





.white-header__line {
	position: absolute;
	@extend %disaling;
	justify-content: space-between;
	height: size(90, 1920);
	width: size(1920, 1920);
	margin-top: size(24, 1920);
	box-shadow: 0 5px 6px 5px rgba(7, 89, 133, 0.25);
	background: $white;
	z-index: 9;

	nav {
		margin: 0 0 0 size(787, 1920);

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

				.header__arrow {
					margin-left: size(5, 1920);
					width: size(12, 1920);
					height: size(10, 1920);
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
	width: size(1745, 1920);
	margin: size(100, 1920) auto;

	.header-block {
		display: flex;
		justify-content: space-between;


		.header_title {
			width: size(850, 1920);
			color: #FFFFFF;
			align-items: center;
			justify-content: center;
			font-family: 'PT Sans', sans-serif;
			@extend %disdirect;

			.header_title__text {
				font-weight: 700;
				font-size: size(76, 1920);
				line-height: size(83, 1920);
				letter-spacing: 0.075em;
				margin-bottom: size(14, 1920);
			}

			.header_title__small {
				font-weight: 400;
				font-size: size(30, 1920);
				line-height: size(33, 1920);
				letter-spacing: 0.075em;
			}
		}

		//animate button

		.btn {
			background-color: transparent;
			cursor: pointer;
			align-self: center;
			line-height: 1;
			text-decoration: none;
			text-align: center;
			text-transform: uppercase;
			font-family: 'Montserrat', sans-serif;
			font-weight: 700;
			margin-top: size(40, 1920);
			border-radius: 20px;
		}

		.btn:hover, .btn:focus {
			color: #fff;
			outline: 0;
		}

		.send {
			width: size(300, 1920);
			color: #fff;
			box-shadow: 0 0 40px 40px #075985 inset, 0 0 0 0 #075985;
			-webkit-transition: all 150ms ease-in-out;
			transition: all 150ms ease-in-out;
		}

		.send:hover {
			box-shadow: 0 0 10px 0 #075985 inset, 0 0 10px 4px #075985;
			color: #075985;
			background-color: white;
		}


		//    FORM

		form {
			width: size(650, 1920);
			height: size(484, 1920);
			padding: size(25, 1920) size(45, 1920);
			background: rgba(255, 255, 255, 0.7);
			border: 2px solid #FFFFFF;
			box-shadow: inset 0 4px 4px rgba(255, 255, 255, 0.25);
			border-radius: 10px;
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
				font-size: size(18, 1920);
				padding: size(10, 1920) size(10, 1920) size(10, 1920) size(5, 1920);
				display: block;
				width: size(460, 1920);
				height: size(46, 1920);
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
				transition: 0.2s ease all;
				-moz-transition: 0.2s ease all;
				-webkit-transition: 0.2s ease all;
			}

			/* active state */
			input:focus ~ label, input:valid ~ label {
				top: size(-20, 1920);
				font-size: size(16, 1920);
				color: #075985;
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
				background: #075985;;
				transition: 0.2s ease all;
				-moz-transition: 0.2s ease all;
				-webkit-transition: 0.2s ease all;
			}

			.bar:before {
				left: 50%;
			}

			.bar:after {
				right: 50%;
			}

			/* active state */
			input:focus ~ .bar:before, input:focus ~ .bar:after {
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
					background: #075985;;
				}
				to {
					width: 0;
					background: transparent;
				}
			}
			@-moz-keyframes inputHighlighter {
				from {
					background: #075985;;
				}
				to {
					width: 0;
					background: transparent;
				}
			}
			@keyframes inputHighlighter {
				from {
					background: #075985;;
				}
				to {
					width: 0;
					background: transparent;
				}
			}


		}
	}

}


</style>