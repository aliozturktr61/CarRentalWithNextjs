import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = ({designs}: {designs?: string}) => {
  return (
    <header className={`w-full text-black ${designs}`}>
  
      <Container designs="flex justify-between">
        <h1 className="text-2xl font-bold md:text-3xl" >
          <Link href="/home">DRİVE</Link>
        </h1>
        <nav className="text-sm md:text-base md:gap-4 flex gap-2">
          <Link href="/home">Keşfet</Link>
          <Link href="/orders">Siparişlerim</Link>
          <Link href="/home">Hakkımızda</Link>
          <Link className="max-md:hidden" href="/home">Fiyatlandırma</Link>
        </nav>
        <div className="flex gap-2">
          <button className="max-md:hidden">İletişim</button>
          <button className="bg-white text-black px-5 py-2 text-nowrap rounded-full transition hover:bg-gray-100">Sign Up</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
