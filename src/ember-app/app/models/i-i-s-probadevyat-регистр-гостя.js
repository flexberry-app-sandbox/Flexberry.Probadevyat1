import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрГостяMixin
} from '../mixins/regenerated/models/i-i-s-probadevyat-регистр-гостя';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрГостяMixin, Validations, {
});

defineProjections(Model);

export default Model;
