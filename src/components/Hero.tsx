import { ArrowRight, MessageCircle } from 'lucide-react';
import { asset } from '../utils/assets';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onExploreCatalog: () => void;
}

export function Hero({ onExploreCatalog }: HeroProps) {
  return (
    <section id="accueil" className="hero-section">
      <div className="container">
        <div className="hero-showcase-shell">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tag">
                {BUSINESS_INFO.country} · {BUSINESS_INFO.subtitle}
              </span>
              <h1 className="hero-title">Tout ce qu’il faut pour bâtir vos projets.</h1>
              <p className="hero-description">
                Chez <strong>{BUSINESS_INFO.name}</strong>, particuliers, artisans, entrepreneurs et
                professionnels du bâtiment trouvent des matériaux fiables et des solutions complètes
                en électricité, plomberie, carrelage, finition, soudure et quincaillerie générale.
              </p>

              <div className="hero-cta-group">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <MessageCircle size={19} strokeWidth={2} />
                  <span>Contacter M. Oumar sur WhatsApp</span>
                </a>

                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={onExploreCatalog}
                >
                  <span>Explorer le catalogue</span>
                  <ArrowRight size={18} strokeWidth={1.8} />
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-main-frame">
                <img
                  src={asset('/images/categories/hero-architecture.jpg')}
                  alt="Architecture intérieure contemporaine avec revêtements pierre et finitions soignées"
                  loading="eager"
                />
              </div>

              <div className="hero-caption-overlay">
                <div>
                  <p className="hero-caption-title">{BUSINESS_INFO.tagline}</p>
                  <p className="hero-caption-sub">
                    Conseils directs &amp; devis rapide au {BUSINESS_INFO.phoneDisplay}
                  </p>
                </div>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  style={{
                    backgroundColor: 'var(--color-gold-500)',
                    color: 'var(--color-emerald-950)',
                    borderColor: 'transparent',
                    flexShrink: 0,
                  }}
                  aria-label="Écrire à M. Oumar sur WhatsApp"
                >
                  <MessageCircle size={19} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
