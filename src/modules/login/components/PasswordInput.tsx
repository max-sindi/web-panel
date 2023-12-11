import React from "react"
import Input, { IStatefulAtom } from "src/UI/Input/Input"

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
