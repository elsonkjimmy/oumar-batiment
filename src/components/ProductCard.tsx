import { Eye, MessageCircle } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Product } from '../types/catalog';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

export function ProductCard({ product, onOpenDetail }: ProductCardProps) {
  const category = CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <article className="product-card">
      <button
        type="button"
        className={`product-media-btn ${product.isVerifiedProduct ? 'is-contained' : ''}`}
        onClick={() => onOpenDetail(product)}
        aria-label={`Voir les détails de ${product.name}`}
      >
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
        <span className="product-badge">
          {product.isVerifiedProduct ? 'Référence vérifiée' : 'Catégorie'}
        </span>
      </button>

      <div className="product-card-body">
        <div className="product-meta-row">
          <span>{category?.shortName ?? ''}</span>
          {product.brand && <span>{product.brand}</span>}
        </div>

        <button
          type="button"
          className="product-title-btn"
          onClick={() => onOpenDetail(product)}
        >
          {product.name}
        </button>

        <p className="product-short-desc">{product.shortDescription}</p>

        <div className="product-price-note">{product.priceLabel}</div>

        <div className="product-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => onOpenDetail(product)}
          >
            <Eye size={16} strokeWidth={1.8} />
            <span>Détails</span>
          </button>

          <a
            href={getProductWhatsAppUrl(product.name, {
              productId: product.id,
              brand: product.brand,
              reference: product.reference,
              categoryName: category?.name,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={16} strokeWidth={1.8} />
            <span>Demander</span>
          </a>
        </div>
      </div>
    </article>
  );
}
