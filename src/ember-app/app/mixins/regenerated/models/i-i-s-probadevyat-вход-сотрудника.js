import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-probadevyat-сотрудник', { inverse: null, async: false }),
  регистрацВхода: DS.belongsTo('i-i-s-probadevyat-регистрац-входа', { inverse: 'входСотрудника', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-probadevyat-вход-сотрудника.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрацВхода: {
    descriptionKey: 'models.i-i-s-probadevyat-вход-сотрудника.validations.регистрацВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходСотрудникаE', 'i-i-s-probadevyat-вход-сотрудника', {
    сотрудник: belongsTo('i-i-s-probadevyat-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должности: belongsTo('i-i-s-probadevyat-должности', '', {
        должность: attr('Должность', { index: 2 }),
        карта: belongsTo('i-i-s-probadevyat-карта', '', {
          кодКарты: attr('Номер карты', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
