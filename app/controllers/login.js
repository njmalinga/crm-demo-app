import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    authenticate() {
      let credentials = this.getProperties('email', 'password');
			const authenticator = 'authenticator:token';
      this.get('session').authenticate(authenticator, credentials)
      .catch(error => {
        this.set('errorMessage', error.statusText || error);
      });
    }
  }
});
