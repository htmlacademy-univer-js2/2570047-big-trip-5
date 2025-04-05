import { mockPoints } from '../mock/point.js';

export default class PointModel {
    #points = mockPoints;

    get points() {
        return this.#points;
    }
}
