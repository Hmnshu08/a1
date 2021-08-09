import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Space } from 'antd';
import axios from 'axios';
import address from 'address';




const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render(text, record) {
      return {
          props: {
          style: { textTransform: record.id > 5 ? "capitalize" : "uppercase" },
        },
          children: <div>{text}</div>,
      };
    },
    
    
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    defaultSortOrder:'descend',
    sorter: true,
    render: address => `${address.street} ${address.city}`,
    width:'20%'
  },
  {
    title: 'Company',
    dataIndex: 'company',
    sorter: true,
    render: company => `${company.name}`,
    width:'20%'
  }
]


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData : []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const userData = res.data;
        this.setState({ userData });
      })
  }


  

  render(){
    return (
      <div className="App">
        
        {/* {this.state.userData.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))} */}
        <Table columns={columns} dataSource={this.state.userData} size="small" />


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }

  
}

export default App;
