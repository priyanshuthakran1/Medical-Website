# Medical Recommendation Website

## Overview
The Medical Recommendation Website is a web application built using React and MongoDB. It helps users find recommended medicines for various diseases and provides usage instructions. The project aims to simplify medical guidance by integrating an API that offers medicine recommendations and instructions based on user inputs.

## Features
- **User Authentication:** Secure login and signup using JWT authentication.
- **Medicine Recommendation:** Users can search for diseases to get recommended medicines.
- **Usage Instructions:** Detailed guidelines on how to use the recommended medicines.
- **API Integration:** Fetch medicine details dynamically from an external API.
- **Responsive UI:** User-friendly interface built with React.

## Tech Stack
- **Frontend:** React, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **API Handling:** Fetch/Axios for API integration

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/priyanshuthakran1/medical-recommendation.git
   cd medical-recommendation
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   API_KEY=your_external_api_key
   ```
4. **Run the backend:**
   ```bash
   npm run server
   ```
5. **Run the frontend:**
   ```bash
   cd client
   npm install
   npm start
   ```

## API Endpoints
| Method | Endpoint          | Description                       |
|--------|------------------|-----------------------------------|
| POST   | /api/auth/register | Register a new user              |
| POST   | /api/auth/login    | User login                       |
| GET    | /api/medicines/:disease | Get medicine recommendations |

## Future Enhancements
- **AI-based Medicine Recommendations**
- **User Health Profile Management**
- **Integration with Online Pharmacies**

## Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your branch and create a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For any queries, feel free to reach out:
- **Name:** Priyanshu
- **Email:** your-email@example.com
- **GitHub:** [yourgithub](https://github.com/yourusername)
- ![Screenshot (803)](https://github.com/user-attachments/assets/715b5fe5-c21b-43f8-9c3e-6cb925ca0959)
- ![Screenshot (804)](https://github.com/user-attachments/assets/7db32cd8-6b10-4d7e-ae9b-2250d98e355e)
- ![Screenshot (805)](https://github.com/user-attachments/assets/612a3f34-af60-4293-9815-49656c6b5aa8)




