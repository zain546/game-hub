import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const gameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default gameGrid;
