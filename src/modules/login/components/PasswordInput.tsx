import React from "react"
import Input from "src/UI/Input/Input"
import {IStatefulAtom} from "src/tools/types"

interface IPasswordInputProps extends IStatefulAtom<string> {}

const PasswordInput: React.FC<IPasswordInputProps> = ({ value, onChange }) => {
  return (
    <Input
      formControllerProps={{ isRequired: true }}
      labelProps={{ label: "Password" }}
      inputProps={{ value, onChange }}
    />
  )
}

export default PasswordInput
