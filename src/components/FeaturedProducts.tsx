import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/catalog';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  onOpenDetail: (product: Product) => void;
  onExploreAll: () => void;
}

export function FeaturedProducts({ onOpenDetail, onExploreAll }: FeaturedProductsProps) {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="section-block section-surface">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow">Sélection</span>
            <h2 className="section-heading">
              Produits <span className="heading-muted">phares</span>
            </h2>
            <p className="section-lead">
              Un aperçu de nos références de marques reconnues et des gammes disponibles sur
              demande.
            </p>
          </div>

          <button type="button" className="btn btn-outline" onClick={onExploreAll}>
            <span>Tout le catalogue</span>
            <ArrowRight size={17} strokeWidth={1.8} />
          </button>
        </div>

        <div className="featured-carousel">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onOpenDetail={onOpenDetail} />
          ))}
        </div>
      </div>
    </section>
  );
}
