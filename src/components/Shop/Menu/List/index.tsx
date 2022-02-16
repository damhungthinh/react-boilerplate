import { Button, Image, Popconfirm, Space, Statistic, Table } from 'antd'

const columns = [
  {
    title: 'Picture',
    dataIndex: 'img',
    key: 'img',
    render: (url: string) => <Image width={57} height={55} src={url} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => <Statistic value={price} precision={2} />,
  },
  // {
  //   title: '',
  //   key: 'action',
  //   render: (_: any, record: any) => (
  //     <Space size='middle'>
  //       <Button type='link'>Edit {record.id}</Button>
  //       <Button type='primary' color='red'>
  //         Delete
  //       </Button>
  //     </Space>
  //   ),
  // },
]

const dataSource = [
  {
    id: 1,
    key: '1',
    name: 'Production 1',
    img: '/logo512.png',
    price: 11111,
  },
  {
    id: 2,
    key: '2',
    name: 'Product 2',
    img: '/logo512.png',
    price: 2222,
  },
]

type MenuListProps = {
  data: Array<any>
  onOpenEditModal: (productId: number) => void
}

export const List = (props: MenuListProps) => {
  const { data, onOpenEditModal } = props
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
    <Table dataSource={temp} style={{ marginTop: 10 }}>
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
                console.log(record.id)
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
