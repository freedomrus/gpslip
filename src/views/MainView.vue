<template>
	<div>
		<Header/>
		<main>
			<section>
				<div class="wrapper-section">
					<span class="section__title"><span>Н</span>аше оборудование</span>
					<div class="equipment-cards">
						<div class="equipment-cards__block">
							<div class="card-white__container">
								<div class="container-white">
									<span>НАВИГАЦИОННЫЙ КОНТРОЛЛЕР ARNAVI 4</span>
								</div>
								<img class="card-white__arnavi" src="../assets/temp/equipment/arnavi4.png" alt="">
							</div>
							<img class="card-white__fon" src="../assets/temp/equipment/arnavifon.png" alt="">
						</div>
						<div class="equipment-cards__block">
							<div class="card-white__container">
								<div class="container-white">
									<span>TELTONIKA FM4100</span>
								</div>
								<img class="card-white__teltonika" src="../assets/temp/equipment/teltonika.png" alt="">
							</div>
							<img class="card-white__fon" src="../assets/temp/equipment/teltonikafon.png" alt="">
						</div>
						<div class="equipment-cards__block">
							<div class="card-white__container">
								<div class="container-white">
									<span>АСН СИГНАЛ S-2652</span>
								</div>
								<img class="card-white__ash" src="../assets/temp/equipment/ash.png" alt="">
							</div>
							<img class="card-white__fon" src="../assets/temp/equipment/ashfon.png" alt="">
						</div>
					</div>
					<div class="all-equipment"><span>Все предложения</span></div>
				</div>
			</section>

			<section>
				<div class="wrapper-section">
					<span class="section__title"><span>У</span>слуги</span>
					<div class="services-cards">
						<div class="services-cards__block">
							<div class="services-white">
								<span>Оснащение ТС системой ГЛОНАСС/GPS</span>
							</div>
							<img class="services-cards__fon" src="../assets/temp/services/servicesone.png" alt="">
						</div>
						<div class="services-cards__block">
							<div class="services-white">
								<span>Установка тахографа</span>
							</div>
							<img class="services-cards__fon" src="../assets/temp/services/servicetwo.png" alt="">
						</div>
						<div class="services-cards__block">
							<div class="services-white">
								<span>Замена блока СКЗИ</span>
							</div>
							<img class="services-cards__fon" src="../assets/temp/services/servicethree.png" alt="">
						</div>
						<div class="services-cards__block">
							<div class="services-white">
								<span>Ретрансляция данных "Олимпстрой", "НИС", АО ГЛОНАСС</span>
							</div>
							<img class="services-cards__fon" src="../assets/temp/services/servicefour.png" alt="">
						</div>
						<div class="services-cards__block">
							<div class="services-white">
								<span>Установка оборудование контроля расхода ГСМ, датчики топлива</span>
							</div>
							<img class="services-cards__fon" src="../assets/temp/services/servicefive.png" alt="">
						</div>
						<div class="services-cards__block">
							<div class="services-white">
								<span>Организация диспетчерского центра контроля ГЛОНАСС/GPS</span>
							</div>
							<img class="services-cards__fon" src="../assets/temp/services/servicesix.png" alt="">
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="wrapper-section">
					<span class="section__title"><span>О</span> НАС</span>
					<div class="about">
						<div class="about-title">
							<p>Наша компания является Партнером и Агентом оператора государственной автоматизированной
								информационной системы ЭРА-ГЛОНАСС АО ГЛОНАСС, официальным дистрибьютором разработчика
								систем ГЛОНАСС/GPS оборудования ООО «Аруснави» и наделена правами продаж оборудования
								Арнави, Navtelecom, продажа и ослуживание оборудования Департамента систем автоматизации
								транспорта ГК "ШТРИХ-М", датчиков контроля уровня топлива Omnicomm LLS, Эскорт.</p>
							<div class="about-button"><span>Все о нас</span></div>
						</div>
						<img src="../assets/temp/about/about.png" alt="">
					</div>
				</div>
			</section>
			<section>
				<div class="wrapper-section">
					<span class="section__title"><span>Н</span>АШИ ПАРТНЁРЫ</span>
					<div class="our-partners">
						<hooper class="partners-slider" :vertical="false" :mouseDrag="false" :hoverPause="false"  :playSpeed="2000" :trimWhiteSpace="true" :infinite-scroll="false" :items-to-show="4.15"    :centerMode="false"  :auto-play="true"  :transition="800" >
							<slide>
								<img src="../assets/temp/hooperpartenrs/hooperone.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hoopertwo.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hooperthree.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hooperfour.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hooperfive.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hoopersix.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hooperseven.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hoopereight.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hoopernine.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hooperten.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hoopereleven.png" alt="">
							</slide>
							<slide>
								<img src="../assets/temp/hooperpartenrs/hoopertwelve.png" alt="">
							</slide>
							<hooper-navigation slot="hooper-addons"></hooper-navigation>
						</hooper>
					</div>
				</div>

			</section>
		</main>
	</div>
</template>

<script>

import Header from '../components/Header';
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';


export default {
	name: "Main",
	components: {
		Header,
		Hooper,
		Slide,
		HooperPagination,
		HooperNavigation,
	}
}


</script>


<style scoped lang="scss">
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";


.wrapper-section {
	width: $wrapper;
	margin: size(80, 1920) auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.section__title {
	text-align: center;
	font-family: 'PT Sans', sans-serif;
	font-size: size(50, 1920);
	line-height: size(69, 1920);
	text-transform: uppercase;
	color: #075985;

	span {
		color: #E01C22;
	}
}


//section equipment ---------------------


.equipment-cards {
	display: flex;
	justify-content: space-between;
	width: $wrapper;
	margin-top: size(32, 1920);
}


//CARD ONE TWO THREE -------------

.equipment-cards__block:hover {
	.card-white__fon {
		width: size(650, 1920);
		opacity: 0.8;

	}
}


.equipment-cards__block {
	width: size(566, 1920);
	height: size(252, 1920);
	border-radius: 20px;
	overflow: hidden;
	transition: all 0.6s;
	cursor: pointer;
	box-shadow: -10px 10px 20px rgba(224, 28, 34, 0.2), 10px 0 20px rgba(6, 123, 205, 0.4);


	.card-white__fon {
		position: relative;
		width: size(567, 1920);
		height: size(252, 1920);
		opacity: 0.6;
		box-shadow: 0 7px 50px rgba(0, 0, 0, 0.15);
		object-fit: cover;
		border-radius: 20px;
		overflow: hidden;
		transition: all 0.5s;
	}


	.card-white__arnavi {
		width: size(236, 1920);
		height: size(207, 1920);
		margin: size(20, 1920) 0 0 size(310, 1920);
		position: absolute;
		z-index: 11;
	}

	.card-white__teltonika {
		width: size(200, 1920);
		height: size(150, 1920);
		margin: size(55, 1920) 0 0 size(310, 1920);
		position: absolute;
		z-index: 11;
	}

	.card-white__ash {
		width: size(270, 1920);
		height: size(242, 1920);
		margin: size(5, 1920) 0 0 size(240, 1920);
		position: absolute;
		z-index: 11;
	}


	.container-white {
		background: rgba(255, 255, 255, 0.8);
		width: size(382, 1920);
		height: size(112, 1920);
		position: absolute;
		align-items: center;
		margin-top: size(70, 1920);
		z-index: 10;
		display: flex;

		span {
			margin: size(30, 1920) size(94, 1920) size(30, 1920) size(20, 1920);
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
			font-size: size(20, 1920);
			line-height: size(25, 1920);
			color: #075985;
		}
	}
}

//equipment-button -------------

.all-equipment {
	width: size(414, 1920);
	height: size(72, 1920);
	margin-top: size(36, 1920);
	background: linear-gradient(90deg, #E01C22 0%, #067BCD 100%);
	border-radius: 20px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: size(25, 1920);
	line-height: size(26, 1920);
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.7s;
	cursor: pointer;
}

.all-equipment span:after {
	content: '\00bb';
	opacity: 0;
	transition: 0.5s;
	right: size(-20, 1920);
	font-size: size(24, 1920);
	cursor: pointer;
}

.all-equipment:hover {
	box-shadow: -10px 10px 20px rgba(224, 28, 34, 0.5), 10px 0 20px rgba(6, 123, 205, 0.5);
	transition: 0.3s;
}

.all-equipment:hover span:after {
	opacity: 1;
	align-items: center;
	margin-left: size(10, 1920);
	padding-right: size(25, 1920);
	font-size: size(27, 1920);

}


//SERVICES-CARDS----------------------


.services-cards__block:hover {
	.services-cards__fon {
		width: size(600, 1920);
		height: size(180, 1920);
		opacity: 0.8;
		transition: all 0.5s;
		overflow: hidden;

	}
}


.services-cards {
	display: flex;
	justify-content: space-between;
	width: $wrapper;
	margin-top: size(45, 1920);
	flex-wrap: wrap;


	.services-cards__block {
		width: size(566, 1920);
		height: size(156, 1920);
		overflow: hidden;
		margin-bottom: size(80, 1920);
		border-radius: 20px;
		cursor: pointer;
		box-shadow: -10px 10px 20px rgba(224, 28, 34, 0.2), 10px 0 20px rgba(6, 123, 205, 0.4);

		img {
			position: relative;
			width: size(570, 1920);
			height: size(170, 1920);
			opacity: 0.4;
			box-shadow: 0 7px 50px rgba(0, 0, 0, 0.15);
			object-fit: cover;
			border-radius: 20px;
			overflow: hidden;
			transition: all 0.5s;
		}
	}


	.services-white {
		background: rgba(255, 255, 255, 1);
		padding: size(10, 1920) size(20, 1920);
		width: size(400, 1920);
		height: size(74, 1920);
		position: absolute;
		align-items: center;
		margin-top: size(116, 1920);
		margin-left: size(83, 1920);
		z-index: 10;
		display: flex;
		justify-content: center;
		align-content: center;
		box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.6);
		border-radius: 10px;

		span {
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
			font-size: size(18, 1920);
			line-height: size(22, 1920);
			color: #075985;
			text-align: center;
		}
	}
}


//ABOUT-SECTION ----------------------


.about {
	margin: size(50, 1920) auto;
	width: size(1745, 1920);
	display: flex;
	justify-content: space-between;

	img {
		width: size(1024, 1920);
		height: size(500, 1920);
		border-radius: size(200, 1920)
	}


	p {
		width: size(710, 1920);
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: size(22, 1920);
		line-height: size(34, 1920);
		color: #000000;
		text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

	}


	.about-button {
		width: size(253, 1920);
		height: size(50, 1920);
		margin-top: size(46, 1920);
		background: linear-gradient(90deg, #E01C22 0%, #067BCD 100%);
		border-radius: 20px;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: size(20, 1920);
		line-height: size(22, 1920);
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.7s;
		cursor: pointer;

	}

	.about-button span:after {
		content: '\00bb';
		opacity: 0;
		transition: 0.5s;
		right: size(-20, 1920);
		font-size: size(18, 1920);
		cursor: pointer;
	}

	.about-button:hover {
		box-shadow: -10px 10px 20px rgba(224, 28, 34, 0.5), 10px 0 20px rgba(6, 123, 205, 0.5);
		transition: 0.3s;
	}

	.about-button:hover span:after {
		opacity: 1;
		align-items: center;
		margin-left: size(10, 1920);
		padding-right: size(20, 1920);
		font-size: size(20, 1920);

	}
}



//PARTNERS-SLIDER--------------

.our-partners{
	width: size(1745, 1920);
	margin: size(40, 1920) auto;
}




.partners-slider{

	.hooper-slide{
		display: flex !important;
		justify-content: center !important;
		align-content: center !important;
		align-items: center !important;
		width: size(380, 1920) !important;
		height: size(135, 1920) !important;
		background: #FFFFFF;
		margin-left: size(18, 1920);
		margin-right: size(18, 1920);
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
		border-radius: 20px;
	}



}

</style>