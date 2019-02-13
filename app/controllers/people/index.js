import Controller from '@ember/controller';
import { computed } from '@ember/object'

export default Controller.extend({
  people: computed('model',
    'model.@each.id',
    'first_name',
    'last_name',
    function() {
      const model = this.model;
      if (!this.first_name && !this.last_name) {
        return model;
      }
      const filtered = this.filteredPeople.call(this);
      return filtered;
  }),

  filteredPeople() {
    const people = this.model;
    let filtered;

    if (this.first_name) {
      filtered = this.filterByFirstName.call(this, people);
    }
    if (this.last_name) {
      if (filtered) {
        filtered = this.filterByLastName.call(this, filtered);
      } else {
        filtered = this.filterByLastName.call(this, people);
      }
    }
    return filtered;
  },

  filterByFirstName(people) {
    let filtered = people.filter(person => {
      return person.firstname.toLowerCase().match(this.first_name.toLowerCase());
    });
    return filtered;
  },

  filterByLastName(people) {
    let filtered = people.filter(person => {
      return person.lastname.toLowerCase().match(this.last_name.toLowerCase());
    });
    return filtered;
  },

  actions: {
    deletePerson(person) {
      person.destroyRecord();
    },
  },
});
