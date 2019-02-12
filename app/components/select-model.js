import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.attributeBindings = ['onchange', 'required'];
  },
  tagName: "select",
  displayColumn: "name",

  didInsertElement() {
    if (!this.get('prompt')) {
      const defaultVaule = this.get('options').get('firstObject');
      this.set('selected', defaultVaule);
    }
  },
  onchange: computed(function() {
    const _this = this;
    return function (value) {
      _this.actions.setSelectedValue.call(_this, value.target.value);
    };
  }),
  actions: {
    setSelectedValue(value){
      this.set('selected', this.get('options').findBy('id', value));
    }
  }
});
