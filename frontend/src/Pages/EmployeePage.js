import { useState, useEffect } from 'react';
import { Table, Button, Form, Input } from 'antd';
import axios from 'axios';
import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function EmployeePage() {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [players, setPlayers] = useState([]);
    const [form] = Form.useForm();
    const [searchText, setSearch] = useState("");

    const columns = [

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
            title: "Last Name",
            dataIndex: "lastName",
            filteredValue: [searchText],
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="lastName">
                            <Input disabled />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
            onFilter: (value, record) => {
                return record.lastName.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: "Fist name",
            dataIndex: "firstName",
            filteredValue: [searchText],
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="firstName">
                            <Input disabled />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>;
                }
            },
            onFilter: (value, record) => {
                return record.lastName.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: "County",
            dataIndex: "county",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="county">
                            <Input disabled />
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
                        <Form.Item name="city">
                            <Input disabled />
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
                        <Form.Item name="address">
                            <Input disabled />
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
                        <Form.Item name="rating">
                            <Input disabled />
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
            title: "Favorite Sport",
            dataIndex: "favoriteSport",
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item name="favoriteSport">
                            <Input disabled />
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
                    </>
                );
            },
        },
    ];
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
        if (players) {
            players.forEach(player => {
                if (player.role === "user") {
                    data.push({
                        key: index++,
                        id: player.id,
                        idutil: player.idutil,
                        lastName: player.lastName,
                        firstName: player.firstName,
                        county: player.county,
                        city: player.city,
                        address: player.address,
                        favoriteSport: player.favoriteSport,
                        rating: player.rating,
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

    }, [players]);

    const clickHandler = async (e) => {
        try {
            dataSource.forEach(async dataSource => {
                const dataUser = {
                    id: dataSource.id, idutil: dataSource.idutil, lastName: dataSource.lastName, firstName: dataSource.firstName,
                    county: dataSource.county, city: dataSource.city, address: dataSource.address, favoriteSport: dataSource.favoriteSport,
                    rating: dataSource.rating, knowsFootball: dataSource.knowsFootball, knowsBasket: dataSource.knowsBasket,
                    knowsHandball: dataSource.knowsHandball, knowsTennis: dataSource.knowsTennis, role: "user",
                }
                console.log(dataUser);
                await axios.put("http://localhost:8081/register/putUserDate", dataUser);
                alert("User data updated");

            })

        } catch (e) {
            console.log(e);
        }
    }
   
    return (
        <div className="adminPageUsers">
            <nav className="nav">
                <ul>
                    <h className="employeeName">Employee</h>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <CustomLink to="/"><i className="fa fa-fw fa-sign-out"></i></CustomLink>
                </ul>
            </nav>
            <header className="App-header">
                <Input.Search
                    placeholder="Search"
                    style={{ width: 350,
                        margin: 20,}}
                    onSearch={value => setSearch(value)}
                ></Input.Search>
                <Form form={form} onFinish={onFinish}>
                    <Table columns={columns} dataSource={dataSource}></Table>
                </Form>
            </header>
            <button className='submit-btn' onClick={clickHandler}>Save</button>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}