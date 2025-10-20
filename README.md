# API Test - Netlify Functions POC

A proof of concept demonstrating that APIs can be hosted on Netlify using serverless functions. Originally an Express.js API, now converted to Netlify Functions.

## 🚀 Live Demo

Once deployed to Netlify, your API will be available at:
- `https://your-site.netlify.app/` - Returns "Hello, World!"
- `https://your-site.netlify.app/.netlify/functions/hello` - Direct function access
- `https://your-site.netlify.app/api/hello` - API-style endpoint

## 📦 Installation

```bash
npm install
```

## 🛠️ Local Development

### Option 1: Netlify Dev (Recommended)
```bash
npm run dev
```
This starts the Netlify development server at `http://localhost:8888`

### Option 2: Original Express Server
```bash
npm start
```
This runs the original Express server at `http://localhost:3000`

## 🚀 Deployment

### Deploy to Netlify

1. **Connect to Netlify:**
   - Push to GitHub (already done)
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Deploy automatically

2. **Manual Deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## 📁 Project Structure

```
├── netlify/
│   └── functions/
│       └── hello.js          # Serverless function
├── server.js                 # Original Express server
├── index.html                # Demo page
├── netlify.toml              # Netlify configuration
├── package.json              # Dependencies & scripts
└── README.md                 # Documentation
```

## 🔗 API Endpoints

- `GET /` - Returns "Hello, World!" (redirected to function)
- `GET /.netlify/functions/hello` - Direct function access
- `GET /api/hello` - API-style endpoint (redirected)

## 🎯 POC Goals

This project demonstrates:
- ✅ Converting Express.js APIs to Netlify Functions
- ✅ Serverless architecture benefits
- ✅ Easy deployment and scaling
- ✅ CORS handling for web APIs
- ✅ Multiple endpoint configurations

## 🛠️ Technologies Used

- **Netlify Functions** (AWS Lambda under the hood)
- **Node.js** for serverless functions
- **Express.js** (original implementation)
- **Serverless Architecture**
