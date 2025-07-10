# HostellerHomies - Backend

Welcome to **HostellerHomies**, your go-to solution for seamless hostel life! This repository powers the backend of the **HostellerHomies** app, handling all the crucial features that make hostel life smooth, including **room management**, **mess services**, **notifications**, and more.

🚀 **Project Link**: [HostellerHomies](https://github.com/CoderRaushan/HostellerHomies)

## 🔥 Features

- **User Management**: Secure registration, login, and user profile management.
- **Room Booking**: Simple room allocation and management for hostellers.
- **Mess Services**: Handle meal plans, menus, and meal bookings effortlessly.
- **Notifications**: Stay updated with the latest hostel events and announcements.
- **Admin Dashboard**: Manage users, rooms, mess services, and more from a single place.
- **Robust API**: A clean, easy-to-use RESTful API for integration.

## 🚀 Technologies Used

- **Node.js**: Backend runtime for building fast and scalable network applications.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing hostel-related data.
- **JWT Authentication**: Secure token-based authentication.
- **Mongoose**: ODM to interact with MongoDB and simplify database operations.

## ⚡️ Quick Start

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/CoderRaushan/HostellerHomies.git
   cd HostellerHomies
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** for environment variables:

   - Add your MongoDB URI and JWT secret:
     ```env
     DB_URI=your_mongo_db_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the server**:
   ```bash
   npm start
   ```

Your server should now be running on `http://localhost:5000`.

## 🌍 API Endpoints

### Auth

- **POST /register**: Register a new user.
- **POST /login**: Login and get a JWT token for access.

### Room Management

- **GET /rooms**: Get a list of available rooms.
- **POST /room/book**: Book a room.

### Mess Services

- **GET /mess/menu**: View the daily mess menu.
- **POST /mess/meal**: Book a meal for the day.

For complete API documentation, refer to our [API Docs](#).

## 🤝 Contributing

We love contributions! Here’s how you can get involved:

1. Fork the repo.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## 🌟 Authors

- **Raushan**: [GitHub Profile](https://github.com/CoderRaushan)
- **Jay**: [GitHub Profile](https://github.com/jayjaisswal)
- **Ankush**: [GitHub Profile](https://github.com/ankushkumar2122)
- **Utkarsh**: [GitHub Profile](https://github.com/u4utkarsh)
