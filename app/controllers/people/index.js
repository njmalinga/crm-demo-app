import Controller from '@ember/controller';
import { computed } from '@ember/object'
import moment from 'moment';

export default Controller.extend({
  people: computed('model',
    'model.@each.id',
    'first_name',
    'last_name',
    'years_as_customer',
    function() {
      const model = this.model;
      if (!this.first_name && !this.last_name && !this.years_as_customer) {
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
    if (this.years_as_customer) {
      if (filtered) {
        filtered = this.filterByYearsAsCustomer.call(this, filtered);
      } else {
        filtered = this.filterByYearsAsCustomer.call(this, people);
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

  filterByYearsAsCustomer(people) {
    let filtered = people.filter(person => {
      const today = moment();
      const joining_date = moment(person.joining_date);
      const duration = moment.duration(today.diff(joining_date)).as('y');
      return Math.round(duration) === parseInt(this.years_as_customer);
    });
    return filtered;
  },

  actions: {
    deletePerson(person) {
      person.destroyRecord();
    },
  },
});
