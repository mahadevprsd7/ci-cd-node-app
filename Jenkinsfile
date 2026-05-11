pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/mahadevprsd7/ci-cd-node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Application') {
            steps {
                bat 'node app.js'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'node test'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t ci-cd-node-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3001:3001 --name ci-cd-container ci-cd-node-app'
            }
        }
    }
}