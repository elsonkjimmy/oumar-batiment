import { RefObject } from 'react';
import { MessageCircle, Search, X } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { CategoryId, Product } from '../types/catalog';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (category: CategoryId | 'all') => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchInputRef: RefObject<HTMLInputElement>;
  onOpenDetail: (product: Product) => void;
}

export function CatalogSection({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  searchInputRef,
  onOpenDetail,
}: CatalogSectionProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categoryId === selectedCategory;

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const categoryName =
      CATEGORIES.find((c) => c.id === product.categoryId)?.name.toLowerCase() ?? '';

    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.shortDescription.toLowerCase().includes(normalizedQuery) ||
      (product.brand?.toLowerCase().includes(normalizedQuery) ?? false) ||
      (product.reference?.toLowerCase().includes(normalizedQuery) ?? false) ||
      categoryName.includes(normalizedQuery)
    );
  });

  return (
    <section id="catalogue" className="section-block">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Catalogue</span>
            <h2 className="section-heading">Explorer nos produits</h2>
            <p className="section-lead">
              Filtrez par corps de métier ou recherchez un article. Chaque fiche permet de demander
              le tarif et la disponibilité directement à M. Oumar sur WhatsApp.
            </p>
          </div>
        </div>

        <div className="catalog-controls">
          <div className="search-field">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <label htmlFor="catalog-search" className="sr-only">
              Rechercher un produit, une marque ou une catégorie
            </label>
            <input
              ref={searchInputRef}
              id="catalog-search"
              type="search"
              className="search-input"
              placeholder="Rechercher (ex : GROHE, Legrand, carrelage, meuleuse...)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear"
                onClick={() => onSearchChange('')}
                aria-label="Effacer la recherche"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="filter-pills-scroll" role="tablist" aria-label="Filtrer par catégorie">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              className={`filter-pill ${selectedCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => onSelectCategory('all')}
            >
              <span>Tout</span>
              <span className="filter-count">{PRODUCTS.length}</span>
            </button>

            {CATEGORIES.map((category) => {
              const count = PRODUCTS.filter((p) => p.categoryId === category.id).length;
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`filter-pill ${active ? 'is-active' : ''}`}
                  onClick={() => onSelectCategory(category.id)}
                >
                  <span>{category.shortName}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onOpenDetail={onOpenDetail} />
            ))}
          </div>
        ) : (
          <div className="empty-catalog">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '0 0 8px' }}>
              Aucun résultat pour « {searchQuery} »
            </h3>
            <p style={{ color: 'var(--color-ink-500)', margin: '0 0 18px' }}>
              Tous nos articles ne sont pas encore listés en ligne. Demandez directement à M. Oumar
              sur WhatsApp si nous avons la référence qu’il vous faut.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  onSearchChange('');
                  onSelectCategory('all');
                }}
              >
                Réinitialiser les filtres
              </button>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} />
                <span>Demander sur WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
