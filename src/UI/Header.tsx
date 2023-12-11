import React from "react"
import { Box, Container, Flex, Spacer } from "@chakra-ui/react"

interface IHeaderProps { logout: () => void}

const Header: React.FC<IHeaderProps> = ({ logout }) => {
  return (
    <Container as={"header"} maxW={"100%"} height={100} bgColor={"teal"}>
      <Flex>
        <Box height={"full"}>dasd</Box>
        <Spacer />
      </Flex>
    </Container>
  )
}

export default Header
