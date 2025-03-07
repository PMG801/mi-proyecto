pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "usuario/mi-app"
        CONTAINER_NAME = "mi-app"
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/usuario/mi-proyecto.git'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    sh 'docker run --rm $IMAGE_NAME npm test'
                }
            }
        }

        stage('Subir Imagen a Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-cred', url: '']) {
                    sh 'docker tag $IMAGE_NAME $IMAGE_NAME:latest'
                    sh 'docker push $IMAGE_NAME:latest'
                }
            }
        }

        stage('Desplegar en Servidor') {
            steps {
                script {
                    sh 'docker stop $CONTAINER_NAME || true'
                    sh 'docker rm $CONTAINER_NAME || true'
                    sh 'docker run -d --name $CONTAINER_NAME -p 80:3000 $IMAGE_NAME:latest'
                }
            }
        }
    }
}

