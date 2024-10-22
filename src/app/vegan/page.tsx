import Image from 'next/image';
import blogImage from "@/app/vegan.jpg";

export default function Vegan() {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <h1 className="blog-page-title">Top Vegan Recipes</h1>
        <Image src={blogImage} alt="Vegan Recipes" className="blog-images" width={800} height={400} />
        <p className="blog-content">
          Explore some of the best plant-based recipes for a healthy lifestyle that 
          are not only good for you but also kind to the planet. Vegan recipes can 
          be incredibly diverse, offering a wide range of flavors and textures that 
          make each meal exciting. From hearty lentil stews to vibrant veggie bowls, 
          these recipes will inspire you to embrace more plant-based meals without 
          sacrificing taste or satisfaction. Discover how simple ingredients can come 
          together to create delicious and nutritious dishes that everyone can enjoy, 
          regardless of dietary preferences.
        </p>
      </div>
      <a href="/" className="back-button">Back to Blog</a>
    </div>
  );
};
