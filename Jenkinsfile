pipeline {
    agent {
        docker {
      image 'node:16.15.0-buster-slim'
      args '-p 3000:3000'
        }
    }
    environment {
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
            sh './jenkins/scripts/test.sh'
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
        sh './jenkins/scripts/staging.sh'
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
