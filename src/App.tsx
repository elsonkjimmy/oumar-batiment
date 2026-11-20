import { useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { CategoryGrid } from './components/CategoryGrid';
import { ContactSection } from './components/ContactSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PRODUCTS } from './data/products';
import { CategoryId, Product } from './types/catalog';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Deep linking : permet à M. Oumar ou un client d'ouvrir directement un produit via le lien WhatsApp
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;
      const targetId =
        params.get('produit') ||
        params.get('id') ||
        (hash.startsWith('#produit=') ? hash.replace('#produit=', '') : null);

      if (targetId) {
        const found = PRODUCTS.find((p) => p.id === targetId || p.slug === targetId);
        if (found) {
          setActiveProduct(found);
          const catalogEl = document.getElementById('catalogue');
          if (catalogEl) {
            catalogEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } catch {
      // Ignorer si non supporté
    }
  }, []);

  const handleOpenDetail = (product: Product) => {
    setActiveProduct(product);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('produit', product.id);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignorer
    }
  };

  const handleCloseDetail = () => {
    setActiveProduct(null);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('produit');
      url.searchParams.delete('id');
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignorer
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectCategory = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    scrollToSection('catalogue');
  };

  const handleFocusSearch = () => {
    scrollToSection('catalogue');
    window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 320);
  };

  return (
    <>
      <Header onNavigate={scrollToSection} onFocusSearch={handleFocusSearch} />

      <main>
        <Hero onExploreCatalog={() => scrollToSection('catalogue')} />
        <CategoryGrid onSelectCategory={handleSelectCategory} />
        <FeaturedProducts
          onOpenDetail={handleOpenDetail}
          onExploreAll={() => scrollToSection('catalogue')}
        />
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchInputRef={searchInputRef}
          onOpenDetail={handleOpenDetail}
        />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer onNavigate={scrollToSection} onSelectCategory={handleSelectCategory} />
      <MobileBottomNav onNavigate={scrollToSection} />
      <ProductDetailModal product={activeProduct} onClose={handleCloseDetail} />
    </>
  );
}

export default App;
