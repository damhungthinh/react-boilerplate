import { Button, Form, Input, InputNumber, Modal, Space } from 'antd'

type MenuModalProps = {
  isOpen: boolean
  onClose: () => void
  onFinish: (values: any) => void
  onFinishFailed: (errorInfo: any) => void
}

export const MenuModal = (props: MenuModalProps) => {
  const { isOpen, onClose, onFinish, onFinishFailed } = props

  return (
    <Modal title='Edit menu' footer={null} visible={isOpen} onCancel={onClose}>
      <Form
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
          name='Name'
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Price'
          name='price'
          rules={[{ required: true, message: 'Please input product price!' }]}
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
