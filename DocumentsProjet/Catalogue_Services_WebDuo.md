# CATALOGUE DE SERVICES

**Offre Complète de Création de Sites Web**  
*Spécialisation : Location Saisonnière*

**Document de référence - Version 1.0**

---

## Table des matières

1. [Introduction](#introduction)
2. [Développement du site web](#1-développement-du-site-web)
3. [Fonctionnalités spécifiques](#2-fonctionnalités-spécifiques)
4. [Hébergement du site](#3-hébergement-du-site)
5. [Maintenance et support](#4-maintenance-et-support)
6. [Services additionnels](#5-services-additionnels)
7. [Services volontairement exclus](#6-services-volontairement-exclus)
8. [Tableau récapitulatif](#7-tableau-récapitulatif-par-pack)
9. [Conclusion](#conclusion)

---

## INTRODUCTION

Ce document constitue le **catalogue complet des services** proposés dans le cadre de la création de sites web pour locations saisonnières.

Il détaille précisément ce qui est inclus dans chaque pack, ce qui est proposé en option, et ce qui est exclu. L'objectif est d'avoir une vision claire et exhaustive pour éviter tout malentendu avec les clients.

### Philosophie de l'offre

✓ **Transparence totale** : Le client sait exactement ce qu'il paie  
✓ **Modularité** : 3 packs de base + options à la carte  
✓ **Évolutivité** : Le client peut upgrader son pack ultérieurement  
✓ **Clarté** : Ce qui n'est pas listé n'est pas inclus

---

## 1. DÉVELOPPEMENT DU SITE WEB

### 1.1 Technologies et langages

#### Stack technique proposée

✓ **HTML5** : Structure sémantique du site (obligatoire)  
✓ **CSS3** : Mise en forme et design responsive (obligatoire)  
✓ **JavaScript Vanilla** : Interactions et fonctionnalités dynamiques (obligatoire)  
✓ **Frameworks optionnels** : React, Vue.js (selon complexité du projet)

#### ⚠ Décision à prendre

**Le client peut-il imposer une technologie spécifique ?**

- **Option A (Recommandé)** : NON - Vous imposez votre stack pour garantir qualité et efficacité
- **Option B** : OUI mais avec supplément si technologie non maîtrisée (+100-200€)
- **Option C** : Au cas par cas selon faisabilité

---

### 1.2 Base de données

#### Par pack

✗ **Pack Essentiel (250€)** : PAS de base de données - Site statique uniquement  
✓ **Pack Confort (400€)** : Base de données simple (SQLite ou fichiers JSON) pour calendrier de disponibilité  
✓ **Pack Premium (600€)** : Base de données complète (MySQL/PostgreSQL) avec gestion utilisateurs, réservations, paiements

#### ⚠ Points d'attention

- Coût d'hébergement augmenté si BDD MySQL/PostgreSQL (voir section Hébergement)
- Sauvegardes automatiques de la BDD à prévoir dans la maintenance
- Migration de données possible si évolution d'un pack à l'autre (+50€)

---

### 1.3 Nombre de pages

#### Par pack

- **Pack Essentiel** : 2-3 pages maximum (Accueil, Le bien, Contact)
- **Pack Confort** : 4-6 pages (+ Calendrier, Tarifs, Activités locales)
- **Pack Premium** : 6-10 pages (+ Espace client, CGV, Mentions légales, Politique confidentialité)

#### Pages supplémentaires

**Tarif** : 30-50€ par page additionnelle selon complexité

---

### 1.4 Design responsive

#### Inclus dans TOUS les packs

✓ **Mobile (smartphones)** : Adapté automatiquement - iOS et Android  
✓ **Tablettes** : Optimisation iPad, Galaxy Tab, etc.  
✓ **Desktop** : Écrans larges (1920px+)  
✓ **Tests** : Vérification sur Chrome, Firefox, Safari, Edge

#### ⚠ Important

**Le responsive design est OBLIGATOIRE et NON NÉGOCIABLE.** Plus de 60% des visiteurs utilisent leur smartphone pour chercher une location.

---

## 2. FONCTIONNALITÉS SPÉCIFIQUES

### 2.1 Connecteurs financiers (paiement en ligne)

#### Par pack

✗ **Pack Essentiel** : NON inclus  
✗ **Pack Confort** : NON inclus  
✓ **Pack Premium** : OUI - Intégration Stripe OU PayPal (1 seul au choix)

#### Solutions de paiement proposées

**1. Stripe (Recommandé)**
- Frais : 1,5% + 0,25€ par transaction (Europe)
- ✓ Avantages : Simple, professionnel, 3D Secure intégré
- ✓ Inclus : Paiement acompte + solde, remboursements

**2. PayPal**
- Frais : 2,9% + 0,35€ par transaction
- ✓ Avantages : Reconnu, rassure les clients
- ✗ Inconvénient : Plus cher que Stripe

#### Option d'ajout

**Ajouter le paiement aux packs Essentiel/Confort** : +150€

---

### 2.2 Connecteurs sites marchands (Booking, Airbnb...)

#### Par pack

✗ **Pack Essentiel** : NON inclus  
✗ **Pack Confort** : NON inclus  
✓ **Pack Premium** : OUI - Synchronisation calendrier avec 1 plateforme au choix

#### Plateformes compatibles

✓ Airbnb (via API iCal)  
✓ Booking.com (via API iCal)  
✓ Abritel/HomeAway (via API iCal)  
✓ Interhome (selon disponibilité API)

#### Fonctionnement

- **Synchronisation automatique** : Les dates réservées sur Airbnb/Booking apparaissent bloquées sur votre site
- **Mise à jour** : Toutes les heures ou quotidienne selon la plateforme
- **Limite** : Synchronisation unidirectionnelle (Booking → Votre site)

#### ⚠ Décision à prendre

**Inclure dans Premium ou proposer en option ?**

- **Recommandation** : Option payante +100€ même pour Premium (complexité technique)
- **Plateforme supplémentaire** : +50€ par plateforme additionnelle

---

### 2.3 Autres fonctionnalités importantes

#### Calendrier de disponibilité

✗ **Pack Essentiel** : NON inclus  
✓ **Pack Confort** : OUI - Calendrier interactif avec gestion manuelle des dates  
✓ **Pack Premium** : OUI - Calendrier + réservation en ligne + synchronisation

#### Formulaire de contact

✓ **TOUS les packs** : Formulaire basique avec envoi email (nom, email, téléphone, message)

#### Galerie photos

✓ **TOUS les packs** : Galerie responsive avec lightbox (zoom sur clic)  
**Nombre de photos** : Illimité (mais optimisation recommandée 15-30 photos max)

#### Google Maps intégration

✓ **TOUS les packs** : Carte interactive avec localisation du bien

#### Multi-langues

✗ **Pack Essentiel** : NON inclus  
✗ **Pack Confort** : NON inclus  
✓ **Pack Premium** : OUI - 2 langues (ex: Français + Anglais)  
**Langue supplémentaire** : +80€ (traduction non incluse)

---

## 3. HÉBERGEMENT DU SITE

### 3.1 Options d'hébergement

#### ⚠ Décision stratégique critique

**Proposez-vous l'hébergement ou le client doit-il gérer lui-même ?**

#### Option A : Vous gérez l'hébergement (Recommandé)

**✓ Avantages :**
- Contrôle total de la qualité
- Service complet clé en main pour le client
- Revenu récurrent (abonnement annuel)
- Pas de problème de compatibilité

**✗ Inconvénients :**
- Coût initial pour vous (serveur mutualisé)
- Responsabilité en cas de panne
- Gestion technique continue

#### Option B : Le client gère son hébergement

**✓ Avantages :**
- Aucun coût récurrent pour vous
- Pas de responsabilité sur la disponibilité

**✗ Inconvénients :**
- Complexe pour des clients non techniques
- Risque de mauvaise configuration
- Perte de revenus récurrents

---

### 3.2 Recommandation de tarification (si vous gérez)

#### Formule 1 : Inclus dans le pack

- **Pack Essentiel** : 1ère année offerte, puis 50€/an
- **Pack Confort** : 1ère année offerte, puis 80€/an
- **Pack Premium** : 1ère année offerte, puis 120€/an (avec BDD)

#### Formule 2 : En supplément dès le départ

- **Nom de domaine** : 15€/an (à refacturer au client)
- **Hébergement site statique** : 60€/an
- **Hébergement avec BDD** : 120€/an

#### Coûts réels pour vous

**Hébergement mutualisé (tous clients sur 1 serveur) :**
- OVH Pro : ~100€/an (peut héberger 10-20 sites)
- O2Switch : ~70€/an (illimité)
- Hostinger Business : ~36€/an

**Calcul de rentabilité :**
- Si vous facturez 60€/an et hébergez 10 sites = 600€/an de revenus
- Coût réel hébergement : ~100€/an
- **Marge nette : 500€/an** 💰

---

### 3.3 Services inclus dans l'hébergement

✓ **Certificat SSL (HTTPS)** : Obligatoire et inclus  
✓ **Sauvegardes quotidiennes** : Automatiques (30 jours de rétention)  
✓ **Bande passante** : Illimitée (sauf abus)  
✓ **Stockage** : 5-10 Go par site (largement suffisant)  
✓ **Emails professionnels** : 3-5 adresses email @nomdusite.fr incluses  
✓ **Disponibilité** : 99,9% garantie par l'hébergeur

---

## 4. MAINTENANCE ET SUPPORT

### 4.1 Maintenance incluse

#### Par pack - Période initiale

**TOUS les packs** : 1 mois de support GRATUIT après livraison

**Ce qui est inclus pendant ce mois :**
- ✓ Correction de bugs
- ✓ Ajustements mineurs de design (couleurs, textes, tailles)
- ✓ Assistance technique (comment modifier une photo, etc.)
- ✓ Mises à jour de contenu (textes, photos) - max 3 interventions

---

### 4.2 Formules de maintenance longue durée

#### ⚠ Décision à prendre

**Proposez-vous des contrats de maintenance au-delà du 1er mois ?**

#### Option 1 : Maintenance à la demande (Recommandé au démarrage)

**Principe** : Pas d'abonnement, facturation à l'intervention

**Tarifs :**
- Intervention simple (< 1h) : 30€
- Intervention complexe : 40€/heure
- Urgence (< 24h) : +50%

#### Option 2 : Contrats de maintenance mensuels/annuels

**Formule Bronze - 15€/mois (180€/an)**
- ✓ Mises à jour de contenu (textes, photos) - 2 interventions/mois
- ✓ Correction de bugs mineurs
- ✓ Support email (réponse < 48h)
- ✓ Sauvegardes hebdomadaires

**Formule Argent - 30€/mois (360€/an)**
- ✓ Tout Bronze +
- ✓ Mises à jour de contenu illimitées
- ✓ Support prioritaire (réponse < 24h)
- ✓ Optimisation SEO trimestrielle
- ✓ Rapport mensuel (visites, performances)

**Formule Or - 50€/mois (600€/an)**
- ✓ Tout Argent +
- ✓ Évolutions fonctionnelles (1h/mois de développement)
- ✓ Support téléphonique
- ✓ Intervention urgente incluse (< 4h)
- ✓ Monitoring 24/7 avec alertes

#### ⚠ Impact sur votre charge de travail

**Estimation temps par client/mois :**
- **Bronze** : 1-2 heures/mois
- **Argent** : 3-4 heures/mois
- **Or** : 5-6 heures/mois

**Rentabilité par formule (tarif horaire implicite) :**
- Bronze : 15€ pour 1-2h = 7,50-15€/h
- Argent : 30€ pour 3-4h = 7,50-10€/h
- Or : 50€ pour 5-6h = 8,30-10€/h

---

### 4.3 Ce qui N'est PAS inclus dans la maintenance

✗ Refonte complète du design  
✗ Ajout de nouvelles fonctionnalités complexes (paiement, calendrier si non inclus initialement)  
✗ Création de nouvelles pages (facturation séparée)  
✗ Problèmes liés à un hébergement tiers (si le client gère lui-même)  
✗ Rédaction de contenu (textes, traductions)

---

## 5. SERVICES ADDITIONNELS

### 5.1 Nom de domaine

- **Achat pour le client** : 15-20€/an (à refacturer)
- **Extensions proposées** : .fr, .com, .net
- **Configuration DNS** : Incluse gratuitement
- **Transfert de domaine existant** : 30€ (manipulation technique)

---

### 5.2 SEO (Référencement naturel)

#### SEO de base - INCLUS dans tous les packs

✓ Balises meta (title, description)  
✓ Balises alt sur les images  
✓ Structure Hn correcte (H1, H2, H3...)  
✓ Sitemap.xml  
✓ Robots.txt

#### SEO avancé - EN OPTION

- **Analyse de mots-clés** : 80€
- **Optimisation contenu** : 100€ (réécriture SEO-friendly)
- **Netlinking local** : 150€ (inscription annuaires, Google My Business)
- **Pack SEO complet** : 300€ (tout compris)

---

### 5.3 Création de contenu

- **Rédaction de textes** : 50€ par page (500 mots)
- **Traduction** : 40€ par page
- **Relecture/correction** : 20€ par page

---

### 5.4 Photographie professionnelle

- **Option 1** : Partenariat avec photographe local (commission 20%)
- **Option 2** : Le client fournit ses photos
- **Retouche photos** : 5€ par photo

---

### 5.5 Logo et identité visuelle

✗ **NON proposé initialement** (sauf si vous développez cette compétence)  
**Alternative** : Orienter vers Fiverr, 99designs ou graphiste partenaire

---

### 5.6 Formation du client

✓ **Formation de base** : INCLUSE - 1h en visio pour montrer comment modifier textes/photos  
**Formation avancée** : 50€/heure (gestion calendrier, réservations...)

---

### 5.7 Analytics et suivi

✓ **Google Analytics** : Installation INCLUSE dans tous les packs  
**Rapport mensuel personnalisé** : 30€/mois (inclus dans formule Argent+)

---

## 6. SERVICES VOLONTAIREMENT EXCLUS

Ces services ne sont **PAS proposés** car trop coûteux, chronophages ou hors périmètre pour le lancement du projet.

### 6.1 Marketing et publicité

✗ Campagnes Google Ads / Facebook Ads  
✗ Gestion des réseaux sociaux  
✗ Email marketing / Newsletter

### 6.2 Fonctionnalités avancées

✗ Application mobile native (iOS/Android)  
✗ Système de facturation automatique  
✗ CRM (gestion de la relation client)  
✗ Intégration avec systèmes comptables (type Sage, Cegid)

### 6.3 Design graphique élaboré

✗ Création de logo professionnel  
✗ Charte graphique complète  
✗ Illustrations sur mesure

### 6.4 Développement complexe

✗ Marketplace (type Airbnb avec plusieurs propriétaires)  
✗ Intelligence artificielle / Machine Learning  
✗ Système de chat en temps réel

### 6.5 Services juridiques

✗ Rédaction de CGV/CGU sur mesure (modèles fournis uniquement)  
✗ Conseil juridique RGPD  
✗ Dépôt de marque

---

## 7. TABLEAU RÉCAPITULATIF PAR PACK

| SERVICE | ESSENTIEL<br>250€ | CONFORT<br>400€ | PREMIUM<br>600€ |
|---------|-------------------|-----------------|-----------------|
| **Nombre de pages** | 2-3 pages | 4-6 pages | 6-10 pages |
| **Design responsive** | ✓ | ✓ | ✓ |
| **Base de données** | ✗ | Simple | Complète |
| **Calendrier disponibilité** | ✗ | ✓ | ✓ |
| **Paiement en ligne** | ✗ | ✗ | ✓ |
| **Multi-langues** | ✗ | ✗ | 2 langues |
| **Support gratuit** | 1 mois | 1 mois | 1 mois |
| **Formulaire contact** | ✓ | ✓ | ✓ |
| **Galerie photos** | ✓ | ✓ | ✓ |
| **Google Maps** | ✓ | ✓ | ✓ |
| **SEO basique** | ✓ | ✓ | ✓ |
| **Analytics** | ✓ | ✓ | ✓ |
| **SSL (HTTPS)** | ✓ | ✓ | ✓ |

**Légende** : ✓ = Inclus | ✗ = Non inclus

---

## CONCLUSION

Ce catalogue de services constitue la **base contractuelle** de votre offre. Il est essentiel de le partager avec chaque client potentiel pour :

1. **Éviter les malentendus** : Le client sait exactement ce qu'il achète
2. **Valoriser votre travail** : Montrer l'étendue des services proposés
3. **Faciliter la vente** : Le client peut choisir facilement son pack
4. **Se protéger juridiquement** : Cadre clair en cas de litige

---

### Décisions à prendre rapidement

**Avant de lancer l'activité, vous devez trancher sur :**

1. **Hébergement** : Gérez-vous ou laissez-vous au client ?
2. **Maintenance** : À la demande ou contrats mensuels ?
3. **Connecteurs marchands** : Inclus dans Premium ou option payante ?
4. **Technologies** : Imposez-vous votre stack ou acceptez-vous les demandes client ?

---

**Avec ce catalogue, vous avez tous les éléments pour démarrer sereinement !** 🎯

---

*Document créé le : 27 décembre 2025*  
*Version : 1.0*
