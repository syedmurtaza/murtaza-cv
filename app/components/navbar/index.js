import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';

export default class NavBarComponent extends Component {
  @tracked isMenuOpen = false;

  @action
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @action
  scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
