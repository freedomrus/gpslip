<template>
	<div>
		<Header/>
		<main>
			<section >
				<div class="wrapper-section">
					<span  class="section-title" ref="equipment" >Оборудование</span>
					<div class="equipment">
						<div class="equipment-card">
							<span>ГЛОНАСС ОБОРУДОВАНИЕ</span>
							<div class="card-block">
								<img src="../assets/temp/eqview/glonass.svg" alt="">
								<p>Мобильный трекер СТ 270 (ГЛОНАСС/GPS) изготовлен на базе навигационного приемника МНП-М7. Предназначен для работы в системах контроля мобильных объектов, обеспечивающих удаленный контроль и управление транспортными средствами в режиме реального времени. Автотрекер устанавливается на контролируемый подвижный объект имеющий источник бортового электропитания с номинальным напряжением 8—30 В.
								</p>
								<router-link to="/glonassequipment"><div class="card__button">Подробнее</div></router-link>
							</div>
						</div>

						<div class="equipment-card">
							<span>ZTM ОБОРУДОВАНИЕ</span>
							<div class="card-block">
								<img class="block-ztm" src="../assets/temp/eqview/ztm-lite.svg" alt="">
								<p>Абонентский терминал ZTM-Lite – компактное и функциональное устройство, которое несмотря на небольшой размер имеет достаточно широкий функционал и поддерживает передовые дополнительный устройства контроля и мониторинга. ZTM-Lite имеет мощный микроконтроллер, который позволяет расширять его функционал практически без ограничений.
								</p>
								<div class="card__button">Подробнее</div>
							</div>
						</div>

						<div class="equipment-card">
							<span>ТЕХНОЛОГИИ ТОЧНОГО ЗЕМЛЕДЕЛИЯ</span>
							<div class="card-block">
								<img src="../assets/temp/eqview/zemled.svg" alt="">
								<p>Позволяет более продуктивно использовать технику и время, что особенно важно для ускорения без потери качества. Обеспечивает комфортную работу не только днем, но и в ночное время и в условиях сильного тумана или запыленности. Автоматический расчет характеристик рабочего хода (длины гона, ширины загонки и разворотных полос). Возможность выбора одного из шести шаблонов движения по полю. Создание подробных электронных карт и маркировка всех препятствий, встречающихся на Ваших полях.
								</p>
								<div class="card__button">Подробнее</div>
							</div>
						</div>

						<div class="equipment-card">
							<span>ТЕЛЬТОНИКА</span>
							<div class="card-block">
								<img src="../assets/temp/eqview/teltonika.svg" alt="">
								<p>Teltonika FM3200 это простой и удобный терминал, оснащенный GPS и GSM, который может определять координаты устройства и передавать их по GSM сети, прекрасно подходит в тех случаях, когда нужно определить местонахождение удаленного объекта (грузовых, легковых автомобилей, кораблей и т.д.). Может выполнять задания на удаленных объектах, например, следить за состоянием двигателя, дверьми грузового автомобиля и т.д.
								</p>
								<div class="card__button">Подробнее</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer/>
	</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer'

export default {
	name: "equipment",
	components: {
		Header,
		Footer,
	},

}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";



main {
	width: $wrapper;
	margin: 0 auto;
}

.wrapper-section {
	width: $wrapper;
	margin-top: size(50, 1920);
	margin-bottom: size(100, 1920);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
}

.section-title{
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: size(50 ,1920);
	line-height: size(59, 1920);
	text-align: center;
	text-transform: uppercase;
	margin-bottom: size(80, 1920);
	color: #000000;
}

.equipment-card{
	width: size(1745, 1920);
	display: flex;
	flex-direction: column;
	margin-bottom: size(70, 1920);
	span{
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		font-size: size(30, 1920);
		line-height: size(31, 1920);
		color: #000000;
		margin-bottom: size(20, 1920);
	}
}


.card-block{
	width: size(1745, 1920);
	padding: size(35, 1920) size(54, 1920);
	background: #FFFFFF;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	border-radius: 20px;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	transition: 0.3s;
	.block-ztm{
		width: size(119, 1920);
		height: size(152, 1920);
	}

	img{
		width: size(152, 1920);
		height: size(103, 1920);
	}
	p{
		width: size(1071, 1920);
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: size(22, 1920);
		line-height: size(22, 1920);
		color: #000000;
		transition: all 0.3s;
	}
}

.card-block:hover{
	transition: all 0.3s;
	box-shadow: -10px 10px 20px rgba(6, 123, 205, 0.2), 10px 0 20px rgba(6, 123, 205, 0.2);
}


.card__button {
	width: size(300, 1920 );
	height: size(50, 1920);
	background: linear-gradient(90deg, #E01C22 0%, #067BCD 100%);
	border-radius: 20px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: size(20, 1920);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	cursor: pointer;
}
.card__button:hover {
	font-size: size(22, 1920);
	width: size(300, 1920);
	height: size(55, 1920);
	box-shadow: -10px 10px 20px rgba(6, 123, 205, 0.2), 10px 0 20px rgba(6, 123, 205, 0.2);
	transition: all 0.3s;

}

</style>