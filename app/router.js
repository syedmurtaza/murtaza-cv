import EmberRouter from '@ember/routing/router';
import config from 'murtaza-cv/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('about');
  this.route('experience');
  this.route('skills');
  this.route('education');
  this.route('contact');
  this.route('awards');
  this.route('languages');
  this.route('training');
});
