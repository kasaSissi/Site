// Cloudinary configuration
export const CLOUDINARY_CLOUD_NAME = '7abf63b8135fcdce3499e218d6d578';
export const CLOUDINARY_FOLDER = 'Home';

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  tags?: string[];
  display_name?: string;
  context?: {
    custom?: {
      description?: string;
    };
  };
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  isBanco?: boolean;
}

const CATEGORIES = [
  'cozinha',
  'bancadas',
  'pet',
  'mesas-infantis',
  'prateleiras',
  'outros'
];

export async function fetchCloudinaryImages(): Promise<{ products: Product[]; bancoProducts: Product[] }> {
  try {
    // Use a public endpoint that doesn't require authentication
    const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/Sitekasasissi.json`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Cloudinary');
    }

    const data = await response.json();
    const resources: CloudinaryResource[] = data.resources || [];

    const products: Product[] = [];
    const bancoProducts: Product[] = [];

    resources.forEach((resource, index) => {
      const tags = resource.tags || [];
      const isBanco = tags.includes('banco');

      const product: Product = {
        id: resource.public_id,
        name: resource.display_name || `Produto ${index + 1}`,
        category: 'outros',
        description: resource.context?.custom?.description || 'Móvel funcional e elegante para sua casa.',
        image: resource.secure_url,
        isBanco: isBanco
      };

      if (isBanco) {
        bancoProducts.push(product);
      } else {
        // Find category from tags
        let category = 'outros';
        CATEGORIES.forEach(cat => {
          if (tags.includes(cat)) {
            category = cat;
          }
        });
        product.category = category;
        products.push(product);
      }
    });

    return { products, bancoProducts };
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return { products: [], bancoProducts: [] };
  }
}
