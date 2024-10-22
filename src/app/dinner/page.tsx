import Image from 'next/image';
import blogImage from "@/app/dinner.jpg";

export default function Dinner() {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <h1 className="blog-page-title">Healthy Dinner Options</h1>
        <Image src={blogImage} alt="Healthy Dinner" className="blog-images" width={800} height={400} />
        <p className="blog-content">
          End your day on a healthy note with these nutritious dinner recipes that 
          are sure to please the entire family. A well-balanced dinner can help 
          restore your energy levels after a long day and prepare you for a good 
          night’s sleep. Incorporating lean proteins, whole grains, and an array 
          of colorful vegetables can enhance not only the flavor but also the 
          nutritional profile of your meal. Discover a variety of recipes that 
          range from comforting casseroles to light and refreshing salads, all 
          designed to nourish your body and satisfy your taste buds. 
        </p>
      </div>
      <a href="/" className="back-button">Back to Blog</a>
    </div>
  );
};
