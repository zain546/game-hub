import { HStack, Skeleton, SkeletonText, Text } from "@chakra-ui/react";

const GenresListSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton height="20px" boxSize="35" borderRadius={8} />
      <Skeleton width="80px" height="6px" />
    </HStack>
  );
};

export default GenresListSkeleton;
