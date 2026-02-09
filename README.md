# SmartSite AR - Proof of Concept

## Auteur
TIENDREBEOGO Alioune

## Vision

SmartSite AR est un **prototype d'application web** destiné à la **surveillance de structures BTP via détection visuelle**.  
L'objectif de ce POC est de démontrer **ma vision de l'interface utilisateur** et du **flux fonctionnel** : 

1. L'utilisateur se **connecte** avec son email et mot de passe (POC avec authentification mock).
2. Il peut **prendre une photo via webcam** ou **charger une image existante**.
3. Le système simule une **analyse IA** et affiche :
   - Les **rectangles de détection** sur la structure,
   - L'**indice global de qualité structurelle**,
   - Des **recommandations IA** pour chaque zone détectée.
4. L'utilisateur peut consulter un **historique de ses analyses** et supprimer les entrées.
5. Le design est pensé pour le **BTP**, avec couleurs sobres et interface claire.

> Ce POC n’est pas une application finale mobile. Pour une vraie application mobile, j’utiliserais une stack type **React Native** ou **Flutter**, mais ici l'objectif est la **démonstration de conception et UX**.

---

## Stack Technique

- **Frontend** : React + Vite, HTML/CSS, composants modulaires (CameraView, DetectionOverlay, ScoreCard, Loader)
- **Backend** : Node.js + Express
- **Simulation IA** : service Node.js `fakeAiService` générant aléatoirement des détections et scores
- **Stockage local** : LocalStorage pour authentification et historique

---

## Installation et test

1. Cloner le dépôt :

```bash
git clone https://github.com/Alioune930/SmartSite-AR-POC.git

cd SmartSite-AR-POC

2. Installer les dépendances backend :

```bash

cd backend
npm install

3. Installer les dépendances frontend

```bash

cd ../frontend
npm install

4. Lancement

-- Retour à la racine du projet -->
```bash

cd ..

-- Démarrer le backend (API Fake IA) :
```bash

cd backend
node server.js


-- Démarrer le frontend (Ouvrir un deuxième terminal):
```bash

cd frontend
npm run dev

5. Ouvrir l’application dans le navigateur :

http://localhost:5173


6. Test de l'application

--- Connexion : utilisez un email fictif pour vous connecter.

Création de compte : possibilité de créer un compte pour tester la navigation entre Login / Signup.

Prise de photo / Upload : capture via webcam ou téléversement d'une image.

Analyse IA simulée : rectangles, score et recommandations générés aléatoirement.

Historique : chaque analyse est sauvegardée localement et visible dans l'onglet Historique.

--- Choix Techniques

React + Vite pour un rendu rapide et composants réutilisables.

Node.js + Express pour simuler l’API backend et la logique IA.

LocalStorage pour mocker les sessions et l’historique sans base de données.

Design minimaliste et UX orientée BTP : couleurs sobres, instructions claires, overlay pour les détections.

L’objectif n’est pas de livrer une application complète mais de montrer ma vision d’interface et mes choix techniques pour un produit mobile futur.
