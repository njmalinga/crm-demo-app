import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    let userId = this.get('session.data.authenticated.userId');
    if (userId) {
      return this.get('store').findRecord('user', userId)
      .then(user => {
        this.set('profile', user.get('profile'));
        return this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
