import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-perdidos',
  templateUrl: './perdidos.page.html',
  styleUrls: ['./perdidos.page.scss'],
})
export class PerdidosPage implements OnInit {

  public perdidos: any;
  constructor(
    public db:DatabaseService
  ) {
    this.fetchPerdidos();
   }

  ngOnInit() {
   
  }

  fetchPerdidos() {
    this.db.fetchFirestoreCollection('Perdidos')
    .subscribe((res: any) => {
      console.log('Perros perdidos Collection: ', res);
      this.perdidos = res;
    })
  }
//  let perdidos = [
//   {
//     id: 1,
//     nombre: "Tango",
//     personalidad: "Juguetón",
//     raza: "Labrador",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Le encanta correr tras pelotas.",
//     imagen: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
//     estaPerdido: true,
//     zonaPerdida: "Villa Fátima",
//     fechaDesaparicion: "2025-04-12",
//     color: "Dorado",
//     contactoDueno: "76543210"
//   },
//   {
//     id: 2,
//     nombre: "Luna",
//     personalidad: "Tranquila",
//     raza: "Golden Retriever",
//     sexo: "Hembra",
//     tamano: "Grande",
//     salud: "Vacunada y esterilizada",
//     descripcion: "Le encanta descansar y recibir cariño.",
//     imagen: "https://images.unsplash.com/photo-1601758123927-196a80bf0f16",
//     estaPerdido: true,
//     zonaPerdida: "Sopocachi",
//     fechaDesaparicion: "2025-03-28",
//     color: "Crema",
//     contactoDueno: "70123456"
//   },
//   {
//     id: 3,
//     nombre: "Chester",
//     personalidad: "Tímido",
//     raza: "Beagle",
//     sexo: "Macho",
//     tamano: "Mediano",
//     salud: "Vacunado",
//     descripcion: "Le cuesta acercarse a desconocidos.",
//     imagen: "https://images.unsplash.com/photo-1603133872878-684f208fb88d",
//     estaPerdido: true,
//     zonaPerdida: "Obrajes",
//     fechaDesaparicion: "2025-05-01",
//     color: "Tricolor",
//     contactoDueno: "78945612"
//   },
//   {
//     id: 4,
//     nombre: "Nina",
//     personalidad: "Alegre",
//     raza: "Mestiza",
//     sexo: "Hembra",
//     tamano: "Pequeño",
//     salud: "Vacunada",
//     descripcion: "Sociable con personas y perros.",
//     imagen: "https://images.unsplash.com/photo-1598133894009-32ff43edbe6a",
//     estaPerdido: true,
//     zonaPerdida: "Zona Sur",
//     fechaDesaparicion: "2025-04-22",
//     color: "Negro con manchas blancas",
//     contactoDueno: "76392010"
//   },
//   {
//     id: 5,
//     nombre: "Rocky",
//     personalidad: "Protector",
//     raza: "Rottweiler",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Siempre atento a su entorno.",
//     imagen: "https://images.unsplash.com/photo-1583512603873-9227c5e91e94",
//     estaPerdido: true,
//     zonaPerdida: "Achumani",
//     fechaDesaparicion: "2025-04-30",
//     color: "Negro con marrón",
//     contactoDueno: "77889900"
//   },
//   {
//     id: 6,
//     nombre: "Candy",
//     personalidad: "Cariñosa",
//     raza: "Cocker Spaniel",
//     sexo: "Hembra",
//     tamano: "Mediano",
//     salud: "Vacunada",
//     descripcion: "Le encanta que la acaricien.",
//     imagen: "https://images.unsplash.com/photo-1619983081535-7c514b55ec49",
//     estaPerdido: true,
//     zonaPerdida: "San Pedro",
//     fechaDesaparicion: "2025-05-05",
//     color: "Café claro",
//     contactoDueno: "70981234"
//   },
//   {
//     id: 7,
//     nombre: "Toby",
//     personalidad: "Curioso",
//     raza: "Pug",
//     sexo: "Macho",
//     tamano: "Pequeño",
//     salud: "Vacunado",
//     descripcion: "Explora todo con la nariz.",
//     imagen: "https://images.unsplash.com/photo-1573148195901-cfc852b4b4d3",
//     estaPerdido: true,
//     zonaPerdida: "Miraflores",
//     fechaDesaparicion: "2025-04-18",
//     color: "Beige con negro",
//     contactoDueno: "76509821"
//   },
//   {
//     id: 8,
//     nombre: "Lola",
//     personalidad: "Dulce",
//     raza: "Shih Tzu",
//     sexo: "Hembra",
//     tamano: "Pequeño",
//     salud: "Vacunada",
//     descripcion: "Ideal para compañía.",
//     imagen: "https://images.unsplash.com/photo-1568572933382-74d440642117",
//     estaPerdido: true,
//     zonaPerdida: "Villa Armonía",
//     fechaDesaparicion: "2025-03-20",
//     color: "Blanca con gris",
//     contactoDueno: "79813245"
//   },
//   {
//     id: 9,
//     nombre: "Rex",
//     personalidad: "Leal",
//     raza: "Pastor Alemán",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Siempre dispuesto a ayudar.",
//     imagen: "https://images.unsplash.com/photo-1570215171323-4ec328f3f4f1",
//     estaPerdido: true,
//     zonaPerdida: "Zona Central",
//     fechaDesaparicion: "2025-04-14",
//     color: "Negro y marrón",
//     contactoDueno: "76457890"
//   },
//   {
//     id: 10,
//     nombre: "Maya",
//     personalidad: "Juguetona",
//     raza: "Border Collie",
//     sexo: "Hembra",
//     tamano: "Mediano",
//     salud: "Vacunada",
//     descripcion: "Corre todo el día.",
//     imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
//     estaPerdido: true,
//     zonaPerdida: "Alto Obrajes",
//     fechaDesaparicion: "2025-05-02",
//     color: "Blanco y negro",
//     contactoDueno: "73216584"
//   },
//   {
//     id: 11,
//     nombre: "Coco",
//     personalidad: "Travieso",
//     raza: "Dálmata",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Le gusta explorar.",
//     imagen: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
//     estaPerdido: true,
//     zonaPerdida: "Villa El Carmen",
//     fechaDesaparicion: "2025-04-05",
//     color: "Blanco con manchas negras",
//     contactoDueno: "76091230"
//   },
//   {
//     id: 12,
//     nombre: "Mimi",
//     personalidad: "Tierna",
//     raza: "Pomerania",
//     sexo: "Hembra",
//     tamano: "Pequeño",
//     salud: "Vacunada",
//     descripcion: "Siempre está feliz.",
//     imagen: "https://images.unsplash.com/photo-1601758003122-58e7f5f10c79",
//     estaPerdido: true,
//     zonaPerdida: "Cotahuma",
//     fechaDesaparicion: "2025-03-25",
//     color: "Blanco",
//     contactoDueno: "77012345"
//   },
//   {
//     id: 13,
//     nombre: "Simba",
//     personalidad: "Fuerte",
//     raza: "Pitbull",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Muy valiente y fiel.",
//     imagen: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
//     estaPerdido: true,
//     zonaPerdida: "Calacoto",
//     fechaDesaparicion: "2025-05-03",
//     color: "Gris",
//     contactoDueno: "76500111"
//   },
//   {
//     id: 14,
//     nombre: "Chispa",
//     personalidad: "Energética",
//     raza: "Jack Russell",
//     sexo: "Hembra",
//     tamano: "Pequeño",
//     salud: "Vacunada",
//     descripcion: "Corre sin parar.",
//     imagen: "https://images.unsplash.com/photo-1570018144072-c9ad1f60c527",
//     estaPerdido: true,
//     zonaPerdida: "Alto San Pedro",
//     fechaDesaparicion: "2025-04-08",
//     color: "Blanca con marrón",
//     contactoDueno: "79877655"
//   },
//   {
//     id: 15,
//     nombre: "Bruno",
//     personalidad: "Obediente",
//     raza: "Boxer",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Muy entrenado.",
//     imagen: "https://images.unsplash.com/photo-1601758125946-9f94b0ae0a1b",
//     estaPerdido: true,
//     zonaPerdida: "Zona Norte",
//     fechaDesaparicion: "2025-04-10",
//     color: "Marrón",
//     contactoDueno: "73111222"
//   },
//   {
//     id: 16,
//     nombre: "Pelusa",
//     personalidad: "Dormilona",
//     raza: "Mestiza",
//     sexo: "Hembra",
//     tamano: "Mediano",
//     salud: "Vacunada",
//     descripcion: "Duerme todo el día.",
//     imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
//     estaPerdido: true,
//     zonaPerdida: "Chasquipampa",
//     fechaDesaparicion: "2025-03-30",
//     color: "Blanco con beige",
//     contactoDueno: "77777777"
//   },
//   {
//     id: 17,
//     nombre: "Thor",
//     personalidad: "Valiente",
//     raza: "Husky Siberiano",
//     sexo: "Macho",
//     tamano: "Grande",
//     salud: "Vacunado",
//     descripcion: "Le gusta el frío.",
//     imagen: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
//     estaPerdido: true,
//     zonaPerdida: "Bajo Llojeta",
//     fechaDesaparicion: "2025-04-26",
//     color: "Gris con blanco",
//     contactoDueno: "70101010"
//   },
//   {
//     id: 18,
//     nombre: "Kira",
//     personalidad: "Inteligente",
//     raza: "Pastor Belga",
//     sexo: "Hembra",
//     tamano: "Grande",
//     salud: "Vacunada",
//     descripcion: "Le encanta entrenar.",
//     imagen: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
//     estaPerdido: true,
//     zonaPerdida: "Kupini",
//     fechaDesaparicion: "2025-04-11",
//     color: "Negro",
//     contactoDueno: "76443322"
//   },
//   {
//     id: 19,
//     nombre: "Boby",
//     personalidad: "Juguetón",
//     raza: "Schnauzer",
//     sexo: "Macho",
//     tamano: "Mediano",
//     salud: "Vacunado",
//     descripcion: "Muy amigable.",
//     imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
//     estaPerdido: true,
//     zonaPerdida: "Villa San Antonio",
//     fechaDesaparicion: "2025-03-21",
//     color: "Gris",
//     contactoDueno: "70909090"
//   },
//   {
//     id: 20,
//     nombre: "Nala",
//     personalidad: "Sociable",
//     raza: "Mestiza",
//     sexo: "Hembra",
//     tamano: "Pequeño",
//     salud: "Vacunada",
//     descripcion: "Se lleva bien con todos.",
//     imagen: "https://images.unsplash.com/photo-1504595403659-9088ce801e29",
//     estaPerdido: true,
//     zonaPerdida: "Villa Copacabana",
//     fechaDesaparicion: "2025-04-01",
//     color: "Beige",
//     contactoDueno: "70070070"
//   }
// ];


//    perdidos.forEach((perdido: any) => {
//       console.log('cargando perro perdido', perdido);
//       this.db.addFirestoreDocument('Perdidos', perdido)
//         .then((res) => {
//           console.log('Perro perdido agregado', perdido.name);
//         }).catch((error) => {
//           console.error('Error al agregar perro:', error);
//         })
//     })
}
