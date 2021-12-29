import { useState } from 'react'
import { Employee, EmployeeFilterConditions } from '../../models/Employee'
import { InputField } from '../InputField'

type EmployeeFormProps = {
  data: Employee
  onSubmit: (data: Employee) => void
}
export const EmployeeForm = (props: EmployeeFormProps) => {
  const { data, onSubmit } = props
  const [form, updateForm] = useState<Employee>(data)

  const handleValueChanged = (name: string, value: string) => {
    updateForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    onSubmit(form)
    updateForm({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    })
  }

  return (
    <div className='card '>
      <div className='card-body'>
        <form>
          <div className='row align-items-end'>
            <div className='col'>
              <InputField
                type='text'
                name='firstName'
                label='First Name'
                value={form.firstName}
                onChange={handleValueChanged}
              />
            </div>
            <div className='col'>
              <InputField
                type='text'
                name='lastName'
                label='Last Name'
                value={form.lastName}
                onChange={handleValueChanged}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <InputField
                type='text'
                name='email'
                label='Email'
                value={form.email}
                onChange={handleValueChanged}
              />
            </div>
          </div>
          <div className='btn btn-primary mt-3' onClick={handleSubmit}>
            Add
          </div>
        </form>
      </div>
    </div>
  )
}
