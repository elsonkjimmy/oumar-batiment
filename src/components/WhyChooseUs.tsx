import { Layers, MessageSquare, ShieldCheck, Wrench } from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Matériaux fiables',
    text: 'Des gammes sélectionnées pour leur durabilité et leur conformité aux exigences des chantiers au Cameroun.',
  },
  {
    icon: Layers,
    title: 'Six pôles réunis',
    text: 'Électricité, plomberie, carrelage, finition, soudure et quincaillerie générale au même endroit.',
  },
  {
    icon: MessageSquare,
    title: 'Échange direct avec M. Oumar',
    text: 'Un interlocuteur unique sur WhatsApp pour vérifier les références, recevoir un devis et gagner du temps.',
  },
  {
    icon: Wrench,
    title: 'Particuliers & professionnels',
    text: 'Accompagnement adapté aussi bien aux projets de rénovation personnelle qu’aux besoins des artisans et entrepreneurs.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-block section-surface">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Engagements</span>
            <h2 className="section-heading">Pourquoi choisir Oumar Bâtiment</h2>
            <p className="section-lead">
              Une approche simple, sérieuse et réactive pour sécuriser l’approvisionnement de vos
              travaux.
            </p>
          </div>
        </div>

        <div className="pillars-grid">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-text">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
