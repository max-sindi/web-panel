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
import { signInBasicSelectors } from "src/modules/signIn/signIn.selector"

interface IUsersTableProps {}

const UsersTable: React.FC<IUsersTableProps> = () => {
  const usersIds = useAppSelector(usersBasicSelectors.selectIds)
  const { isSuperUser, isAdmin } = useAppSelector(
    signInBasicSelectors.roleSelector,
  )
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
              {(isAdmin || isSuperUser) && <Th>Email</Th>}
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Gender</Th>
              {isAdmin && <Th>Ip Address</Th>}
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
