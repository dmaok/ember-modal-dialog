import Ember from 'ember';

export default Ember.Component.extend({

  nonMiddled: false,

  /**
   * [didInsertElement description]
   * @return {[type]} [description]
   */
  didInsertElement() {
    window.Window.emberModalInit(this.$(), () => {
      this.sendAction('afterOpen');
    }, this.get('nonMiddled'), (container_id, data) => {
      var _doTransition = data.onTransitionClose ? false : true;
      this.sendAction('close', _doTransition);
    });
  }
});
