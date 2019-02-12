import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | people/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:people/new');
    assert.ok(route);
  });
});
