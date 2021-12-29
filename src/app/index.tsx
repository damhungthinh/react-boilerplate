import { useEffect, useState } from 'react'
import { EmployeeFilter } from '../components/EmployeeFilter'
import { EmployeeForm } from '../components/EmployeeForm'
import { EmployeeList } from '../components/EmployeeList'
import employeeData from '../data/employee.json'
import { Employee, EmployeeFilterConditions } from '../models/Employee'

export const Main = () => {
  // list for display
  const [list, setList] = useState(employeeData)

  // list for filter
  const [originalList, setOriginalList] = useState(employeeData)

  const [filterConditions, setConditions] = useState<EmployeeFilterConditions>({
    fullname: '',
    email: '',
  })

  const handleDeleteEmployee = (id: number) => {
    if (window.confirm('Delete this items')) {
      const nextOrginalList = [...originalList.filter((it) => it.id !== id)]
      setOriginalList(nextOrginalList)
    }
  }

  const handleFilter = (conditions: EmployeeFilterConditions) => {
    const { fullname, email } = conditions
    let nextList = [...originalList]
    if (fullname) {
      nextList = nextList.filter((it) =>
        `${it.firstName} ${it.lastName}`.includes(fullname)
      )
    }

    if (email) {
      nextList = nextList.filter((it) => it.email.includes(email))
    }

    setList(nextList)
    setConditions(conditions)
  }

  const handleAdd = (data: Employee) => {
    const nextList = [
      ...originalList,
      {
        ...data,
        id: Math.round(Math.random() * 10000),
      },
    ]

    setOriginalList(nextList)
  }

  useEffect(() => {
    handleFilter(filterConditions)
  }, [originalList])

  return (
    <div className='container-fluid py-3'>
      <div className='row'>
        <div className='col-3'>
          <EmployeeForm
            data={{
              id: 0,
              firstName: '',
              lastName: '',
              email: '',
              gender: '',
            }}
            onSubmit={handleAdd}
          />
        </div>
        <div className='col'>
          <EmployeeFilter onSubmit={handleFilter} />
          <EmployeeList list={list} onDelete={handleDeleteEmployee} />
        </div>
      </div>
    </div>
  )
}
