import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenresListSkeleton from "./GenresListSkeleton";

const GenreList = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const { data, isLoading } = useGenres();
  return (
    <List>
      {isLoading &&
        skeleton.map((skeleton) => <GenresListSkeleton key={skeleton} />)}
      {data.map((genre) => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
