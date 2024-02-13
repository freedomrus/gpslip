<template>
	<div>
		<Header/>
		<main>
			<section>
				<div class="wrapper-section">
					<span class="section-title" ref="equipment">Оборудование</span>
					<div class="equipment">
						<div v-for="item in equipment">
							<div class="equipment-card">
								<span>{{ item.name }}</span>
								<div class="card-block">
									<img class="block-ztm" :src="require(`@/assets/temp/eqview/${item.image}`)" alt="" :style="{ width: item.width + 'vw', height: item.height + 'vw' }">
									<p>{{ item.description }}</p>
									<router-link :to="item.path">
										<div class="card__button">Подробнее</div>
									</router-link>
								</div>
							</div>
							<!--              <img :src="require(`@/assets/temp/equipment/${item.image}`)" alt="">-->
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
import Footer from '../components/Footer';
import equipmentData from '../equipment.json';
import {req} from "vuelidate/lib/validators/common";

export default {
	components: {
		Header,
		Footer,
	},

	data() {
		return {
			equipment: equipmentData
		}
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

.section-title {
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: size(50, 1920);
	line-height: size(59, 1920);
	text-align: center;
	text-transform: uppercase;
	margin-bottom: size(80, 1920);
	color: #000000;
}

.equipment {
	display: flex;
	flex-wrap: wrap;
}

.equipment-card {
	display: flex;
	flex-direction: column;
	margin-bottom: size(70, 1920);
	margin-left: size(25, 1920);
	margin-right: size(25, 1920);

	span {
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		font-size: size(30, 1920);
		line-height: size(31, 1920);
		color: #000000;
		margin-bottom: size(20, 1920);
	}
}

.card-block {
	width: size(500, 1920);
	height: size(600, 1920);

	padding: size(35, 1920) size(54, 1920);
	background: #FFFFFF;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
	display: flex;
	border-radius: 20px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	transition: 0.3s;

	.block-ztm {

	}
	//img {
	//	width: size(300, 1920);
	//	height: size(300, 1920);
	//}

	p {

		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: size(16, 1920);
		line-height: size(22, 1920);
		color: #000000;
		transition: all 0.3s;
	}
}

.card-block:hover {
	transition: all 0.3s;
	box-shadow: -10px 10px 20px rgba(6, 123, 205, 0.2), 10px 0 20px rgba(6, 123, 205, 0.2);
}


.card__button {
	width: size(300, 1920);
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
	box-shadow: -10px 10px 20px rgba(6, 123, 205, 0.2), 10px 0 20px rgba(6, 123, 205, 0.2);
	transition: all 0.3s;

}

</style>