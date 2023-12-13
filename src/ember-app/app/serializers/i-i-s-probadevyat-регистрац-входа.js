import { Serializer as РегистрацВходаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probadevyat-регистрац-входа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрацВходаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
