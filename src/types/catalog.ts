export type CategoryId =
  | 'electricite-batiment'
  | 'plomberie-sanitaire'
  | 'carrelage-revetements'
  | 'decoration-finition'
  | 'soudure-metallerie'
  | 'quincaillerie-generale';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: CategoryId;
  brand?: string;
  reference?: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  /** True only when the image is an exact verified manufacturer/distributor photo of this model */
  isVerifiedProduct: boolean;
  featured?: boolean;
  priceLabel: 'Prix sur demande';
}
