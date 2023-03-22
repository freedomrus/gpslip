<template>
	<div>
		<Header/>
		<main>
			<section>
				<div class="wrapper-section">
					<span class="section-title" ref="partner" >Партнёры</span>
					<div class="partner">
						<a href="https://aoglonass.ru/"><div class="partner-card"><img class="ao" src="../assets/temp/partners/ao.svg" alt=""></div></a>
						<a href="https://gurtam.com/ru"><div class="partner-card"><img class="gurtam" src="../assets/temp/partners/gurtam.svg" alt=""></div></a>
						<a href="https://carvis.org/o-kompanii"><div class="partner-card"><img class="carvis" src="../assets/temp/partners/carvis.svg" alt=""></div></a>
						<a href="http://www.labsolut.ru/"><div class="partner-card"><img class="labsolut" src="../assets/temp/partners/labsolut.svg" alt=""></div></a>
						<a href="https://agrosturman.ru/"><div class="partner-card"><img class="trimble" src="../assets/temp/partners/trimble.svg" alt=""></div></a>
						<a href="https://www.arusnavi.ru/index.html"><div class="partner-card"><img class="arus" src="../assets/temp/partners/arusnavi.svg" alt=""></div></a>
						<a href="https://avtosensor.ru/"><div class="partner-card"><img class="as" src="../assets/temp/partners/as.svg" alt=""></div></a>
						<a href="https://www.omnicomm.ru/"><div class="partner-card"><img class="omn" src="../assets/temp/partners/omn.svg" alt=""></div></a>
						<a href=""><div class="partner-card"><img class="peredovik" src="../assets/temp/partners/peredovik.svg" alt=""></div></a>
						<a href="https://ekometro.ru/"><div class="partner-card"><img class="ekometro" src="../assets/temp/partners/ekometro.svg" alt=""></div></a>
						<a href="https://www.globalsat.ru/"><div class="partner-card"><img class="globalsat" src="../assets/temp/partners/globalsat.svg" alt=""></div></a>
						<a href="https://www.auto.shtrih-m.ru/"><div class="partner-card"><img class="shtrih" src="../assets/temp/partners/shtrih.svg" alt=""></div></a>
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
	name: "AboutView",
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

.partner{
	width: size(1745, 1920);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	transition: all 0.5s;
}

.partner-card{
	background: #FFFFFF;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	width: size(503, 1920);
	height: size(133, 1920);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: size(50, 1920);
	transition: all 0.2s;
	border-left: 0 solid rgb(6, 123, 205, 0.5);
	border-right: 0 solid rgb(224, 28, 34, 0.5);
}

.partner-card:hover{
	border-left: 10px solid rgb(6, 123, 205, 0.5);
	border-right: 10px solid rgb(224, 28, 34, 0.5);
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	transition: all 0.5s;
}


//partners--------

.ao, .gurtam, .labsolut, .trimble{
	width: size(353, 1920);
	height: size(72, 1920);
}

.carvis{
	width: size(353, 1920);
	height: size(88, 1920);

}

.arus{
	width: size(213, 1920);
	height: size(93, 1920);
}

.as{
	width: size(210, 1920);
	height: size(100, 1920);
}

.omn{
	width: size(268, 1920);
	height: size(103, 1920);
}

.peredovik{
	width: size(295, 1920);
	height: size(81, 1920);
}

.ekometro{
	width: size(323, 1920);
	height: size(57, 1920);
}

.globalsat{
	width: size(300, 1920);
	height: size(80, 1920);
}

.shtrih{
	width: size(127, 1920);
	height: size(103, 1920);
}

img{
	transition: all 0.5s;
}

.partner-card:hover{
	img{
		width: 80%;
		height: 80%;
		transition: all 0.8s;
	}
}

</style>