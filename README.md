# 🅿️ ParkSpace - Smart Parking Management System

A premium, modern web application for managing parking lot allocations, built with **Next.js**, **React**, and **MongoDB**. Features a beautiful Glassmorphism design with seamless Light and Dark mode support.

## 🚀 Features

- **Live Parking Visualizer**: Interactive grid showing real-time availability of parking spots across multiple lots.
- **Dynamic Booking**: Book spots easily by providing user details and vehicle information.
- **Smart Checkout**: Soft-delete functionality allowing users to checkout vehicles while keeping history intact.
- **History Dashboard**: A dedicated page to view past and present allocations, complete with a permanent delete option for cleanup.
- **Premium Aesthetics**: Carefully crafted Glassmorphism UI that automatically adapts to Light and Dark modes based on user preference.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Frontend**: React, Custom CSS (CSS Variables for Theming)
- **Backend**: Next.js Route Handlers (API)
- **Database**: MongoDB (Mongoose)
- **Theming**: `next-themes`

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd parking-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/parking?retryWrites=true&w=majority
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Open the Application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🗺️ Application Structure

- `/` - Main Dashboard & Live Parking Map
- `/history` - Allocation History and Database Management
- `/api/allocations` - REST API for managing parking data

## 🎨 UI/UX Highlights

- Uses `next-themes` for seamless toggling between light and dark aesthetics.
- Custom CSS variables (`--bg-color`, `--card-bg`) dynamically update the entire application without needing to reload.
- High-contrast visual states for Available (Green) and Occupied (Red) parking spots.

## 📄 License
MIT License
