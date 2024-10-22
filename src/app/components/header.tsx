import Image from "next/image"; // Import the Image component from Next.js
import Link from "next/link"; // Import Link for internal routing
import Image1 from "@/app/headerimage.png"
export default function Header() {
  return (
    <div>
      <header>
        {/* Header Image with Title */}
        <div className="header-image">
          <Image
            src= {Image1} // Updated path to your image in the public folder
            alt="Healthy Life Stylers"
            
          />
          <div>
            <h1>Healthy</h1>
            <h3>Lifestylers</h3>
            <p className="headcontent">
              A blog for people who care about healthy food
            </p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/breakfast">Breakfast</Link>{" "}
              {/* Updated links to be actual paths */}
            </li>
            <li>
              <Link href="/lunch">Lunch</Link>{" "}
              {/* Updated links to be actual paths */}
            </li>
            <li>
              <Link href="/fruits">Fruits</Link>{" "}
              {/* Updated links to be actual paths */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
