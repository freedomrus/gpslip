<template>
	<div>
		<Header/>
		<main>
			<section >
				<div class="wrapper-section">
					<span class="section-title" ref="about" >О компании</span>
					<div class="about">
						<span class="about-title">ЦЕНТР ТАХОГРАФИИ И МОНИТОРИНГА АВТОТРАНСПОРТА: ГЛОНАСС/GPS</span>
						<div class="about-text animated my-animation-class" ref="animatedElement" >
							<div class="text_info">
								<p class="up__text">Наша компания является Партнером и Агентом оператора государственной автоматизированной информационной системы ЭРА-ГЛОНАСС АО ГЛОНАСС, официальным дистрибьютором разработчика систем ГЛОНАСС/GPS оборудования ООО «Аруснави» и наделена правами продаж оборудования Арнави, Navtelecom, продажа и ослуживание оборудования Департамента систем автоматизации транспорта ГК "ШТРИХ-М", датчиков контроля уровня топлива Omnicomm LLS, Эскорт.</p>
								<p class="down__text">ООО "Центр тахографии и мониторинга автотранспорта" представляет на территории Центрального Черноземного Района РФ следующие услуги:</p>
							</div>
							<ul>
								<li><span>Обеспечим исполнение постановления Правительства Российской Федерации от 22.12.2020 № 2216.</span></li>
								<li><span>Оснастим Ваши транспортные средства системой ГЛОНАСС/GPS. Предлагаем широкий ассортимент оборудования и решений для построения систем видеонаблюдения на любом виде транспорта.</span></li>
								<li><span>Установим тахограф. Изготовим карту водителя, предприятия в короткие сроки.</span></li>
								<li><span>Произведем замену блока СКЗИ.</span></li>
								<li><span>Осуществляем помощь в выполнении требований постановления Правительства РФ №2216 АО «ГЛОНАСС».</span></li>
								<li><span>Организуем диспетчерский центр контроля автотранспорта ГЛОНАСС/GPS на Вашем предприятии с неограниченным количеством рабочих мест и бесплатным обучением Ваших сотрудников.</span></li>
								<li><span>Установим оборудование контроля расхода ГСМ, датчики топлива.</span></li>
								<li><span>Ретрансляция данных "Олимпстрой", "НИС", АО ГЛОНАСС.</span></li>
								<li><span>Работники нашей компании прошли обучение и получили сертификаты установщиков датчиков топлива Omnicomm LLS.</span></li>
							</ul>
						</div>
						<span class="about-certificate animated my-animation-class" ref="animatedElement1">наши сертификаты</span>
						<div class="certificate" >
							<div class="certificate-card" v-for="(image, index) in images" :key="image.name" >
								<img class="certificate__img" :src="image.src" @click="showModal(index)">
							</div>
							<div class="modal " v-if="show" @click="closeModal()">
								<div class="modal-content">
									<div class="modal-close">
										<svg class="modal__close" @click="closeModal()" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z" fill="black"/>
										</svg>
									</div>
									<img :src="selectedImage.src"  alt="Image">
								</div>
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "animate.css";
export default{
	name: "AboutView",
	components: {
		Header,
		Footer,
	},


	data (){
		return {
			hash: this.$route.hash,
			images: [
				{name: 'cerf1', src: require('../assets/temp/Certificate/cerf1.svg')},
				{name: 'cerf2', src: require('../assets/temp/Certificate/cerf2.svg')},
				{name: 'cerf3', src: require('../assets/temp/Certificate/cerf3.svg')},
				{name: 'cerf4', src: require('../assets/temp/Certificate/cerf4.svg')},
				{name: 'cerf5', src: require('../assets/temp/Certificate/cerf5.svg')},
				{name: 'cerf6', src: require('../assets/temp/Certificate/cerf6.svg')},
			],
			show: false,
			selectedImage: null,
		}
	},
	mounted () {
		window.scrollTo(0, 0);
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					this.$refs.animatedElement.classList.add('animate__animated', 'animate__fadeIn');
					observer.disconnect();
				}
			},
			{ threshold: 0 }
		);
		observer.observe(this.$refs.animatedElement);

		const observer1 = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					this.$refs.animatedElement1.classList.add('animate__animated', 'animate__fadeIn');
					observer1.disconnect();
				}
			},
			{ threshold: 0 }
		);
		observer1.observe(this.$refs.animatedElement1);
	},

	watch:{
		show: function (){
			if(this.show){
				document.body.style.overflow = "hidden"
			return
		}
			document.body.style.overflow = "auto"
		}
	},

	methods:  {

		showModal(index) {
			this.selectedImage = this.images[index];
			this.show = true;
		},
		closeModal() {
			this.selectedImage = null;
			this.show = false;
		}

	}
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";


.animated{
	opacity: 0;
}

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

.about{
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.about-title{
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: size(26, 1920);
	line-height: size(28, 1920);
	color: #000000;
	margin-bottom: size(50, 1920);

}

.about-text{
	width: size(1745, 1920);
	margin: 0 auto;
	justify-content: space-between;
	display: flex;
}

ul{

	li{
		font-family: 'Montserrat', sans-serif;
		font-size: size(15, 1920);
		color: #E01C22;
		list-style-type: disc;
		margin-bottom: size(10, 1920);
		padding: size(8, 1920);
		cursor: pointer;
		transition: all 0.3s;
		span{
			font-family: 'Montserrat', sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: size(19, 1920);
			line-height: size(29, 1920);
			color: #000000;
		}

	}

	li:hover{
		transition: all 0.3s;
		font-size: size(18, 1920);
		color: #075985;
		border-left: 3px solid #075985;
		border-radius: 5px;
		box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1), 5px -2px 5px 1px rgba(0, 0, 0, 0.1);
	}
}

.text_info{
	width: size(650, 1920);
	margin-right: size(80, 1920);
	.up__text{
		margin-bottom: size(30, 1920);
	}

	p{
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: size(19, 1920);
		line-height: size(29, 1920);
		color: #000000;
	}
}


//certificate----------


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
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: size(800, 1920);
	height: size(900, 1920);
	//background-color: rgba(255, 255, 255, 0.2);
	padding: 20px;
	border-radius: 5px;
	//border: 3px solid rgba(6, 123, 205, 0.3);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}
.modal-close{
	width: size(760, 1920);
	display: flex;
	justify-content: flex-end;
}


.modal__close{
	width: size(35, 1920) ;
	height: size(35, 1920) ;
	cursor: pointer;
	path{
		fill:rgba(225, 225, 225, 1);
	}

}

.modal__close:hover{
	path{
		fill:rgba(6, 123, 205, 1);

	}
}

.modal img {
	display: flex;
	align-items: flex-end;
	width: size(600, 1920);
	height: size(900, 1920);
	border-radius: 20px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}


.about-certificate{
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: size(50 ,1920);
	line-height: size(69, 1920);
	text-transform: uppercase;
	color: #444444;
	margin-top: size(40, 1920);
	margin-bottom: size(30, 1920);
}

.certificate{
	display: flex;
	justify-content: space-between;
}

.certificate__img{
	width: size(250, 1920);
	height: size(350, 1920);
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	cursor: pointer;
	border-radius: 10px;
}

.certificate__img:hover{
	filter: drop-shadow(0px 4px 4px rgba(7, 89, 133, 0.5));
}

</style>