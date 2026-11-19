import { Home, LayoutGrid, MessageCircle, Package } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface MobileBottomNavProps {
  onNavigate: (sectionId: string) => void;
}

export function MobileBottomNav({ onNavigate }: MobileBottomNavProps) {
  return (
    <nav className="floating-mobile-dock" aria-label="Navigation rapide mobile">
      <div className="dock-nav-group">
        <button
          type="button"
          className="dock-icon-btn"
          onClick={() => onNavigate('accueil')}
          aria-label="Accueil"
        >
          <Home size={18} strokeWidth={1.9} />
        </button>

        <button
          type="button"
          className="dock-icon-btn"
          onClick={() => onNavigate('categories')}
          aria-label="Catégories"
        >
          <LayoutGrid size={18} strokeWidth={1.9} />
        </button>

        <button
          type="button"
          className="dock-icon-btn"
          onClick={() => onNavigate('catalogue')}
          aria-label="Catalogue"
        >
          <Package size={18} strokeWidth={1.9} />
        </button>
      </div>

      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-whatsapp-pill"
      >
        <MessageCircle size={17} strokeWidth={2.1} />
        <span>Devis WhatsApp</span>
      </a>
    </nav>
  );
}
