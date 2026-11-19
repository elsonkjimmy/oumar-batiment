import { useRef, useState } from 'react';
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
import { CategoryId, Product } from './types/catalog';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
          onOpenDetail={setActiveProduct}
          onExploreAll={() => scrollToSection('catalogue')}
        />
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchInputRef={searchInputRef}
          onOpenDetail={setActiveProduct}
        />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer onNavigate={scrollToSection} onSelectCategory={handleSelectCategory} />
      <MobileBottomNav onNavigate={scrollToSection} />
      <ProductDetailModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  );
}

export default App;
