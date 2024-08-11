import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image className="logo" src={logo} alt="logo" boxSize={10}></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
