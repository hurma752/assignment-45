import Image from "next/image";
import Link from "next/link";
import Image1 from "@/app/headerimage.png";

export default function Header() {
  return (
    <div>
      <header>
        <div className="header-image">
          <Image
            src={Image1}
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
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/breakfast">Breakfast</Link>
            </li>
            <li>
              <Link href="/lunch">Lunch</Link>
            </li>
            <li>
              <Link href="/fruits">Fruits</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
