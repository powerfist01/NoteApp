# A Simple Note-Taking Web App

An easy-to-use and deployable web application built with Flask. This app allows users to take notes, organize them with tags, and securely access them from any device.

---

## 🚀 Features

✅ **User Authentication** - Register and log in securely to access your notes from anywhere.  
✅ **Create & Manage Notes** - Add, edit, and delete notes effortlessly.  
✅ **Search & Filter Notes** - Quickly find notes using keywords or tags.  
✅ **Tagging System** - Categorize notes with custom tags for better organization.  
✅ **Data Security** - Securely store your notes using best practices.  
✅ **Cross-Device Access** - Access your notes from any device with an internet connection.  
✅ **Simple & Lightweight** - Built with Flask, SQLite, Jinja, and Docker for a smooth and efficient experience.  

---

## 🛠️ Technologies Used

- **Flask** - Python-based web framework for handling backend logic.  
- **HTML & CSS** - Frontend structure and styling.  
- **Jinja** - Templating engine for dynamic content.  
- **Caddy Web Server** - Secure and easy-to-configure web server.  
- **SQLite** - Lightweight database for storing notes.  
- **Docker** - Containerization for easy deployment and scalability.  

---

## 📌 Installation & Setup

Follow these steps to set up the app on your local machine:

### 1️⃣ Prerequisites
- Install [Docker](https://www.docker.com/get-started)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/powerfist01/NoteApp.git
cd NoteApp
```

### 3️⃣ Set Up Environment Variables
Duplicate the `.env.example` file and rename it to `.env`:
```sh
cp .env.example .env
```
Fill in the necessary values inside the `.env` file.

### 4️⃣ Run the Application with Docker
```sh
docker compose up --build
```

The app will now be running on `http://localhost:4000` 🚀

---

## 📖 How to Use

1. **Sign Up/Login** - Create an account to access your notes securely.
2. **Create a Note** - Click on "New Note" and start writing.
3. **Organize with Tags** - Add relevant tags to your notes.
4. **Search Notes** - Use keywords or tags to find notes quickly.
5. **Edit/Delete Notes** - Modify or remove notes as needed.

---

## 🔒 Security & Data Protection
- Uses hashed passwords for secure authentication.
- Data stored securely in SQLite.
- HTTPS support via Caddy Web Server.

---


## 📢 Contributing
Want to improve this app? Follow these steps:
1. Fork the repository
2. Create a new branch (`feature-xyz`)
3. Make changes and commit (`git commit -m 'Added XYZ feature'`)
4. Push the branch (`git push origin feature-xyz`)
5. Open a Pull Request 🚀

---

## 📄 License
This project is open-source under the MIT License.

---

## ❤️ Built with Love
Made by [Sujeet](https://singhsujeet0.web.app). Contributions are welcome! 😊
