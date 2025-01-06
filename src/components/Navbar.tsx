import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <HStack p={4}>
      <Link to="/">
      <Image className="logo" src={logo} alt="logo" boxSize={12} objectFit="cover"></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
