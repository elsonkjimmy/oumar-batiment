import { useState } from 'react';
import { Menu, MessageCircle, Search, X, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onFocusSearch: () => void;
}

const NAV_ITEMS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'categories', label: 'Catégories' },
  { id: 'catalogue', label: 'Catalogue' },
  { id: 'apropos', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ onNavigate, onFocusSearch }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    setMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#accueil"
            className="brand-mark"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('accueil');
            }}
            aria-label="QUINCAILLERIE OUMAR — Retour à l’accueil"
          >
            <span className="brand-emblem" aria-hidden="true">
              QO
            </span>
            <span className="brand-text">
              <span className="brand-name">{BUSINESS_INFO.name}</span>
              <span className="brand-subtitle">{BUSINESS_INFO.subtitle}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={onFocusSearch}
              aria-label="Rechercher un produit dans le catalogue"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary header-whatsapp-desktop"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              className="icon-btn mobile-menu-trigger"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <Menu size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="mobile-drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          onClick={() => setMenuOpen(false)}
        >
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="header-inner" style={{ height: 'auto', paddingBottom: 14, borderBottom: '1px solid var(--color-border-subtle)' }}>
                <div className="brand-text">
                  <span className="brand-name">{BUSINESS_INFO.name}</span>
                  <span className="brand-subtitle">{BUSINESS_INFO.subtitle}</span>
                </div>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X size={20} strokeWidth={1.8} />
                </button>
              </div>

              <nav className="mobile-drawer-nav" aria-label="Menu mobile">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="mobile-drawer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={18} strokeWidth={1.6} />
                  </a>
                ))}
              </nav>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-ink-500)' }}>
                {BUSINESS_INFO.tagline}
              </p>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                <span>Contacter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
