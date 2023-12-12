import React from "react"
import {
  FormControl as ChakraFormControl,
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
  InputProps as ChakraInputProps,
  FormControlProps as ChakraFormControlProps,
  Input as ChakraInput,
} from "@chakra-ui/react"
import {IStatefulAtom} from "src/tools/types"

export interface IInputProps {
  inputProps?: Omit<ChakraInputProps, "onChange"> & IStatefulAtom<string>
  formControllerProps?: ChakraFormControlProps
  labelProps?: ChakraFormLabelProps & { label: React.JSX }
}

const Input: React.FC<IInputProps> = ({
  inputProps: { onChange, ...inputProps } = {},
  formControllerProps = {},
  labelProps: { label, ...labelProps } = {},
}) => {
  const _onChange: ChakraInputProps["onChange"] = (evt) => {
    if (onChange) {
      onChange(evt.target.value)
    }
  }
  return (
    <ChakraFormControl {...formControllerProps}>
      {label && <ChakraFormLabel>{label}</ChakraFormLabel>}
      <ChakraInput {...inputProps} onChange={_onChange} />
    </ChakraFormControl>
  )
}

export default Input
