import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('branch', params.branch_id);
  },
  actions: {
    save(branch) {
      branch.save().then(() => this.transitionTo('branches'));
    },
  },
});
