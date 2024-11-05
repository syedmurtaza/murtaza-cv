import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProfilePanelComponent extends Component {
    @tracked isExpanded = false;

    @action
    togglePanel() {
        // Toggle the isExpanded state
        this.isExpanded = !this.isExpanded;
    }
}