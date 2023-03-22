<template>
	<div>
		<Preloader/>
		<Header/>
		<main>
			<section>
				<div class="wrapper-section">
					<span class="section-title" ref="contact" >Контакты</span>
					<div class="contacts">
						<div class="contacts-block" >
							<span class="contacts_hello">Будем рады знакомству!</span>
							<div class="contacts-adress">
								<div class="adress-container">
									<img class="phone_img" src="../assets/temp/contacts/phone.svg" alt="">
									<div class="adress_title">
										<span>+7 4742 37-94-74<br>
										+7 4742 37-82-35</span>
										<span class="adress__text">Тел. в г. Липецк</span>
									</div>
								</div>
								<hr>
								<div class="adress-container">
									<img class="home_img" src="../assets/temp/contacts/home.svg" alt="">
									<div class="adress_title">
										<span>398902, Россия, г. Липецк, п. Сырский, ул. Юношеская, ст. 43</span>
										<span class="adress__text">Адрес</span>
									</div>
								</div>
								<hr>
								<div class="adress-container">
									<img class="email_img" src="../assets/temp/contacts/email.svg" alt="">
									<div class="adress_title">
										<span>ztmlipetsk@gmail.com</span>
										<span class="adress__text">Почта</span>
									</div>
								</div>
							</div>
						</div>
						<iframe class="animated my-animation-class" ref="animatedElement"  src="https://yandex.ru/map-widget/v1/?um=constructor%3A648f7f6119617e491f83827fe303a22db80858822f8b9ae9ac6e2a2495e549d4&amp;source=constructor" frameborder="0"></iframe>
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
import Preloader from "@/components/PreLoader";
import "animate.css";

export default {
	name: "ContactView",
	components: {
		Header,
		Footer,
		Preloader,
	},
	data: function (){
		return {
			showMap: false,
			hash: this.$route.hash,
		}
	},
	mounted () {
		setTimeout(() => {
			this.showMap = true
		}, 100)
		this.$nextTick(function () {
			if  (this.hash) {
				const contact = this.hash.replace('#', '')
				setTimeout(() =>{ this.scrollToAnchorPoint(contact)}, 1600)
			}
		});

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					this.$refs.animatedElement.classList.add('animate__animated', 'animate__fadeIn');
					observer.disconnect();
				}
			},
			{ threshold: 1 }
		);
		observer.observe(this.$refs.animatedElement);


	},
	methods:  {
		scrollToAnchorPoint(contact) {
			const el = this.$refs[contact]
			el.scrollIntoView({ behavior: 'smooth' })
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
	margin: size(50, 1920) auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
}

.contacts{
	width: $wrapper;
	margin: size(50, 1920) auto;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 7px 40px rgba(0, 0, 0, 0.06);
	border-radius: 20px;
}

iframe{
	width: size(1100, 1920);
	height: size(500, 1920);
	border-radius: 0 20px 20px 0;
}

.section-title{
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: size(50 ,1920);
	line-height: size(59, 1920);
	text-align: center;
	text-transform: uppercase;

	color: #000000;
}

/*contacts --------------------*/

.contacts_hello{
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: size(32, 1920);
	line-height: size(28, 1920);
	color: #000000;
	margin-top: size(30, 1920);
	margin-bottom: size(70, 1920);
}
.contacts-block{

	display: flex;
	flex-direction: column;
	padding: size(20, 1920);
}

.adress-container{
	display: flex;
	align-items: center;
	width: size(500, 1920);
	margin-bottom: size(20, 1920);
	img{
		margin-right: size(15, 1920);
		width: size(16, 1920);
		height: size(16, 1920);
	}
}
.adress_title{
	display: flex;
	flex-direction: column;
	span{
		font-family: 'Montserrat', sans-serif;
		font-size: size(20, 1920);
		line-height: size(22, 1920);
		color: #000000;
	}
	.adress__text{
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: size(16, 1920);
		line-height: size(20, 1920);
		color: #E01C22;
	}
}

hr{
	background-color: rgba(0, 0, 0, 0.1);
	height: 2px ;
	margin-bottom: size(20, 1920);
 }

</style>