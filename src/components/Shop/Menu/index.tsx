import { Layout } from 'antd'
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

  return (
    <Layout.Content
      style={{ padding: 10, background: '#80808026', height: '100vh' }}
    >
      <Header />
      <List data={dataSource} onOpenEditModal={() => switchOpen(true)} />
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
