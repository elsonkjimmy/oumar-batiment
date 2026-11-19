import { MessageCircle, Phone, UserCheck } from 'lucide-react';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export function ContactSection() {
  return (
    <section id="contact" className="section-block">
      <div className="container">
        <div className="contact-card">
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-gold-400)' }}>
              Contact &amp; Devis
            </span>
            <h2
              className="section-heading"
              style={{ color: '#ffffff', marginTop: 10, marginBottom: 12 }}
            >
              Un besoin précis ou un devis chantier ?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.82)', margin: '0 0 22px', maxWidth: '50ch' }}>
              Envoyez la liste de vos articles, vos références ou vos questions directement sur
              WhatsApp. M. Oumar vous répond personnellement pour confirmer les prix, la disponibilité et les
              solutions adaptées à votre projet.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <MessageCircle size={19} strokeWidth={2} />
                <span>Écrire sur WhatsApp</span>
              </a>

              <a href={BUSINESS_INFO.phoneHref} className="btn btn-outline-light">
                <Phone size={18} strokeWidth={1.8} />
                <span>Appeler {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="contact-details-box">
            <div className="contact-row">
              <UserCheck size={19} style={{ color: 'var(--color-gold-400)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600 }}>{BUSINESS_INFO.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.74)' }}>
                  {BUSINESS_INFO.subtitle} — {BUSINESS_INFO.country}
                </div>
              </div>
            </div>

            <div className="contact-row">
              <Phone size={19} style={{ color: 'var(--color-gold-400)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600 }}>Téléphone &amp; WhatsApp</div>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  style={{ fontSize: '0.95rem', color: 'var(--color-gold-200)' }}
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-row">
              <MessageCircle size={19} style={{ color: 'var(--color-gold-400)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600 }}>Demande d’information</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.74)' }}>
                  Tarifs et disponibilité communiqués sur demande via WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
