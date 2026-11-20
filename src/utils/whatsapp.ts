export const BUSINESS_INFO = {
  name: 'OUMAR BÂTIMENT',
  subtitle: 'Matériaux & Solutions',
  tagline: 'Tout pour construire. Tout pour embellir.',
  owner: 'M. Oumar',
  country: 'Cameroun',
  phoneDisplay: '+237 770 368 05',
  phoneHref: 'tel:+23777036805',
  whatsappBaseUrl: 'https://wa.me/23777036805',
  liveSiteUrl: 'https://elsonkjimmy.github.io/oumar-batiment/',
} as const;

/**
 * Détermine dynamiquement la salutation polie selon l'heure locale :
 * - De 05h00 à 17h59 : "Bonjour M. Oumar,"
 * - De 18h00 à 04h59 (soir et nuit) : "Bonsoir M. Oumar,"
 */
export function getTimeBasedGreeting(): string {
  try {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 5) {
      return 'Bonsoir M. Oumar,';
    }
  } catch {
    // Fallback standard
  }
  return 'Bonjour M. Oumar,';
}

/**
 * Construit un lien WhatsApp officiel wa.me avec message pré-formaté
 */
export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Génère l'URL directe vers la fiche produit en ligne avec aperçu photo
 */
export function getProductPageUrl(productId?: string): string {
  if (!productId) return BUSINESS_INFO.liveSiteUrl;
  if (typeof window !== 'undefined' && window.location) {
    const origin = window.location.origin;
    const pathname = window.location.pathname.replace(/\/$/, '');
    return `${origin}${pathname}/?produit=${encodeURIComponent(productId)}`;
  }
  return `${BUSINESS_INFO.liveSiteUrl}?produit=${encodeURIComponent(productId)}`;
}

/**
 * Retourne une unité adaptée par défaut selon la catégorie et le type de produit
 */
export function getProductUnit(categoryId?: string, productId?: string): string {
  if (!categoryId) return 'pièce(s)';
  const pid = (productId || '').toLowerCase();

  if (categoryId === 'electricite-batiment') {
    if (pid.includes('cable') || pid.includes('gaine')) return 'rouleau(x)';
    return 'pièce(s)';
  }
  if (categoryId === 'plomberie-sanitaire') {
    if (pid.includes('tube') || pid.includes('per')) return 'rouleau(x)';
    if (pid.includes('tuyau') || pid.includes('pvc')) return 'longueur(s)';
    return 'pièce(s)';
  }
  if (categoryId === 'carrelage-revetements') {
    if (pid.includes('colle') || pid.includes('mortier')) return 'sac(s)';
    return 'm² / carton(s)';
  }
  if (categoryId === 'quincaillerie-generale') {
    if (pid.includes('viss') || pid.includes('boulon')) return 'boîte(s) / lot(s)';
    return 'pièce(s)';
  }
  if (categoryId === 'soudure-metallerie') {
    if (pid.includes('electrode') || pid.includes('baguette')) return 'étui(s) / paquet(s)';
    if (pid.includes('disque')) return 'lot(s) / boîte(s)';
    return 'pièce(s)';
  }
  if (categoryId === 'decoration-finition') {
    if (pid.includes('peinture') || pid.includes('enduit')) return 'pot(s) / seau(x)';
    return 'pièce(s)';
  }
  return 'pièce(s)';
}

export interface ProductWhatsAppOptions {
  productId?: string;
  brand?: string;
  reference?: string;
  categoryName?: string;
  quantity?: number | string;
  unit?: string;
  requestType?: string;
  customNote?: string;
}

/**
 * Construit un message structuré montrant immédiatement à M. Oumar
 * exactement quel produit le client veut, sa quantité, et le lien direct photo
 */
export function getProductWhatsAppUrl(
  productName: string,
  options?: ProductWhatsAppOptions
): string {
  const greeting = getTimeBasedGreeting();
  const productUrl = getProductPageUrl(options?.productId);

  const lines: string[] = [
    greeting,
    '',
    'Je vous contacte depuis le site *OUMAR BÂTIMENT* pour commander / me renseigner sur cet article :',
    '',
    `📦 *PRODUIT :* ${productName}`,
  ];

  if (options?.brand) {
    lines.push(`🏷️ *Marque :* ${options.brand}`);
  }
  if (options?.reference) {
    lines.push(`🔢 *Référence :* ${options.reference}`);
  }
  if (options?.categoryName) {
    lines.push(`📁 *Rayon :* ${options.categoryName}`);
  }

  // Quantité choisie par le client
  if (options?.quantity) {
    const unit = options.unit ? ` ${options.unit}` : '';
    lines.push(`📊 *Quantité souhaitée :* ${options.quantity}${unit}`);
  }

  // Type de besoin (Prix, Devis, Livraison)
  if (options?.requestType) {
    lines.push(`🎯 *Objet :* ${options.requestType}`);
  }

  // Précision du client
  if (options?.customNote && options.customNote.trim().length > 0) {
    lines.push(`💬 *Précision du client :* "${options.customNote.trim()}"`);
  }

  // Lien direct pour voir la photo et la fiche complète sur le site
  lines.push(
    '',
    '📸 *VOIR L’ARTICLE EN PHOTO SUR VOTRE SITE :*',
    productUrl,
    '',
    'Pourriez-vous me confirmer le tarif actuel et la disponibilité en boutique ?',
    '',
    'Merci d’avance pour votre réactivité et vos conseils !'
  );

  return buildWhatsAppUrl(lines.join('\n'));
}

export function getGeneralWhatsAppUrl(): string {
  const greeting = getTimeBasedGreeting();
  const siteUrl = typeof window !== 'undefined' && window.location ? window.location.href.split('?')[0] : BUSINESS_INFO.liveSiteUrl;

  const message = [
    greeting,
    '',
    'Je vous contacte depuis le site de votre entreprise *OUMAR BÂTIMENT*.',
    '',
    '🏗️ J’ai un projet de travaux / chantier au Cameroun et je souhaite échanger avec vous pour :',
    '• Obtenir un devis ou des tarifs',
    '• Vérifier la disponibilité de matériaux et équipements',
    '',
    `🌐 *Site web :* ${siteUrl}`,
    '',
    'Merci d’avance pour votre réactivité et vos conseils !',
  ].join('\n');

  return buildWhatsAppUrl(message);
}

export function getCategoryWhatsAppUrl(categoryName: string): string {
  const greeting = getTimeBasedGreeting();
  const siteUrl = typeof window !== 'undefined' && window.location ? `${window.location.origin}${window.location.pathname}#catalogue` : `${BUSINESS_INFO.liveSiteUrl}#catalogue`;

  const message = [
    greeting,
    '',
    'Je consulte le catalogue *OUMAR BÂTIMENT* et je m’intéresse aux articles du pôle :',
    `📁 *${categoryName}*`,
    '',
    `🔗 *Lien vers le rayon :* ${siteUrl}`,
    '',
    'Pourriez-vous me faire part de vos références disponibles et de vos tarifs ?',
    '',
    'Merci d’avance pour votre accompagnement !',
  ].join('\n');

  return buildWhatsAppUrl(message);
}
