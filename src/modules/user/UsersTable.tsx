import React from "react"
import Button from "src/UI/Button/Button.view"
import { useNavigate } from "react-router"

interface IUsersTableProps {}

const UsersTable: React.FC<IUsersTableProps> = () => {
  const navigate = useNavigate()
  return (
    <div>
      UsersTable
      <Button onClick={() => navigate("/login")}>to login page</Button>
    </div>
  )
}

export default UsersTable