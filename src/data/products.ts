import { Product } from '../types/catalog';

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. Électricité bâtiment (Inspiré photo 1)
  // ==========================================
  {
    id: 'cables-electriques-couronnes',
    slug: 'couronnes-cables-electriques-batiment',
    name: 'Couronnes de câbles électriques (1.5mm², 2.5mm², 4mm²)',
    categoryId: 'electricite-batiment',
    shortDescription:
      'Fils et câbles normalisés sous gaine, conducteurs cuivre rigides ou souples pour circuits d’éclairage, prises et forces.',
    description:
      'Indispensables pour toute installation neuve ou rénovation électrique. Disponibles en plusieurs sections (1.5 mm² éclairage, 2.5 mm² prises de courant, 4 mm² et plus) et couleurs normalisées (bleu neutre, rouge/marron phase, vert-jaune terre). Vente en rouleaux ou à la coupe selon vos métrés.',
    highlights: [
      'Conducteurs en cuivre de haute conductivité',
      'Sections normalisées : 1.5mm², 2.5mm², 4mm² et 6mm²',
      'Gaines annelées ICTA et accessoires de tirage également disponibles',
    ],
    image: '/images/categories/materiel-electricite.jpg',
    imageAlt: 'Couronnes de câbles électriques bleu, vert, noir, jaune pour installation bâtiment',
    isVerifiedProduct: false,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'tableau-coffret-disjoncteurs',
    slug: 'coffret-electrique-modulaire-disjoncteurs',
    name: 'Tableaux électriques modulaires & disjoncteurs divisionnaires',
    categoryId: 'electricite-batiment',
    shortDescription:
      'Coffrets de répartition étanches ou encastrés, disjoncteurs différentiels 30mA et disjoncteurs de protection 10A à 32A.',
    description:
      'La sécurité au cœur de votre installation : protégez vos équipements et les occupants contre les surcharges, court-circuits et fuites de courant. Calibres modulaires disponibles pour toutes les puissances usuelles.',
    highlights: [
      'Disjoncteurs divisionnaires 10A, 16A, 20A, 32A',
      'Interrupteurs différentiels 30mA haute sensibilité',
      'Coffrets modulaires de 4 à 24 modules avec rail DIN',
    ],
    image: '/images/categories/materiel-electricite.jpg',
    imageAlt: 'Tableau électrique avec disjoncteurs modulaires et câblage de répartition',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'bornes-wago-boites-derivation',
    slug: 'bornes-connexion-rapide-boites-derivation',
    name: 'Bornes de raccordement rapide & boîtes de dérivation étanches',
    categoryId: 'electricite-batiment',
    shortDescription:
      'Connecteurs rapides à levier type WAGO (2, 3 et 5 entrées) et boîtes de dérivation étanches pour départs de lignes.',
    description:
      'Sécurisez et accélérez vos connexions électriques sans dominos desserrés. Les bornes à levier assurent un contact optimal même sous vibrations, tandis que les boîtes étanches IP55 protègent les raccords des poussières et de l’humidité.',
    highlights: [
      'Connexion sans outil pour fils rigides et souples',
      'Transparence des bornes pour contrôle visuel immédiat',
      'Boîtes de dérivation avec passe-câbles à membrane',
    ],
    image: '/images/categories/materiel-electricite.jpg',
    imageAlt: 'Bornes de connexion rapide transparentes et boîtes de dérivation étanches',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'legrand-plexo-069731l',
    slug: 'prise-etanche-legrand-plexo-069731l',
    name: 'Prise de courant étanche 2P+T Plexo IP55',
    categoryId: 'electricite-batiment',
    brand: 'Legrand',
    reference: '069731L',
    shortDescription:
      'Prise de courant complète en saillie 16A 250V, indice de protection IP55 et résistance aux chocs IK08.',
    description:
      'Appareillage étanche de référence pour les locaux techniques, terrasses, garages et zones humides. Livrée complète pour pose en saillie avec membrane d’étanchéité et bornes à connexion rapide.',
    highlights: [
      'Indice de protection IP55 contre l’eau et la poussière',
      'Résistance mécanique IK08 pour environnements exigeants',
      '16A — 250V, pose en saillie gris complet',
    ],
    image: '/images/products/legrand-plexo-069731l.jpg',
    imageAlt: 'Prise de courant étanche Legrand Plexo 069731L en saillie gris',
    isVerifiedProduct: true,
    featured: true,
    priceLabel: 'Prix sur demande',
  },

  // ==========================================
  // 2. Plomberie & sanitaire (Inspiré photo 2)
  // ==========================================
  {
    id: 'tubes-per-multicouche-gaines',
    slug: 'tubes-per-eau-chaude-froide-couronnes',
    name: 'Tubes PER gainés rouge & bleu (eau chaude / froide)',
    categoryId: 'plomberie-sanitaire',
    shortDescription:
      'Couronnes de tuyauterie PER résistante à la pression et à la corrosion pour la distribution d’eau sanitaire.',
    description:
      'Solution de référence moderne pour l’alimentation en eau sanitaire et chauffage. Ne s’entartre pas, résiste aux eaux agressives et s’installe aisément sous chape ou dans les cloisons grâce à sa gaine protectrice thermo-isolante.',
    highlights: [
      'Tubes gainés bleu (eau froide) et rouge (eau chaude)',
      'Diamètres usuels 12, 16 et 20 mm disponibles',
      'Résistant aux coups de bélier et à la corrosion chimique',
    ],
    image: '/images/categories/materiel-plomberie.jpg',
    imageAlt: 'Couronnes de tubes PER bleu et rouge gainés pour distribution sanitaire',
    isVerifiedProduct: false,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'vannes-arret-raccords-laiton',
    slug: 'vannes-arret-boisseau-raccords-laiton-teflon',
    name: 'Vannes d’arrêt à boisseau, raccords laiton & téflon PTFE',
    categoryId: 'plomberie-sanitaire',
    shortDescription:
      'Vannes 1/4 tour papillon ou manette, té et coudes laiton à visser, rouleaux de ruban téflon d’étanchéité.',
    description:
      'Tout le nécessaire pour le raccordement et l’isolation rapide des réseaux d’eau. Raccords en laiton massif usinés pour une étanchéité parfaite et vannes d’arrêt robustes pour la coupure générale ou sous équipement.',
    highlights: [
      'Vannes 1/4 tour cadenassables ou papillon 15/21, 20/27',
      'Coudes, tés, manchons et mamelons laiton haute résistance',
      'Rubans d’étanchéité téflon PTFE haute densité',
    ],
    image: '/images/categories/materiel-plomberie.jpg',
    imageAlt: 'Vanne d’arrêt à bille, raccords laiton coudés et rouleau de téflon',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'evacuation-pvc-siphons-flexibles',
    slug: 'tuyaux-pvc-evacuation-siphons-flexibles-inox',
    name: 'Tuyaux d’évacuation PVC, siphons & flexibles tressés inox',
    categoryId: 'plomberie-sanitaire',
    shortDescription:
      'Tubes PVC rigides d’évacuation, coudes, culottes, bondes, siphons universels et flexibles d’arrivée d’eau.',
    description:
      'Gamme complète pour l’évacuation des eaux usées et le raccordement des appareils sanitaires (éviers, lavabos, douches, WC). Flexibles inox tressés avec joints intégrés pour un branchement immédiat et fiable.',
    highlights: [
      'PVC évacuation Ø 32, 40, 50, 100 et 110 mm',
      'Siphons réglables avec garde d’eau anti-odeur',
      'Flexibles d’alimentation femelle/mâle tressés inox',
    ],
    image: '/images/categories/materiel-plomberie.jpg',
    imageAlt: 'Tuyaux PVC d’évacuation, siphon de lavabo et flexibles inox',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'grohe-bauedge-23330000',
    slug: 'mitigeur-lavabo-grohe-bauedge-23330000',
    name: 'Mitigeur monocommande lavabo BauEdge (Taille S)',
    categoryId: 'plomberie-sanitaire',
    brand: 'GROHE',
    reference: '23330000',
    shortDescription:
      'Mitigeur de lavabo chromé avec cartouche céramique 28 mm et finition durable brillante.',
    description:
      'Conçu pour allier sobriété architecturale et fiabilité au quotidien, le mitigeur GROHE BauEdge offre une commande fluide, une limitation de température intégrée et une surface chromée facile d’entretien.',
    highlights: [
      'Cartouche céramique GROHE Long-Life 28 mm',
      'Finition chromée brillante résistante à la corrosion',
      'Système d’installation rapide avec flexibles de raccordement',
    ],
    image: '/images/products/grohe-bauedge-23330000.jpg',
    imageAlt: 'Mitigeur de lavabo chromé GROHE BauEdge référence 23330000',
    isVerifiedProduct: true,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'grohe-bauedge-20474001',
    slug: 'mitigeur-mural-grohe-bauedge-20474001',
    name: 'Mitigeur lavabo mural 2 trous BauEdge',
    categoryId: 'plomberie-sanitaire',
    brand: 'GROHE',
    reference: '20474001',
    shortDescription:
      'Robinetterie murale encastrée 2 trous avec rosace métallique et bec élégant pour vasque.',
    description:
      'Idéal pour les salles de bain contemporaines à vasque posée, ce mitigeur mural libère le plan de toilette et apporte une ligne épurée et durable.',
    highlights: [
      'Pose murale 2 trous avec rosace chromée',
      'Aérateur économiseur d’eau intégré',
      'Adapté aux vasques design et plans de toilette modernes',
    ],
    image: '/images/products/grohe-bauedge-20474001.jpg',
    imageAlt: 'Mitigeur mural 2 trous GROHE BauEdge référence 20474001',
    isVerifiedProduct: true,
    featured: false,
    priceLabel: 'Prix sur demande',
  },

  // ==========================================
  // 3. Quincaillerie générale (Inspiré photo 3)
  // ==========================================
  {
    id: 'coffret-visserie-boulonnerie-chevilles',
    slug: 'visserie-boulonnerie-chevilles-fixations',
    name: 'Coffrets de visserie, boulons, écrous, rondelles & chevilles',
    categoryId: 'quincaillerie-generale',
    shortDescription:
      'Assortiment complet de fixations filetées métaux et bois, vis autoforantes, boulons inox/acier et chevilles.',
    description:
      'Pour tous vos assemblages bois, maçonnerie, plaques de plâtre et profilés métalliques. Boîtes compartimentées ou vente en sachets et cartons selon les besoins de votre chantier.',
    highlights: [
      'Vis à bois et vis agglo tous diamètres et longueurs',
      'Boulons métaux tête hexagonale, écrous et rondelles freins',
      'Chevilles nylon universelles et chevilles à frapper',
    ],
    image: '/images/products/visserie-boulonnerie.jpg',
    imageAlt: 'Assortiment de visserie, boulonnerie et écrous métalliques pour quincaillerie',
    isVerifiedProduct: false,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'outillage-main-chantier-pack',
    slug: 'outils-main-marteau-pince-cle-metres',
    name: 'Outillage à main d’atelier : marteaux, pinces, clés & mètres',
    categoryId: 'quincaillerie-generale',
    shortDescription:
      'Marteaux de coffreur arrache-clous, pinces universelles isolées, clés à molette trempées, mètres à ruban et cutters.',
    description:
      'Des outils manuels robustes sélectionnés pour résister aux contraintes quotidiennes du chantier. Manches ergonomiques bimatière antidérapants pour un confort et une sécurité maximale.',
    highlights: [
      'Marteaux arrache-clous avec panne fendue trempée',
      'Clés à molette réglables haute précision',
      'Mètres rubans rétractables avec ruban verni anti-abrasion',
    ],
    image: '/images/categories/materiel-outillage.jpg',
    imageAlt: 'Ensemble outillage à main : marteau arrache-clous, pinces, clé à molette et mètre ruban',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'bosch-gsr-18v-50',
    slug: 'perceuse-visseuse-bosch-gsr-18v-50',
    name: 'Perceuse-visseuse sans fil 18V Brushless GSR 18V-50',
    categoryId: 'quincaillerie-generale',
    brand: 'Bosch Professional',
    reference: '06019H5000',
    shortDescription:
      'Perceuse-visseuse robuste à moteur sans charbon, couple de 50 Nm et mandrin métallique 13 mm.',
    description:
      'Outil professionnel polyvalent conçu pour le perçage et le vissage intensifs dans le bois, le métal et les matériaux de second œuvre. Son moteur Brushless optimise l’autonomie et la longévité.',
    highlights: [
      'Moteur sans charbon (Brushless) haute endurance',
      'Mandrin tout métal 13 mm — couple maximal 50 Nm',
      'Ergonomie compacte pour le travail en hauteur ou en espace réduit',
    ],
    image: '/images/products/bosch-gsr-18v-50.png',
    imageAlt: 'Perceuse-visseuse sans fil Bosch Professional GSR 18V-50',
    isVerifiedProduct: true,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'makita-dga504',
    slug: 'meuleuse-sans-fil-makita-dga504',
    name: 'Meuleuse d’angle sans fil 18V LXT 125 mm DGA504',
    categoryId: 'quincaillerie-generale',
    brand: 'Makita',
    reference: 'DGA504',
    shortDescription:
      'Meuleuse sans fil 18V Brushless avec régulation automatique de vitesse et protection anti-redémarrage.',
    description:
      'Liberté de mouvement totale sur chantier sans rallonge. La DGA504 adapte automatiquement sa vitesse et son couple selon la charge pour une coupe nette et sécurisée.',
    highlights: [
      'Plateforme 18V LXT — disque 125 mm',
      'Technologie ADT : ajustement automatique de la vitesse',
      'Démarrage progressif et frein de sécurité',
    ],
    image: '/images/products/makita-dga504.jpg',
    imageAlt: 'Meuleuse d’angle sans fil Makita 18V LXT DGA504',
    isVerifiedProduct: true,
    featured: false,
    priceLabel: 'Prix sur demande',
  },

  // ==========================================
  // 4. Carrelage & revêtements
  // ==========================================
  {
    id: 'gres-cerame-effet-marbre',
    slug: 'carrelage-gres-cerame-effet-marbre',
    name: 'Carrelage grès cérame & dalles grand format',
    categoryId: 'carrelage-revetements',
    shortDescription:
      'Carreaux sols et murs haute résistance, finitions polies, mates ou texturées pour intérieurs et terrasses.',
    description:
      'Sélection de revêtements céramiques et grès cérame adaptés aux séjours, salles de bain, cuisines et espaces professionnels. Consultez Oumar pour connaître les formats, coloris et lots disponibles en magasin.',
    highlights: [
      'Haute résistance à l’usure et à l’humidité',
      'Formats courants et grands formats selon arrivage',
      'Colles à carrelage et joints assortis disponibles',
    ],
    image: '/images/categories/carrelage-revetements.jpg',
    imageAlt: 'Dalle effet pierre et marbre poli pour sols et murs',
    isVerifiedProduct: false,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'colles-carrelage-croisillons-autonivelants',
    slug: 'mortier-colle-carrelage-joints-croisillons',
    name: 'Mortiers-colles carrelage, joints hydrofuges & croisillons autonivelants',
    categoryId: 'carrelage-revetements',
    shortDescription:
      'Sacs de colle C2/C2S, pâtes à joint imperméables et systèmes de croisillons autonivelants pour une planéité parfaite.',
    description:
      'Le secret d’un carrelage impeccable qui ne bouge pas : des mortiers-colles formulés pour climat tropical, faciles à étaler et garantissant une adhérence maximale sur chape ou ancien carrelage.',
    highlights: [
      'Adhérence renforcée pour carreaux grand format',
      'Joints souples résistants aux taches et à l’eau',
      'Croisillons et cales autonivelantes pour pose nette',
    ],
    image: '/images/categories/carrelage-samples.jpg',
    imageAlt: 'Échantillons de carrelage et accessoires de pose',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },

  // ==========================================
  // 5. Décoration & finition
  // ==========================================
  {
    id: 'finitions-interieures-sanitaire',
    slug: 'ensembles-finition-salle-de-bain-decoration',
    name: 'Finitions intérieures, miroirs & accessoires de bain',
    categoryId: 'decoration-finition',
    shortDescription:
      'Éléments de décoration et d’aménagement pour harmoniser salles de bain, séjours et bureaux.',
    description:
      'Accompagnez le gros œuvre d’une finition soignée : accessoires décoratifs, luminaires, habillages et étagères. Oumar vous oriente vers les meilleures associations selon vos préférences esthétiques et votre budget.',
    highlights: [
      'Harmonie des matières : laiton, chrome, verre et pierre',
      'Solutions adaptées aux projets résidentiels et hôteliers',
      'Accompagnement personnalisé pour vos choix de finition',
    ],
    image: '/images/categories/decoration-finition.jpg',
    imageAlt: 'Salle de bain contemporaine avec finitions soignées',
    isVerifiedProduct: false,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'architecture-interieure-lumiere',
    slug: 'peintures-enduits-moulures-decoration',
    name: 'Peintures bâtiment, enduits de lissage & profilés décoratifs',
    categoryId: 'decoration-finition',
    shortDescription:
      'Peintures intérieures et extérieures, enduits de préparation, corniches et éclairages d’ambiance.',
    description:
      'Apportez la touche finale à vos chantiers avec des produits de finition sélectionnés pour leur pouvoir couvrant, leur séchage rapide et leur durabilité.',
    highlights: [
      'Peintures mates, satinées et laquées',
      'Enduits de rebouchage et de finition extra-lisses',
      'Teintes et conditionnements précisés sur demande',
    ],
    image: '/images/categories/hero-architecture.jpg',
    imageAlt: 'Architecture intérieure lumineuse et finitions murales',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },

  // ==========================================
  // 6. Soudure & métallerie
  // ==========================================
  {
    id: 'makita-ga4530',
    slug: 'meuleuse-angle-makita-ga4530',
    name: 'Meuleuse d’angle filaire 115 mm GA4530',
    categoryId: 'soudure-metallerie',
    brand: 'Makita',
    reference: 'GA4530',
    shortDescription:
      'Meuleuse compacte 720 W pour découpe, ébarbage et préparation des métaux en atelier et chantier.',
    description:
      'Machine maniable à corps fin assurant une excellente prise en main pour les travaux de métallerie, serrurerie et ferronnerie. Protection renforcée contre les poussières abrasives.',
    highlights: [
      'Diamètre de disque 115 mm — puissance 720 W',
      'Construction labyrinthe protégeant le moteur des poussières',
      'Format compact idéal pour les découpes de précision',
    ],
    image: '/images/products/makita-ga4530.png',
    imageAlt: 'Meuleuse d’angle filaire Makita GA4530 115 mm',
    isVerifiedProduct: true,
    featured: true,
    priceLabel: 'Prix sur demande',
  },
  {
    id: 'electrodes-soudure-disques-tronconnage',
    slug: 'baguettes-soudure-electrodes-disques-tronconnage',
    name: 'Électrodes de soudure rutile & disques de tronçonnage métaux / inox',
    categoryId: 'soudure-metallerie',
    shortDescription:
      'Baguettes de soudure à l’arc en étuis, disques fins à tronçonner et meuler, équipements pour métalliers et soudeurs.',
    description:
      'Consommables indispensables pour tous travaux de métallerie, portails, grilles de sécurité et structures métalliques. Amorçage aisé, laitier facile à détacher et cordons de soudure réguliers.',
    highlights: [
      'Électrodes rutiles 2.5 mm et 3.2 mm pour aciers doux',
      'Disques fins 115 mm et 125 mm pour coupe nette sans bavures',
      'Masques, pinces de masse et porte-électrodes disponibles',
    ],
    image: '/images/products/soudure-electrodes.jpg',
    imageAlt: 'Travaux de soudure à l’arc avec étincelles et travail du métal',
    isVerifiedProduct: false,
    featured: false,
    priceLabel: 'Prix sur demande',
  },
];
