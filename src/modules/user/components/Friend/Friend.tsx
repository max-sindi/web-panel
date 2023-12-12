import React from "react"
import {friendsBasicSelectors, TFriendId} from "src/modules/friend/friend.slice"
import {useAppSelector} from "src/setup/hooks"
import {Box} from "@chakra-ui/react"

interface IFriendProps {
  id: TFriendId
}

const Friend: React.FC<IFriendProps> = ({ id }) => {
  const friend = useAppSelector(state => friendsBasicSelectors.selectById(state, id))
  return (
    <Box>
      {friend?.name}
    </Box>
  )
}

export default Friend