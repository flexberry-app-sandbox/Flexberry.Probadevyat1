import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  регистрГостя: DS.belongsTo('i-i-s-probadevyat-регистр-гостя', { inverse: null, async: false }),
  регистрацВхода: DS.belongsTo('i-i-s-probadevyat-регистрац-входа', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  регистрГостя: {
    descriptionKey: 'models.i-i-s-probadevyat-вход-гостя.validations.регистрГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрацВхода: {
    descriptionKey: 'models.i-i-s-probadevyat-вход-гостя.validations.регистрацВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-probadevyat-вход-гостя', {
    
  });
};
