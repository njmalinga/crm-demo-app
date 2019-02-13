import Controller from '@ember/controller';
import { task } from 'ember-concurrency';
import ENV from '../../../config/environment';
import { get } from '@ember/object';
import { inject as service} from '@ember/service';

export default Controller.extend({
  host: ENV.APP.API_HOST,
  namespace: ENV.APP.API_NAMESPACE,
  currentUser: service(),

  uploadPhoto: task(function * (file) {
    let person = this.model;
    try {
      yield file.upload(`${this.host}/${this.namespace.API_NAMESPACE}/profiles/images/upload`);
      person.set('profile_image', `${this.host}/${this.namespace.API_NAMESPACE}/profiles/images/download/${get(file, 'name')}`);
      yield person.save();
    } catch (e) {
      person.rollbackAttributes();
    }
  }).drop(),

  actions: {
    uploadImage(file) {
      get(this, 'uploadPhoto').perform(file);
    }
  }
});
