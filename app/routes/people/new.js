import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return RSVP.hash({
      person: this.store.createRecord('person'),
      branches: this.store.findAll('branch'),
    });
  },
  setupController(controller, model) {
    this._super(controller, model.person);
    controller.set('branches', model.branches);
  },
  actions: {
    willTransition() {
      this.controller.model.rollbackAttributes();
    },
    save(model) {
      model.save().then(() => this.transitionTo('people'));
    }
  },
});
