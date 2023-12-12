import React from "react"
import UsersTable from "src/modules/user/UsersTable"
import DefaultLayout from "src/components/Layout/DefaultLayout"
import { Heading } from "@chakra-ui/react"

interface IUsersPageProps {}

const UsersPage: React.FC<IUsersPageProps> = () => {
  return (
    <DefaultLayout header={true}>
      <UsersTable />
    </DefaultLayout>
  )
}

export default UsersPage
