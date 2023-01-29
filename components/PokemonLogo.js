import Image from "next/image";

const PokemonLogo = () => {
  return (
    <div className="py-5">
      <Image
        className="mx-auto"
        src="/Logo.png"
        alt="Pokemon Logo"
        width={200}
        height={100}
      />
    </div>
  );
};

export default PokemonLogo;
