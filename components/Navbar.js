import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href={ "/" }>Home</Link>
      <Link href={ "/search" }>search</Link>
    </div>
  );
}

export default Navbar;