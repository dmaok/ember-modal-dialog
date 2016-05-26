import Ember from 'ember';
import PrModalRouteMixinMixin from '../../../mixins/pr-modal-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | pr modal route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let PrModalRouteMixinObject = Ember.Object.extend(PrModalRouteMixinMixin);
  let subject = PrModalRouteMixinObject.create();
  assert.ok(subject);
});
