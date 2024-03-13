import * as React from 'react';
import { useState } from 'react';
import { Table, Form, Input, Button, Modal } from "antd";
import { useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from "../Components/NavbarAdmin";



const AdminPage = (props) => {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [fields, setFields] = useState([]);
    const [form] = Form.useForm();
    const [deleteItems, setDeleteItems] = useState([]);
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="id">
                            <Input disabled />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a name",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Street",
            dataIndex: "street",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="street"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a street",
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Begin Hour",
            dataIndex: "beginHour",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="beginHour"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a begin hour",
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Final Hour",
            dataIndex: "finalHour",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="finalHour"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a final hour",
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Type",
            dataIndex: "type",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="type"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a type",
                                },
                            ]}>
                            <select >
                                <option value="Football">Football</option>
                                <option value="Basket">Basket</option>
                                <option value="Handball">Handball</option>
                                <option value="Tennis">Tennis</option>
                            </select>
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Actions",
            render: (_, record) => {
                return (
                    <>
                        <Button
                            type="link"
                            onClick={() => {
                                setEditingRow(record.key);
                                form.setFieldsValue({
                                    ...record,


                                });
                            }}
                        >
                            Edit
                        </Button>
                        <Button type="link" htmlType="submit">
                            Save
                        </Button>
                        <Button type="link" onClick={() => { deleteRow(record.key) }}>
                            Delete
                        </Button>
                        {console.log(dataSource)}
                    </>
                );
            },
        },
    ];
    const deleteRow = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this user?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                let aux = dataSource.find((user) => user.key === record)
                deleteItems.push(aux);
                setDataSource((pre) => {
                    return pre.filter((user) => user.key !== record);
                });
                setEditingRow(null);
            },
        });
    };
    const onFinish = (values) => {
        const updatedDataSource = [...dataSource];
        updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
        setDataSource(updatedDataSource);
        setEditingRow(null);
    };

    async function getAllUsers() {
        try {

            const response = await axios.get("http://localhost:8081/fields/getAllFields", {});
            setFields(response.data);


        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);


    useEffect(() => {
        const data = [];
        let index = 0;
        if (fields) {
            fields.forEach(feild => {
                data.push({
                    key: index++,
                    id: feild.id,
                    name: feild.name,
                    street: feild.street,
                    beginHour: feild.beginHour,
                    finalHour: feild.finalHour,
                    type: feild.type,
                });
            });
            setDataSource(data);
            console.log(data);
        }

    }, [fields]);

    const clickHandler = async (e) => {
        try {
            dataSource.forEach(async dataSource => {

                const field = { id: dataSource.id, name: dataSource.name, street: dataSource.street, beginHour: dataSource.beginHour, finalHour: dataSource.finalHour, type: dataSource.type };
                await axios.put("http://localhost:8081/fields/updateField", field);

            });
        } catch (e) {
            console.log(e);
            alert("Something went wrong");
        }
        try {
            console.log(deleteItems);
            deleteItems.forEach(async deleteItem => {

                const programs = await axios.get(`http://localhost:8081/program/getAllProgramsByFieldId/${deleteItem.id}`, {})
                programs.data.forEach(async program => {
                if (deleteItem.type === "Football") {
                    await axios.delete(`http://localhost:8081/team/removeTeam7v7/${program.id}`, {});
                } else
                    if (deleteItem.type === "Basket") {
                        await axios.delete(`http://localhost:8081/team/removeTeam5v5/${program.id}`, {});
                    } else
                        if (deleteItem.type === "Handball") {
                            await axios.delete(`http://localhost:8081/team/removeTeam7v7/${program.id}`, {});
                        } else
                            if (deleteItem.type === "Tennis") {
                                await axios.delete(`http://localhost:8081/team/removeTeam1v1/${program.id}`, {});
                            }
                        })
                await axios.delete(`http://localhost:8081/program/removeProgram/${deleteItem.id}`,{});
                await axios.delete(`http://localhost:8081/fields/removeField/${deleteItem.id}`, {});


            });
        } catch (e) {
            console.log(e);
            alert("Error while deleting users!")
        }
        alert("Users updated successfully!")
        setDeleteItems([]);
    }
    return (
        <div className="adminPageUsers">
            <NavbarAdmin />
            <header className="App-header">
                <Form form={form} onFinish={onFinish}>
                    <Table columns={columns} dataSource={dataSource}></Table>
                </Form>
            </header>
            <button className='submit-btn' onClick={clickHandler}>Save</button>
        </div>
    );
}
export default AdminPage;