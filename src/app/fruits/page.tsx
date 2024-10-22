import Image from 'next/image';
import blogImage from "@/app/fruits.jpg";

export default function Fruits() {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <h1 className="blog-page-title">Top Fruits for Health</h1>
        <Image src={blogImage} alt="Top Fruits" className="blog-images" width={800} height={400} />
        <p className="blog-content">
          Learn about the most nutritious fruits that can benefit your health in 
          numerous ways. Fruits are packed with vitamins, minerals, and antioxidants 
          that support your immune system and promote overall well-being. Incorporating 
          a variety of fruits into your daily diet can help you maintain a healthy 
          weight, reduce the risk of chronic diseases, and improve digestion. 
          From juicy berries to refreshing citrus fruits, each type offers unique 
          health benefits. Join us as we delve into the world of fruits and discover 
          which ones you should be adding to your grocery list for a healthier lifestyle.
        </p>
      </div>
      <a href="/" className="back-button">Back to Blog</a>
    </div>
  );
};
