<template>
	<div>
		<Header/>
		<main>
			<section>
				<div class="wrapper-section">
					<span class="equipment__title"><span>Н</span>аше оборудование</span>
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
	width: $wrapper;
	margin: size(32, 1920) auto;
}


//CARD ONE TWO THREE -------------

.equipment-cards__block {
	width: size(566, 1920);
	height: size(252, 1920);
	box-shadow: 0 7px 50px rgba(0, 0, 0, 0.15);
	border-radius: 20px;

	.card-white__fon {
		width: size(566, 1920);
		height: size(252, 1920);
		fill-opacity: 40%;
		box-shadow: 0 7px 50px rgba(0, 0, 0, 0.15);
		object-fit: cover;
		border-radius: 20px;
	}

	.card-white__arnavi {
		width: size(236, 1920);
		height: size(207, 1920);
		margin: size(20, 1920) 0 0 size(310, 1920);
		position: absolute;
		z-index: 11;
	}

	.card-white__teltonika{
		width: size(200, 1920);
		height: size(150, 1920);
		margin: size(55, 1920) 0 0 size(310, 1920);
		position: absolute;
		z-index: 11;
	}

	.card-white__ash{
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


</style>