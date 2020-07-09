

const retranca = document.querySelector('#retranca');
const tamTopo = document.querySelector('#aumTopo');
const mTopo = document.querySelector('#mTopo');
let cont = 0;



tamTopo.addEventListener('click',aumentar);

function aumentar(event){
	
	if(cont === 0){
		mTopo.style.marginTop = '160px';
		
		cont = 1;
	}else{
		mTopo.style.marginTop = '72px';
		
		cont = 0;

	}
	

}






async function aparecer(){

retranca.innerHTML = `<a href ="https://www.youtube.com/channel/UCooGx5NF_t2-TwSFZairEog" target = "blank"><img class="img-fluid" src="./images/retranca.jpg" ></a>`;
await setTimeout(desaparecer,5000);

};
async function desaparecer(){

retranca.innerHTML = "";
await setTimeout(aparecer,5000);
};
desaparecer();

