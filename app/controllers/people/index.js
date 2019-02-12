import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePerson(person) {
      person.destroyRecord();
    },
  },
});
