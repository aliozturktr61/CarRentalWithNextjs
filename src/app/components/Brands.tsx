import Image from "next/image"
import { brands } from "../contants"
import Container from "./Container"


const Brands = () => {
  return (
    <Container >
    <h1 className="text-2xl md:text-3xl font-bold">En Çok Tercih Markalar</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5">
        {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center p-3 bg-white shadow rounded-lg cursor-pointer hover:shadow-xl transition">
                <Image width={70} height={70} src={brand.icon} alt={brand.name} />
                <h2 className="text-base">{brand.name}</h2>
            </div>
        ))}
    </div>
    </Container>
  )
}

export default Brands
