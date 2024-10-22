import Image from 'next/image';
import blogImage from "@/app/lunch.jpg";

export default function Lunch() {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <h1 className="blog-page-title">Delicious Lunch Recipes</h1>
        <Image src={blogImage} alt="Delicious Lunch" className="blog-images" width={800} height={400} />
        <p className="blog-content">
          Discover some of the best healthy lunch recipes that are not only delicious 
          but also quick and easy to prepare. Whether you’re at home or at the office, 
          having a nutritious lunch can significantly impact your energy levels and 
          concentration for the rest of the day. From vibrant salads packed with 
          fresh vegetables to hearty grain bowls topped with your favorite proteins, 
          these recipes will keep you satisfied and nourished. Let’s explore a range 
          of options that cater to different dietary preferences, ensuring you find 
          the perfect meal for your midday hunger pangs.
        </p>
      </div>
      <a href="/" className="back-button">Back to Blog</a>
    </div>
  );
};
