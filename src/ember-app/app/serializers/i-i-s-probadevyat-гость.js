import { Serializer as ГостьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probadevyat-гость';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГостьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
