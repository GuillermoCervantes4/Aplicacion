import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.page.html',
  styleUrls: ['./pet-shop.page.scss'],
  standalone: false
})
export class PetShopPage {

 productos: any[] = [];
  productosoriginal: any[] = [];

  constructor(public db: DatabaseService) {}

  ionViewWillEnter() {
    const filtros = JSON.parse(localStorage.getItem('filtrosPetshop') || '{}');
    this.fetchProductos(filtros);
  }

  fetchProductos(filtros: any) {
    this.db.fetchFirestoreCollection('Productos').subscribe((res: any[]) => {
      console.log('Fetched Products:', res);
      this.productosoriginal = res;
      this.productos = this.aplicarFiltros(res, filtros);
    });
  }

  aplicarFiltros(lista: any[], filtros: any) {
    if (!filtros || Object.keys(filtros).length === 0) {
      return lista;
    }

    return lista.filter(p => {
      let ok = true;
      const articulo = (p.articulo || '').toLowerCase();
      const tamano = (p.tamano || '').toLowerCase();

      // Casas o camas
      if (filtros.casas || filtros.camas) {
        const sizeFilters = [];
        if (filtros.casas?.grande && articulo.includes('casa')) sizeFilters.push('grande');
        if (filtros.casas?.mediano && articulo.includes('casa')) sizeFilters.push('mediano');
        if (filtros.casas?.pequeno && articulo.includes('casa')) sizeFilters.push('pequeño');

        if (filtros.camas?.grande && articulo.includes('cama')) sizeFilters.push('grande');
        if (filtros.camas?.mediano && articulo.includes('cama')) sizeFilters.push('mediano');
        if (filtros.camas?.pequeno && articulo.includes('cama')) sizeFilters.push('pequeño');

        if (sizeFilters.length > 0) {
          ok = ok && sizeFilters.includes(tamano);
        }
      }

      // Otros
      if (filtros.otros) {
        if (filtros.otros.comida || filtros.otros.juguetes) {
          ok = ok && (
            (filtros.otros.comida && articulo.includes('comida')) ||
            (filtros.otros.juguetes && articulo.includes('juguete'))
          );
        }
      }

      return ok;
    });
  }

  filtrarProductos(event: any) {
  const texto = event.target.value?.toLowerCase().trim() || '';

  if (texto === '') {
    this.productos = [...this.productosoriginal];
  } else {
    this.productos = this.productosoriginal.filter(producto => {
      const articulo = (producto.articulo || producto.Articulo || producto.accesorio || '').toLowerCase();
      return articulo.includes(texto);
    });
  }
}

}


// import { Component, OnInit } from '@angular/core';
// import { DatabaseService } from 'src/app/services/database.service';

// @Component({
//   standalone: false,
//   selector: 'app-pet-shop',
//   templateUrl: './pet-shop.page.html',
//   styleUrls: ['./pet-shop.page.scss'],
// })
// export class PetShopPage implements OnInit {

//   productos: any[]=[]; 
//   productosoriginal: any[]=[]; 
//   constructor(
//     public db: DatabaseService
//   ) { 
//     this.fetchProductos();
//   }

//   ngOnInit() {
//   }

//   fetchProductos() {
//     this.db.fetchFirestoreCollection('Productos')
//     .subscribe((res: any) => {
//       console.log('Productos Collection: ', res);
//       this.productosoriginal = res;
//       this.productos = res;
//     })
//   }
//   filtrarProductos(event: any) {
//     const texto = event.target.value?.toLowerCase().trim() || '';

//     if (texto === '') {
//       this.productos = [...this.productosoriginal]; // Mostrar todos si el input está vacío
//     } else {
//       this.productos = this.productosoriginal.filter(producto =>
//       producto.articulo.toLowerCase().includes(texto) 
//       );
//     }
//   }
// }

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
   
//   },
//   {
//     "id": 3,
//     "articulo": "Juguete",
//     "tamaño": "Mediano",
//     "ubicacionRefugio": "Zona Central, Cochabamba",
//     "salud": "Vacunado",
//     "descripcion": "Excelente perro guardián.",
//     "imagen": "https://c:\Users\HP\Desktop\clonenuevo\juguetes.jpg",
   
//   },
//   {
//     "id": 4,
//     "Articulo": "Comida",
//     "peso": 10 gr,
//     "ubicacion": "Zona Sur, Achimani, La Paz",
//     "descripcion": "Rico en proteinas",
//     "imagen": "hc:\Users\HP\Desktop\clonenuevo\croquetas",
//   }, { id: 5, articulo: "Cama Mediana", tamano: "mediano", descripcion: "90x70 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 6, articulo: "Collar Rojo", tamano: "grande", descripcion: "Tamaño del collar: 35 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 7, articulo: "Juguete Pelota", tamano: "pequeño", descripcion: "Pelota blanda para cachorros", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 8, articulo: "Comida Premium", tamano: "grande", descripcion: "Alto en vitaminas", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 9, articulo: "Cama Deluxe", tamano: "grande", descripcion: "120x100 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 10, articulo: "Collar Verde", tamano: "mediano", descripcion: "Tamaño del collar: 30 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 11, articulo: "Cama Básica", tamano: "pequeño", descripcion: "60x50 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 12, articulo: "Juguete Mordedor", tamano: "mediano", descripcion: "Resistente y flexible", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 13, articulo: "Comida Light", tamano: "pequeño", descripcion: "Bajo en grasas", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 14, articulo: "Collar Azul", tamano: "grande", descripcion: "Tamaño del collar: 40 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 15, articulo: "Cama Clásica", tamano: "mediano", descripcion: "85x65 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 16, articulo: "Juguete Soga", tamano: "grande", descripcion: "Para tirar y jugar", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 17, articulo: "Comida Económica", tamano: "grande", descripcion: "Buena relación precio-calidad", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 18, articulo: "Collar Negro", tamano: "mediano", descripcion: "Tamaño del collar: 32 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 19, articulo: "Cama Soft", tamano: "pequeño", descripcion: "70x55 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 20, articulo: "Juguete Sonoro", tamano: "pequeño", descripcion: "Con sonido para cachorros", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 21, articulo: "Cama Económica", tamano: "grande", descripcion: "100x80 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 22, articulo: "Collar Rosa", tamano: "pequeño", descripcion: "Tamaño del collar: 25 cm", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 23, articulo: "Juguete Plástico", tamano: "mediano", descripcion: "Ideal para cachorros activos", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" },
//   { id: 24, articulo: "Comida Natural", tamano: "mediano", descripcion: "Hecha con ingredientes naturales", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdML24_9TG1b7BtempVBiPM_nJhsD7iLZQg&s" }
// ];

//     articulos.forEach((producto: any) => {
//       console.log('cargando producto', producto);
//       this.db.addFirestoreDocument('Productos', producto)
//         .then((res) => {
//           console.log('Producto agregado', producto.articulo);
//         }).catch((error) => {
//           console.error('Error al agregar producto:', error);
//         })
//     })


