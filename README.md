# 🍳 Culinary Craft — The Art of Cooking, Personalized For You

Culinary Craft is a premium web-based cooking companion designed for culinary enthusiasts. It blends gourmet recipe exploration with modern developer features, offering dynamic ingredient scaling, integrated voice and step-by-step smart timers, bilingual accent translations, and a secure stateless verification system.

👉 **Live Application**: [https://culinary-craft-pink.vercel.app](https://culinary-craft-pink.vercel.app)

---

## ✨ Features

- **🌐 Translucent Glassmorphic Hero**: An aesthetic home portal interface featuring beautiful gourmet layouts designed to adapt dynamically to light and dark modes.
- **⚖️ Dynamic Serving Scaling**: Scale recipe serving sizes instantly. Quantities and measurements recalculate in real-time with decimal precision.
- **⏱️ Smart Step Timers**: Integrated timers inside cooking steps with voice alerts and alerts for step completion.
- **🎙️ Voice & Guided AI**: Hands-free guided cooking mode featuring text-to-speech feedback and interactive AI Chef chat rescue tips.
- **💬 Bilingual Accent Translations**: One-click language switching between English and Hindi with native accent voice synthesis support.
- **📬 Dedicated Feedback Hub**: Directly send messages, reviews, and recipe suggestions to the creator.
- **🔐 Stateless OTP Authentication**:
  - Secure 6-digit one-time passcode (OTP) verification sent to Gmail addresses for guest log-in.
  - Dedicated static validation route for administrative dashboards.
- **🛡️ Admin Database Panel**: Fully managed panel allowing creators to add, update, delete, and restore default recipes directly from/to the cloud storage.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, Vite
- **Styling & Theme**: Vanilla CSS (CSS variables, backdrop blur filters, and transitions)
- **Icons**: Lucide React
- **Backend APIs**: Vercel Serverless Functions (Node.js)
- **Database/Session Storage**: KVdb.io (stateless key-value store for OTP sessions and recipe caches)
- **SMTP Agent**: Nodemailer (Gmail SMTP service)

---

## 🚀 Local Installation

Follow these steps to run Culinary Craft on your local machine:

### 1. Clone & Setup Workspace
```bash
git clone https://github.com/Vasundhara703/culinary-craft.git
cd culinary-craft
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables (Optional)
To test the email feedback dispatch and OTP logins locally, create a `.env` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```
*Note: If `EMAIL_PASS` is missing, the backend will gracefully log feedback messages and generated OTP codes directly to your terminal console for local debugging.*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 5. Build for Production
```bash
npm run build
```

---

## ✍️ Creator

Designed and developed with passion by **Vasundhara Mishra**. 
Connect with the founder:
- **LinkedIn**: [Vasundhara Mishra](https://www.linkedin.com/in/vasundhara-mishra-1914093a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
- **Instagram**: [@vasundhara_mishra_](https://www.instagram.com/vasundhara_mishra_/)
