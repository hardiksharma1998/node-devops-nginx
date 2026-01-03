pipeline {
    agent any

    environment {
        APP_IMAGE = "node-app:v2"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/hardiksharma1998/node-devops-nginx.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $APP_IMAGE .'
            }
        }

        stage('Deploy App') {
            steps {
                sh '''
                docker rm -f node-app || true
                docker run -d --name node-app $APP_IMAGE
                '''
            }
        }
    }
}
