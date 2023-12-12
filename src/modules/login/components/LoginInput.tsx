import React from "react"
import Input from "src/UI/Input/Input"
import {IStatefulAtom} from "src/tools/types"

interface ILoginInputProps extends IStatefulAtom<string> {}

const LoginInput: React.FC<ILoginInputProps> = ({ value, onChange }) => {
  return (
    <Input
      formControllerProps={{ isRequired: true }}
      labelProps={{ label: "Email" }}
      inputProps={{ value, onChange }}
    />
  )
}

export default LoginInput
