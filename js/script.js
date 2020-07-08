
const retranca = document.querySelector('#retranca');



async function aparecer(){

retranca.innerHTML = `<a href ="https://www.youtube.com/channel/UCooGx5NF_t2-TwSFZairEog" target = "blank"><img class="img-fluid" src="./images/retranca.jpg" ></a>`;
await setTimeout(desaparecer,5000);

};
async function desaparecer(){

retranca.innerHTML = "";
await setTimeout(aparecer,5000);
};

desaparecer();