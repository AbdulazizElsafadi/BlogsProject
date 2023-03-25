import Link from "next/link";

const Header = () => {
  return (
    <div className="m-8 flex justify-around gap-3">
      <h1 className="font-extrabold grow">Cloundry</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Header;
