import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const url: string =
    "https://lh3.googleusercontent.com/a/AAcHTtdnDODjSNcMn6By566b1X1OzH46FaYwCY7uY7swiI5lvns=s288-c-no";
  return (
    <div className=" cursor-pointer flex justify-end items-center gap-4 pr-4 pt-3">
      <Link href="https://mail.google.com" className="text-sm hover:underline">
        Gmail
      </Link>
      <Link
        href="https://images.google.com"
        className="text-sm hover:underline"
      >
        Images
      </Link>
      <TbGridDots className=" text-4xl hover:bg-gray-200 p-2 rounded-full" />
      <Image
        className="rounded-full"
        src={url}
        alt="logo"
        width={30}
        height={100}
      />
    </div>
  );
};

export default Header;
