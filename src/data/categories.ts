import { Category } from '../types/catalog';

export const CATEGORIES: Category[] = [
  {
    id: 'electricite-batiment',
    name: 'Électricité bâtiment',
    shortName: 'Électricité',
    description:
      'Câblage en couronnes (1.5, 2.5, 4 mm²), tableaux modulaires, disjoncteurs, gaines ICTA, prises étanches et bornes de raccordement rapide.',
    image: '/images/categories/materiel-electricite.jpg',
    imageAlt: 'Matériel d’installation électrique : câbles, disjoncteurs, gaines et appareillage',
  },
  {
    id: 'plomberie-sanitaire',
    name: 'Plomberie & sanitaire',
    shortName: 'Plomberie',
    description:
      'Tubes PER & multicouche, évacuation PVC, vannes d’arrêt 1/4 tour, raccords laiton, flexibles inox, siphons et robinetterie de marque.',
    image: '/images/categories/materiel-plomberie.jpg',
    imageAlt: 'Matériel de plomberie : tubes PER, raccords laiton, tuyaux PVC, vanne et mitigeur',
  },
  {
    id: 'quincaillerie-generale',
    name: 'Quincaillerie générale',
    shortName: 'Quincaillerie',
    description:
      'Visserie, boulonnerie, chevilles, outillage à main (marteaux, pinces, clés, mètres) et outillage électroportatif de référence.',
    image: '/images/categories/materiel-outillage.jpg',
    imageAlt: 'Outillage et quincaillerie : marteau, pinces, clé à molette, mètre et visserie',
  },
  {
    id: 'carrelage-revetements',
    name: 'Carrelage & revêtements',
    shortName: 'Carrelage',
    description:
      'Carreaux céramiques, grès cérame effet marbre ou pierre naturelle, colles haute adhérence et joints hydrofuges pour sols et murs.',
    image: '/images/categories/carrelage-revetements.jpg',
    imageAlt: 'Surface en pierre naturelle et revêtement céramique',
  },
  {
    id: 'decoration-finition',
    name: 'Décoration & finition',
    shortName: 'Décoration',
    description:
      'Matériaux de finition, aménagements de salle de bain, profilés, peintures et luminaires pour valoriser vos espaces.',
    image: '/images/categories/decoration-finition.jpg',
    imageAlt: 'Intérieur architectural soigné avec finitions marbre et laiton',
  },
  {
    id: 'soudure-metallerie',
    name: 'Soudure & métallerie',
    shortName: 'Soudure',
    description:
      'Postes à souder, meuleuses d’angle, électrodes rutile, disques de tronçonnage et accessoires pour artisans métalliers.',
    image: '/images/categories/soudure-metallerie.jpg',
    imageAlt: 'Travaux de soudure et métallerie professionnelle',
  },
];
