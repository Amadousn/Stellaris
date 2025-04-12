interface PortfolioImage {
  id: string
  src: string
  alt: string
  category: string
  width: number
  height: number
}

export const portfolioImages: PortfolioImage[] = [
  // Branding
  {
    id: 'brand1',
    src: '/portfolio/branding/brand1.jpg',
    alt: 'TechCorp - Nouvelle identité visuelle',
    category: 'branding',
    width: 1200,
    height: 900,
  },
  {
    id: 'brand2',
    src: '/portfolio/branding/brand2.jpg',
    alt: 'SportFit - Logo et charte graphique',
    category: 'branding',
    width: 1200,
    height: 900,
  },

  // Digital
  {
    id: 'digital1',
    src: '/portfolio/digital/digital1.jpg',
    alt: 'EcoStart - Campagne marketing digital',
    category: 'digital',
    width: 1200,
    height: 900,
  },
  {
    id: 'digital2',
    src: '/portfolio/digital/digital2.jpg',
    alt: 'BeautyLab - Posts Instagram',
    category: 'digital',
    width: 1200,
    height: 900,
  },

  // Print
  {
    id: 'print1',
    src: '/portfolio/print/print1.jpg',
    alt: 'NatureBio - Packaging produit',
    category: 'print',
    width: 1200,
    height: 900,
  },
  {
    id: 'print2',
    src: '/portfolio/print/print2.jpg',
    alt: 'ConsultPro - Brochure commerciale',
    category: 'print',
    width: 1200,
    height: 900,
  },
]

export const getImageById = (id: string): PortfolioImage | undefined => {
  return portfolioImages.find(image => image.id === id)
}

export const getImagesByCategory = (category: string): PortfolioImage[] => {
  return category === 'all'
    ? portfolioImages
    : portfolioImages.filter(image => image.category === category)
}
