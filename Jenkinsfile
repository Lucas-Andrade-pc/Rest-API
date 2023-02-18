pipeline {
    agent any

    stages{
        stage('Buildando image docker'){
            steps{
                sh 'docker build -t devops/service .'
            }
        }
        stage("upload image"){
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'nexus-user', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
                        sh 'docker login -u $USERNAME -p $PASSWORD ${NEXUS_URL}'
                        sh 'docker tag devops/service:latest ${NEXUS_URL}/devops/service'
                        sh 'docker push ${NEXUS_URL}/devops/service'
                    }
                }
            }
        }
        stage('executando compose'){
            steps{
                sh 'docker-compose up -d'
            }
        }
        stage("sonar"){
            steps{
                script {
                    scannerHome = tool 'sonar-scanner';
                }
                withSonarQubeEnv('sonar-server'){
                    sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=node-server -Dsonar.sources=. -Dsonar.host.url=${env.SONAR_HOST_URL} -Dsonar.login=${env.SONAR_AUTH_TOKEN}"
                }
            }
        }
        stage("quality-gate"){
            steps{
                waitForQualityGate abortPipeline: true
            }
            
        }
        stage("removendo conteiner"){
            steps {
                sh 'docker rm api -f' 
                sh 'docker rmi devops/service -f'
            }
        }
    }
}
