import { Serializer as РегистрГостяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probadevyat-регистр-гостя';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрГостяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
