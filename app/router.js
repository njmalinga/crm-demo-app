import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people', function() {
    this.route('person', function() {
      this.route('details');
      this.route('edit');
    });
    this.route('new');
  });
  this.route('branches', function() {
    this.route('new');

    this.route('branch', function() {
      this.route('edit');
    });
  });
});

export default Router;
