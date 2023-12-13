import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadevyat-вход-гостя', 'Unit | Serializer | i-i-s-probadevyat-вход-гостя', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probadevyat-вход-гостя',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probadevyat-вид-карты',

    'model:i-i-s-probadevyat-вход-гостя',
    'model:i-i-s-probadevyat-вход-сотрудника',
    'model:i-i-s-probadevyat-гость',
    'model:i-i-s-probadevyat-должности',
    'model:i-i-s-probadevyat-карта',
    'model:i-i-s-probadevyat-комната',
    'model:i-i-s-probadevyat-регистр-гостя',
    'model:i-i-s-probadevyat-регистрац-входа',
    'model:i-i-s-probadevyat-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
