import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
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
