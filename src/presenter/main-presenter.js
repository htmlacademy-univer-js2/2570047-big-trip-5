import CreateForm from '../view/create-form.js';
import EditForm from '../view/edit-form.js';
import RoutePoint from '../view/route-point.js';
import { render } from '../render.js';

export default class MainPresenter {
    constructor ({container}) {
        const tripEventsList = document.createElement('ul');
        tripEventsList.className = 'trip-events__list';
        container.appendChild(tripEventsList);
        this.container = tripEventsList;
    }

    init(){
        render(new EditForm(),this.container);
        render(new CreateForm(),this.container);
        for(let i = 0; i < 3; i++) {
            render(new RoutePoint(),this.container);
        }
    }
}
