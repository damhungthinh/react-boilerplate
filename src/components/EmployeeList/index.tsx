import { Employee } from '../../models/Employee'
import './styles.scss'

type EmployeeListProps = {
  list: Array<Employee>
  onDelete: (id: number) => void
}

export const EmployeeList = (props: EmployeeListProps) => {
  const { list, onDelete } = props
  return (
    <div className='employee-list list-group'>
      <div className='employee-list-header list-group-item'>
        <div className='row'>
          <div className='col-1'>No.1</div>
          <div className='col'>Full name</div>
          <div className='col-4'>Email</div>
          <div className='col-1'>Gender</div>
          <div className='col-1'></div>
        </div>
      </div>

      {list.map((it, index) => (
        <div key={it.id} className='list-group-item'>
          <div className='row align-items-center'>
            <div className='col-1'>{it.id}</div>
            <div className='col'>{`${it.firstName} ${it.lastName}`}</div>
            <div className='col-4'>{it.email}</div>
            <div className='col-1'>{it.gender}</div>
            <div className='col-1'>
              <div className='btn btn-danger' onClick={() => onDelete(it.id)}>
                <em className='fa fa-close' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
