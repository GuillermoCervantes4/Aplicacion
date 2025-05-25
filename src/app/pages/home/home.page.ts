import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  verMas: boolean[] = []; 
  eventos = [
    {
      titulo: 'Feria de Adopción de Mascotas Ch’api K’atu',
      descripcion: `Este evento reunirá a más de 30 perros y gatos en busca de un hogar.
      Si quieres adoptar, acércate al Parque Urbano Central y conoce a tu futuro compañero.
      ¡Haz la diferencia en su vida!`,
      imagen: 'assets/imgs/feria.png'
    },
    {
      titulo: 'Perro fachero se vuelve Jesuita',
      descripcion: `Este perro es muy fachero tanto que
      se volvió Jesuita y es un ejemplo perruno a seguir`,
      imagen: 'assets/imgs/feria2.png'
    }
    
  ];

  constructor() {}

  ngOnInit() {
    
    this.verMas = this.eventos.map(() => false);
  }

  toggleTexto(index: number) {
    this.verMas[index] = !this.verMas[index];
  }
}



    // loadcities() {
    // let cities = [
    //   { name: 'La Paz', gps: { latitude: -16.500000, longitude: -68.150000 }, department: 'La Paz' },
    //   { name: 'Santa Cruz', gps: { latitude: -17.783333, longitude: -63.183333 }, department: 'Santa Cruz' },
    //   { name: 'Cochabamba', gps: { latitude: -17.383333, longitude: -66.150000 }, department: 'Cochabamba' },
    //   { name: 'Sucre', gps: { latitude: -19.033333, longitude: -65.262222 }, department: 'Chuquisaca' },
    //   { name: 'Oruro', gps: { latitude: -17.983333, longitude: -67.150000 }, department: 'Oruro' },
    //   { name: 'Potosí', gps: { latitude: -19.583333, longitude: -65.750000 }, department: 'Potosí' },
    //   { name: 'Tarija', gps: { latitude: -21.533333, longitude: -64.733333 }, department: 'Tarija' },
    //   { name: 'Trinidad', gps: { latitude: -14.833333, longitude: -64.900000 }, department: 'Beni' },
    //   { name: 'Cobija', gps: { latitude: -11.033333, longitude: -68.733333 }, department: 'Pando' }
    // ]};


    // loadDogsAndShelters() {
    //   let shelters = [
    //     {
    //       name: 'Albergue Esperanza',
    //       description: 'Un albergue dedicado al rescate y cuidado de perros callejeros.',
    //       location: 'Calle Principal #123, La Paz',
    //       dogCount: 25,
    //       schedule: 'Lunes a Viernes, 9:00 AM - 5:00 PM',
    //      // dogs: ['Firulais', 'Max', 'Luna'],
    //       ownerName: 'Juan Pérez'
    //     },
    //     {
    //       name: 'Refugio Canino',
    //       description: 'Refugio especializado en perros de todas las razas.',
    //       location: 'Av. Libertad #456, Santa Cruz',
    //       dogCount: 40,
    //       schedule: 'Todos los días, 8:00 AM - 6:00 PM',
    //      // dogs: ['Rocky', 'Bella', 'Toby'],
    //       ownerName: 'María López'
    //     }
    //   ];

    //   let dogs = [
    //     {
    //       "id": 1,
    //       "nombre": "Firulais",
    //       "personalidad": "Juguetón",
    //       "raza": "Labrador",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Calle Principal #123, La Paz",
    //       "salud": "Vacunado y desparasitado",
    //       "descripcion": "Un perro muy amigable y activo.",
    //       "imagen": "https://unsplash.com/photos/1Z2niiBPg5A"
    //     },
    //     {
    //       "id": 2,
    //       "nombre": "Luna",
    //       "personalidad": "Tranquila",
    //       "raza": "Golden Retriever",
    //       "sexo": "Hembra",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Av. del Sol #45, Cochabamba",
    //       "salud": "Vacunada y esterilizada",
    //       "descripcion": "Le encanta descansar y recibir cariño.",
    //       "imagen": "https://unsplash.com/photos/2l0CWTpcChI"
    //     },
    //     {
    //       "id": 3,
    //       "nombre": "Max",
    //       "personalidad": "Protector",
    //       "raza": "Pastor Alemán",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Calle Bolívar #12, Santa Cruz",
    //       "salud": "Vacunado y desparasitado",
    //       "descripcion": "Ideal para cuidar el hogar.",
    //       "imagen": "https://unsplash.com/photos/3ZUsNJhi_Ik"
    //     },
    //     {
    //       "id": 4,
    //       "nombre": "Canela",
    //       "personalidad": "Cariñosa",
    //       "raza": "Cocker Spaniel",
    //       "sexo": "Hembra",
    //       "tamaño": "Mediano",
    //       "ubicacionRefugio": "Zona Central #89, Sucre",
    //       "salud": "Vacunada y desparasitada",
    //       "descripcion": "Le encanta jugar con niños.",
    //       "imagen": "https://unsplash.com/photos/4Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 5,
    //       "nombre": "Rocky",
    //       "personalidad": "Valiente",
    //       "raza": "Rottweiler",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Av. América #34, Oruro",
    //       "salud": "Vacunado",
    //       "descripcion": "Un perro con mucha energía.",
    //       "imagen": "https://unsplash.com/photos/5XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 6,
    //       "nombre": "Daisy",
    //       "personalidad": "Tímida",
    //       "raza": "Beagle",
    //       "sexo": "Hembra",
    //       "tamaño": "Mediano",
    //       "ubicacionRefugio": "Calle 10 #88, Tarija",
    //       "salud": "Vacunada y desparasitada",
    //       "descripcion": "Necesita un hogar tranquilo.",
    //       "imagen": "https://unsplash.com/photos/6Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 7,
    //       "nombre": "Toby",
    //       "personalidad": "Curioso",
    //       "raza": "Pug",
    //       "sexo": "Macho",
    //       "tamaño": "Pequeño",
    //       "ubicacionRefugio": "Villa Fátima #23, La Paz",
    //       "salud": "Vacunado",
    //       "descripcion": "Muy divertido y curioso.",
    //       "imagen": "https://unsplash.com/photos/7XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 8,
    //       "nombre": "Nina",
    //       "personalidad": "Sociable",
    //       "raza": "Mestiza",
    //       "sexo": "Hembra",
    //       "tamaño": "Mediano",
    //       "ubicacionRefugio": "Av. Blanco Galindo #10, Cochabamba",
    //       "salud": "Vacunada y esterilizada",
    //       "descripcion": "Se lleva bien con otros perros.",
    //       "imagen": "https://unsplash.com/photos/8Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 9,
    //       "nombre": "Bruno",
    //       "personalidad": "Obediente",
    //       "raza": "Boxer",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Calle Suárez #15, Santa Cruz",
    //       "salud": "Vacunado y desparasitado",
    //       "descripcion": "Fácil de entrenar.",
    //       "imagen": "https://unsplash.com/photos/9XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 10,
    //       "nombre": "Maya",
    //       "personalidad": "Juguetona",
    //       "raza": "Border Collie",
    //       "sexo": "Hembra",
    //       "tamaño": "Mediano",
    //       "ubicacionRefugio": "Zona Sur #56, La Paz",
    //       "salud": "Vacunada",
    //       "descripcion": "Ama correr y jugar.",
    //       "imagen": "https://unsplash.com/photos/10Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 11,
    //       "nombre": "Chispa",
    //       "personalidad": "Energética",
    //       "raza": "Jack Russell",
    //       "sexo": "Hembra",
    //       "tamaño": "Pequeño",
    //       "ubicacionRefugio": "Av. Ayacucho #77, Cochabamba",
    //       "salud": "Vacunada",
    //       "descripcion": "Nunca se cansa de jugar.",
    //       "imagen": "https://unsplash.com/photos/11XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 12,
    //       "nombre": "Simba",
    //       "personalidad": "Dominante",
    //       "raza": "Pitbull",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Villa Armonía #18, El Alto",
    //       "salud": "Vacunado",
    //       "descripcion": "Fuerte y leal.",
    //       "imagen": "https://unsplash.com/photos/12Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 13,
    //       "nombre": "Lola",
    //       "personalidad": "Dócil",
    //       "raza": "Shih Tzu",
    //       "sexo": "Hembra",
    //       "tamaño": "Pequeño",
    //       "ubicacionRefugio": "Zona Norte #40, Tarija",
    //       "salud": "Vacunada y desparasitada",
    //       "descripcion": "Perfecta para compañía en casa.",
    //       "imagen": "https://unsplash.com/photos/13XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 14,
    //       "nombre": "Coco",
    //       "personalidad": "Travieso",
    //       "raza": "Dálmata",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Av. Pando #14, Potosí",
    //       "salud": "Vacunado",
    //       "descripcion": "Le encanta correr y explorar.",
    //       "imagen": "https://unsplash.com/photos/14Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 15,
    //       "nombre": "Mimi",
    //       "personalidad": "Dulce",
    //       "raza": "Pomerania",
    //       "sexo": "Hembra",
    //       "tamaño": "Pequeño",
    //       "ubicacionRefugio": "Calle Real #3, Sucre",
    //       "salud": "Vacunada",
    //       "descripcion": "Muy apegada a las personas.",
    //       "imagen": "https://unsplash.com/photos/15XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 16,
    //       "nombre": "Rex",
    //       "personalidad": "Fiel",
    //       "raza": "Doberman",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Av. Camacho #45, La Paz",
    //       "salud": "Vacunado",
    //       "descripcion": "Un guardián excelente.",
    //       "imagen": "https://unsplash.com/photos/16Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 17,
    //       "nombre": "Pelusa",
    //       "personalidad": "Dormilona",
    //       "raza": "Mestiza",
    //       "sexo": "Hembra",
    //       "tamaño": "Mediano",
    //       "ubicacionRefugio": "Zona Villa Adela #32, El Alto",
    //       "salud": "Vacunada",
    //       "descripcion": "Le encanta dormir y estar en calma.",
    //       "imagen": "https://unsplash.com/photos/17XzF7kJ7e5Y"
    //     },
    //     {
    //       "id": 18,
    //       "nombre": "Thor",
    //       "personalidad": "Valiente",
    //       "raza": "Husky Siberiano",
    //       "sexo": "Macho",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Calle Inca #9, Cochabamba",
    //       "salud": "Vacunado y desparasitado",
    //       "descripcion": "Un perro noble y fuerte.",
    //       "imagen": "https://unsplash.com/photos/18Yzq3w7f5u8"
    //     },
    //     {
    //       "id": 19,
    //       "nombre": "Kira",
    //       "personalidad": "Inteligente",
    //       "raza": "Pastor Belga",
    //       "sexo": "Hembra",
    //       "tamaño": "Grande",
    //       "ubicacionRefugio": "Av. 6 de Agosto #22, Santa Cruz",
    //       "salud": "Vacunada y desparasitada",
    //       "descripcion": "Perrito que le gusta el entrenamiento y los deportes.",
    //       "imagen": "https://unsplash.com/photos/19XzF7kJ7e5Y"
    //     }, 
    //     {
    //     "id": 20,
    //     "nombre": "Boby",
    //     "personalidad": "Juguetón",
    //     "raza": "Schnauzer",
    //     "sexo": "Macho",
    //     "tamaño": "Mediano",
    //     "ubicacionRefugio": "Av. 16 de Julio #101, Oruro",
    //     "salud": "Vacunado y desparasitado",
    //     "descripcion": "Ideal para familias.",
    //     "imagen": "https://unsplash.com/photos/_8EFj6ISA08"
    //   }
    //   ];

    //   shelters.forEach((shelter: any) => {
    //     console.log('cargando albergue', shelter);
    //     this.db.addFirestoreDocument('Albergues', shelter)
    //       .then((res) => {
    //         console.log('Albergue agregado', shelter.name);
    //       }).catch((error) => {
    //         console.error('Error al agregar albergue:', error);
    //       })
    //   })

    // dogs.forEach((dog: any) => {
    //   console.log('cargando perro', dog);
    //   this.db.addFirestoreDocument('Perros', dog)
    //     .then((res) => {
    //       console.log('Perro agregado', dog.name);
    //     }).catch((error) => {
    //       console.error('Error al agregar perro:', error);
    //     })
    // })


    // loadCities() {
    //   let listCities = [
    //     { name: 'La Paz', gps: { lat: -16.500000, lon: -68.150002 }, department: 'La Paz' },
    //     { name: 'Santa Cruz', gps: { lat: -17.783327, lon: -63.182116 }, department: 'Santa Cruz' },
    //     { name: 'Cochabamba', gps: { lat: -17.389500, lon: -66.156800 }, department: 'Cochabamba' },
    //     { name: 'Sucre', gps: { lat: -19.033320, lon: -65.262740 }, department: 'Chuquisaca' },
    //     { name: 'Oruro', gps: { lat: -17.983329, lon: -67.150002 }, department: 'Oruro' },
    //     { name: 'Potosí', gps: { lat: -19.583330, lon: -65.750000 }, department: 'Potosí' },
    //     { name: 'Tarija', gps: { lat: -21.535490, lon: -64.729560 }, department: 'Tarija' },
    //     { name: 'Trinidad', gps: { lat: -14.833333, lon: -64.900002 }, department: 'Beni' },
    //     { name: 'Cobija', gps: { lat: -11.033330, lon: -68.733330 }, department: 'Pando' }
    //   ];
    //   listCities.forEach((city: any) => {
    //     console.log('çargando ciudad', city);
    //     this.db.addFirestoreDocument('cities', city)
    //       .then((res) => {
    //         console.log('cities: ', res.id);
    //       }).catch((error) => {
    //         console.error('Error adding document: ', error);
    //       })
    //   })
    // }
    //cities.forEach((city: any) => {
    //  console.log('cargando ciudad',city);
    //  this.db.addFirestoreDocument('cities', city)
    //  .then((res: any) => {
    //})


    //this.db.fetchFirestoreCollection('book')
    //.subscribe((res:any) => {console.log(res);},
    //(error:any) => {console.log(error);});