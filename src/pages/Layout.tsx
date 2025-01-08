import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={2} paddingTop={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
