<template>
	<div>
		<Header/>
		<main>
			<section >
				<div class="wrapper-section">
					<span  class="section-title" >ГЛОНАСС ОБОРУДОВАНИЕ</span>
					<div class="equipment">
						<div class="equipment-card">
							<span>АСН СИГНАЛ S-2652</span>
							<div class="card-block">
								<img src="../assets/temp/eqview/glonass.svg" alt="">
								<p>Аппаратура спутниковой навигации (АСН) СИГНАЛ S-2652 прошла все испытания, в подтверждение чего, был выдан сертификат соответствия требованиям ТР ТС 018/2011 "О безопасности колесных транспортных средств". А это значит, что на рынке мониторинга транспорта появилось еще одно устройство, установку которого можно производить в рамках Постановления Правительства РФ №153!
								</p>
								<div class="card__button"  @click="shows2652()">Подробнее</div>
							</div>
						</div>

						<div class="modal " v-if="s2652" >
							<div class="modal-content">
								<div class="modal-block">
									<img src="../assets/temp/eqview/s2652.svg" alt="">
									<span>ОСНОВНЫЕ ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ АСН СИГНАЛ S-2652:</span>
									<div class="block-text">
										<ul>
											<li>
												2 SIM-карты</li>
											<li>3G-модем</li>
											<li>Li-Ion аккумулятор 800 мА/ч</li>
											<li>Защита по питанию до 200В</li>
											<li>Защита входных линий до 200В</li>
										</ul>
										<ul>
											<li>6 универсальных входных линий</li>
											<li>Интерфейсы RS-232/RS-485</li>
											<li>CAN-интерфейс</li>
											<li>1-Wire (до 512 ключей TM)</li>
											<li>4 управляющие выходные линии</li>
										</ul>
									</div>
									<span>АСН ПОЗВОЛЯЕТ РАБОТАТЬ СО СЛЕДУЮЩИМИ УСТРОЙСТВАМИ:</span>
									<p>Датчиками уровня топлива (до 16 шт. по RS-485 и 1 шт. по RS-232), адаптерами CAN-шины, камерой, мониторами давления в шинах, высокоточным навигационным приемником, рефрижераторной установкой, дисплеем водителя, тахографами, тангентой, считывателями RFID-меток, счетчиками пассажиропотока, информационными табло, алкозамком и другим оборудованием. АСН также передает данные в режиме «прозрачный порт» и осуществляет выдачу строчек NMEA.</p>
								</div>
							</div>
							<div class="modal-close">
								<svg class="modal__close" @click="closes2652()" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z" fill="black"/>
								</svg>
							</div>
						</div>

						<div class="equipment-card">
							<span>НАВИГАЦИОННЫЙ КОНТРОЛЛЕР ARNAVI 4</span>
							<div class="card-block">
								<img class="block-ztm" src="../assets/temp/eqview/arnavi4.svg" alt="">
								<p>Навигационный контроллер ARNAVI 4 ГЛОНАСС/GPS предназначен для дистанционного наблюдения за подвижными объектами и может быть использован совместно с любым совместимым программным комплексом. Для контроля за состоянием автомобиля или установленного на нем оборудования, к устройству могут подключаться цифровые, дискретные, аналоговые и частотно-импульсные датчики. Реализована поддержка CAN шины.
								</p>
								<div class="card__button" @click="showarnavi()">Подробнее</div>
							</div>
						</div>

						<div class="modal " v-if="arnavi" >
							<div class="modal-content">
								<div class="modal-block">
									<img src="../assets/temp/eqview/arnavi4.svg" alt="">
									<span>Навигационный контроллер ARNAVI 4 ГЛОНАСС/GPS</span>
									<div class="block-text">
										<p>Предназначен для дистанционного наблюдения за подвижными объектами и может быть использован совместно с любым совместимым программным комплексом. Для контроля за состоянием автомобиля или установленного на нем оборудования, к устройству могут подключаться цифровые, дискретные, аналоговые и частотно-импульсные датчики. Реализована поддержка CAN шины.

											Для более полного контроля за состоянием автомобиля или установленного на нем оборудования, к устройству могут подключаться дискретные (вкл/выкл), аналоговые и частотно- импульсные датчики (датчики расхода топлива, наличия пассажира, температуры и др).</p>
									</div>
									<span>Реализована поддержка CAN* шины</span>
									<p>Порядка 800 моделей ТС, считывается более 20 параметров: полный расход и уровень топлива, полный пробег, время работы, обороты и температура двигателя, скорость, нагрузки на оси, контролеры аварий и др. </p>
									<span>Встроенный резервный аккумулятор</span>
									<p>Обеспечивает автономную работу устройства при отключении аккумулятора автомобиля с информированием об этом событии - данная функция широко используется в охранных и противоугонных целях.</p>
									<span>Встроенный датчик движения</span>
									<p> Используется в интеллектуальных алгоритмах энергосбережения, а также может применяться для определения мест стоянок транспортного средства.</p>
									<span>Трекер может фиксировать уровень GSM сигнала</span>
									<p>Идентифицировать базовые станции и достоверность навигационных данных в момент записи каждой координатной точки.</p>
									<span>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ ARNAVI 4</span>
									<img class="arnaviinfo" src="../assets/temp/equipment/arnaviinfo.svg" alt="">
								</div>
							</div>
							<div class="modal-close">
								<svg class="modal__close" @click="closearnavi()" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z" fill="black"/>
								</svg>
							</div>
						</div>

						<div class="equipment-card">
							<span>ГЛОНАСС/GPS ОБОРУДОВАНИЕ АРУСНАВИ</span>
							<div class="card-block">
								<img src="../assets/temp/eqview/arus.svg" alt="">
								<p>Представляем обновленную версию навигационного контроллера ARUSNAVI. В приборе полностью переработана схемотехника, но как и прежде оставлены защиты от повышенного напряжения, что позволяет использовать прибор на российской автотехнике, механизм заморозки координат на стоянках (отсутствие звезд).
								</p>
								<div class="card__button" @click="showarusnavi()">Подробнее</div>
							</div>
						</div>

						<div class="modal " v-if="arusnavi" >
							<div class="modal-content">
								<div class="modal-block">
									<img class="arus" src="../assets/temp/eqview/arus.svg" alt="">
									<span>ГЛОНАСС/GPS ОБОРУДОВАНИЕ АРУСНАВИ</span>
									<div class="block-text">
										<p>Представляем обновленную версию навигационного контроллера ARUSNAVI. В приборе полностью переработана схемотехника, но как и прежде оставлены защиты от повышенного напряжения, что позволяет использовать прибор на российской автотехнике, механизм заморозки координат на стоянках (отсутствие звезд).</p>
									</div>
									<span>Надежные решения, проверенные временем</span>
									<p>«ARUSNAVI » - это уже четвертое поколение в семействе навигационных GSP /ГЛОНАСС/ GPRS контроллеров, выпускаемых ООО «Аруснави» в течение последних 6 лет. Это означает, что при проектировании контроллера использовался богатый опыт команды разработчиков, применены проверенные временем схемотехнические, конструктивные и программные решения и технологии. В результате мы можем уверенно говорить о том, что контроллер является высоконадежным инструментом первичного сбора данных и основой для многолетней безпроблемной эксплуатации в системах мониторинга транспорта.</p>
									<span>GPS и ГЛОНАСС</span>
									<p>Контроллер выпускается в двух исполнениях в зависимости от используемых для определения местоположения навигационных систем: GPS и GPS+ГЛОНАСС . В исполнении « GPS +ГЛОНАСС» предусмотрен выбор пользователем рабочей навигационной системы. Для устранения «шума» при определении местоположения в контроллер встроен датчик движения (акселерометр) .</p>
									<span>Универсальное питание, резервный аккумулятор</span>
									<p>Контроллер работает от бортовой сети как 12 В, так и 24 В (диапазон напряжения питания 8…42 В). При установленном модуле резервного аккумулятора обеспечивается полноценная автономная работа до 10 часов от Li Ion аккумулятора при пропадании внешнего питания и автоматический заряд резервного аккумулятора при работе от внешнего питания.

										Предусмотрены выходы постоянного напряжения +3,3 В и +(7…9) В для питания внешних устройств и датчиков.</p>
									<span>Широкие телеметрические возможности</span>
									<p>Контроллер поддерживает:
										<ul>
										<li>определение состояния трёх дискретных внешних датчиков с заданием режимов работы каждого входа (замкнуто/разомкнуто или детектор импульсов);</li>

									<li>измерение частоты на любом из дискретных входов (до 4 кГц);</li>

									<li>счетчики импульсов на любом из дискретных входов (24 разряда, 16 777 216 значений);</li>

									<li>определение состояния трёх аналоговых внешних датчиков (напряжение 0…2,5 В, 8 бит) с выбираемым усреднением каждого входа 3, 10, 30 или 90 секунд;</li>

									<li>определение состояния трёх цифровых (12 бит) датчиков уровня топлива , совместимых по протоколу с датчиками LLS фирмы Омникомм;</li>

									<li>поддержка последовательного интерфейса RS 485 для работы с внешними устройствами (текущая версия поддерживает внешний считыватель RFID бесконтактных карт MIFARE для идентификации водителей);</li>

									<li>управление внешними исполнительными устройствами (три выхода на включение/выключение внешних устройств при токе до 1 А и напряжении до 30 В).</li>
										</ul>
										Определение несанкционированного вмешательства<br/>

										Обеспечивается определение неисправностей навигационной антенны : обрыв или короткое замыкание (только для исполнения «GPS»), пропадания внешнего питания, обрыв сигнала «Зажигание», извлечение SIM карты.</p>
									<span>Надежное и экономное накопление и доставка данных</span>
									<p>Встроенная в контроллер энергонезависимая память на 62 000 отчетов (точек маршрута) обеспечивает автономную работу контроллера в режиме «черного ящика» при отсутствии связи с диспетчерским центром.</p>
									<p>При записи точек маршрута используется адаптивный, гибко настраиваемый пользователем алгоритм по изменению курса (направления движения), скорости, пройденному расстоянию, времени, изменению состояния датчиков и т.д., позволяющий не пропустить важных событий и подробно «прорисовать маршрут» без избыточного использования памяти и GPRS трафика.</p>
									<p>При доставке данных о местоположении и состоянии объекта через сеть Интернет с использованием технологии пакетной передачи данных ( GPRS ) обеспечивается гарантированная доставка отчетов (с надежным механизмом подтверждений «поверх» TCP/IP) с шифрованием передаваемых данных (длина ключа 128 бит). При этом обеспечивается сжатие передаваемых по GPRS данных, что позволяет существенно (в среднем до 70%) снизить количество передаваемой по GPRS информации и, следовательно, дополнительно снизить расходы на оплату трафика.</p>
									<p>Контроллер поддерживает протокол передачи данных для использования с серверным ПО Wialon . Возможна реализация других протоколов для интеграции в диспетчерские системы сторонних производителей.</p>
									<span>Удобство установки и эксплуатации</span>
									<p>Для удобства эксплуатации контроллера предусмотрены:</p>
									<ul>
									<li>удобная конфигурация с помощью специальной программы с поддержкой сохранения профилей в файлы и расширенной диагностикой контроллера и внешних устройств: отображается подробная технологическая информация о состоянии внутренних узлов контроллера и состоянии подключенных к нему датчиков и устройств;</li>
									<li>светодиодная индикация режимов работы : 5 индикаторов упрощают процесс установки и диагностики неисправностей ;</li>
									<li>удаленная конфигурация параметров и режимов работы через GPRS или SMS ;</li>
									<li>удаленное обновление версий встроенного ПО через TCP / IP соединение по GPRS в фоновом режиме (без прерывания полноценной работы контроллера);</li>
									<li>накопление статистической информации о работе контроллера: время работы, количество включений, установок/извлечений SIM карты, входящих/исходящих SMS, объем входящего/исходящего GPRS трафика и др.</li>
									</ul>
									<span>Поддержка, развитие, гарантийное обслуживание</span>
									<p>Команда разработчиков ООО «Аруснави» обеспечит всю необходимую техническую поддержку по применению контроллера, а также готова реализовать нужные в том или ином проекте новые функции. Обеспечивается также оперативное гарантийное и постгарантийное обслуживание.</p>
								</div>
							</div>
							<div class="modal-close">
								<svg class="modal__close" @click="closearusnavi()" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z" fill="black"/>
								</svg>
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
	data (){
		return {
			s2652: false,
			arnavi: false,
			arusnavi: false,
		}
	},

	watch:{
		s2652: function (){
			if(this.s2652){
				document.body.style.overflow = "hidden"
				return
			}
			document.body.style.overflow = "auto"
		},
		arnavi: function (){
			if(this.arnavi){
				document.body.style.overflow = "hidden"
				return
			}
			document.body.style.overflow = "auto"
		},
		arusnavi: function (){
			if(this.arusnavi){
				document.body.style.overflow = "hidden"
				return
			}
			document.body.style.overflow = "auto"
		}
	},

	methods:  {

		shows2652() {
			this.s2652 = true;
		},
		closes2652() {
			this.s2652 = false;
		},

		showarnavi() {
			this.arnavi = true;
		},
		closearnavi() {
			this.arnavi = false;
		},

		showarusnavi() {
			this.arusnavi = true;
		},
		closearusnavi() {
			this.arusnavi = false;
		},

	}

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

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
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
	height: 90%;
	background-color: rgba(255, 255, 255, 1);
	padding: size(40, 1920);
	border-radius: 5px;
	overflow-y: auto !important;
	overflow-x: hidden !important;
	border: 3px solid rgba(6, 123, 205, 0.3);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

.modal-content::-webkit-scrollbar {
	width: size(10, 1920) !important;
	background-color: white !important;
}

.modal-content::-webkit-scrollbar-thumb {
	background: #075985 !important;
}

.modal-content::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(6,123,205,0.3) !important;
}


.modal-close{
	display: flex;
	margin-left: size(30, 1920);
	justify-content: flex-start;
	height: size(900, 1920);
}


.modal__close{
	width: size(35, 1920) ;
	height: size(35, 1920) ;
	cursor: pointer;
	path{
		fill:white;
	}

}

.modal__close:hover{
	path{
		fill:rgba(6, 123, 205, 1);

	}
}
.modal-block{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	span{
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: size(20, 1920);
		color: #E01C22;
		margin-bottom: size(20, 1920);
	}
	li, p{
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: size(26, 1920);
		color: black;
		margin-bottom: size(20, 1920);
	}

}

.block-text{
	display: flex;
	justify-content: space-between;
}

.modal  {
	.arus{
		width: size(200, 1920);
		height: size(331, 1920);
	}


	.arnaviinfo{
		width: size(700, 1920);
		height: size(854, 1920);
	}
	img{
	width: size(600, 1920);
	height: size(331, 1920);
	}
}

</style>