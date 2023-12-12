import React from "react"
import { Stack, Td, Tr } from "@chakra-ui/react"
import { EntityId } from "@reduxjs/toolkit"
import { useAppSelector } from "src/setup/hooks"
import { usersBasicSelectors } from "src/modules/user/user.slice"
import Friend from "src/modules/user/components/Friend/Friend"

interface IUserRowProps {
  id: EntityId
}

const UserRow: React.FC<IUserRowProps> = ({ id }) => {
  const userData = useAppSelector((store) =>
    usersBasicSelectors.selectById(store, id),
  )

  return (
    <Tr>
      <Td>{userData?.id}</Td>
      <Td>{userData?.email}</Td>
      <Td>{userData?.first_name}</Td>
      <Td>{userData?.last_name}</Td>
      <Td>{userData?.gender}</Td>
      <Td>{userData?.ip_address}</Td>
      <Td>
        <Stack>
          {userData?.friends?.map((friendId) => (
            <Friend id={friendId} key={friendId} />
          ))}
        </Stack>
      </Td>
    </Tr>
  )
}

export default UserRow
