import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  const { url, name, image, artwork } = pokemon;

  return (
    <div className="card-corner rounded-md p-3 bg-white min-w-[200px] ">
      <div className="mx-auto bg-gray-200 rounded-md">
        <Image
          className="scale-90"
          src={artwork}
          alt={name}
          width={200}
          height={200}
        />
      </div>

      <p className=" text-md font-medium mt-5">{name}</p>
      <div className="mt-1">
        <div className="bg-purple-400 px-4 max-w-fit text-slate-100 rounded-sm">
          Poison
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
