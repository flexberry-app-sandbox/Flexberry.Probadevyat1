import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadevyat-регистр-гостя', 'Unit | Model | i-i-s-probadevyat-регистр-гостя', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
