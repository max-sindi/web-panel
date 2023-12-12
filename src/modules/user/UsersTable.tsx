import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Heading,
} from "@chakra-ui/react"
import { useAppSelector } from "src/setup/hooks"
import { usersBasicSelectors } from "src/modules/user/user.slice"
import UserRow from "src/modules/user/components/UserRow/UserRow"

interface IUsersTableProps {}

const UsersTable: React.FC<IUsersTableProps> = () => {
  const usersIds = useAppSelector(usersBasicSelectors.selectIds)
  return (
    <>
      <Heading size={"md"} p={5}>
        Users
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Email</Th>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Gender</Th>
              <Th>Ip Address</Th>
              <Th>Friends</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usersIds.map((userId) => (
              <UserRow id={userId} key={userId} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default UsersTable
