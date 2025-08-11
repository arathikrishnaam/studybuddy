# 📚 Study Buddy Finder

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-blue)](https://postgresql.org/)
[![React](https://img.shields.io/badge/frontend-React-61DAFB)](https://reactjs.org/)

> A web application that connects students with study partners in their local area. Find study buddies, create study groups, and
> enhance the learning experience through collaborative studying.

## Video

[![Study Buddy Finder Demo](https://img.youtube.com/vi/28U8vVEQUP8/0.jpg)](https://youtu.be/28U8vVEQUP8)

*Click the image above to watch a complete walkthrough of the Study Buddy Finder application*

**Watch the full demo**: https://youtu.be/28U8vVEQUP8

## Screenshots

### 🏠 Home Page
<img src="screenshots/home-page.png" alt="Study Buddy Finder Home Page" width="800"/>

### 🔍 Browse Profiles  
<img src="screenshots/browse-page.png" alt="Browse Study Profiles" width="800"/>

### 👤 Profile Cards - User Profiles
<img src="screenshots/profile-card.png" alt="Study Profile Card" width="400"/>

## Features

### Authentication System
- **Secure User Registration**: Create accounts with email verification
- **JWT-based Login**: Token-based authentication with 7-day expiry
- **Password Security**: Bcrypt encryption with salt rounds
- **Session Management**: Automatic token refresh and logout

### Profile Management
- **Study Profiles**: Create detailed academic profiles
- **Subject Specification**: Add your areas of study and expertise
- **Skill Levels**: Indicate your proficiency (Beginner to Expert)
- **Location Sharing**: Connect with nearby students
- **Personal Descriptions**: Share your study goals and preferences

### Advanced Search & Discovery
- **Real-time Filtering**: Search by subject and location
- **Smart Matching**: Find compatible study partners
- **Interactive Cards**: Beautiful, responsive profile displays
- **Contact Integration**: Easy communication with study buddies

### Modern UI/UX
- **Pastel Design System**: Soothing, study-friendly color palette
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Smooth Animations**: Engaging micro-interactions
- **Glassmorphism Effects**: Modern visual design
- **Loading States**: Intuitive feedback for all operations

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**
- **PostgreSQL** (v12.0 or higher)
- **Git** for version control

## Database Schema

### Users Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY |
| name | VARCHAR(255) | NOT NULL |
| email | VARCHAR(255) | UNIQUE, NOT NULL |
| password | VARCHAR(255) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

### Profiles Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY |
| user_id | INTEGER | FOREIGN KEY → users(id) |
| subject | VARCHAR(100) | NOT NULL |
| level | VARCHAR(50) | |
| location | VARCHAR(100) | |
| description | TEXT | |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |
