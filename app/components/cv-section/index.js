import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CvSection extends Component {
    @service router;
    @service('analytics') analytics;

    @tracked downloadProgress = 0;
    @tracked isDownloading = false;
    @tracked showPreview = false;
    @tracked selectedFormat = 'pdf';
    @tracked selectedLanguage = 'en';
    @tracked error = null;

    cvDetails = {
        name: 'Syed Murtaza Hussain Kazmi',
        title: 'Senior Solution Architect / Director of Software Engineering',
        experience: '19+ years',
        photoUrl: '/images/murtaza.png',
        versions: {
            pdf: {
                en: {
                    url: '/files/resume-SyedMurtazaHussainKazmi.pdf',
                    size: '115.1 KB'
                },
                es: {
                    url: '/files/resume-SyedMurtazaHussainKazmi-es.pdf',
                    size: '115.1 KB'
                }
            },
            docx: {
                en: {
                    url: '/files/resume-SyedMurtazaHussainKazmi.docx',
                    size: '26.0 KB'
                },
                es: {
                    url: '/files/resume-SyedMurtazaHussainKazmi-es.docx',
                    size: '26.3 KB'
                }
            }
        }
    };

    get currentVersion() {
        try {
            return this.cvDetails.versions[this.selectedFormat]?.[this.selectedLanguage] || this.cvDetails.versions.pdf.en;
        } catch (error) {
            console.error('Error getting current version:', error);
            return {
                url: '/files/resume-SyedMurtazaHussainKazmi.pdf',
                size: '26.0 KB'
            };
        }
    }

    get canPreview() {
        return this.selectedFormat === 'pdf';
    }

    trackAnalytics(eventName, data) {
        try {
            if (this.analytics?.trackEvent) {
                this.analytics.trackEvent(eventName, data);
            }
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    }

    @action
    async handleDownload() {
        this.error = null;
        this.isDownloading = true;
        this.downloadProgress = 0;

        try {
            const version = this.currentVersion;
            if (!version?.url) {
                throw new Error('Download URL not available');
            }

            // Create an anchor element
            const link = document.createElement('a');
            link.href = version.url;
            link.download = `resume-SyedMurtazaHussainKazmi.${this.selectedFormat}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            this.trackAnalytics('cv_download', {
                format: this.selectedFormat,
                language: this.selectedLanguage
            });

        } catch (error) {
            console.error('Download failed:', error);
            this.error = 'Download failed. Please try again.';
        } finally {
            this.isDownloading = false;
            this.downloadProgress = 0;
        }
    }

    @action
    handlePreview() {
        if (!this.canPreview) {
            this.error = 'Preview is only available for PDF format';
            return;
        }

        this.showPreview = !this.showPreview;

        this.trackAnalytics('cv_preview_opened', {
            format: this.selectedFormat,
            language: this.selectedLanguage
        });
    }

    @action
    setFormat(format) {
        if (this.cvDetails.versions[format]?.[this.selectedLanguage]) {
            this.selectedFormat = format;
            // Hide preview when switching to non-PDF format
            if (!this.canPreview) {
                this.showPreview = false;
            }
            this.error = null;
        } else {
            this.error = `${format.toUpperCase()} format not available in selected language`;
        }
    }

    @action
    setLanguage(language) {
        if (this.cvDetails.versions[this.selectedFormat]?.[language]) {
            this.selectedLanguage = language;
            this.error = null;
        } else {
            this.error = `${language.toUpperCase()} language not available in selected format`;
        }
    }
}