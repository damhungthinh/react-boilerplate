import { Button, Card, Col, Descriptions, Row, Typography } from 'antd'
import { useNavigate } from 'react-router'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <Card>
      <Row align='middle'>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <Typography.Text strong>Shop name</Typography.Text>
            </Col>
            <Col span={12}>Shop 1</Col>
          </Row>
          <Row>
            <Col span={12}>
              <Typography.Text strong>Phone number</Typography.Text>
            </Col>
            <Col span={12}>09351234456</Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row align='middle' gutter={30}>
            <Col span={6}>
              <Typography.Text strong>Shop link</Typography.Text>
            </Col>
            <Col>
              <Typography.Text copyable>http://google.com.vn</Typography.Text>
            </Col>
            <Col>
              <Button type='primary'>Share</Button>
            </Col>
          </Row>
          <Button type='link' onClick={() => navigate('/orders')}>
            view orders
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
