import Mixin from '@ember/object/mixin';

export default Mixin.create({

  /**
   * [modalClassName description]
   * @type {String}
   */
  modalClassName: '',

  /**
   * [actions description]
   * @type {Object}
   */
  actions: {
    /**
     * [willTransition description]
     * @param  {[type]} transition [description]
     * @return {[type]}            [description]
     */
    willTransition: function(transition) {
      // close modal only when route changes
      if (transition.targetName !== this.router.get('currentRouteName')) {
        window.PR_Window.emberModalOnTransitionClose(this.get('modalClassName'));
      }
    }
  },

  /**
   * [setupController description]
   * @param  {[type]} controller [description]
   * @param  {[type]} model      [description]
   * @return {[type]}            [description]
   */
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    controller.set('modalClassName', this.get('modalClassName'));
  }
});
