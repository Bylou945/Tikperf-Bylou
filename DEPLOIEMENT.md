# 🚀 TikPerf By Lou v1.5.0 — Polish mobile + filtres mensuels

## Nouveautés

1. **Icônes plus grandes** : "By Lou." occupe maintenant 88% de l'image au lieu de 50% — bien plus visible sur l'écran d'accueil
2. **Bouton "Remonter en haut"** : flèche ↑ flottante en bas à droite qui apparaît quand tu scrolles
3. **Filtres mensuels** : clique sur une année (ex: 2026) → une ligne secondaire apparaît avec les mois disponibles (avr. 26, mai 26, etc.)
4. **Bloc "Décomposition du CA"** corrigé sur mobile : libellés alignés proprement, montants à droite, plus de débordement
5. **Bloc "Réconciliation TikTok"** corrigé pareillement
6. **Graphique** : hauteur optimisée pour mobile (220px au lieu de 280px)

## Mise à jour

⚠ **Cette fois il faut uploader plus de fichiers** car les icônes ont changé.

### Option simple : remplacer 2 fichiers (icônes restent les anciennes)

Si tu veux juste les fixes UI sans changer les icônes de l'écran d'accueil :

1. Sur GitHub → Add file → Upload → glisse `index.html` + `sw.js`
2. Commit : `v1.5.0 - mobile polish + month filters`

### Option complète : tout uploader (icônes + UI)

1. Sur GitHub → Add file → Upload → glisse **TOUS** les fichiers du zip décompressé :
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - **le dossier `icons/` complet** (avec les 7 PNG remplacés)
   - `README.md`
2. Commit : `v1.5.0 - mobile polish + new icons`

Pour iOS : après le redéploiement, **supprime l'ancienne icône TikPerf de ton écran d'accueil** puis réinstalle depuis Safari → Partager → Sur l'écran d'accueil. Sinon l'iPhone garde l'ancienne icône en cache.

## Test après déploiement

Sur ton iPhone :
- Le filtre s'affiche en cascade : Tout / 2026 → cliquer 2026 → Année entière / avr. 26 / mai 26
- Tu scrolles → flèche ↑ rose apparaît en bas à droite → un clic remonte en haut
- Le bloc "Décomposition du CA" affiche les libellés sur 1-2 lignes max avec les montants alignés à droite

---

*v1.5.0 · Mai 2026 — Polish mobile*
