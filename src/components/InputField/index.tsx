import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState, FunctionComponent } from 'react'

type InputProps = {
  label?: string
  type: string
  name: string
  placeholder?: string
  value?: string
  onChange?: (name: string, value: string) => void
}

export const InputField: FunctionComponent<InputProps> = (props) => {
  const {
    type,
    label,
    name,
    placeholder,
    // default props
    value = '',
    onChange,
  } = props
  const htmlId = uuidv4()

  // map props to state
  const [textValue, setTextValue] = useState(value)

  useEffect(() => {
    if (textValue !== value) {
      setTextValue(value)
    }
  }, [value])

  return (
    <>
      {/** React fragment */}
      {label && (
        <label htmlFor={htmlId} className='form-label text-capitalize'>
          {label}
        </label>
      )}
      <input
        className='form-control'
        type={type}
        id={htmlId}
        placeholder={placeholder}
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value)
        }}
        onBlur={() => {
          if (onChange) {
            onChange(name, textValue)
          }
        }}
      ></input>
    </>
  )
}
