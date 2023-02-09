<template>
	<div>
		<Header/>
		<main>
			<section>
				<div class="wrapper-section">
					<span class="equipment__title"><span>Н</span>аше оборудование</span>
					<div class="equipment-cards">
						<div class="equipment-cards__cardone">
							<img class="cardone_fon" src="../assets/temp/equipment/onecardeq.png" alt="">
							<div class="cardone-block">
							<span>НАВИГАЦИОННЫЙ КОНТРОЛЛЕР ARNAVI 4</span>
							<img src="../assets/temp/equipment/arnavi.png" alt="">
							</div>
						</div>
						<div class="equipment-cards__cardtwo">
							<p>Teltonika FM4100</p>
							<img src="../assets/temp/equipment/arusnavi.png" alt="">
						</div>
						<div class="equipment-cards__cardthree">
							<p>АСН СИГНАЛ S-2652</p>
							<img src="../assets/temp/equipment/signal-small.png" alt="">
						</div>
					</div>
					<div class="equipment-button">
						<span>Все предложения</span>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>

import Header from '../components/Header';

export default {
	name: "Main",
	components: {
		Header
	}
}

</script>


<style scoped lang="scss">
@import "src/assets/scss/variables.scss";
@import "src/assets/scss/styles.scss";


//section equipment ---------------------

.wrapper-section {
	width: $wrapper;
	margin: size(50, 1920) auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.equipment__title {
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

.equipment-cards {
	display: flex;
	justify-content: space-between;
}

.equipment-cards__cardone {
	width: size(566, 1920);
	height: size(252, 1920);
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: size(18, 1920);
	line-height: size(25, 1920);
	color: #075985;
	.cardone-fon{
		width: size(566, 1920);
		height: size(252, 1920);
		position: relative;
	}
	.cardone-block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
	}
}

.equipment-cards__cardtwo {
	width: size(566, 1920);
	height: size(252, 1920);
	background: url("../assets/temp/equipment/twocardeq.png") no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: size(18, 1920);
	line-height: size(25, 1920);
	color: #075985;
	img{
		width: size(200, 1929);
		height: size(150, 1920);
	}
}

.equipment-cards__cardthree {
	width: size(566, 1920);
	height: size(252, 1920);
	background: url("../assets/temp/equipment/threecardeq.png") no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: size(18, 1920);
	line-height: size(25, 1920);
	color: #075985;
	img{
		width: size(220, 1929);
		height: size(157, 1920);
	}
}


</style>