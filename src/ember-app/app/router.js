import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probadevyat-гость-l');
  this.route('i-i-s-probadevyat-гость-e',
  { path: 'i-i-s-probadevyat-гость-e/:id' });
  this.route('i-i-s-probadevyat-гость-e.new',
  { path: 'i-i-s-probadevyat-гость-e/new' });
  this.route('i-i-s-probadevyat-должности-l');
  this.route('i-i-s-probadevyat-должности-e',
  { path: 'i-i-s-probadevyat-должности-e/:id' });
  this.route('i-i-s-probadevyat-должности-e.new',
  { path: 'i-i-s-probadevyat-должности-e/new' });
  this.route('i-i-s-probadevyat-карта-l');
  this.route('i-i-s-probadevyat-карта-e',
  { path: 'i-i-s-probadevyat-карта-e/:id' });
  this.route('i-i-s-probadevyat-карта-e.new',
  { path: 'i-i-s-probadevyat-карта-e/new' });
  this.route('i-i-s-probadevyat-комната-l');
  this.route('i-i-s-probadevyat-комната-e',
  { path: 'i-i-s-probadevyat-комната-e/:id' });
  this.route('i-i-s-probadevyat-комната-e.new',
  { path: 'i-i-s-probadevyat-комната-e/new' });
  this.route('i-i-s-probadevyat-регистр-гостя-l');
  this.route('i-i-s-probadevyat-регистр-гостя-e',
  { path: 'i-i-s-probadevyat-регистр-гостя-e/:id' });
  this.route('i-i-s-probadevyat-регистр-гостя-e.new',
  { path: 'i-i-s-probadevyat-регистр-гостя-e/new' });
  this.route('i-i-s-probadevyat-регистрац-входа-l');
  this.route('i-i-s-probadevyat-регистрац-входа-e',
  { path: 'i-i-s-probadevyat-регистрац-входа-e/:id' });
  this.route('i-i-s-probadevyat-регистрац-входа-e.new',
  { path: 'i-i-s-probadevyat-регистрац-входа-e/new' });
  this.route('i-i-s-probadevyat-сотрудник-l');
  this.route('i-i-s-probadevyat-сотрудник-e',
  { path: 'i-i-s-probadevyat-сотрудник-e/:id' });
  this.route('i-i-s-probadevyat-сотрудник-e.new',
  { path: 'i-i-s-probadevyat-сотрудник-e/new' });
});

export default Router;
