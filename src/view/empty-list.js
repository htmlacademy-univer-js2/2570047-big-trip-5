import AbstractView from '../framework/view/abstract-view.js';
import { emptyListMessages } from '../const.js';

function createEmptyListTemplate(actualFilter){
  return `
        <section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>

          <p class="trip-events__msg">Click New Event to create your first point</p>

          <!--
            Значение отображаемого текста зависит от выбранного фильтра:
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Present — 'There are no present events now';
              * Future — 'There are no future events now'.
          -->
          <p class="trip-events__msg">${emptyListMessages[actualFilter]}</p>
        </section>
`;
}

export default class EmptyListView extends AbstractView{
  #actualFilter;
  constructor(actualFilter){  
    super();
    this.#actualFilter = actualFilter;
  }

  get template(){
    return createEmptyListTemplate(this.#actualFilter);
  }
}