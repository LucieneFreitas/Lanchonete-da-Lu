import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Sanduiche de Frango",
      foodDetails: "Sanduiche de frango com queijo e salada",
      foodPrice: 20,
      foodImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fporkworld.com.br%2Fwp-content%2Fuploads%2F2022%2F07%2Frecheio-de-frango-cremoso-para-sanduiche-natural-de-frango-receita-facil-e-rapida-lanche-da-tarde.jpg%3Ffit%3D1076%252C603%26ssl%3D1&tbnid=8utH95Q4Dcgt7M&vet=12ahUKEwi45uWEsvqBAxXDupUCHTHFAZUQMygBegQIARBx..i&imgrefurl=https%3A%2F%2Fporkworld.com.br%2Fsanduiche-natural-de-frango-com-recheio-cremoso-facil-pate-de-frango-receitafacil-sanduiche%2F&docid=gzfXqu4RHGKn7M&w=1076&h=603&q=Sanduiche%20de%20Frango&ved=2ahUKEwi45uWEsvqBAxXDupUCHTHFAZUQMygBegQIARBx"
    },

    {
      id: 2,
      foodName: "Sanduiche de Carne",
      foodDetails: "Sanduiche de carne com queijo e salada",
      foodPrice: 35,
      foodImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitinhas.com.br%2Freceita%2Fsanduiche-de-carne-e-queijo%2F&psig=AOvVaw3YIc6AWvzbPfSr_JX9w9JT&ust=1697539763001000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiknsKy-oEDFQAAAAAdAAAAABAE"
    },

    {
      id: 3,
      foodName: "Sanduiche de Tilapia",
      foodDetails:"Sanduiche de tilapia com queijo e salada",
      foodPrice: 55,
      foodImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flarissajanuario.com.br%2Freceitas-do-programa%2Freceita-mc-fish-de-verdade-sanduiche-de-peixe-mesmo%2F&psig=AOvVaw07yyrstjrkovqpjud2ROhB&ust=1697539837509000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjo2uWy-oEDFQAAAAAdAAAAABAE"
    },

    {
      id: 4,
      foodName: "Hamburguer de Frango",
      foodDetails: "Hamburguer de frango com queijo e salada",
      foodPrice: 25,
      foodImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.minhareceita.com.br%2Fapp%2Fuploads%2F2022%2F04%2Fhamb1200480-2.jpg&tbnid=8L2JXJ1lDOjpbM&vet=12ahUKEwj5_eOqs_qBAxWxNTUKHcWhBGMQMygIegQIARBf..i&imgrefurl=https%3A%2F%2Fwww.minhareceita.com.br%2Fmateria%2Fhamburguer-de-frango-7-receitas-para-se-deliciar-no-fim-de-semana%2F&docid=7aFPKyvIaFvgGM&w=1200&h=480&q=Hamburguer%20de%20frango%20com%20queijo%20e%20salada&ved=2ahUKEwj5_eOqs_qBAxWxNTUKHcWhBGMQMygIegQIARBf"
    },

    {
      id: 5,
      foodName: "Hamburguer de Carne",
      foodDetails: "Hamburguer de carne com queijo e salada",
      foodPrice: 35,
      foodImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-gratis%2Fsaboroso-hamburguer-de-carne-com-queijo-e-salada-de-frente-no-fundo-escuro_14396770.htm&psig=AOvVaw0gGe5V2nSgg99eY8i-G07B&ust=1697540048063000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJC-jMqz-oEDFQAAAAAdAAAAABAE"
    },

    {
      id: 6,
      foodName: "Hamburguer de Tilapia",
      foodDetails: "Hamburguer de tilapia com queijo e salada",
      foodPrice: 45,
      foodImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-premium%2Fsuculento-hamburguer-de-peixe-com-salada-queijo-tomate-e-molho-num-prato-com-batatas-fritas-fundo-de-madeira_19472029.htm&psig=AOvVaw3OrnS3j0c651z6Fo0_1qFw&ust=1697540102314000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC_9-Oz-oEDFQAAAAAdAAAAABAE"
    }
  ]
}
