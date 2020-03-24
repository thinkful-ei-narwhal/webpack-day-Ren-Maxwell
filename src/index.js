import $ from 'jquery';
import cuid from 'cuid';
import './index.css';
import shoppingList from './shopping-list';
import store from './store';
import item from './item';

const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
