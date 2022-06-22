pipeline {
    agent {
        docker {
      image 'node:16.15.0-buster-slim'
      args '-p 3000:3000'
        }
    }
    environment {
        HOME = '.'
        CI = 'true'
        FIREBASE_DEPLOY_TOKEN = credentials('firebase-deploy-token')
    }
    stages {
    stage('Build') {
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

    stage('Staging') {
      steps {
        sh 'npm install -g firebase-tools'
        sh 'firebase deploy -P staging --token "$FIREBASE_DEPLOY_TOKEN"'
        input message: 'Finished using the Staging version of the Web App ? (Click "Proceed" to continue)'
      }
    }

    stage('Production') {
      steps {
        withAWS(region:'sa-east-1', credentials:'cicd-jenkins-project') {
          s3Delete(bucket: 'cicd-jenkins-project', path:'**/*')
          s3Upload(bucket: 'cicd-jenkins-project', workingDir:'build', includePathPattern:'**/*')
        }
      }
    }
    }
}
