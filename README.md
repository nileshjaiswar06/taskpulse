<<<<<<< HEAD
# TaskPulse - AI-Powered Interview & Hiring Platform

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)

## 🚀 Overview

TaskPulse revolutionizes the recruitment process with AI-powered interviews and candidate evaluation. Built with a microservices architecture, it offers a scalable, secure, and efficient hiring solution for modern teams.

## ✨ Features

- **AI-Powered Interviews**: Conduct and analyze interviews using advanced AI
- **Automated Scoring**: AI-driven candidate evaluation and ranking
- **Collaborative Hiring**: Team-based candidate review and feedback
- **Real-time Analytics**: Track candidate performance metrics
- **Secure & Scalable**: Enterprise-grade security and scalability

## 🏗 Architecture

```
taskpulse/
├── client/              # Next.js frontend
├── gateway/             # API Gateway
├── services/            # Microservices
│   ├── auth-service/    # Authentication & Authorization
│   ├── user-service/    # User Management
│   ├── meeting-service/ # Video Interviews
│   ├── interview-service/ # Interview Management
│   ├── ats-service/     # Applicant Tracking
│   └── ai-service/      # AI/ML Services
└── infra/               # Infrastructure
    └── k8s/             # Kubernetes configurations
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Docker & Docker Compose
- MongoDB instance
- Kubernetes (for production)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/nileshjaiswar006/taskpulse.git
   cd taskpulse
   ```

2. **Set up environment variables**
   ```bash
   # Copy example environment files
   cp .env.example .env
   # Update with your configuration
   ```

3. **Start services**
   ```bash
   # Install dependencies
   npm install
   
   # Start all services
   npm run dev
   ```

## 🐳 Docker & Kubernetes

### Development
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Production Deployment
```bash
# Apply Kubernetes configurations
kubectl apply -f infra/k8s/configmaps/
kubectl apply -f infra/k8s/secrets/
kubectl apply -f infra/k8s/deployments/
kubectl apply -f infra/k8s/services/
```

## 📚 Documentation

- [API Documentation](docs/API.md) - Complete API reference
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment instructions
- [Development Guide](docs/DEVELOPMENT.md) - Contributing and development setup

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Project Lead**: Nilesh Jaiswar  
**Email**: nilesh.jaiswar006@gmail.com  
**GitHub**: [@nileshjaiswar006](https://github.com/nileshjaiswar006)
=======
# taskpulse
>>>>>>> c982ba1b2194fc4c1470d65b9e2843f8681b09e9
