import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq } from 'ember-truth-helpers';


export default class PortfolioShowcaseComponent extends Component {
    @tracked activeProject = null;

    portfolio = [
        {
            id: 1,
            title: 'Mosh JD',
            description: 'Maintain Hundreds of Accurate Job Descriptions Without Thousands of Hours of Work',
            tags: ['Vue.js', 'Redux', 'MySQL'],
            imageUrl: '/images/moshjd.webp',
            demoUrl: 'https://app-qa.moshjd.com/'
        },
        {
            id: 2,
            title: 'Always In the Story',
            description: 'Create a personalized Always in the Story™ book for baby showers, holidays Anniversaries, birthdays, sympathy or when a family member moves away.',
            tags: ['Vue.js', 'Redux', 'Laravel'],
            imageUrl: '/images/aiph.webp',
            demoUrl: 'https://alwaysinthestory.com/'

        },
        {
            id: 3,
            title: 'Book Corner Showroom',
            description: 'Buy Books. Do Good. | Pakistan\'s Biggest Bookstore',
            tags: ['Ember.js', 'Laravel', 'Restful APIs'],
            imageUrl: '/images/bookcorner-logo.png',
            demoUrl: 'https://bookcorner.shop/'

        }
    ];

    @action
    setActiveProject(projectId) {
        this.activeProject = projectId;
    }

    @action
    clearActiveProject() {
        this.activeProject = null;
    }
}