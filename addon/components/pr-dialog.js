import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import { computed } from '@ember/object';
import layout from '../templates/components/pr-dialog';

export default Component.extend({
  tagName: '',
  layout,
  modalService: service('modal-dialog'),
  destinationElementId: oneWay('modalService.destinationElementId'),

  nonMiddled: false,
  closable: true,

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
      this.afterOpen();
    },
    close(doTransition) {
      this.close(doTransition);
    },
    btnCloseClick() {
      window.PR_Window.close(this.get('modalClassName'));
    }
  }
});
