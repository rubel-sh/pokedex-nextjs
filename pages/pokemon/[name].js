import PokemonLogo from "@/components/PokemonLogo";
import SectionContainer from "@/components/SectionContainer";
import VerticalScrollImage from "@/components/VerticalScrollImage";
import { ImageContext } from "@/context/ImageProvider";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Pokemon = () => {
  const router = useRouter();
  const pokemonName = router.query.name;
  const { image } = useContext(ImageContext);

  //   States
  const [data, setData] = useState({});

  // Fetch Data
  const fetchPokemonData = () => {
    const gqlQuery = `query {
        pokemon (name: "${pokemonName}") {
        id
        stats {
          base_stat
          effort
          stat {
            name
          }
        }
        types {
          type {
            name
          }
        }
        weight
        height
        species {name}
        moves{move{name}}
        abilities {
          ability {
            name
          }
        }
      }
    }
    `;

    const gqlVariables = {
      limit: 12,
      offset: 1,
    };

    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };

  // Componenent did mount
  useEffect(() => fetchPokemonData(), []);

  // change Color based on type
  const typesColor = [
    {
      name: "normal",
      color: "bg-green-400",
    },
    {
      name: "fighting",
      color: "bg-slate-400",
    },
    {
      name: "flying",
      color: "bg-cyan-400",
    },
    {
      name: "poison",
      color: "bg-pink-400",
    },
    {
      name: "ground",
      color: "bg-gray-200",
    },
    {
      name: "rock",
      color: "bg-orange-400",
    },
    {
      name: "bug",
      color: "bg-green-600",
    },
    {
      name: "ghost",
      color: "bg-teal-400",
    },
    {
      name: "steel",
    },
    {
      name: "fire",
      color: "bg-red-400",
    },
    {
      name: "water",
      color: "bg-sky-400",
    },
    {
      name: "grass",
      color: "bg-emerald-400",
    },
    {
      name: "electric",
      color: "bg-emerald-400",
    },
    {
      name: "psychic",
      color: "bg-emerald-400",
    },
    {
      name: "ice",
      color: "bg-emerald-400",
    },
    {
      name: "dragon",
      color: "bg-emerald-400",
    },
    {
      name: "dark",
      color: "bg-emerald-400",
    },
    {
      name: "fairy",
      color: "bg-emerald-400",
    },
    {
      name: "unknown",
      color: "bg-emerald-400",
    },
    {
      name: "shadow",
      color: "bg-emerald-400",
    },
  ];

  // Loading spinner
  if (!data.pokemon) {
    return (
      <div className="w-20 h-20 border-4 border-dashed border-yellow-600 rounded-full mx-auto mt-10 animate-spin"></div>
    );
  }

  const { id, stats, types, weight, height, species, moves, abilities } =
    data.pokemon;

  return (
    <>
      <Head>
        <title>{pokemonName} - Identity</title>
      </Head>

      <section>
        <div className=" grid md:grid-cols-[80px_1fr_80px]">
          {/* Left scrolling Image */}
          <VerticalScrollImage />
          <SectionContainer className="mx-4">
            <Link href="/">
              <div className="mb-10">
                <PokemonLogo />
              </div>
            </Link>
            {/* 3 Columns */}
            <div className="grid lg:grid-cols-7 mx-5 gap-5 lg:gap-0">
              {/* Left Cards */}
              <div className="col-span-2 order-2 lg:order-1">
                <h2 className="text-5xl font-bold text-[#0081c9] capitalize">
                  {pokemonName} #{id}
                </h2>
                <p className="my-10 text-xl text-slate-800 ">
                  There is a plant seed on it's back right from the day this
                  pokemon is born. The seed slowly grows larger.
                </p>
                <div class="mx-auto flex  max-w-screen-sm items-center justify-center">
                  <div class="h-full w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                    <div class="flex h-full w-full items-center justify-center bg-white back">
                      <div className="w-full rounded-md  p-6 grid grid-cols-2 gap-8 text-2xl font-bold text-slate-800 overflow-hidden">
                        {/* Height */}
                        <div>
                          <span>Height</span>
                          <p className="text-lg mt-4 text-slate-600">
                            {height}
                          </p>
                        </div>
                        {/* species */}
                        <div>
                          <span>Species</span>
                          <p className="text-lg mt-4 text-slate-600">
                            {species.name}
                          </p>
                        </div>
                        {/* weight */}
                        <div>
                          <span>Weight</span>
                          <p className="text-lg mt-4 text-slate-600">
                            {weight} lbs
                          </p>
                        </div>
                        {/* abilities */}
                        <div>
                          <span>Abilities</span>
                          <p className="text-lg mt-4 text-slate-600">
                            {abilities.map((abi) => abi.ability.name)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Image */}
              <div className="col-span-3 order-1 lg:order-2 justify-self-center">
                <img
                  src={image}
                  alt=""
                  className="scale-90 hover:scale-100 transition-all duration-300 mb-20"
                />
              </div>

              {/* Right Cards */}
              <div className="col-span-2 order-3 ">
                {/* Type */}
                <div className="mb-10">
                  <p className="text-xl text-slate-800 mb-4">Type</p>
                  <div className="flex gap-2">
                    {types.map((type) => {
                      const { color } = typesColor.find(
                        (i) => i.name === type.type.name
                      );
                      console.log(color);
                      return (
                        <div
                          className={`py-2 px-4 text-white rounded-md font-medium ${color}`}
                        >
                          {type.type.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Moves */}
                <div className="mb-10">
                  <p className="text-xl text-slate-800 mb-4">Moves</p>
                  <div className="flex gap-2 flex-wrap">
                    {moves.map((move, i) => {
                      if (i > 10) {
                        return;
                      }
                      return (
                        <div
                          className={`py-2 px-4 bg-[#7FB77E] text-white rounded-md font-medium `}
                        >
                          {move.move.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Stats */}
                <div className="mb-5">
                  <p className="text-xl text-slate-800 mb-4">Stats</p>
                  <div className="flex flex-col gap-2">
                    {stats.map((stat) => {
                      return (
                        <>
                          <div className="mb-1 text-base font-medium dark:text-slate-800">
                            {stat.stat.name}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-300">
                            <div
                              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-400"
                              style={{ width: stat.base_stat + "%" }}
                            ></div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-20">
              <Link href="/">
                <button className="bg-yellow-400 text-white text-xl py-2 px-4 border-4 border-blue-600 rounded-md">
                  Go back go home
                </button>
              </Link>
            </div>
          </SectionContainer>
          {/* Right scrolling Image */}
          <VerticalScrollImage />
        </div>
      </section>
    </>
  );
};

export default Pokemon;
