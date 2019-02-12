import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      person: this.store.findRecord('person', params.person_id),
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
