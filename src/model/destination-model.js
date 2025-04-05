import { mockDestinations } from '../mock/destination.js';
 
 export default class DestinationModel{
   #destinations = mockDestinations;
 
   get destinations(){
     return this.#destinations;
   }
 
   getDestinationById(id){
     return this.#destinations.find((item)=>item.id === id);
   }
 }