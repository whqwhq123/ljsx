import React, { useState, useEffect } from 'react';
import { Form, Button, Select, Input, DatePicker, Tooltip, Row, Col } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default ({ query, dispatch }) => {
    const [form] = Form.useForm();
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        form.resetFields()
    })


    // 点击查询按钮
    const handleClick = () => {
        form.validateFields().then(val => {
            dispatch({
                type: 'AllocatonList/clickSearch',
                payload: val
            })
        })
    }

    // //重置表单，先清空query,再触发表单内容重置
    function onReset() {
    //     dispatch({
    //         type: 'OrderList/clearForm',
    //     }).then(() => {
    //         form.resetFields();
    //     });
    }


    const expandForm = () => {
        if (expand) {
            return (
                <>
                    <Col span={6}>
                        <Form.Item label="仓库编码" name="warehouseNumber">
                            <Input placeholder='请输入仓库编码' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="仓库名称" name="warehouseName">
                            <Input placeholder="请输入仓库名称" />
                        </Form.Item>
                    </Col>
                </>
            )
        }
        return null;
    }

    return (
        <Form
            form={form}
            layout='horizontal'
            initialValues={{
                ...query
            }}
            style={{ marginBottom: "16px", padding: "20px 18px 0px 18px", background: "#ffff" }}
        >
            <Row gutter={24}>
                <Col span={6}>
                    <Form.Item label="组织编号" name="orderNumber">
                        <Input placeholder="请输入组织编号" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="组织编码" name="merchantNumber">
                        <Input placeholder="请输入组织编码" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="组织名称" name="merchantName">
                        <Input placeholder="请输入组织名称" />
                    </Form.Item>
                </Col>
                {expandForm()}
                <Col span={6}>
                    <Form.Item>
                        <Button onClick={handleClick} type='primary' style={{ marginRight: 16 }}>查询</Button>
                        {/*<Button onClick={onReset}>重置</Button>
        <Button type='link' onClick={() => { setExpand(!expand) }}>{expand ? <UpOutlined /> : <DownOutlined />}{expand ? "收起" : "展开"}</Button>*/}
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};