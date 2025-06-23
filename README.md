# Green-Assist

[🌐 Live App](https://greenassist-b2376.web.app/login)

Green-Assist is a modern web platform for managing and negotiating business deals between buyers and sellers, built with a React frontend and Node.js backend.

## ✨ Features

- **User Authentication**: Secure registration and login for buyers and sellers.
- **Deal Creation**: Buyers can propose new deals with detailed information.
- **Deal Listing & Tracking**: View all deals, including status and participants.
- **Deal Actions**: Accept, reject, or make counter-offers on pending deals.
- **Role-based Experience**: Separate flows for buyers and sellers.
- **Modern UI**: Clean, responsive, and user-friendly interface.
- **Real-time Status Updates**: Instantly see deal status changes.

## Covered Functionality

- Register and login as buyer or seller
- Create, view, and manage deals
- Accept, reject, or counter-offer on deals
- Track deal status (pending, in progress, completed, cancelled)
- View participants and deal details

---

## 🚀 How to Setup

### Prerequisites

- **Node.js v18+** (install from [nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js)
- **MongoDB** (cloud or local, if not using the provided URI)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/green-assist.git
cd green-assist
```

### 2. Setup the Backend

```bash
cd Backend
npm install
# (Optional) Create a .env file for custom environment variables
npm start
```
- The backend runs by default on **port 5001**.

### 3. Setup the Frontend

Open a new terminal window/tab:

```bash
cd Frontend
npm install
npm run dev
```
- The frontend runs by default on **http://localhost:5173**.

### 4. Access the App

- Visit [http://localhost:5173](http://localhost:5173) in your browser.