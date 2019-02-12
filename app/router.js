import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people', function() {
    this.route('person', function() {
      this.route('details', {path: ':person_id/details'});
      this.route('edit', {path: ':person_id/edit'});
    });
    this.route('new');
  });
  this.route('branches', function() {
    this.route('new');
    this.route('branch', {path: '/:branch_id'}, function() {
      this.route('edit');
    });
  });
});

export default Router;
