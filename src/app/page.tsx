import Image from 'next/image';
import blog1 from "@/app/breakfast.jpg"; 
import blog2 from "@/app/lunch.jpg";
import blog3 from "@/app/fruits.jpg";
import blog4 from "@/app/dinner.jpg";
import blog5 from "@/app/smoothie.jpg";
import blog6 from "@/app/vegan.jpg";
import Link from 'next/link';

const blogs = [
    {
        id: 1,
        title: "Healthy Breakfast Ideas",
        description: "Start your day with energy by trying out these top healthy breakfast ideas.",
        image: blog1, 
        link: '/breakfast', // Correctly pointing to the breakfast page
    },
    {
        id: 2,
        title: "Delicious Lunch Recipes",
        description: "Discover some of the best healthy lunch recipes to fuel your day.",
        image: blog2,
        link: '/lunch', // Correct link to the lunch page
    },
    {
        id: 3,
        title: "Top Fruits for Health",
        description: "Learn about the most nutritious fruits that can benefit your health.",
        image: blog3,
        link: '/fruits', // Correct link to the fruits page
    },
    {
        id: 4,
        title: "Healthy Dinner Options",
        description: "End your day on a healthy note with these nutritious dinner recipes.",
        image: blog4,
        link: '/dinner', // Correct link to the dinner page
    },
    {
        id: 5,
        title: "Smoothie Recipes for Health",
        description: "Try these tasty and healthy smoothies for a nutritious boost.",
        image: blog5,
        link: '/smoothie', // Correct link to the smoothie page
    },
    {
        id: 6,
        title: "Top Vegan Recipes",
        description: "Explore some of the best plant-based recipes for a healthy lifestyle.",
        image: blog6,
        link: '/vegan', // Correct link to the vegan page
    }
];

export default function Home() {
  return (
    <div>
      <section className="blog-cards-container">
        <div className="blog-cards">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                className="blog-image"
                width={500}  
                height={300} 
              />
              <div className="blog-card-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <Link href={blog.link}>
                  <button className="read-more-button">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
