import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <HStack p={2}>
      <Link to="/">
      <Image className="logo" src={logo} alt="logo" boxSize={16} objectFit="contain"></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
