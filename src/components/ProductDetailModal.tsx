import { useEffect, useState } from 'react';
import { Check, MessageCircle, Minus, Plus, X } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Product } from '../types/catalog';
import {
  getProductUnit,
  getProductWhatsAppUrl,
  getTimeBasedGreeting,
} from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [requestType, setRequestType] = useState('Prix & disponibilité immédiate');
  const [customNote, setCustomNote] = useState('');

  // Reset inputs when a new product is opened
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setRequestType('Prix & disponibilité immédiate');
      setCustomNote('');
    }
  }, [product?.id]);

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
  const unit = getProductUnit(product.categoryId, product.id);
  const isNightGreeting = getTimeBasedGreeting().startsWith('Bonsoir');

  const whatsAppUrl = getProductWhatsAppUrl(product.name, {
    productId: product.id,
    brand: product.brand,
    reference: product.reference,
    categoryName: category?.name,
    quantity,
    unit,
    requestType,
    customNote,
  });

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

          {/* Configuration personnalisée pour M. Oumar */}
          <div className="order-customizer-box">
            <div className="customizer-header">
              <span className="customizer-title">📋 Précisez votre commande pour M. Oumar</span>
              <span className="customizer-badge">WhatsApp direct</span>
            </div>

            <div className="customizer-row">
              <label className="customizer-label">Quantité souhaitée :</label>
              <div className="quantity-control">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Diminuer la quantité"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="qty-input"
                  aria-label="Nombre d'unités"
                />
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Augmenter la quantité"
                >
                  <Plus size={16} />
                </button>
                <span className="qty-unit">{unit}</span>
              </div>
            </div>

            <div className="customizer-row">
              <label className="customizer-label">Votre besoin :</label>
              <div className="request-pills">
                {[
                  { id: 'Prix & disponibilité immédiate', label: '💰 Prix & disponibilité' },
                  { id: 'Devis pour chantier complet', label: '🏗️ Devis de chantier' },
                  { id: 'Commande avec livraison sur site', label: '🚚 Avec livraison' },
                ].map((req) => (
                  <button
                    key={req.id}
                    type="button"
                    className={`request-pill ${requestType === req.id ? 'active' : ''}`}
                    onClick={() => setRequestType(req.id)}
                  >
                    {req.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="customizer-row">
              <label className="customizer-label">Précision pour M. Oumar (optionnel) :</label>
              <input
                type="text"
                placeholder="Ex : Diamètre, teinte, ville de livraison..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="customizer-input"
              />
            </div>

            <div className="customizer-preview-hint">
              <span className="preview-indicator"></span>
              <span>
                {isNightGreeting ? '🌙 Salutation : Bonsoir M. Oumar' : '☀️ Salutation : Bonjour M. Oumar'} · Lien & photo inclus
              </span>
            </div>
          </div>

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
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              <MessageCircle size={19} strokeWidth={2} />
              <span>Envoyer ma demande à M. Oumar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
