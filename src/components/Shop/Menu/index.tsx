import { Layout, Modal } from 'antd'
import { useState } from 'react'
import { Header } from './Header'
import { List } from './List'
import { MenuModal } from './Modal'

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

export const Menu = () => {
  const [isOpen, switchOpen] = useState<boolean>(false)
  const handleOpenEditModal = (productId: number) => {
    const data = dataSource.find((it) => it.id === productId)
    if (!data) {
      return Modal.error({
        title: 'Error',
        content: `Menu item with id = ${productId} not found`,
      })
    }
    console.log(data)
    return switchOpen(true)
  }
  return (
    <Layout.Content
      style={{ padding: 10, background: '#80808026', height: '100vh' }}
    >
      <Header />
      <List data={dataSource} onOpenEditModal={handleOpenEditModal} />
      <MenuModal
        isOpen={isOpen}
        onClose={() => switchOpen(false)}
        onFinish={(value) => {
          console.log(value)
        }}
        onFinishFailed={(err) => console.log(err)}
      />
    </Layout.Content>
  )
}
