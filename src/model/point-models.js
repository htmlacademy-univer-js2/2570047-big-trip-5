import { mockPoints } from '../mock/point.js';

export default class PointModel {
    #points = mockPoints;

    getPoints() {
        return this.#points;
    }
}
