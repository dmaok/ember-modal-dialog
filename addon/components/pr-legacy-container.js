import Component from '@ember/component';

export default Component.extend({

  modalClassName: '',
  nonMiddled: false,
  closable: true,

  /**
   * [didInsertElement description]
   * @return {[type]} [description]
   */
  didInsertElement() {
    window.Window.emberModalInit(
      this.$(),
      () => {
        this.sendAction('afterOpen');
      },
      this.get('nonMiddled'),
      this.get('closable'),
      (container_id, data) => {
        var _doTransition = data.onTransitionClose ? false : true;
        this.sendAction('close', _doTransition);
      }
    );
  },

  /**
   * [willDestroyElement description]
   * @return {[type]} [description]
   */
  willDestroyElement() {
    this._super(...arguments);
    // если модал открывается НЕ по отдельному урлу.(для остальных случаев есть mixin)
    // помогает избежать активного диммера
    // при работе юзера с историей браузера(при нажатии на кнопку назад)
    window.Window.close(this.get('modalClassName'));
  }
});
