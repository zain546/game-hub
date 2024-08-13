import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" p={4}>
      <Image className="logo" src={logo} alt="logo" boxSize={10}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
