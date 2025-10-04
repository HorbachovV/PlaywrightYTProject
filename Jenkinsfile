pipeline {
    agent any

    tools {
        nodejs "NodeJS" // same as in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --grep PlaywrightWithJenkins'
            }
        }
    }

    post {
        always {
            echo "Archiving Playwright report..."
            archiveArtifacts artifacts: '**/playwright-report/**', fingerprint: true
        }
        failure {
            echo "❌ Tests failed!"
        }
        success {
            echo "✅ Tests passed successfully!"
        }
    }
}
