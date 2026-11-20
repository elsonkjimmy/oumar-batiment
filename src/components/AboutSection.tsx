import { MessageCircle } from 'lucide-react';
import { asset } from '../utils/assets';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export function AboutSection() {
  return (
    <section id="apropos" className="section-block">
      <div className="container split-grid">
        <div className="about-image-frame">
          <img
            src={asset('/images/categories/decoration-finition.jpg')}
            alt="Aménagement intérieur moderne avec finitions marbre et équipements sanitaires"
            loading="lazy"
          />
        </div>

        <div>
          <span className="eyebrow">À propos</span>
          <h2 className="section-heading">
            Votre partenaire pour construire, rénover et embellir
          </h2>
          <p style={{ color: 'var(--color-ink-700)', margin: '0 0 14px' }}>
            <strong>{BUSINESS_INFO.name}</strong> accompagne les particuliers, artisans,
            techniciens, chefs de chantier et entrepreneurs au Cameroun dans la réalisation de leurs
            projets de construction, de rénovation et d’aménagement.
          </p>
          <p style={{ color: 'var(--color-ink-500)', margin: '0 0 22px' }}>
            Notre mission est claire : vous permettre de trouver rapidement les équipements
            techniques et les matériaux de finition adaptés à votre chantier, avec un conseil
            attentif et un contact direct par téléphone ou WhatsApp.
          </p>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            <span>Parler de votre projet avec M. Oumar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
