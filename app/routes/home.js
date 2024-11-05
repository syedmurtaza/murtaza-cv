import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    model() {
        return {
            careerObjective: `To leverage my extensive expertise as a Senior Solution Architect and Director in Software Engineering to lead software engineering squads, drive technical excellence, and foster a culture of continuous improvement. <br><br> I am Seeking a role where I can contribute to cloud-native and serverless architectures, leading projects that integrate AI/ML and implement Continuous Integration and Continuous Delivery (CI/CD) pipelines.`,

            trainings: [
                {
                    title: 'Interviewing Skills',
                    institution: 'KAF Human Excellence',
                    year: 2013
                },
                {
                    title: 'Project Management',
                    institution: 'Pakistan Institute of Management',
                    year: 2015
                }
            ],

            personalInfo: {
                fatherName: 'Syed Muhammad Shafique Shah Kazmi',
                dateOfBirth: 'November 1, 1981',
                drivingLicense: 'Pakistani'
            },

            spokenLanguages: [
                {
                    name: 'Punjabi',
                    proficiency: 'Native or bilingual proficiency',
                    level: 100 // Percentage for visual representation
                },
                {
                    name: 'Urdu',
                    proficiency: 'Native or bilingual proficiency',
                    level: 100
                },
                {
                    name: 'English',
                    proficiency: 'Full professional proficiency',
                    level: 90
                }
            ],

            awards: [
                {
                    title: 'Services Beyond Excellence Award',
                    company: 'The Resource Group',
                    year: 2011
                },
                {
                    title: 'Employee of the Month',
                    company: 'The Resource Group',
                    year: 2010
                }
            ],

            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/murtazahussain/'
            }
        };
    }
}
