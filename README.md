# 🌳 Yeşil Kilometreler — Green Kilometers

**Carbon Footprint Calculator & Virtual Forest | Karbon Ayak İzi Hesaplama ve Sanal Orman**

A student-led sustainability project by **Tech4Peace (#8153)** and **Yeşil Okul Projesi** at **Açı Okulları**, Istanbul — part of **Project Pangea**.

---

## 🚗 What It Does

1. **Calculate** — Select your vehicle (brand, model, fuel type, year) and enter your annual kilometers to see how many trees are needed to offset your carbon footprint.
2. **Visualize** — Watch the required trees appear on screen with playful emoji animations.
3. **Donate** — One-click link to **Açı Ormanı** (Açı Forest) donation campaign via Fonzip/ÇEKÜL.
4. **Explore** — Walk through an interactive **3D Virtual Forest** (Three.js) with WASD + mouse controls.

## 🌍 Pages

| Page | Description |
|------|-------------|
| `index.html` | Carbon footprint calculator + virtual forest modal |
| `forest.html` | Immersive 3D virtual forest (Three.js) |
| `about-team.html` | About Tech4Peace (#8153) & FIRST Robotics |
| `about-green-school.html` | About Yeşil Okul Projesi |
| `project.html` | Project background, methodology & future goals |

## 🌐 Bilingual (TR/EN)

Full Turkish & English support via client-side i18n. Toggle with the **TR / EN** buttons in the navbar.

## 🗂️ Project Structure

```
Eco-Drive_V2/
├── index.html                 # Main calculator page
├── forest.html                # 3D virtual forest
├── about-team.html            # Tech4Peace page
├── about-green-school.html    # Green School page
├── project.html               # Project info page
├── assets/
│   ├── css/custom.css         # All styles (Inter + Poppins + Space Grotesk)
│   ├── js/
│   │   ├── calculator.js      # Vehicle data loader & calculator logic
│   │   ├── i18n.js            # TR/EN translations
│   │   ├── animations.js      # Confetti, counters, scroll effects
│   │   └── ui.js              # Navbar, mobile menu, input effects
│   └── img/                   # Logos
└── data/
    └── vehicles.json          # 380+ vehicle emission records
```

## 🔬 How It Works

```
CO₂ per year  =  emission_per_km (kg) × annual_km
Trees needed  =  CO₂ per year ÷ 21 kg (avg CO₂ absorbed per tree per year)
```

Vehicle emission data covers **380+ models** across 40+ brands sold in Turkey, including petrol, diesel, hybrid, LPG, and electric variants.

## 🚀 Deployment

This is a **static site** — no build step required. Deploy on **GitHub Pages**, Netlify, Vercel, or any static host:

1. Push to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site is live! 🎉

## 📸 Tech Stack

- **HTML5** + **Tailwind CSS** + **Vanilla CSS**
- **Vanilla JavaScript** (no frameworks)
- **Three.js** r128 for 3D forest
- **Google Fonts**: Inter, Poppins, Space Grotesk

## 👥 Credits

- **Tech4Peace (#8153)** — Açı Okulları FTC/FRC Robotics Team
- **Yeşil Okul Projesi** — Student environmental awareness club
- **Zugo Bilgi Sistemleri A.Ş.** — Technical support

## 📬 Contact

- Instagram: [@acihsrobotics](https://www.instagram.com/acihsrobotics/)
- Website: [hsrobotics.acischools.k12.tr](https://hsrobotics.acischools.k12.tr)
- Green School: [@aci_yesilokul](https://www.instagram.com/aci_yesilokul/)

---

© 2024 Yeşil Kilometreler | Project Pangea
