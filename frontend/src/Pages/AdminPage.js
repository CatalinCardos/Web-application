import * as React from 'react';
import { useState } from 'react';
import { Table, Form, Input, Button, Modal } from "antd";
import { useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from "../Components/NavbarAdmin";
import { set } from 'date-fns';




const AdminPage = (props) => {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [players, setPlayers] = useState([]);
    const [logins, setLogins] = useState([]);
    const [form] = Form.useForm();

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
            title: "IDutil",
            dataIndex: "idutil",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="idutil">
                            <Input disabled />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Username",
            dataIndex: "username",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a username",
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
            title: "Password",
            dataIndex: "password",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a password",
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
            title: "Last Name",
            dataIndex: "lastName",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a last name",
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
            title: "Fist name",
            dataIndex: "firstName",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a first name",
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
            title: "County",
            dataIndex: "county",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="county"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a county",
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
            title: "City",
            dataIndex: "city",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="city"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a city",
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
            title: "Address",
            dataIndex: "address",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="address"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a address",
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
            title: "Rating",
            dataIndex: "rating",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="rating"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a rating",
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
            title: "Knows Football",
            dataIndex: "knowsFootball",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="knowsFootball"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <select >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Knows Basket",
            dataIndex: "knowsBasket",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="knowsBasket"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <select >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Knows Tennis",
            dataIndex: "knowsTennis",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="knowsTennis"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <select >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },

        {
            title: "Knows Handball",
            dataIndex: "knowsHandball",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="knowsHandball"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <select >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Role",
            dataIndex: "role",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="role"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <select >
                                <option value="user">User</option>
                                <option value="employee">Employee</option>
                            </select>
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
        },
        {
            title: "Favorite Sport",
            dataIndex: "favoriteSport",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="favoriteSport"
                            rules={[
                                {
                                    required: true,
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
                    </>
                );
            },
        },
    ];

    const [deleteItems, setDeleteItems] = useState([])
    const deleteRow = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this user?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                
                let aux = dataSource.find((user) => user.key === record)
                deleteItems.push(aux)
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

            const response = await axios.get("http://localhost:8081/register/getAllUsers", {});
            setPlayers(response.data);
            const response2 = await axios.get("http://localhost:8081/login/getAll", {});
            setLogins(response2.data);

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
        if (players && logins) {
            logins.forEach(login => {
                let player = players.find(player => player.idutil === login.id);
                if (player) {
                    data.push({
                        key: index++,
                        id: player.id,
                        idutil: player.idutil,
                        username: login.username,
                        password: login.password,
                        lastName: player.lastName,
                        firstName: player.firstName,
                        county: player.county,
                        city: player.city,
                        address: player.address,
                        favoriteSport: player.favoriteSport,
                        rating: player.rating,
                        role: player.role,
                        knowsFootball: `${player.knowsFootball}`,
                        knowsTennis: `${player.knowsTennis}`,
                        knowsBasket: `${player.knowsBasket}`,
                        knowsHandball: `${player.knowsHandball}`,
                    });
                }
            });
            setDataSource(data);
            console.log(data);
        }

    }, [players, logins]);

    const clickHandler = async (e) => {
        try {
            dataSource.forEach(async dataSource => {
                const loginUser = { id: dataSource.idutil, username: dataSource.username, password: dataSource.password }
                const dataUser = {
                    id: dataSource.id, idutil: dataSource.idutil, lastName: dataSource.lastName, firstName: dataSource.firstName,
                    county: dataSource.county, city: dataSource.city, address: dataSource.address, favoriteSport: dataSource.favoriteSport,
                    rating: dataSource.rating, knowsFootball: dataSource.knowsFootball, knowsBasket: dataSource.knowsBasket,
                    knowsHandball: dataSource.knowsHandball, knowsTennis: dataSource.knowsTennis, role: dataSource.role
                }
                console.log(loginUser);
                await axios.put("http://localhost:8081/register/putUserDate", dataUser);
                await axios.put("http://localhost:8081/login/putUserLogin", loginUser);


            });
        } catch (e) {
            console.log(e);
            alert("Something went wrong");
        }
        try {
            console.log(deleteItems);
            deleteItems.forEach(async deleteItem => {
                await axios.delete(`http://localhost:8081/team/deletePlayerID/${deleteItem.id}`, {});
                await axios.delete(`http://localhost:8081/register/removeUser/${deleteItem.id}`,{});
                await axios.delete(`http://localhost:8081/login/removeLogin/${deleteItem.idutil}`, {});


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
            <button className='submit-btn' onClick={clickHandler} >Save</button>
        </div>
    );
}
export default AdminPage;