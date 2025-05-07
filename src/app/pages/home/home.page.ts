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
  ) { }

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


  loadDogsAndShelters() {
    let shelters = [
      {
        name: 'Albergue Esperanza',
        description: 'Un albergue dedicado al rescate y cuidado de perros callejeros.',
        location: 'Calle Principal #123, La Paz',
        dogCount: 25,
        schedule: 'Lunes a Viernes, 9:00 AM - 5:00 PM',
        dogs: ['Firulais', 'Max', 'Luna'],
        ownerName: 'Juan Pérez'
      },
      {
        name: 'Refugio Canino',
        description: 'Refugio especializado en perros de todas las razas.',
        location: 'Av. Libertad #456, Santa Cruz',
        dogCount: 40,
        schedule: 'Todos los días, 8:00 AM - 6:00 PM',
        dogs: ['Rocky', 'Bella', 'Toby'],
        ownerName: 'María López'
      }
    ];

    let dogs = [
      {
        name: 'Firulais',
        personality: 'Juguetón',
        breed: 'Labrador',
        gender: 'Macho',
        size: 'Grande',
        shelterLocation: 'Calle Principal #123, La Paz',
        health: 'Vacunado y desparasitado',
        description: 'Un perro muy amigable y activo.'
      },
      {
        name: 'Luna',
        personality: 'Cariñosa',
        breed: 'Golden Retriever',
        gender: 'Hembra',
        size: 'Mediana',
        shelterLocation: 'Calle Principal #123, La Paz',
        health: 'Vacunada y esterilizada',
        description: 'Le encanta jugar con niños y otros perros.'
      },
      {
        name: 'Rocky',
        personality: 'Protector',
        breed: 'Pastor Alemán',
        gender: 'Macho',
        size: 'Grande',
        shelterLocation: 'Av. Libertad #456, Santa Cruz',
        health: 'Vacunado',
        description: 'Ideal para cuidar casas o propiedades.'
      }
    ];

    shelters.forEach((shelter: any) => {
      console.log('cargando albergue', shelter);
      this.db.addFirestoreDocument('Albergues', shelters)
        .then((res) => {
          console.log('Albergue agregado', shelter.name);
        }).catch((error) => {
          console.error('Error al agregar albergue:', error);
        })
  })

    dogs.forEach((dog: any) => {
      console.log('cargando perro', dog);
      this.db.addFirestoreDocument('Perros', dogs)
        .then((res) => {
          console.log('Perro agregado', dog.name);
        }).catch((error) => {
          console.error('Error al agregar perro:', error);
        })
    })
  }

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

  ngOnInit() {
  }

}
