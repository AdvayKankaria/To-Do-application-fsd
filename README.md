### **Secure Notes App**  

The **Secure Notes App** is a **full-stack web application** that allows users to register, log in, and securely store their personal notes. It is built using **Node.js (Express.js) for the backend** and **React.js (Vite) for the frontend**. The app ensures security by encrypting passwords and using JWT authentication for user sessions.

---

## **Tech Stack**
### **Backend:**
- **Node.js + Express.js** – Handles API requests and authentication.
- **MongoDB + Mongoose** – Stores user data and notes.
- **bcrypt.js** – Encrypts passwords before saving them.
- **jsonwebtoken (JWT)** – Secures user authentication.

### **Frontend:**
- **React.js (Vite)** – Provides a fast and responsive UI.
- **React Router** – Manages client-side routing.
- **Axios** – Handles API requests.

---

## **Features**
### **User Authentication**
✅ **User Registration** – Users can create an account.  
✅ **Secure Login** – Passwords are encrypted, and JWT is used for authentication.  

### **Notes Management**
✅ **Create Notes** – Users can write and save personal notes.  
✅ **View Notes** – Users can see their previously saved notes.  
✅ **Authentication Required** – Only logged-in users can access their notes.  

---

## **How to Run the Project Locally**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/secure-notes-app.git
cd secure-notes-app
```

### **2. Setup the Backend**
```sh
cd backend
npm install
```
- Create a `.env` file in the `backend` folder:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
  ```
- Run the server:
  ```sh
  node server.js
  ```

### **3. Setup the Frontend**
```sh
cd frontend
npm install
npm run dev
```
---

## **Future Improvements**
- ✨ **Edit & Delete Notes**  
- 🔐 **Two-Factor Authentication (2FA)**  
- ☁️ **Cloud Storage Integration**  

---

Let me know if you need modifications! 🚀
