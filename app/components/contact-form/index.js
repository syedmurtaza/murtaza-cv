// index.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import fetch from 'fetch';
import ENV from 'murtaza-cv/config/environment';


export default class ContactFormComponent extends Component {
    @service notifications;
    @tracked formData = { name: '', email: '', message: '' };
    @tracked errors = { name: '', email: '', message: '' };
    @tracked isSubmitting = false;
    @tracked submitSuccess = false;
    @tracked csrfToken = ''; // To store the CSRF token

    constructor() {
        super(...arguments);
        this.fetchCsrfToken();
    }


    get apiUrl() {
        return ENV.SERVER_API_URL;
    }

    async fetchCsrfToken() {

        try {
            const response = await fetch(this.apiUrl + `/get-csrf-token.php`, {
                method: 'GET',
                credentials: true
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.csrf_token) {
                throw new Error('CSRF token not found in response');
            }

            this.csrfToken = data.csrf_token;

        } catch (error) {
            console.error("Failed to fetch CSRF token:", error);
            if (this.notifications) this.notifications.error('Failed to fetch CSRF token. Please try again.');
        }
    }


    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validateForm() {
        let isValid = true;
        this.errors = { name: '', email: '', message: '' };

        if (!this.formData.name.trim()) {
            this.errors.name = 'Name is required';
            isValid = false;
        }
        if (!this.formData.email.trim()) {
            this.errors.email = 'Email is required';
            isValid = false;
        } else if (!this.validateEmail(this.formData.email)) {
            this.errors.email = 'Please enter a valid email';
            isValid = false;
        }
        if (!this.formData.message.trim()) {
            this.errors.message = 'Message is required';
            isValid = false;
        }

        return isValid;
    }

    @action
    updateField(field, event) {
        this.formData[field] = event.target.value;
        this.errors[field] = '';
    }

    @action
    async handleSubmit(event) {
        event.preventDefault();
        if (!this.validateForm()) return;

        this.isSubmitting = true;

        try {
            const response = await fetch(this.apiUrl + '/api/sendemail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this.csrfToken // Add CSRF token here
                },
                credentials: true,
                body: JSON.stringify(this.formData)
            });

            if (response.status === 429) {
                throw new Error('Rate limit exceeded. Please wait a moment and try again.');
            }

            if (!response.ok) throw new Error('Failed to send message');

            this.submitSuccess = true;
            this.formData = { name: '', email: '', message: '' };

            if (this.notifications) this.notifications.success('Message sent successfully!');
        } catch (error) {
            if (this.notifications) this.notifications.error('Failed to send message. Please try again. ' + error.message);
        } finally {
            this.isSubmitting = false;
        }
    }
}
