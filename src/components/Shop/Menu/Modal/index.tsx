import { Button, Form, Input, InputNumber, Modal, Space } from 'antd'
import { useEffect } from 'react'
import { ShopMenuItem } from '../../../../models/ShopMenu'

type MenuModalProps = {
  isOpen: boolean
  data?: ShopMenuItem
  onClose: () => void
  onFinish: (values: any) => void
  onFinishFailed: (errorInfo: any) => void
}

export const MenuModal = (props: MenuModalProps) => {
  const { isOpen, data, onClose, onFinish, onFinishFailed } = props
  const [form] = Form.useForm()
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name,
        price: data.price,
      })
    } else {
      form.setFieldsValue({
        name: '',
        price: 0,
      })
    }
  }, [data])
  return (
    <Modal title='Edit menu' footer={null} visible={isOpen} onCancel={onClose}>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Price'
          name='price'
          rules={[
            { required: true, message: 'Please input product price!' },
            // { min: 10, message: 'Please input product price >= 10!' },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button type='ghost' htmlType='reset'>
              Reset
            </Button>
            <Button type='ghost' onClick={onClose}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}
