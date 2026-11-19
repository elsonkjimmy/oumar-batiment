import { useEffect } from 'react';
import { Check, MessageCircle, X } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Product } from '../types/catalog';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const category = CATEGORIES.find((c) => c.id === product.categoryId);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero-band">
          <button
            type="button"
            className="modal-close-float"
            onClick={onClose}
            aria-label="Fermer la fiche produit"
          >
            <X size={20} />
          </button>

          <div className={`modal-hero-image ${product.isVerifiedProduct ? 'is-contained' : ''}`}>
            <img src={product.image} alt={product.imageAlt} />
          </div>

          <div className="modal-hero-caption">
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold-400)',
                  marginBottom: 4,
                }}
              >
                {category?.name ?? 'Catalogue'}
              </div>
              <h2
                id="product-modal-title"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.45rem, 4.5vw, 1.95rem)',
                  lineHeight: 1.12,
                  margin: 0,
                }}
              >
                {product.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="modal-curved-body">
          <div className="spec-rows">
            <div className="spec-row">
              <span className="spec-label">Tarif</span>
              <span className="spec-value" style={{ color: 'var(--color-gold-600)' }}>
                {product.priceLabel}
              </span>
            </div>
            {product.brand && (
              <div className="spec-row">
                <span className="spec-label">Marque</span>
                <span className="spec-value">{product.brand}</span>
              </div>
            )}
            {product.reference && (
              <div className="spec-row">
                <span className="spec-label">Référence</span>
                <span className="spec-value">{product.reference}</span>
              </div>
            )}
            <div className="spec-row">
              <span className="spec-label">Catégorie</span>
              <span className="spec-value">{category?.name}</span>
            </div>
          </div>

          {!product.isVerifiedProduct && (
            <p className="representative-note">
              Photographie représentative de la catégorie. Les modèles, teintes et marques
              disponibles sont confirmés directement avec M. Oumar lors de votre demande.
            </p>
          )}

          <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-ink-700)' }}>
            {product.description}
          </p>

          <ul className="modal-highlights">
            {product.highlights.map((item) => (
              <li key={item}>
                <Check
                  size={16}
                  style={{ color: 'var(--color-emerald-800)', flexShrink: 0, marginTop: 3 }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="modal-bottom-bar">
            <button
              type="button"
              className="btn-close-square"
              onClick={onClose}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            <a
              href={getProductWhatsAppUrl(product.name, {
                brand: product.brand,
                reference: product.reference,
                categoryName: category?.name,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              <MessageCircle size={19} strokeWidth={2} />
              <span>Demander sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
