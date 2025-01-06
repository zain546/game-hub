import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Genre from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenresListSkeleton from "./GenresListSkeleton";

const GenreList = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  // if (isLoading) return <Spinner / >;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeleton.map((skeleton) => <GenresListSkeleton key={skeleton} />)}
        {data?.results.map((genre: Genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="35px"
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  color={selectedGenreId === genre.id ? "red" : ""}
                  onClick={() => setSelectedGenreId(genre.id)}
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
