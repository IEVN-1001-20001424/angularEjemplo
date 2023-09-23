import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
//directivas *ngif

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://imagenes.20minutos.es/files/article_default_content/uploads/imagenes/2023/04/10/coche-xpeng-g3i.png",
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2021",
      "Precio":200000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=kia&modelFamily=sportage&modelRange=sportage&modelVariant=od&modelYear=2022&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0014&fileType=png&width=1200&angle=23&billingTag=web",
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"Marzo 5 2022",
      "Precio":150000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/04/29/626b93732a18a.jpeg",
    },
  ]

}