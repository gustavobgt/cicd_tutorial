pipeline {
    agent {
        docker {
            image 'node:16.15.0-buster-slim' 
            args '-p 3000:3000' 
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }

stage('Production') {
  steps {
    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'cicd-jenkins-project', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
    s3Delete(bucket: 'sa-east-1', path:'**/*')
    s3Upload(bucket: 'sa-east-1', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
    }
}