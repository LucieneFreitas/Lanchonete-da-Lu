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
      foodImg: "https://assets.unileversolutions.com/recipes-v2/99439.jpg"
    },

    {
      id: 2,
      foodName: "Sanduiche de Carne",
      foodDetails: "Sanduiche de carne com queijo e salada",
      foodPrice: 35,
      foodImg: "https://img.freepik.com/fotos-premium/sanduiche-de-pao-frances-com-file-mignon-queijo-alface-e-tomate_538646-6481.jpg"
    },

    {
      id: 3,
      foodName: "Sanduiche de Tilapia",
      foodDetails:"Sanduiche de tilapia com queijo e salada",
      foodPrice: 55,
      foodImg: "https://larissajanuario.com.br/wp-content/uploads/elementor/thumbs/mc_fish_semmedida_larissajanuario15-1024x709-1-q65vwmtqfk492q4gh39kloo2a6nnf1arck9u6c6ark.jpg"
    },

    {
      id: 4,
      foodName: "Hamburguer de Frango",
      foodDetails: "Hamburguer de frango com queijo e salada",
      foodPrice: 25,
      foodImg: "https://img.freepik.com/fotos-gratis/hamburguer-de-frango-com-queijo-e-salada-verde-em-cima-da-mesa-de-madeira-e-sanduiche-de-fast-food_140725-25945.jpg"
    },

    {
      id: 5,
      foodName: "Hamburguer de Carne",
      foodDetails: "Hamburguer de carne com queijo e salada",
      foodPrice: 35,
      foodImg: "https://img.freepik.com/fotos-gratis/saboroso-hamburguer-de-carne-com-queijo-e-salada-de-frente-no-fundo-escuro_140725-89597.jpg"
    },

    {
      id: 6,
      foodName: "Hamburguer de Tilapia",
      foodDetails: "Hamburguer de tilapia com queijo e salada",
      foodPrice: 45,
      foodImg: "https://www.leiliane.com.br/wp-content/uploads/2016/07/Hamburguer-de-peixe.jpg"
    },

    {
      id: 7,
      foodName: "X-Egg",
      foodDetails: 'X-Egg com queijo e salada',
      foodPrice: 15,
      foodImg: "https://s.cornershopapp.com/product-images/3207721.jpg?versionId=YPfVdS.fYIKeIiU87cAYGVkNX4ddK0Q1"
    },

    {
      id: 8,
      foodName: "X-Bacon",
      foodDetails: "X-Bacon com queijo e salada",
      foodPrice: 25,
      foodImg: "https://sachefmio.blob.core.windows.net/fotos/x-salada-bacon-243857.jpg"
    }
  ]
}
