# AlpiCode - Site Vitrine Premium

Site vitrine moderne et premium pour AlpiCode, agence de création de sites web avec identité suisse.

## Caractéristiques

- **Design Premium** : Style minimaliste avec beaucoup d'espace blanc et animations fluides
- **Identité Suisse** : Inspiré par les montagnes, la précision et la fiabilité helvétique
- **Palette de Couleurs** :
  - Blanc (fond principal)
  - Gris anthracite foncé (textes)
  - Bleu glace (sections secondaires)
  - Rouge suisse profond (CTA et accents)

## Sections du Site

1. **Hero** - Image pleine largeur de montagnes suisses avec slogan et CTA
2. **Tarifs** - 3 cartes de tarification (Starter, Business, Premium)
3. **Partenaires** - Carousel infini automatique avec logos
4. **Réalisations** - Grille avec filtres par catégorie
5. **Qui sommes-nous** - Présentation de l'équipe
6. **Avis clients** - Carousel automatique de témoignages
7. **Contact** - Formulaire avec feedback visuel

## Technologies

- **Next.js 14+** avec App Router
- **Tailwind CSS** pour le styling
- **Supabase** pour la base de données
- **shadcn/ui** pour les composants UI
- **TypeScript** pour la sécurité de type

## Installation

1. Cloner le dépôt
2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Configurer les variables d'environnement :

   Créer un fichier `.env.local` à la racine du projet avec vos identifiants Supabase :
   ```
   NEXT_PUBLIC_SUPABASE_URL=votre-projet-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-anon-key
   ```

4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

5. Ouvrir [http://localhost:3000](http://localhost:3000)

## Base de Données Supabase

Le projet utilise Supabase avec les tables suivantes :

- **projects** - Réalisations / Portfolio
- **testimonials** - Témoignages clients
- **partners** - Logos des partenaires
- **contact_messages** - Messages de contact

Les migrations sont déjà appliquées avec des données d'exemple.

## Build pour Production

```bash
npm run build
```

## Personnalisation

### Images
Les images utilisent Pexels. Pour utiliser vos propres images :
1. Remplacez les URLs dans les composants
2. Ou mettez à jour les données dans Supabase

### Contenu
Le contenu peut être modifié directement dans Supabase :
- Projets, témoignages et partenaires sont gérés via la base de données
- Les tarifs et la section "À propos" sont dans les composants

### Couleurs
Les couleurs sont définies dans :
- `tailwind.config.ts` pour les couleurs Tailwind
- `app/globals.css` pour les variables CSS

## Structure du Projet

```
├── app/
│   ├── layout.tsx       # Layout principal avec metadata SEO
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/
│   ├── header.tsx       # En-tête avec navigation
│   ├── footer.tsx       # Pied de page
│   ├── hero-section.tsx
│   ├── pricing-section.tsx
│   ├── partners-section.tsx
│   ├── projects-section.tsx
│   ├── about-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   ├── section-container.tsx
│   └── section-header.tsx
├── lib/
│   ├── supabase.ts      # Configuration Supabase
│   └── utils.ts         # Utilitaires
└── components/ui/       # Composants shadcn/ui
```

## Performance

Le site est optimisé pour :
- Chargement rapide avec Next.js
- Images optimisées
- Code splitting automatique
- SEO optimisé avec metadata

## Support

Pour toute question ou assistance, contactez l'équipe de développement.

## Licence

© 2024 AlpiCode. Tous droits réservés.
