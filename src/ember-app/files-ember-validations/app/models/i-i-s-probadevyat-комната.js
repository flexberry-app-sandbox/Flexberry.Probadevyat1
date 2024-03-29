import {
  defineNamespace,
  defineProjections,
  Model as КомнатаMixin
} from '../mixins/regenerated/models/i-i-s-probadevyat-комната';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КомнатаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
