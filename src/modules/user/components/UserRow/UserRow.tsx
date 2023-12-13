import React, { Fragment } from "react"
import { Divider, Stack, Td, Tr } from "@chakra-ui/react"
import { EntityId } from "@reduxjs/toolkit"
import { useAppSelector } from "src/setup/hooks"
import { usersBasicSelectors } from "src/modules/user/user.slice"
import Friend from "src/modules/user/components/Friend/Friend"
import { signInBasicSelectors } from "src/modules/signIn/signIn.selector"

interface IUserRowProps {
  id: EntityId
}

const UserRow: React.FC<IUserRowProps> = ({ id }) => {
  const userData = useAppSelector((store) =>
    usersBasicSelectors.selectById(store, id),
  )

  const { isSuperUser, isAdmin } = useAppSelector(
    signInBasicSelectors.roleSelector,
  )

  return (
    <Tr>
      <Td>{userData?.id}</Td>
      {(isAdmin || isSuperUser) && <Td>{userData?.email}</Td>}
      <Td>{userData?.first_name}</Td>
      <Td>{userData?.last_name}</Td>
      <Td>{userData?.gender}</Td>
      {isAdmin && <Td>{userData?.ip_address}</Td>}
      <Td>
        <Stack>
          {userData?.friends?.map((friendId, index, arr) => (
            <Fragment key={friendId}>
              <Friend id={friendId} />
              {index !== arr.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Stack>
      </Td>
    </Tr>
  )
}

export default UserRow
