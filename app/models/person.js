import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr(),
  contact_number: DS.attr(),
  alternative_contact_number: DS.attr(),
  address: DS.attr(),
  preferred_method_of_contact: DS.attr(),
  profile_image: DS.attr(),
  joining_date: DS.attr('date'),
  branch: DS.belongsTo(),
  type: DS.attr(),
  user: DS.belongsTo(),
});
