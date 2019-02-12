import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
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
  },
});
