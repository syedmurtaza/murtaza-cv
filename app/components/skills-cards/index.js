import Component from '@glimmer/component';

export default class SkillCardsComponent extends Component {

    skills = {
        languages: [
            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'React Native', icon: 'devicon-react-original' },
            { name: 'React.js', icon: 'devicon-react-original' },
            { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain' },
            { name: 'PHP', icon: 'devicon-php-plain' },
            { name: 'Python', icon: 'devicon-python-plain' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        framework: [
            { name: 'Nest.js', icon: 'devicon-nestjs-plain' },
            { name: 'Ember.js', icon: 'devicon-ember-original-wordmark' },
            { name: 'Django', icon: 'devicon-django-plain' },
            { name: 'Laravel', icon: 'devicon-laravel-plain' },
            { name: 'CodeIgniter', icon: 'devicon-codeigniter-plain' },
            { name: 'Net Core mvc', icon: 'devicon-dotnetcore-plain' },
            { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        cms: [
            { name: 'Wordpress', icon: 'devicon-wordpress-plain' },
            { name: 'HubSpot', icon: 'fab fa-hubspot' },
            { name: 'Magento', icon: 'devicon-magento-original' },
            { name: 'Shopify', icon: 'fab fa-shopify' },
            { name: 'Joomla', icon: 'fab fa-joomla' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        cloud: [
            {
                name: 'Amazon Web Services (AWS)',
                icon: 'devicon-amazonwebservices-plain-wordmark',
            },
            { name: 'Microsoft Azure', icon: 'devicon-azure-plain' },
            {
                name: 'Google Cloud Platform (GCP)',
                icon: 'devicon-googlecloud-plain',
            },
            {
                name: 'DigitalOcean® Cloud Computing',
                icon: 'devicon-digitalocean-plain',
            },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        databases: {
            relational: [
                { name: 'MySQL', icon: 'devicon-mysql-plain' },
                {
                    name: 'Microsoft SQL Server',
                    icon: 'devicon-microsoftsqlserver-plain',
                },
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
            ].sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
            ),
            nosql: [
                { name: 'Amazon DynamoDB', icon: 'fab fa-aws' },
                { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
                { name: 'Apache Cassandra', icon: 'devicon-apache-plain' },
            ].sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
            ),
        },
        architectures: [
            { name: 'Microservices', icon: 'fas fa-cube' },
            {
                name: 'Service-oriented architecture (SOA)',
                icon: 'fas fa-network-wired',
            },
            { name: 'Model-View-Controller (MVC)', icon: 'fas fa-layer-group' },
            { name: 'Event-driven architecture', icon: 'fas fa-bolt' },
            { name: 'Client-server architecture pattern', icon: 'fas fa-server' },
            { name: 'Layered architecture pattern', icon: 'fas fa-bars' },
            { name: 'Serverless architectures', icon: 'fas fa-cloud' },
            { name: 'Broker architecture pattern', icon: 'fas fa-random' },
            {
                name: 'Model-view-viewmodel (MVVM)',
                icon: 'fas fa-project-diagram',
            },
            { name: 'Model View Template (MVT)', icon: 'fas fa-object-group' },
            { name: 'Software as a Service (SaaS) architecture', icon: 'fas fa-cloud-upload-alt' },
            { name: 'Multi-tenant architecture', icon: 'fas fa-users' },
            { name: 'Single-tenant architecture', icon: 'fas fa-user' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        patterns: [
            { name: 'Test-driven development (TDD)', icon: 'fas fa-vial' },
            { name: 'SOLID principles', icon: 'fas fa-cube' },
            { name: 'Singleton Design Pattern', icon: 'fas fa-dot-circle' },
            { name: 'Factory Method Design Pattern', icon: 'fas fa-industry' },
            { name: 'Repository Design Pattern', icon: 'fas fa-database' },
            { name: 'Strategy Design Pattern', icon: 'fas fa-chess' },
            { name: 'Observer Design Pattern', icon: 'fas fa-eye' },
            { name: 'Builder Design Pattern', icon: 'fas fa-tools' },
            { name: 'Adapter Design Pattern', icon: 'fas fa-plug' },
            { name: 'Database per service pattern', icon: 'fas fa-database' },
            { name: 'Saga pattern', icon: 'fas fa-route' },
            { name: 'Choreography', icon: 'fas fa-random' },
            { name: 'Orchestration', icon: 'fas fa-cogs' },
            { name: 'Event sourcing', icon: 'fas fa-stream' },
            { name: 'API gateway pattern', icon: 'fas fa-door-open' },
            { name: 'Service discovery pattern', icon: 'fas fa-search' },
            { name: 'Circuit breaker pattern', icon: 'fas fa-toggle-off' },
            {
                name: 'Bulkhead pattern or cell-based architecture',
                icon: 'fas fa-th-large',
            },
            { name: 'Retry pattern', icon: 'fas fa-redo' },
            { name: 'Aggregator design pattern', icon: 'fas fa-object-group' },
            { name: 'API composition pattern', icon: 'fas fa-puzzle-piece' },
            { name: 'Strangler', icon: 'fas fa-exchange-alt' },
            { name: 'Decomposition', icon: 'fas fa-sitemap' },
            {
                name: 'Decomposition by business capability',
                icon: 'fas fa-project-diagram',
            },
            {
                name: 'Decomposition by subdomain',
                icon: 'fas fa-diagram-project',
            },
            { name: 'Decomposition by transaction', icon: 'fas fa-layer-group' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        devops: [
            {
                name: 'Continuous integration/delivery (CI/CD)',
                icon: 'fas fa-infinity',
            },
            { name: 'Jenkins', icon: 'devicon-jenkins-plain' },
            { name: 'GitLab CI/CD pipelines', icon: 'devicon-gitlab-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'GitHub', icon: 'devicon-github-original' },
            { name: 'GitLab', icon: 'devicon-gitlab-plain' },
            { name: 'Bitbucket', icon: 'devicon-bitbucket-original' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        management: [
            { name: 'Project management', icon: 'fas fa-project-diagram' },
            { name: 'Product management', icon: 'fas fa-tasks' },
            { name: 'Team Building', icon: 'fas fa-users' },
            { name: 'Stakeholders management', icon: 'fas fa-handshake' },
            { name: 'Budget management', icon: 'fas fa-chart-line' },
            { name: 'Scrum Agile methodology', icon: 'fas fa-sync' },
            { name: 'Kanban', icon: 'fas fa-columns' },
            { name: 'Scrumban', icon: 'fas fa-table' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),

        managementTools: [
            { name: 'Asana', icon: 'fas fa-tasks' },
            { name: 'Trello', icon: 'devicon-trello-plain' },
            { name: 'Jira', icon: 'devicon-jira-plain' },
            { name: 'Clickup', icon: 'fas fa-check-square' },
            { name: 'Mattermost', icon: 'fas fa-comments' },
            { name: 'Slack', icon: 'devicon-slack-plain' },
        ].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        )
    };
}