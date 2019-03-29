global.window = global;
// global.assert = require("chai").assert;
require("../src/data");
require("./data.spec.js");

test("sortData deberia ser una funcion", () => {
  expect(typeof sortData).toBe("function");
});
test("filterData deberia ser una funcion", () => {
  expect(typeof filterData).toBe("function");
});
test("computeStats deberia ser una funcion", () => {
  expect(typeof computeStats).toBe("function");
});

describe("Probando funciones en data.js", () => {
  let dataPoke = [
    {
      id: 1,
      num: "001",
      name: "Bulbasaur",
      img: "http://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["Grass", "Poison"],
      height: "0.71 m",
      weight: "6.9 kg",
      candy: "Bulbasaur Candy",
      candy_count: 25,
      egg: "2 km",
      spawn_chance: 0.69,
      avg_spawns: 69,
      spawn_time: "20:00",
      multipliers: [1.58],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      next_evolution: [
        {
          num: "002",
          name: "Ivysaur"
        },
        {
          num: "003",
          name: "Venusaur"
        }
      ]
    },
    {
      id: 2,
      num: "002",
      name: "Ivysaur",
      img: "http://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["Grass", "Poison"],
      height: "0.99 m",
      weight: "13.0 kg",
      candy: "Bulbasaur Candy",
      candy_count: 100,
      egg: "Not in Eggs",
      spawn_chance: 0.042,
      avg_spawns: 4.2,
      spawn_time: "07:00",
      multipliers: [1.2, 1.6],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      prev_evolution: [
        {
          num: "001",
          name: "Bulbasaur"
        }
      ],
      next_evolution: [
        {
          num: "003",
          name: "Venusaur"
        }
      ]
    },
    {
      id: 3,
      num: "003",
      name: "Venusaur",
      img: "http://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["Grass", "Poison"],
      height: "2.01 m",
      weight: "100.0 kg",
      candy: "Bulbasaur Candy",
      egg: "Not in Eggs",
      spawn_chance: 0.017,
      avg_spawns: 1.7,
      spawn_time: "11:30",
      multipliers: null,
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      prev_evolution: [
        {
          num: "001",
          name: "Bulbasaur"
        },
        {
          num: "002",
          name: "Ivysaur"
        }
      ]
    },
    {
      id: 8,
      num: "008",
      name: "Wartortle",
      img: "http://www.serebii.net/pokemongo/pokemon/008.png",
      type: ["Water"],
      height: "0.99 m",
      weight: "22.5 kg",
      candy: "Squirtle Candy",
      candy_count: 100,
      egg: "Not in Eggs",
      spawn_chance: 0.034,
      avg_spawns: 3.4,
      spawn_time: "07:02",
      multipliers: [1.4],
      weaknesses: ["Electric", "Grass"],
      prev_evolution: [
        {
          num: "007",
          name: "Squirtle"
        }
      ],
      next_evolution: [
        {
          num: "009",
          name: "Blastoise"
        }
      ]
    }
  ];

  it("la funcion sortData deberia ordenar z-a", () => {
    let arrOrder = sortData(dataPoke, "name", "z-a");
    expect(sortData(dataPoke, "name", "z-a")).toEqual(arrOrder);
  });
  it("la funcion sortData deberia ordenar a-z", () => {
    let arrOrderInver = sortData(dataPoke, "name", "a-z");
    expect(sortData(dataPoke, "name", "a-z")).toEqual(arrOrderInver);
  });
  it("la funcion filterData ordenar por tipo water", () => {
    let arrfilterWater = filterData(dataPoke, "Water");
    expect(filterData(dataPoke, "Water")).toEqual(arrfilterWater);
  });
  it("la funcion filterData filtra por Grass", () => {
    let arrFilterGrass = filterData(dataPoke, "Grass");
    expect(filterData(dataPoke, "Grass")).toEqual(arrFilterGrass);
  });
  it("la funcion computeStats deberia sacar el promedio del peso de todos los pokemones", () => {
    expect(computeStats(dataPoke)).toEqual(35);
  });
});
