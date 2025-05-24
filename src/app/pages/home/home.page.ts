import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public db: DatabaseService
  ) {

  
  
  }

  ngOnInit() {
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

//     let dogs = [
//   {
//     "id": 1,
//     "nombre": "Firulais",
//     "personalidad": "Juguetón",
//     "raza": "Labrador",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 32,
//     "ubicacionRefugio": "Calle Principal #123, La Paz",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Le encanta jugar y correr por el parque. Perfecto para familias activas.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 2,
//     "nombre": "Luna",
//     "personalidad": "Tranquila",
//     "raza": "Golden Retriever",
//     "sexo": "Hembra",
//     "tamaño": "Grande",
//     "peso": 30,
//     "ubicacionRefugio": "Av. del Sol #45, Cochabamba",
//     "salud": "Vacunada y esterilizada",
//     "descripcion": "Disfruta de las siestas largas y el cariño. Muy dócil y amorosa.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 3,
//     "nombre": "Max",
//     "personalidad": "Protector",
//     "raza": "Pastor Alemán",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 35,
//     "ubicacionRefugio": "Calle Bolívar #12, Santa Cruz",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Un guardián leal y alerta, ideal para seguridad y compañía.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 4,
//     "nombre": "Canela",
//     "personalidad": "Cariñosa",
//     "raza": "Cocker Spaniel",
//     "sexo": "Hembra",
//     "tamaño": "Mediano",
//     "peso": 14,
//     "ubicacionRefugio": "Zona Central #89, Sucre",
//     "salud": "Vacunada y desparasitada",
//     "descripcion": "Muy apegada a las personas, le encanta estar rodeada de niños.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 5,
//     "nombre": "Rocky",
//     "personalidad": "Valiente",
//     "raza": "Rottweiler",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 45,
//     "ubicacionRefugio": "Av. América #34, Oruro",
//     "salud": "Vacunado",
//     "descripcion": "Un perro fuerte y activo, ideal para dueños con experiencia.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 6,
//     "nombre": "Daisy",
//     "personalidad": "Tímida",
//     "raza": "Beagle",
//     "sexo": "Hembra",
//     "tamaño": "Mediano",
//     "peso": 11,
//     "ubicacionRefugio": "Calle 10 #88, Tarija",
//     "salud": "Vacunada y desparasitada",
//     "descripcion": "Necesita paciencia y un ambiente tranquilo. Muy dulce.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 7,
//     "nombre": "Toby",
//     "personalidad": "Curioso",
//     "raza": "Pug",
//     "sexo": "Macho",
//     "tamaño": "Pequeño",
//     "peso": 8,
//     "ubicacionRefugio": "Villa Fátima #23, La Paz",
//     "salud": "Vacunado",
//     "descripcion": "Siempre explorando. Perfecto para departamentos.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 8,
//     "nombre": "Nina",
//     "personalidad": "Sociable",
//     "raza": "Mestiza",
//     "sexo": "Hembra",
//     "tamaño": "Mediano",
//     "peso": 17,
//     "ubicacionRefugio": "Av. Blanco Galindo #10, Cochabamba",
//     "salud": "Vacunada y esterilizada",
//     "descripcion": "Muy amigable con otros perros y niños.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 9,
//     "nombre": "Bruno",
//     "personalidad": "Obediente",
//     "raza": "Boxer",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 33,
//     "ubicacionRefugio": "Calle Suárez #15, Santa Cruz",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Fácil de entrenar y muy leal a su familia.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 10,
//     "nombre": "Maya",
//     "personalidad": "Juguetona",
//     "raza": "Border Collie",
//     "sexo": "Hembra",
//     "tamaño": "Mediano",
//     "peso": 20,
//     "ubicacionRefugio": "Zona Sur #56, La Paz",
//     "salud": "Vacunada",
//     "descripcion": "Muy inteligente y le encanta correr al aire libre.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 11,
//     "nombre": "Chispa",
//     "personalidad": "Energética",
//     "raza": "Jack Russell",
//     "sexo": "Hembra",
//     "tamaño": "Pequeño",
//     "peso": 6,
//     "ubicacionRefugio": "Av. Ayacucho #77, Cochabamba",
//     "salud": "Vacunada",
//     "descripcion": "Siempre con energía, perfecta para jugar sin parar.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 12,
//     "nombre": "Simba",
//     "personalidad": "Dominante",
//     "raza": "Pitbull",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 28,
//     "ubicacionRefugio": "Villa Armonía #18, El Alto",
//     "salud": "Vacunado",
//     "descripcion": "Fuerte, decidido y muy leal a quien confía.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 13,
//     "nombre": "Lola",
//     "personalidad": "Dócil",
//     "raza": "Shih Tzu",
//     "sexo": "Hembra",
//     "tamaño": "Pequeño",
//     "peso": 5,
//     "ubicacionRefugio": "Zona Norte #40, Tarija",
//     "salud": "Vacunada y desparasitada",
//     "descripcion": "Pequeña y tranquila, ideal para compañía constante.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 14,
//     "nombre": "Coco",
//     "personalidad": "Travieso",
//     "raza": "Dálmata",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 27,
//     "ubicacionRefugio": "Av. Pando #14, Potosí",
//     "salud": "Vacunado",
//     "descripcion": "Curioso y activo, necesita espacio para correr.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 15,
//     "nombre": "Mimi",
//     "personalidad": "Dulce",
//     "raza": "Pomerania",
//     "sexo": "Hembra",
//     "tamaño": "Pequeño",
//     "peso": 3,
//     "ubicacionRefugio": "Calle Real #3, Sucre",
//     "salud": "Vacunada",
//     "descripcion": "Muy apegada a los humanos, le encanta ser consentida.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 16,
//     "nombre": "Rex",
//     "personalidad": "Fiel",
//     "raza": "Doberman",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 38,
//     "ubicacionRefugio": "Av. Camacho #45, La Paz",
//     "salud": "Vacunado",
//     "descripcion": "Muy protector y obediente. Excelente guardián.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 17,
//     "nombre": "Pelusa",
//     "personalidad": "Dormilona",
//     "raza": "Mestiza",
//     "sexo": "Hembra",
//     "tamaño": "Mediano",
//     "peso": 18,
//     "ubicacionRefugio": "Zona Villa Adela #32, El Alto",
//     "salud": "Vacunada",
//     "descripcion": "Tranquila, ideal para una casa serena.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 18,
//     "nombre": "Thor",
//     "personalidad": "Valiente",
//     "raza": "Husky Siberiano",
//     "sexo": "Macho",
//     "tamaño": "Grande",
//     "peso": 29,
//     "ubicacionRefugio": "Calle Inca #9, Cochabamba",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Fuerte, noble y con mucha energía.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 19,
//     "nombre": "Kira",
//     "personalidad": "Inteligente",
//     "raza": "Pastor Belga",
//     "sexo": "Hembra",
//     "tamaño": "Grande",
//     "peso": 26,
//     "ubicacionRefugio": "Av. 6 de Agosto #22, Santa Cruz",
//     "salud": "Vacunada y desparasitada",
//     "descripcion": "Ama aprender nuevos trucos y mantenerse activa.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   },
//   {
//     "id": 20,
//     "nombre": "Boby",
//     "personalidad": "Juguetón",
//     "raza": "Schnauzer",
//     "sexo": "Macho",
//     "tamaño": "Mediano",
//     "peso": 15,
//     "ubicacionRefugio": "Av. 16 de Julio #101, Oruro",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Activo, inteligente y muy amigable con los niños.",
//     "imagen": "https://images.unsplash.com/photo-1504595403659-9088ce801e29"
//   }
// ];
// dogs.forEach((dog: any) => {
//       console.log('cargando perro', dog);
//       this.db.addFirestoreDocument('Perros', dog)
//         .then((res) => {
//           console.log('Perro agregado', dog.name);
//         }).catch((error) => {
//           console.error('Error al agregar perro:', error);
//         })
//     })
    
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

}
