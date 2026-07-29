import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
      <div
        className="w-[16%] md:w-[8%] 
      lg:w-[16%] xl:w-[14%]"
      >
        <Link
          href="/"
          className="flex items-center 
          justify-center lg:justify-start gap-2 mt-2"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span
            className="hidden 
          lg:block font-bold lg:text-sm"
          >
            School Dashboard
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[83%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-50 overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
