import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  гость: DS.belongsTo('i-i-s-probadevyat-гость', { inverse: null, async: false }),
  карта: DS.belongsTo('i-i-s-probadevyat-карта', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-probadevyat-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadevyat-регистр-гостя.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гость: {
    descriptionKey: 'models.i-i-s-probadevyat-регистр-гостя.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-probadevyat-регистр-гостя.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-probadevyat-регистр-гостя.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрГостяE', 'i-i-s-probadevyat-регистр-гостя', {
    дата: attr('Дата', { index: 0 }),
    гость: belongsTo('i-i-s-probadevyat-гость', 'Гость', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    карта: belongsTo('i-i-s-probadevyat-карта', 'Карта', {
      кодКарты: attr('Код карты', { index: 4, hidden: true }),
      комната: belongsTo('i-i-s-probadevyat-комната', '', {
        номерКомнаты: attr('Комната', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 3, displayMemberPath: 'кодКарты' }),
    сотрудник: belongsTo('i-i-s-probadevyat-сотрудник', 'Ответственный', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('РегистрГостяL', 'i-i-s-probadevyat-регистр-гостя', {
    дата: attr('Дата', { index: 0 }),
    гость: belongsTo('i-i-s-probadevyat-гость', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    карта: belongsTo('i-i-s-probadevyat-карта', 'Код карты', {
      кодКарты: attr('Код карты', { index: 2 }),
      комната: belongsTo('i-i-s-probadevyat-комната', '', {
        номерКомнаты: attr('Комната', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-probadevyat-сотрудник', 'Ответственный', {
      фИО: attr('Ответственный', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
