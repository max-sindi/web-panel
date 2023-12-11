import React from "react"
import Input, {IStatefulAtom} from "src/UI/Input/Input"

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
