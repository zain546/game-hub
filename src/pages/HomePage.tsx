import { Grid, Show, GridItem, Box, HStack, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger icon from React Icons
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra's hook for managing drawer state

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* Hamburger menu for small screens */}
      <Show below="lg">
        <IconButton
          aria-label="Open menu"
          icon={<FaBars />} // Using React Icons' FaBars for the hamburger icon
          position="absolute"
          top="80px"
          right={4}
          zIndex={10}
          onClick={onOpen}
          size="sm" // Optional: Adjusts size for better appearance
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent maxW="250px">
            <DrawerBody>
            <IconButton
                  aria-label="Close menu"
                  icon={<FaTimes />} // Close icon from React Icons
                  onClick={onClose}
                  left={`calc(100% - 30px)`}
                  top="10px"
                  size="sm"
                />
              <GenreList onGenreClick={onClose}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>

      {/* Sidebar for large screens */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      {/* Main content */}
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
