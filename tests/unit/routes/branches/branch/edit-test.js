import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | branches/branch/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:branches/branch/edit');
    assert.ok(route);
  });
});
