# TikPerf By Lou

Application PWA d'analyse de performance TikTok Shop pour **By Lou** (fashion e-commerce, Vichy).

🌐 **App en ligne** : https://bylou945.github.io/Tikperf-Bylou/

## Fonctionnalités

- **Tableau de bord** avec 8 KPI comptables (CA Brut/Net HT/TTC, Coût marchandises, Marges brute/nette, Fees TikTok)
- **Import CSV/XLSX** des fichiers Income TikTok Shop avec déduplication automatique
- **Catalogue à 2 niveaux** : coût par produit + overrides par variante (couleur/taille)
- **Charges TikTok** détaillées : commission, EPR, affiliation, smart promo, campagnes
- **Réconciliation comptable** : vérification CA Net TTC + Fees = Settlement réel TikTok
- **Synchronisation multi-appareils** via Firebase Firestore (temps réel)
- **Mode PWA** : installable sur iPhone/Android, fonctionne hors-ligne
- **Authentification** par email/mot de passe

## Méthodologie comptable

Conformément aux instructions du comptable :
- **CA TTC** = Net sales + Shipping (frais de port nets) + Adjustments (TikTok/Logistics reimbursements + Bill payments)
- **CA HT** = CA TTC ÷ 1,20
- **Fees** (commission, EPR, affiliation…) ne sont **pas soumis à TVA** : conservés tels quels
- **Cohérence** : CA Net TTC + Fees = Total settlement amount (vérifié automatiquement)

## Stack technique

- HTML/CSS/JavaScript vanilla (zero framework, zero build step)
- Chart.js pour les visualisations
- SheetJS (XLSX) pour le parsing des fichiers
- Firebase Auth + Firestore pour la synchronisation
- Service Worker pour le mode offline
- Hébergement : GitHub Pages

## Identité visuelle

- Logo : "By Lou." letterpress
- Palette : rose poudré (#fbe6df → #d97560) + ink chaud (#2a1f1c)
- Typographie : Cormorant Garamond (titres) + Inter (corps)

## Confidentialité

Chaque utilisateur authentifié accède uniquement à ses propres données (règles Firestore strictes). Les données sont chiffrées en transit (HTTPS) et au repos (Google Cloud).

---

*Version 1.4 · Mai 2026 · Privé*
