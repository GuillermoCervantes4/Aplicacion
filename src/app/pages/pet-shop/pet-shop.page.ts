import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.page.html',
  styleUrls: ['./pet-shop.page.scss'],
})
export class PetShopPage implements OnInit {

  productos: any[]=[]; 
  productosoriginal: any[]=[]; 
  constructor(
    public db: DatabaseService
  ) { 
    this.fetchProductos();
  }

  ngOnInit() {
  }

  fetchProductos() {
    this.db.fetchFirestoreCollection('Productos')
    .subscribe((res: any) => {
      console.log('Productos Collection: ', res);
      this.productosoriginal = res;
      this.productos = res;
    })
  }
  filtrarProductos(event: any) {
    const texto = event.target.value?.toLowerCase().trim() || '';

    if (texto === '') {
      this.productos = [...this.productosoriginal]; // Mostrar todos si el input está vacío
    } else {
      this.productos = this.productosoriginal.filter(producto =>
      producto.articulo.toLowerCase().includes(texto) 
      );
    }
  }
}

//       let articulos = [{
//     "id": 1,
//     "accesorio": "cama",
//     "tamaño": "Grande",
//     "ubicacionTienda": "Calle 10, La Paz",
//     "salud": "Vacunado",
//     "descripcion de tamaño": "112x94 cm",
//     "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s",
//   },
//   {
//     "id": 2,
//     "articulo": "Collar Celeste",
//     "ubicacion": "Av. Busch #500, La Paz",
//     "salud": "Vacunada y esterilizada",
//     "descripcion": "Elegante y Comodo",
//      "Tamaño del collar: 28 cm"
//     "imagen": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.collares-perros.es%2Fcoleccion-piel-vaquetilla-rulo%2Fcollar-de-piel-de-vaquetilla-celeste.html&psig=AOvVaw06Ao_eebZqvgVTq-_Csdz9&ust=1748241941124000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODZ6fGCvo0DFQAAAAAdAAAAABAE",
//    
//   },
//   {
//     "id": 3,
//     "articulo": "Juguete",
//     "tamaño": "Mediano",
//     "ubicacionRefugio": "Zona Central, Cochabamba",
//     "salud": "Vacunado",
//     "descripcion": "Excelente perro guardián.",
//     "imagen": "https://c:\Users\HP\Desktop\clonenuevo\juguetes.jpg",
//    
//   },
//   {
//     "id": 4,
//     "Articulo": "Comida",
//     "peso": 10 gr,
//     "ubicacion": "Zona Sur, Achimani, La Paz",
//     "descripcion": "Rico en proteinas",
//     "imagen": "hc:\Users\HP\Desktop\clonenuevo\croquetas",
//   },