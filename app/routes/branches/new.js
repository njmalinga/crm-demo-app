import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('branch');
  },
  actions: {
    willTransition() {
      this.controller.model.rollbackAttributes();
    },
    save(branch) {
      branch.save().then(() => this.transitionTo('branches'));
    },
  },
});
