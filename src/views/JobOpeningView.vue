<template>
	<div>
	<Header/>
	<main>
		<section>
			<div class="wrapper-section">
				<span class="section-title" ref="jobopening" >Вакансии</span>
				<div class="jobcards">
					<div class="job-card animated my-animation-class" ref="animatedElement">
						<span>Специалист по установке на автомобили дополнительного оборудования.</span>
						<img src="../assets/temp/job/arrowjob.svg" alt="">
					</div>
					<div class="job-card animated my-animation-class" ref="animatedElement2">
						<span>Автоэлектрик</span>
						<img src="../assets/temp/job/arrowjob.svg" alt="">
					</div>
					<span class="job-appeal " >Обращаться по телефону <span>(4742) 37 - 82 - 35</span>, Коваленко Дмитрий Вадимович</span>
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

export default {
	name: "JobOpeningView",
	components: {Header,
	Footer},

	data: function (){
		return {
			hash: this.$route.hash,
		}
	},
	mounted () {
		// this.$nextTick(function () {
		// 	if  (this.hash) {
		// 		const jobopening = this.hash.replace('#', '')
		// 		setTimeout(() =>{ this.scrollToAnchorPoint(jobopening)}, 100)
		// 	}
		// })
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					this.$refs.animatedElement.classList.add('animate__animated', 'animate__fadeIn');
					observer.disconnect();
				}
			},
			{ threshold: 0}
		);
		observer.observe(this.$refs.animatedElement);

		const observer2 = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					this.$refs.animatedElement2.classList.add('animate__animated', 'animate__fadeIn');
					observer2.disconnect();
				}
			},
			{ threshold: 0 }
		);
		observer2.observe(this.$refs.animatedElement2);


	},
	methods:  {
		// scrollToAnchorPoint(jobopening) {
		// 	const el = this.$refs[jobopening]
		// 	el.scrollIntoView({ behavior: 'smooth' })
		// }
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
	margin-bottom: size(150, 1920);
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
.job-cards{
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.job-card{
	width: size(1745, 1920);
	height: size(135, 1920);
	margin-bottom: size(45, 1920);
	background: linear-gradient(270deg, rgba(6,123,205,0.7) 0%, rgba(224,28,34,0.7) 80%);
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	padding: size(45, 1920) size(162, 1920);
	align-items: center;
	box-shadow: 6px 6px 10px 0 rgba(0, 0, 0, 0.2);
	transition: all 0.5s;
	cursor: pointer;
	img{
		width: size(45, 1920);
		height: size(45, 1920);
		transition: all 0.5s;
	}
	span{
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: size(30 ,1920);
		line-height: size(31, 1920);
		color: #FFFFFF;
		transition: all 0.1s;
	}
}

.job-card:hover{
	background: linear-gradient(270deg, rgba(6,123,205,0.9) 0%, rgba(224,28,34,0.9) 80%);
	transition: all 0.5s;
	img{
		transform: rotate(-90deg);
		transition: all 0.4s;
	}
	span{
		font-size: size(32 ,1920);
		font-weight: 600;
		transition: all 0.3s;
	}
}

.job-appeal{
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: size(30, 1920);
	line-height: size(34, 1920);
	color: #000000;
	span{
		color: #E01C22;
	}
}




</style>