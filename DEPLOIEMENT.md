# 🚀 Guide de déploiement TikPerf By Lou v1.4

Suis ces étapes dans l'ordre. Total : environ 10 minutes.

---

## ÉTAPE 1 : Vérifier que Firebase est bien configuré

Tu dois avoir terminé dans Firebase Console :
- [x] Projet créé : `tikperf-bylou`
- [ ] App web créée (SDK obtenu)
- [ ] **Firestore Database activée** (mode production, région eur3)
- [ ] **Règles Firestore publiées** (voir ci-dessous)
- [ ] **Authentication activée** (Email/Password)
- [ ] **Au moins 1 utilisateur ajouté** (ton email + mot de passe)

### Règles Firestore à publier

Firebase Console → Firestore Database → onglet **Rules** → remplacer tout par :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Puis **Publier**.

---

## ÉTAPE 2 : Uploader les fichiers sur GitHub

Tu as 2 options :

### Option A — Interface GitHub (recommandée, sans terminal)

1. Va sur https://github.com/Bylou945/Tikperf-Bylou
2. Clique sur **"Add file"** → **"Upload files"** (ou sur le bouton vert "Code" → onglet "Upload")
3. **Glisse-dépose TOUS les fichiers du zip** :
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `README.md`
   - **le dossier `icons/`** complet (7 fichiers)
4. En bas, dans "Commit changes", message : `Initial deployment v1.4`
5. Clique **"Commit changes"**

⚠ Important : si tu vois "icons/" comme un fichier au lieu d'un dossier, c'est OK, GitHub crée automatiquement le dossier.

### Option B — Git en ligne de commande (si tu connais)

```bash
git clone https://github.com/Bylou945/Tikperf-Bylou.git
cd Tikperf-Bylou
# Copie les fichiers du zip ici
git add .
git commit -m "Initial deployment v1.4"
git push origin main
```

---

## ÉTAPE 3 : Activer GitHub Pages

1. Va sur https://github.com/Bylou945/Tikperf-Bylou/settings/pages
2. Section **"Build and deployment"** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` / `/ (root)`
3. Clique **Save**
4. GitHub te dit : "Your site is live at https://bylou945.github.io/Tikperf-Bylou/"
5. **Attends 1-2 minutes** que le déploiement se termine

---

## ÉTAPE 4 : Autoriser le domaine dans Firebase Auth

⚠ **Indispensable**, sinon le login ne fonctionnera pas.

1. Firebase Console → **Authentication** → onglet **"Settings"**
2. Section **"Authorized domains"**
3. Clique **"Add domain"**
4. Saisis exactement : `bylou945.github.io`
5. **Add**

`localhost` est déjà autorisé par défaut (pour les tests locaux).

---

## ÉTAPE 5 : Premier test 🎉

1. Ouvre **https://bylou945.github.io/Tikperf-Bylou/** dans Chrome ou Safari
2. Tu vois l'écran de login rose poudré By Lou
3. Saisis ton email + mot de passe (créés à l'Étape D dans Firebase)
4. → Tu arrives sur le dashboard vide
5. Va dans **Import données** → uploade ton fichier `income_TikTok.xlsx`
6. Va dans **Catalogue & coûts** → **Importer Excel** → uploade `Prix_d_achat_By_Lou.xlsx`
7. Retourne au Tableau de bord → tous les KPI calculés ✓

---

## ÉTAPE 6 : Installer sur ton téléphone (PWA)

### iPhone (Safari)
1. Ouvre https://bylou945.github.io/Tikperf-Bylou/ dans **Safari** (pas Chrome)
2. Icône **Partager** (en bas, le carré avec la flèche)
3. Faire défiler → **"Sur l'écran d'accueil"**
4. Le nom est déjà rempli "TikPerf" → **Ajouter**
5. L'icône By Lou apparaît sur ton écran d'accueil 🌸

### Android (Chrome)
1. Ouvre l'URL dans **Chrome**
2. Menu (3 points) → **"Installer l'application"** ou **"Ajouter à l'écran d'accueil"**
3. Confirmer

L'app s'ouvre en plein écran, sans la barre du navigateur, comme une vraie app.

---

## ÉTAPE 7 : Tester la synchronisation

1. Connecte-toi sur ton ordinateur → ajoute des données
2. Ouvre l'app sur ton téléphone (déjà connecté) → les données apparaissent automatiquement ✓
3. Modifie un coût sur ton téléphone → ton ordinateur se met à jour en temps réel ✓

---

## Mises à jour futures (v1.5, v1.6, etc.)

Quand je te livre une nouvelle version :

1. Tu remplaces uniquement `index.html` (et `sw.js` si je l'ai modifié) sur GitHub
2. Tu attends 1-2 minutes que GitHub Pages déploie
3. Tu rafraîchis l'app — le service worker détecte la nouvelle version et la charge
4. **Tes données restent intactes** (elles sont dans Firestore, pas dans le code)

---

## En cas de souci

- **"Permission denied" au login** → règles Firestore mal publiées ou domaine pas autorisé (Étape 4)
- **L'app ne charge pas** → attends 2-3 min après le déploiement Pages, vide le cache (Cmd+Shift+R / Ctrl+Shift+R)
- **L'icône reste blanche sur iPhone** → désinstalle et réinstalle après quelques minutes

Ping-moi pour toute question 🌸








































































































































































































