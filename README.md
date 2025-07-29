# 🍱 Restaurant Web App (React + Vite)

Une application web inspirée des systèmes de commande utilisés dans les restaurants au Japon. Elle permet aux clients de choisir leur langue, de naviguer dans un menu interactif, d’ajouter des produits à un panier, et de finaliser leur commande via Stripe ou en espèces (QR code).

---

## 🚀 Fonctionnalités

- 🌍 Sélection de langue : Français 🇫🇷, Néerlandais 🇳🇱, Anglais 🇬🇧
- 🧭 Navigation fluide avec React Router
- 📋 Menu organisé en catégories :
  - Recommandations
  - Entrées
  - Plats
  - Desserts
  - Boissons
- 🛒 Panier avec bouton de commande et appel serveur
- 💳 Paiement en ligne avec Stripe (à intégrer)
- 💵 Paiement en espèces avec génération de QR code (à intégrer)
- 📺 Affichage de publicités (images ou vidéos) sur la page d’accueil (à venir)

---

## 🧑‍💻 Tech Stack

- ⚛️ React 18 + Vite
- 🧭 React Router
- 🌐 Prévue : i18next pour l’internationalisation
- ~~💨 Prévue : Tailwind CSS pour le style~~
- 💰 Prévue : Stripe (API de paiement)
- 📷 Prévue : qrcode.react pour la génération de QR code
- 🎥 Prévue : react-player pour les pubs vidéos

---

## 📦 Installation

```bash
git clone https://github.com/hugovrl29/restaurant-webapp.git
cd restaurant-webapp
npm install
npm run dev
