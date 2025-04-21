<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# 🛠️ Custom Authentication API with NestJS, MongoDB & JWT

This project is a custom-built API developed using **NestJS**, designed to handle core authentication functionality, including **user registration**, **login**, and **user data management**. The backend logic is fully powered by **MongoDB** as the primary database, with seamless integration through **Mongoose** and **Typegoose** for schema modeling and type safety.

## ✅ Key Features

- **User Registration & Login**: Secure endpoints to register new users and authenticate existing ones.
- **Password Hashing**: User passwords are securely hashed using industry-standard algorithms (e.g., bcrypt).
- **JWT Authentication**: Upon successful login or registration, a **JWT token** is generated and returned to the client, enabling secure and stateless session management.
- **MongoDB Integration**: User data is stored and managed via **MongoDB**, using Mongoose and Typegoose for a type-safe and structured approach to data modeling.
- **Modular Structure**: Built with a clean, modular architecture following NestJS best practices, making it scalable and maintainable.
- **Environment Configs**: API secrets, DB credentials, and other environment variables are handled through `.env` files for flexibility and security.

## 📦 Technologies Used

- **NestJS** – Progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB** – NoSQL database for storing user data.
- **Mongoose + Typegoose** – ODM and type-safe modeling for MongoDB.
- **JWT (jsonwebtoken)** – For secure authentication and token management.
- **Bcrypt** – For secure password hashing.

## 🎯 Usage Example

Frontend can send requests to the following endpoints:

- `POST /api/auth/register` – Create a new user
- `POST /api/auth/login` – Log in and receive a JWT token

The JWT token can be stored in local storage or cookies and used in headers.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn dev

# build
$ yarn build
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Dukhota Vladyslav
- Email - vladyslavduhota@gmail.com
<!-- - Website - [https://nestjs.com](https://nestjs.com/) -->