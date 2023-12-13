import React from "react"
import { friendsBasicSelectors } from "src/modules/friend/friend.slice"
import { useAppSelector } from "src/setup/hooks"
import { Text } from "@chakra-ui/react"
import { TFriendId } from "src/modules/friend/friend.types"

interface IFriendProps {
  id: TFriendId
}

const Friend: React.FC<IFriendProps> = ({ id }) => {
  const friend = useAppSelector((state) =>
    friendsBasicSelectors.selectById(state, id),
  )
  return <Text fontWeight={600}>{friend?.name}</Text>
}

export default Friend
