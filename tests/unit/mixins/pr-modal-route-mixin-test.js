import EmberObject from '@ember/object';
import PrModalRouteMixinMixin from '../../../mixins/pr-modal-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | pr modal route mixin', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let PrModalRouteMixinObject = EmberObject.extend(PrModalRouteMixinMixin);
    let subject = PrModalRouteMixinObject.create();
    assert.ok(subject);
  });
});
