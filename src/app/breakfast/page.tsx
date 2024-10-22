import Image from 'next/image';
import blogImage from "@/app/breakfast.jpg"; 

export default function Breakfast() {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <h1 className="blog-page-title">Healthy Breakfast Ideas</h1>
        <Image src={blogImage} alt="Healthy Breakfast" className="blog-images" width={800} height={400} />
        <p className="blog-content">
          Start your day with energy by trying out these top healthy breakfast ideas. 
          Incorporating a variety of nutrients into your morning meal can help improve 
          your mood and boost your overall productivity throughout the day. From 
          wholesome oatmeal to protein-packed smoothies, there are countless options 
          to suit your taste preferences and dietary needs. Not only will you feel 
          satisfied, but you’ll also be giving your body the fuel it needs to kick-start 
          your day on a positive note.
        </p>
      </div>
      <a href="/" className="back-button">Back to Blog</a>
    </div>
  );
};
