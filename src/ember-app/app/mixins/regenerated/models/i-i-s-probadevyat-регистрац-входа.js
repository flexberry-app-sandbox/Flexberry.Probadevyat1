import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  комната: DS.belongsTo('i-i-s-probadevyat-комната', { inverse: null, async: false }),
  входСотрудника: DS.hasMany('i-i-s-probadevyat-вход-сотрудника', { inverse: 'регистрацВхода', async: false }),
  входГостя: DS.hasMany('i-i-s-probadevyat-вход-гостя', { inverse: 'регистрацВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadevyat-регистрац-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probadevyat-регистрац-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входСотрудника: {
    descriptionKey: 'models.i-i-s-probadevyat-регистрац-входа.validations.входСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-probadevyat-регистрац-входа.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрацВходаE', 'i-i-s-probadevyat-регистрац-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probadevyat-комната', 'Комната', {
      номерКомнаты: attr('Номер комнаты', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерКомнаты' }),
    входСотрудника: hasMany('i-i-s-probadevyat-вход-сотрудника', 'Вход сотрудника', {
      сотрудник: belongsTo('i-i-s-probadevyat-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должности: belongsTo('i-i-s-probadevyat-должности', '', {
          должность: attr('Должность', { index: 2 }),
          карта: belongsTo('i-i-s-probadevyat-карта', '', {
            кодКарты: attr('Номер карты', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    }),
    входГостя: hasMany('i-i-s-probadevyat-вход-гостя', 'Вход гостя', {
      
    })
  });

  modelClass.defineProjection('РегистрацВходаL', 'i-i-s-probadevyat-регистрац-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probadevyat-комната', 'Номер комнаты', {
      номерКомнаты: attr('Номер комнаты', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
