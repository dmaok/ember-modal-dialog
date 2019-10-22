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
    this._super(...arguments);
    window.PR_Window.emberModalInit(
      this.$(),
      () => this.afterOpen(),
      this.get('nonMiddled'),
      this.get('closable'),
      (container_id, data) => this.close(!data.onTransitionClose)
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
    window.PR_Window.close(this.get('modalClassName'));
  }
});
