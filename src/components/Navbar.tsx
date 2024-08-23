import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <HStack p={4}>
      <Image className="logo" src={logo} alt="logo" boxSize={10}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
