import { useState } from 'react'
import { EmployeeFilterConditions } from '../../models/Employee'
import { InputField } from '../InputField'

type EmployeeFilterProps = {
  onSubmit: (conditions: EmployeeFilterConditions) => void
}

export const EmployeeFilter = (props: EmployeeFilterProps) => {
  const [conditions, updateConditions] = useState<EmployeeFilterConditions>({
    fullname: '',
    email: '',
  })

  const handleConditionChanged = (name: string, value: string) => {
    updateConditions({
      ...conditions,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    props.onSubmit(conditions)
  }

  return (
    <div className='card '>
      <div className='card-body'>
        <form>
          <div className='row align-items-end'>
            <div className='col-3'>
              <InputField
                type='text'
                name='fullname'
                label='Fullname'
                placeholder='Fullname for search'
                value={conditions.fullname}
                onChange={handleConditionChanged}
              />
            </div>
            <div className='col-3'>
              <InputField
                type='text'
                name='email'
                label='Email'
                placeholder='Email for search'
                value={conditions.email}
                onChange={handleConditionChanged}
              />
            </div>
            <div className='col-3'>
              <div className='btn btn-primary' onClick={handleSubmit}>
                Submit
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
