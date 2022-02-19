import { Layout, Modal, notification } from 'antd'
import { useEffect, useState } from 'react'
import { ShopMenuItem } from '../../../models/ShopMenu'
import { Header } from './Header'
import { List } from './List'
import { MenuModal } from './Modal'
import { v4 as uuidv4 } from 'uuid'

const dataSource: Array<ShopMenuItem> = [
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
  const [selectedItem, setSelectedItem] = useState<ShopMenuItem>()
  const [list, setList] = useState<Array<ShopMenuItem>>(dataSource)

  const handleOpenEditModal = (productId: number) => {
    const data = list.find((it) => it.id === productId)
    if (!data) {
      return Modal.error({
        title: 'Error',
        content: `Menu item with id = ${productId} not found`,
      })
    }
    setSelectedItem(data)
    return switchOpen(true)
  }

  const handleSubmitChanged = (value: ShopMenuItem) => {
    if (selectedItem) {
      // Update
      const nextList = [...list]
      const index = nextList.findIndex((it) => it.id === selectedItem.id)
      nextList[index] = value
      setList(nextList)
    } else {
      // Insert
      setList([...list, value])
    }

    return switchOpen(false)
  }

  const handleDeleteItem = (id: number) => {
    const data = list.find((it) => it.id === id)
    const nextList = [...list].filter((it) => it.id !== id)
    setList(nextList)
    notification.success({
      message: 'Success full deleted item: ' + data?.name,
      duration: 3,
      placement: 'bottomRight',
    })
  }

  useEffect(() => {
    if (!isOpen) {
      setSelectedItem(undefined)
    }
  }, [isOpen])

  return (
    <Layout.Content
      style={{ padding: 10, background: '#80808026', height: '100vh' }}
    >
      <Header onOpenNewModal={() => switchOpen(true)} />
      <List
        data={list}
        onOpenEditModal={handleOpenEditModal}
        onConfirmDelete={handleDeleteItem}
      />
      {isOpen && (
        <MenuModal
          isOpen={isOpen}
          data={selectedItem}
          onClose={() => switchOpen(false)}
          onFinish={(frmValue) => {
            const value: ShopMenuItem = {
              id: Math.random(),
              key: uuidv4(),
              img: '/logo512.png',
              name: frmValue.name,
              price: frmValue.price,
            }
            return handleSubmitChanged(value)
          }}
          onFinishFailed={(err) => console.log(err)}
        />
      )}
    </Layout.Content>
  )
}
