
---

# 🟩 FRONTEND → `README.md`

```md
# 📌 Lead Management CRM Frontend  
React + Vite (Fresher Hiring Assignment)

A responsive CRM dashboard with login, search, filtering, sorting,
pagination and visual lead statistics — powered by a Node.js backend.

---

## ✨ Features
- Register & Login forms
- JWT saved to localStorage
- Protected dashboard route
- Leads table with
  - Server-side search
  - Stage filters
  - Sorting (newest/oldest)
  - Pagination
- Per-lead detail page
- Dashboard metrics:
  - Total leads
  - Converted leads
  - Leads per stage
- Logout handling

---

## 🧱 Tech Stack
- React + Vite
- Axios
- React Router DOM
- CSS modules / custom styles
- JWT client-side auth

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repository
```bash
git clone https://github.com/<your-username>/lead-crm-frontend.git
cd lead-crm-frontend
2️⃣ Install dependencies
npm install

3️⃣ Configure API URL

Ensure src/api.js contains:

baseURL: "https://ead-crm-backend.onrender.com/api"

4️⃣ Run locally
npm run dev
