export const BUSINESS_INFO = {
  name: 'OUMAR BÂTIMENT',
  subtitle: 'Matériaux & Solutions',
  tagline: 'Tout pour construire. Tout pour embellir.',
  owner: 'M. Oumar',
  country: 'Cameroun',
  phoneDisplay: '+237 770 368 05',
  phoneHref: 'tel:+23777036805',
  whatsappBaseUrl: 'https://wa.me/23777036805',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppUrl(): string {
  const message = [
    'Bonjour M. Oumar,',
    '',
    'Je vous contacte depuis le site de votre entreprise *OUMAR BÂTIMENT*.',
    '',
    '🏗️ J’ai un projet de travaux / chantier au Cameroun et je souhaite échanger avec vous pour :',
    '• Obtenir un devis ou des tarifs',
    '• Vérifier la disponibilité de matériaux et équipements',
    '',
    'Merci d’avance pour votre réactivité et vos conseils !',
  ].join('\n');

  return buildWhatsAppUrl(message);
}

export interface ProductWhatsAppOptions {
  brand?: string;
  reference?: string;
  categoryName?: string;
}

export function getProductWhatsAppUrl(
  productName: string,
  options?: ProductWhatsAppOptions
): string {
  const lines: string[] = [
    'Bonjour M. Oumar,',
    '',
    'Je visite le site *OUMAR BÂTIMENT* et je souhaite obtenir des informations sur cet article :',
    '',
    `📦 *Produit :* ${productName}`,
  ];

  if (options?.brand) {
    lines.push(`🏷️ *Marque :* ${options.brand}`);
  }
  if (options?.reference) {
    lines.push(`🔢 *Référence :* ${options.reference}`);
  }
  if (options?.categoryName) {
    lines.push(`📁 *Catégorie :* ${options.categoryName}`);
  }

  lines.push(
    '',
    'Pourriez-vous me communiquer :',
    '• Son prix actuel',
    '• Sa disponibilité en magasin',
    '',
    'Merci d’avance pour votre retour !'
  );

  return buildWhatsAppUrl(lines.join('\n'));
}

export function getCategoryWhatsAppUrl(categoryName: string): string {
  const message = [
    'Bonjour M. Oumar,',
    '',
    'Je consulte le catalogue *OUMAR BÂTIMENT* et je m’intéresse aux articles du pôle :',
    `📁 *${categoryName}*`,
    '',
    'Pourriez-vous me faire part de vos références disponibles et de vos tarifs ?',
    '',
    'Merci d’avance pour votre accompagnement !',
  ].join('\n');

  return buildWhatsAppUrl(message);
}
