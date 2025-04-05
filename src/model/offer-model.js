import { mockOffers } from '../mock/offer.js';
 
 const FIRST_ELEMENT = 0;
 
 export default class OfferModel{
   #offers = mockOffers;
 
   getOffers(){
     return this.#offers;
   }
 
   getOfferById(type, id){
     return this.#offers.filter((offer)=> offer.type === type)[FIRST_ELEMENT]
       .offers.find((item)=>item.id === id);
   }
 
   getOfferByType(type){
     return this.#offers.filter((offer)=> offer.type === type)[FIRST_ELEMENT];
   }
 }