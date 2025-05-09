import { render } from './framework/render.js';
import EmptyListView from './view/empty-list';
import Filter from './view/filters.js';
import MainPresenter from './presenter/list-presenter.js';
import PointModel from './model/point-models.js';
import OfferModel from './model/offer-model.js';
import DestinationModel from './model/destination-model.js';
import { generateFilters } from './mock/filter.js';


const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
const siteBodySortElement = document.querySelector('.trip-events');
const filter = generateFilters(new PointModel().points);
render(new Filter(filter), siteHeaderFiltersElement);
if(filter[0].count === 0){
  render(new EmptyListView(),siteBodySortElement);
} else{
  const mainPresenter = new MainPresenter(siteBodySortElement,
    new PointModel(),new OfferModel(), new DestinationModel());
  mainPresenter.init();
}