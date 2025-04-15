import { mockPoints } from '../mock/point.js';
import { toCamelCase } from '../utils/common';

export default class PointModel {
    #points = mockPoints.map((point)=>toCamelCase(point));

    get points() {
        return this.#points;
    }
}
