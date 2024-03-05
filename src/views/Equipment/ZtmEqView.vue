<template>
	<div>
		<Header/>
		<div class="modal " v-if="selectedimage" >
			<div class="modal-content">
				<div class="modal-block">
					{{ equipment[+selectedimage].text}}
				</div>
			</div>
		<div class="modal-close">
			<svg class="modal__close" @click="close()" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M4.73317 43.5834L0.416504 39.2667L17.6832 22L0.416504 4.73335L4.73317 0.416687L21.9998 17.6834L39.2665 0.416687L43.5832 4.73335L26.3165 22L43.5832 39.2667L39.2665 43.5834L21.9998 26.3167L4.73317 43.5834Z" fill="black"/>
			</svg>
		</div>
		</div>
		<main>
			<section >
				<div class="wrapper-section">
					<span class="section-title" >ZTM ОБОРУДОВАНИЕ</span>
					<div class="equipment" v-for="(item, index) in equipment">
						<div class="equipment-card">
							<span>{{ item.name }}</span>
							<div class="card-block">
								<img :src="require(`@/assets/temp/eqview/${item.image}`)" alt="" :style="{ width: item.width + 'vw', height: item.height + 'vw' }">
								<p>{{ item.description }} </p>
								<div class="card__button" @click="show(index)">Подробнее</div>
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
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ztmeqviewData from '../../ztmeqview.json'
export default {
	name: "equipment",
	components: {
		Header,
		Footer,
	},
	data (){
		return {
			equipment: ztmeqviewData,
			selectedimage: false
		}
	},

	watch:{
		selectedimage: function (){
			if(this.selectedimage){
				document.body.style.overflow = "hidden"
				return
			}
			document.body.style.overflow = "auto"
		},
	},

	methods:  {
		show(index) {
			this.selectedimage = index.toString();
		},
		close(index) {
			this.selectedimage = false;
		},

	}

}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
@import "../../assets/scss/styles";


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