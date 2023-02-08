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
						<li>
							<a href="#" class="header__indent">Статьи</a>
							<img class="header__arrow" src="../assets/temp/Header/arrow.png" alt="">
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

					<input type="text" required="required">
					<span>ФИО</span>

					<input type="text" required="required">
					<span>Контактный телефон</span>

					<input type="text" required="required">
					<span>Email</span>

					<input type="submit">
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
			}

			li {
				@extend %disaling;

				a {
					@extend %header-fonts
				}

				.header__arrow {
					margin-left: size(5, 1920);

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
			.header_title__small{
				font-weight: 400;
				font-size: size(30, 1920);
				line-height: size(33, 1920);
				letter-spacing: 0.075em;
			}
		}

		form{
			width: size(700, 1920);
			height: size(484, 1920);
			padding: size(25, 1920) size(121, 1920);
			background: rgba(255, 255, 255, 0.7);
			border: 2px solid #FFFFFF;
			box-shadow: inset 0 4px 4px rgba(255, 255, 255, 0.25);
			//filter: blur(1px);
			border-radius: 10px;
			font-family: 'PT Sans', sans-serif;
			.form-wrapper{
				@extend %disdirect;
				width: size(460, 1920);
				margin: 0 auto;
				align-items: center;

			}
			.title-form{
				font-weight: 400;
				font-size: size(50, 1920);
				line-height: size(65, 1920);
				color: #075985;

			}
		}
	}


}


</style>