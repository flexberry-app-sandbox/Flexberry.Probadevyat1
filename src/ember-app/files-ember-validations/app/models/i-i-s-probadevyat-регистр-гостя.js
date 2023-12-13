import {
  defineNamespace,
  defineProjections,
  Model as РегистрГостяMixin
} from '../mixins/regenerated/models/i-i-s-probadevyat-регистр-гостя';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрГостяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
