global.window = global;
// global.assert = require("chai").assert;
require("../src/data");
require("./data.spec.js");

test("GlobalPoke deberia ser un objeto", () => {
  expect(typeof GlobalPoke).toBe("object");
});
test("sortData deberia ser una funcion", () => {
  expect(typeof GlobalPoke.sortData).toBe("function");
});
test("filterData deberia ser una funcion", () => {
  expect(typeof GlobalPoke.filterData).toBe("function");
});
test("computeStats deberia ser una funcion", () => {
  expect(typeof GlobalPoke.computeStats).toBe("function");
});

describe("Probando funciones en data.js", () => {
  let dataPoke = [
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
  const arrOrderDes = [
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
    }
  ];

  const arrOrderAsc = [
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
  const arrfilterWater = [
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
  const arrFilterGrass = [
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
    }
  ];
  it("la funcion sortData deberia ordenar z-a", () => {
    expect(GlobalPoke.sortData(dataPoke, "name", "z-a")).toEqual(arrOrderDes);
  });
  it("la funcion sortData deberia ordenar a-z", () => {
    expect(GlobalPoke.sortData(dataPoke, "name", "a-z")).toEqual(arrOrderAsc);
  });
  it("la funcion filterData ordenar por tipo water", () => {
    expect(GlobalPoke.filterData(dataPoke, "Water")).toEqual(arrfilterWater);
  });
  it("la funcion filterData filtra por Grass", () => {
    expect(GlobalPoke.filterData(dataPoke, "Grass")).toEqual(arrFilterGrass);
  });
  it("la funcion computeStats deberia sacar el promedio del peso de todos los pokemones", () => {
    expect(GlobalPoke.computeStats(dataPoke)).toEqual(45);
  });
});
