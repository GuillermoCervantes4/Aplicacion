import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { FiltroService } from 'src/app/services/filtro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
})
export class AdoptarPage implements OnInit {
  albergueId: string | null = null;
  albergueNombre: string | null = null;

  perros: any[] = [];           // Los que se muestran
  perrosOriginal: any[] = [];   // Los que no se tocan
  // perros: any;
  constructor(private route: ActivatedRoute,
    public db: DatabaseService,
    private filtroService: FiltroService
  ) { 
    this.fetchPerros();
  }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.albergueId = params['albergueId'];
      this.albergueNombre = params['albergueNombre'];
    });
  }

  fetchPerros() {
    this.db.fetchFirestoreCollection('Perros')
    .subscribe((res: any) => {
      console.log('Perros Collection: ', res);
      this.perrosOriginal = res;
      this.perros = res;
    });
  }

  filtrarPerros(event: any) {
    const texto = event.target.value?.toLowerCase().trim() || '';

    if (texto === '') {
      this.perros = [...this.perrosOriginal]; // Mostrar todos si el input está vacío
    } else {
      // Filtrar por el nombre del perro (puedes cambiarlo a raza o edad si quieres)
      this.perros = this.perrosOriginal.filter(perro =>
        perro.nombre?.toLowerCase().includes(texto)
      );
    }
  }

//       let dogs = [{
//     "id": 1,
//     "nombre": "Firulais",
//     "personalidad": "Juguetón",
//     "raza": "Labrador",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 30,
//     "ubicacionRefugio": "Calle 10, La Paz",
//     "salud": "Vacunado",
//     "descripcion": "Muy activo y amigable con los niños.",
//     "imagen": "https://images.unsplash.com/photo-1",
//     "albergue": "Albergue Peluchín"
//   },
//   {
//     "id": 2,
//     "nombre": "Luna",
//     "personalidad": "Cariñosa",
//     "raza": "Golden Retriever",
//     "sexo": "Hembra",
//     "tamano": "Grande",
//     "peso": 28,
//     "ubicacionRefugio": "Av. Busch #100, La Paz",
//     "salud": "Vacunada y esterilizada",
//     "descripcion": "Dócil y le encanta la compañía humana.",
//     "imagen": "https://images.unsplash.com/photo-2",
//     "albergue": "Centro de Rescate Animal Laika"
//   },
//   {
//     "id": 3,
//     "nombre": "Max",
//     "personalidad": "Protector",
//     "raza": "Pastor Alemán",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 35,
//     "ubicacionRefugio": "Zona Central, Cochabamba",
//     "salud": "Vacunado",
//     "descripcion": "Excelente perro guardián.",
//     "imagen": "https://images.unsplash.com/photo-3",
//     "albergue": "Refugio Mis Amores Patitas"
//   },
//   {
//     "id": 4,
//     "nombre": "Bella",
//     "personalidad": "Tranquila",
//     "raza": "Beagle",
//     "sexo": "Hembra",
//     "tamano": "Mediano",
//     "peso": 14,
//     "ubicacionRefugio": "Zona Sur, La Paz",
//     "salud": "Vacunada",
//     "descripcion": "Ideal para departamentos.",
//     "imagen": "https://images.unsplash.com/photo-4",
//     "albergue": "Albergue Génesis"
//   },
//   {
//     "id": 5,
//     "nombre": "Rocky",
//     "personalidad": "Enérgico",
//     "raza": "Husky Siberiano",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 27,
//     "ubicacionRefugio": "Av. América, Cochabamba",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Ama correr y jugar al aire libre.",
//     "imagen": "https://images.unsplash.com/photo-5",
//     "albergue": "Refugio Una Mano Una Patita"
//   },
//   {
//     "id": 6,
//     "nombre": "Nina",
//     "personalidad": "Dócil",
//     "raza": "Poodle",
//     "sexo": "Hembra",
//     "tamano": "Pequeño",
//     "peso": 8,
//     "ubicacionRefugio": "Centro Histórico, Sucre",
//     "salud": "Vacunada",
//     "descripcion": "Tranquila y buena para personas mayores.",
//     "imagen": "https://images.unsplash.com/photo-6",
//     "albergue": "Refugio Esperanza Canina"
//   },
//   {
//     "id": 7,
//     "nombre": "Toby",
//     "personalidad": "Leal",
//     "raza": "Rottweiler",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 40,
//     "ubicacionRefugio": "Zona Villa Fátima, La Paz",
//     "salud": "Vacunado y castrado",
//     "descripcion": "Fiel y protector.",
//     "imagen": "https://images.unsplash.com/photo-7",
//     "albergue": "Refugio Canino Amigo Fiel"
//   },
//   {
//     "id": 8,
//     "nombre": "Lola",
//     "personalidad": "Amigable",
//     "raza": "Cocker Spaniel",
//     "sexo": "Hembra",
//     "tamano": "Mediano",
//     "peso": 12,
//     "ubicacionRefugio": "Zona Sopocachi, La Paz",
//     "salud": "Vacunada y desparasitada",
//     "descripcion": "Muy sociable con otros perros.",
//     "imagen": "https://images.unsplash.com/photo-8",
//     "albergue": "Hogar Temporal Patitas Felices"
//   },
//   {
//     "id": 9,
//     "nombre": "Bruno",
//     "personalidad": "Obediente",
//     "raza": "Boxer",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 33,
//     "ubicacionRefugio": "Calle Suárez #15, Santa Cruz",
//     "salud": "Vacunado y desparasitado",
//     "descripcion": "Fácil de entrenar y muy leal a su familia.",
//     "imagen": "https://images.unsplash.com/photo-9",
//     "albergue": "Refugio Huellitas de Amor"
//   },
//   {
//     "id": 10,
//     "nombre": "Canela",
//     "personalidad": "Alegre",
//     "raza": "Mestizo",
//     "sexo": "Hembra",
//     "tamano": "Mediano",
//     "peso": 18,
//     "ubicacionRefugio": "Av. del Maestro, Oruro",
//     "salud": "Vacunada",
//     "descripcion": "Siempre está moviendo la cola.",
//     "imagen": "https://images.unsplash.com/photo-10",
//     "albergue": "Centro de Adopción Canina La Paz"
//   },
//   {
//     "id": 11,
//     "nombre": "Duke",
//     "personalidad": "Fuerte",
//     "raza": "Pitbull",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 38,
//     "ubicacionRefugio": "Zona Norte, Tarija",
//     "salud": "Vacunado y castrado",
//     "descripcion": "Ideal para guardianía con buen entrenamiento.",
//     "imagen": "https://images.unsplash.com/photo-11",
//     "albergue": "Refugio Patas y Colitas"
//   },
//   {
//     "id": 12,
//     "nombre": "Maya",
//     "personalidad": "Curiosa",
//     "raza": "Schnauzer",
//     "sexo": "Hembra",
//     "tamano": "Mediano",
//     "peso": 15,
//     "ubicacionRefugio": "Zona Villa Armonía, La Paz",
//     "salud": "Vacunada",
//     "descripcion": "Le encanta explorar y olfatear todo.",
//     "imagen": "https://images.unsplash.com/photo-12",
//     "albergue": "Albergue Canino Nueva Vida"
//   },
//   {
//     "id": 13,
//     "nombre": "Zeus",
//     "personalidad": "Dominante",
//     "raza": "Dóberman",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 36,
//     "ubicacionRefugio": "Zona Sur, El Alto",
//     "salud": "Vacunado",
//     "descripcion": "Fuerte y obediente con entrenamiento.",
//     "imagen": "https://images.unsplash.com/photo-13",
//     "albergue": "Refugio de Esperanza Animal"
//   },
//   {
//     "id": 14,
//     "nombre": "Nala",
//     "personalidad": "Cariñosa",
//     "raza": "Samoyedo",
//     "sexo": "Hembra",
//     "tamano": "Grande",
//     "peso": 25,
//     "ubicacionRefugio": "Calle 8, La Paz",
//     "salud": "Vacunada y esterilizada",
//     "descripcion": "Muy peluda y dócil.",
//     "imagen": "https://images.unsplash.com/photo-14",
//     "albergue": "Centro de Rescate Huellas de Amor"
//   },
//   {
//     "id": 15,
//     "nombre": "Bruno",
//     "personalidad": "Valiente",
//     "raza": "Bulldog",
//     "sexo": "Macho",
//     "tamano": "Mediano",
//     "peso": 20,
//     "ubicacionRefugio": "Av. Blanco Galindo, Cochabamba",
//     "salud": "Vacunado",
//     "descripcion": "Muy decidido y algo testarudo.",
//     "imagen": "https://images.unsplash.com/photo-15",
//     "albergue": "Refugio Canino Luz y Vida"
//   },
//   {
//     "id": 16,
//     "nombre": "Milu",
//     "personalidad": "Juguetón",
//     "raza": "Terrier",
//     "sexo": "Macho",
//     "tamano": "Pequeño",
//     "peso": 9,
//     "ubicacionRefugio": "Zona Belén, Potosí",
//     "salud": "Vacunado",
//     "descripcion": "Corre por todos lados.",
//     "imagen": "https://images.unsplash.com/photo-16",
//     "albergue": "Albergue de Mascotas Corazón Noble"
//   },
//   {
//     "id": 17,
//     "nombre": "Chispa",
//     "personalidad": "Traviesa",
//     "raza": "Shih Tzu",
//     "sexo": "Hembra",
//     "tamano": "Pequeño",
//     "peso": 6,
//     "ubicacionRefugio": "Zona Central, Sucre",
//     "salud": "Vacunada",
//     "descripcion": "Pequeña pero con mucha energía.",
//     "imagen": "https://images.unsplash.com/photo-17",
//     "albergue": "Refugio Animal Vida Nueva"
//   },
//   {
//     "id": 18,
//     "nombre": "Coco",
//     "personalidad": "Dormilón",
//     "raza": "Basset Hound",
//     "sexo": "Macho",
//     "tamano": "Mediano",
//     "peso": 24,
//     "ubicacionRefugio": "Zona Alto Lima, El Alto",
//     "salud": "Vacunado",
//     "descripcion": "Le encanta dormir todo el día.",
//     "imagen": "https://images.unsplash.com/photo-18",
//     "albergue": "Centro de Adopción Patitas Unidas"
//   },
//   {
//     "id": 19,
//     "nombre": "Daisy",
//     "personalidad": "Dócil",
//     "raza": "Cruzado",
//     "sexo": "Hembra",
//     "tamano": "Mediano",
//     "peso": 16,
//     "ubicacionRefugio": "Zona San Pedro, La Paz",
//     "salud": "Vacunada",
//     "descripcion": "Muy tranquila y dulce.",
//     "imagen": "https://images.unsplash.com/photo-19",
//     "albergue": "Refugio Canino Amigos Leales"
//   },
//   {
//     "id": 20,
//     "nombre": "Rex",
//     "personalidad": "Fiel",
//     "raza": "Pastor Belga",
//     "sexo": "Macho",
//     "tamano": "Grande",
//     "peso": 32,
//     "ubicacionRefugio": "Zona Miraflores, La Paz",
//     "salud": "Vacunado",
//     "descripcion": "Leal y con gran instinto protector.",
//     "imagen": "https://images.unsplash.com/photo-20",
//     "albergue": "Albergue de Mascotas Hogar Feliz"
//   }
// ]
// dogs.forEach((dog: any) => {
//       console.log('cargando perro', dog);
//       this.db.addFirestoreDocument('Perros', dog)
//         .then((res) => {
//           console.log('Perro agregado', dog.name);
//         }).catch((error) => {
//           console.error('Error al agregar perro:', error);
//         })
//     })

}
