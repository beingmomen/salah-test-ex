# Express Project with MongoDB and Mongoose

A robust Express.js backend project with MongoDB integration, featuring user authentication, file handling, and various security implementations.

## Features

- User Authentication with JWT
- File Upload with Multer and Sharp
- Email Service with Nodemailer
- Security Features (XSS Protection, Rate Limiting, Data Sanitization)
- API Rate Limiting
- Database Operations with Mongoose
- MVC Architecture
- Error Handling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version)
- MongoDB (Latest version)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd express
```

2. Install dependencies:
```bash
npm install
```

3. Create a `config.env` file in the root directory with the following variables:
```env
NODE_ENV=development
PORT=1234
DATABASE=your_mongodb_connection_string
DATABASE_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
```

## Running the Project

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run start:prod
```

The server will start on `http://localhost:1234` by default.

## Project Structure

```
express/
├── controllers/     # Route controllers
├── models/         # Mongoose models
├── routes/         # API routes
├── utils/          # Utility functions
├── views/          # View templates
├── public/         # Static files
├── app.js         # Express app configuration
└── server.js      # Server entry point
```

## Technologies Used

- **Express.js**: ^4.18.2 - Web framework
- **MongoDB & Mongoose**: ^8.1.0 - Database and ODM
- **JWT**: ^9.0.2 - Authentication
- **Bcryptjs**: ^2.4.3 - Password hashing
- **Multer**: ^1.4.5-lts.1 - File upload
- **Sharp**: ^0.33.5 - Image processing
- **Nodemailer**: ^6.9.8 - Email service
- **Express Rate Limit**: ^3.5.0 - API rate limiting
- **Helmet**: ^3.16.0 - Security headers
- **XSS-Clean**: ^0.1.1 - XSS protection
- **Express Mongo Sanitize**: ^1.3.2 - NoSQL injection protection

## Security Features

- JWT Authentication
- Password Hashing
- Rate Limiting
- Security Headers with Helmet
- XSS Protection
- NoSQL Injection Prevention
- Data Sanitization

## Development

The project includes several development tools:
- ESLint for code linting
- Prettier for code formatting
- Nodemon for development auto-reload

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Maron X
