import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('branch', params.branch_id);
  },
  actions: {
    save(branch) {
      branch.save().then(() => this.transitionTo('branches'));
    },
  },
});
