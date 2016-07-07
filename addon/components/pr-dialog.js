import Ember from 'ember';
import layout from '../templates/components/pr-dialog';

const { computed, inject } = Ember;
const { oneWay } = computed;

export default Ember.Component.extend({
  tagName: '',
  layout,
  modalService: inject.service('modal-dialog'),
  destinationElementId: oneWay('modalService.destinationElementId'),
  
  nonMiddled: false,

  modalClass: computed('modalClassName', function() {
    return this.get('modalClassName') || '';
  }),
  modalClassName: '',

  /**
   * [actions description]
   * @type {Object}
   */
  actions: {
    afterOpen() {
      this.sendAction('afterOpen');
    },
    close(doTransition) {
      this.sendAction('close', doTransition);
    },
    btnCloseClick() {
      window.Window.close(this.get('modalClassName'));
    }
  }
});
