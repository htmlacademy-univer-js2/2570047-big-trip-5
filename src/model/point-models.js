import { mockDestinations } from '../mock/destination.js';
import { mockOffers } from '../mock/offer.js';
import { getShufflePoints } from '../mock/point.js';
 
const FIRST_ELEMENT = 0;
 
export default class PointModel{
    points = getShufflePoints();
    pointOffers = mockOffers;
    destinations = mockDestinations;
 
    getPoints(){
        return this.points;
    }
 
    getOffers(){
        return this.pointOffers;
    }
 
    getDestinations(){
        return this.destinations;
    }
 
    getOfferById(type, id){
        return id ? this.pointOffers.filter((offer)=> offer.type === type)[FIRST_ELEMENT].offers.find((item)=>item.id === id)
        : this.pointOffers.filter((offer)=> offer.type === type)[FIRST_ELEMENT];
    }
 
    getDestinationById(id){
        return this.destinations.find((item)=>item.id === id);
    }
}