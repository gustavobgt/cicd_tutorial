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
    withAWS(region:'sa-east-1',credentials:'cicd-jenkins-project') {
    s3Delete(bucket: 'cicd-jenkins-project', path:'**/*')
    s3Upload(bucket: 'cicd-jenkins-project', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
    }
}