// Auto-generated mapping
const galleryImagesModules = import.meta.glob("@/assets/nithya/gallery/*.jpg", { eager: true });

export const nithyaImages = {
  hero: null,
  gallery: Object.values(galleryImagesModules).map((mod: any) => mod.default || mod),
};
