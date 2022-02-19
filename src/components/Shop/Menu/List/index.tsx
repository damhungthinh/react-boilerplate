import { Button, Image, Popconfirm, Space, Statistic, Table } from 'antd'
import { ShopMenuItem } from '../../../../models/ShopMenu'

type MenuListProps = {
  data: Array<ShopMenuItem>
  onOpenEditModal: (productId: number) => void
  onConfirmDelete: (id: number) => void
}

export const List = (props: MenuListProps) => {
  const { data, onOpenEditModal, onConfirmDelete } = props
  let temp = [
    ...data,
    {
      id: 3,
      key: '3',
      name: 'Product 3',
      img: '/logo192.png',
      price: 333,
    },
  ]
  return (
    <Table dataSource={temp} style={{ marginTop: 10 }} pagination={false}>
      <Table.Column
        title='Picture'
        dataIndex='img'
        key='img'
        render={(url: string) => <Image width={57} height={55} src={url} />}
      />
      <Table.Column title='Name' dataIndex='name' key='name' />
      <Table.Column
        title='Price'
        dataIndex='price'
        key='price'
        render={(price: number) => <Statistic value={price} precision={2} />}
      />
      <Table.Column
        render={(text: any, record: any) => (
          <Space size='middle'>
            <Button type='link' onClick={() => onOpenEditModal(record.id)}>
              Edit
            </Button>
            <Popconfirm
              title='Delete this menu?'
              onConfirm={() => {
                onConfirmDelete(record.id)
              }}
            >
              <Button type='primary'>Delete</Button>
            </Popconfirm>
          </Space>
        )}
      />
    </Table>
  )
}
