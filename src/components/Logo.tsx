import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center" title="Go to homepage">
      <div className="relative h-12 w-16 shrink-0 ">
        <Image
          src="/BSI-logo.png"
          fill
          alt="Digital Desk Logo"
          className="object-contain"
          role="logo"
          aria-hidden
        />
      </div>
      <h6 className="font-black text-xl mt-1 ml-3">BUILDERS SOLUTIONS INC</h6>
    </Link>
  );
};

export default Logo;
