import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-alberguess',
  templateUrl: './alberguess.page.html',
  styleUrls: ['./alberguess.page.scss'],
})
export class AlberguessPage implements OnInit {

  albergues: any;
  constructor(
    public db: DatabaseService
  ) {
    this.fetchAlbergues();    
 
   }

  ngOnInit() {
  }


  fetchAlbergues() {
    this.db.fetchFirestoreCollection('Albergues')
    .subscribe((res: any) => {
      console.log('Albergues Collection: ', res);
      this.albergues = res;
    })
  }
// let shelters = [
//   {
//     "id": 1,
//     "nombre": "Albergue Peluchín",
//     "descripcion": "Organización independiente dedicada al rescate y cuidado de perros y gatos abandonados o maltratados.",
//     "ubicacion": "Calle 12 Los Nogales Curva N°3 #488, Zona Bajo Llojeta, La Paz",
//     "cantidadPerros": 50,
//     "horario": "Lunes a Viernes, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Equipo de Albergue Peluchín",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 2,
//     "nombre": "Centro de Rescate Animal Laika",
//     "descripcion": "Centro enfocado en erradicar el problema de animales en situación de calle y violencia contra los animales.",
//     "ubicacion": "La Paz, Bolivia",
//     "cantidadPerros": 35,
//     "horario": "Lunes a Sábado, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "Equipo de Laika",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 3,
//     "nombre": "Refugio Mis Amores Patitas",
//     "descripcion": "Refugio sin fines de lucro dedicado a la rehabilitación y cuidado de animales rescatados.",
//     "ubicacion": "La Paz, Bolivia",
//     "cantidadPerros": 40,
//     "horario": "Todos los días, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Equipo de Mis Amores Patitas",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 4,
//     "nombre": "Albergue Génesis",
//     "descripcion": "Refugio que lucha contra el abandono animal, brindando hogar a más de 120 perros.",
//     "ubicacion": "Zona Senkata, El Alto, La Paz",
//     "cantidadPerros": 120,
//     "horario": "Lunes a Viernes, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "María Angulo",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 5,
//     "nombre": "Refugio Una Mano Una Patita",
//     "descripcion": "Iniciativa que rescata y rehabilita perros maltratados, enfermos y abandonados.",
//     "ubicacion": "Cochabamba, Bolivia",
//     "cantidadPerros": 276,
//     "horario": "Lunes a Sábado, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "Vivian Sánchez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 6,
//     "nombre": "Refugio Esperanza Canina",
//     "descripcion": "Refugio dedicado al rescate y cuidado de perros callejeros.",
//     "ubicacion": "Calle Principal #123, La Paz",
//     "cantidadPerros": 25,
//     "horario": "Lunes a Viernes, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Juan Pérez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 7,
//     "nombre": "Refugio Canino Amigo Fiel",
//     "descripcion": "Refugio especializado en perros de todas las razas.",
//     "ubicacion": "Av. Libertad #456, La Paz",
//     "cantidadPerros": 40,
//     "horario": "Todos los días, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "María López",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 8,
//     "nombre": "Hogar Temporal Patitas Felices",
//     "descripcion": "Ofrece un hogar temporal a perros en situación de calle mientras encuentran una familia.",
//     "ubicacion": "Zona Sur #789, La Paz",
//     "cantidadPerros": 30,
//     "horario": "Lunes a Sábado, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Carlos Gómez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 9,
//     "nombre": "Refugio Huellitas de Amor",
//     "descripcion": "Refugio que brinda cuidado y amor a perros rescatados.",
//     "ubicacion": "Av. Siempre Viva #101, La Paz",
//     "cantidadPerros": 45,
//     "horario": "Todos los días, 9:00 AM - 6:00 PM",
//     "nombrePropietario": "Ana Martínez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 10,
//     "nombre": "Centro de Adopción Canina La Paz",
//     "descripcion": "Centro dedicado a la adopción responsable de perros rescatados.",
//     "ubicacion": "Calle de la Amistad #202, La Paz",
//     "cantidadPerros": 50,
//     "horario": "Lunes a Viernes, 8:00 AM - 4:00 PM",
//     "nombrePropietario": "Luis Rodríguez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 11,
//     "nombre": "Refugio Patas y Colitas",
//     "descripcion": "Refugio que ofrece cuidado a perros abandonados y promueve su adopción.",
//     "ubicacion": "Zona Central #303, La Paz",
//     "cantidadPerros": 35,
//     "horario": "Lunes a Sábado, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Sofía Fernández",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 12,
//     "nombre": "Albergue Canino Nueva Vida",
//     "descripcion": "Albergue que brinda una nueva oportunidad a perros rescatados.",
//     "ubicacion": "Av. Libertad #404, La Paz",
//     "cantidadPerros": 60,
//     "horario": "Todos los días, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "Miguel Ángel",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 13,
//     "nombre": "Refugio de Esperanza Animal",
//     "descripcion": "Refugio que trabaja por el bienestar de los animales en situación de calle.",
//     "ubicacion": "Calle Esperanza #505, La Paz",
//     "cantidadPerros": 40,
//     "horario": "Lunes a Viernes, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Laura Sánchez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 14,
//     "nombre": "Centro de Rescate Huellas de Amor",
//     "descripcion": "Centro que rescata y cuida perros abandonados.",
//     "ubicacion": "Zona Norte #606, La Paz",
//     "cantidadPerros": 55,
//     "horario": "Lunes a Sábado, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "Fernando Pérez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 15,
//     "nombre": "Refugio Canino Luz y Vida",
//     "descripcion": "Refugio que ofrece cuidado y amor a perros rescatados.",
//     "ubicacion": "Av. del Sol #707, La Paz",
//     "cantidadPerros": 30,
//     "horario": "Todos los días, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Gabriela Torres",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 16,
//     "nombre": "Albergue de Mascotas Corazón Noble",
//     "descripcion": "Albergue dedicado al rescate y cuidado de perros y gatos.",
//     "ubicacion": "Calle Nobleza #808, La Paz",
//     "cantidadPerros": 50,
//     "horario": "Lunes a Viernes, 8:00 AM - 4:00 PM",
//     "nombrePropietario": "Ricardo Morales",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 17,
//     "nombre": "Refugio Animal Vida Nueva",
//     "descripcion": "Refugio que brinda una nueva oportunidad a perros en situación de calle.",
//     "ubicacion": "Zona Este #909, La Paz",
//     "cantidadPerros": 45,
//     "horario": "Lunes a Sábado, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Patricia Ramírez",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 18,
//     "nombre": "Centro de Adopción Patitas Unidas",
//     "descripcion": "Centro que promueve la adopción responsable de perros rescatados.",
//     "ubicacion": "Av. Unión #1010, La Paz",
//     "cantidadPerros": 60,
//     "horario": "Todos los días, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "Daniela López",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 19,
//     "nombre": "Refugio Canino Amigos Leales",
//     "descripcion": "Refugio que ofrece cuidado y amor a perros abandonados.",
//     "ubicacion": "Calle Lealtad #1111, La Paz",
//     "cantidadPerros": 35,
//     "horario": "Lunes a Viernes, 9:00 AM - 5:00 PM",
//     "nombrePropietario": "Jorge Castillo",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   },
//   {
//     "id": 20,
//     "nombre": "Albergue de Mascotas Hogar Feliz",
//     "descripcion": "Albergue que brinda un hogar temporal a perros en situación de calle.",
//     "ubicacion": "Zona Sur #1212, La Paz",
//     "cantidadPerros": 40,
//     "horario": "Lunes a Sábado, 8:00 AM - 6:00 PM",
//     "nombrePropietario": "Verónica Díaz",
//     "imagen": "https://images.unsplash.com/photo-1568572933382-74d440642117"
//   }
// ]

//     shelters.forEach((shelter: any) => {
//       console.log('cargando albergue', shelter);
//       this.db.addFirestoreDocument('Albergues', shelter)
//         .then((res) => {
//           console.log('Albergue agregado', shelter.name);
//         }).catch((error) => {
//           console.error('Error al agregar albergue:', error);
//         })
//     })
}


