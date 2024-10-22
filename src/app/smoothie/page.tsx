import Image from 'next/image';
import blogImage from "@/app/smoothie.jpg";

export default function Smoothie() {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <h1 className="blog-page-title">Smoothie Recipes for Health</h1>
        <Image src={blogImage} alt="Smoothies" className="blog-images" width={800} height={400} />
        <p className="blog-content">
          Try these tasty and healthy smoothies for a nutritious boost that fits 
          perfectly into your busy lifestyle. Smoothies are an excellent way to 
          incorporate a variety of fruits and vegetables into your diet, making it 
          easier to meet your daily nutritional requirements. Whether you’re looking 
          for a post-workout recovery drink or a refreshing afternoon snack, these 
          recipes offer delicious combinations that are packed with vitamins, minerals, 
          and antioxidants. Let’s explore some unique flavor pairings and tips on how 
          to create the perfect smoothie that satisfies both your taste buds and your 
          health goals.
        </p>
      </div>
      <a href="/" className="back-button">Back to Blog</a>
    </div>
  );
};
