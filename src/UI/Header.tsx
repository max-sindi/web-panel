import React from "react"
import {Box, Card, Container, Flex, Spacer} from "@chakra-ui/react"
import Button from "src/UI/Button/Button.view"

interface IHeaderProps { logout: () => void}

const Header: React.FC<IHeaderProps> = ({ logout }) => {
  return (
    <Container as={"header"} maxW={"100%"}>
      <Card>
        <Flex p={10} alignItems={"center"}>
          <Box>Our App</Box>
          <Spacer />
          <Button onClick={logout} >Logout</Button>
        </Flex>
      </Card>
    </Container>
  )
}

export default Header
