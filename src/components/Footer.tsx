import { CATEGORIES } from '../data/categories';
import { CategoryId } from '../types/catalog';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
}

export function Footer({ onNavigate, onSelectCategory }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.04em',
              }}
            >
              {BUSINESS_INFO.name}
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-gold-400)',
                marginBottom: 12,
              }}
            >
              {BUSINESS_INFO.subtitle}
            </div>
            <p style={{ margin: '0 0 10px', fontSize: '0.9rem', maxWidth: '34ch' }}>
              {BUSINESS_INFO.tagline}
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>
              WhatsApp / Tél. :{' '}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-gold-400)', fontWeight: 600 }}
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Catégories</h3>
            <ul className="footer-links">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'inherit',
                      textAlign: 'left',
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#accueil"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('accueil');
                  }}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('categories');
                  }}
                >
                  Nos catégories
                </a>
              </li>
              <li>
                <a
                  href="#catalogue"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('catalogue');
                  }}
                >
                  Catalogue produits
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('apropos');
                  }}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {BUSINESS_INFO.name} — {BUSINESS_INFO.country}.
          </span>
          <span>Tarifs et disponibilités sur demande via WhatsApp.</span>
        </div>
      </div>
    </footer>
  );
}
