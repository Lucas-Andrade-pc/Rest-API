pipeline {
    agent any

    stages{
        stage('Buildando image docker'){
            steps{
                sh 'docker build -t service-api .'
            }
        }
        stage('executando compose'){
            steps{
                sh 'docker-compose up -d --build'
            }
        }
    }
}