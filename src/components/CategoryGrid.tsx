import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { CategoryId } from '../types/catalog';

interface CategoryGridProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section id="categories" className="section-block">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Nos univers</span>
            <h2 className="section-heading">Six pôles dédiés à vos chantiers</h2>
            <p className="section-lead">
              Des équipements sélectionnés pour couvrir l’ensemble des besoins du gros œuvre
              jusqu’aux finitions intérieures.
            </p>
          </div>
        </div>

        <div className="categories-grid">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              className="category-card"
              onClick={() => onSelectCategory(category.id)}
            >
              <div className="category-media">
                <img src={category.image} alt={category.imageAlt} loading="lazy" />
              </div>
              <div className="category-body">
                <h3 className="category-title">{category.name}</h3>
                <p className="category-desc">{category.description}</p>
                <span className="category-link">
                  <span>Explorer la catégorie</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
