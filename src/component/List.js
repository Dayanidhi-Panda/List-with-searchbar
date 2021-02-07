import React from 'react'
import Contact from './Contact';

export class List extends React.Component {

    constructor() {
        super()

        this.state = {
            
            users: null,
            orginalUsers: null,
        }
    }

    componentDidMount() {
        fetch('https://api.npoint.io/d6bd0efc05639084eb17/').then((resp) => {
            resp.json().then((res) => {
                console.log(res.playerList);
                // this.setState({ users: res.data })
                this.setState({ users: res.playerList })
                this.setState({ orginalUsers: res.playerList })
               
            })
        })
    }
    onSearchChange = (event) => {
        let input = event.target.value;

        if (input === '') {
            this.setState({ users: this.state.users });
        }

        var result = this.state.orginalUsers.filter(item => item.PFName.toLowerCase().includes(input));
        this.setState({ users: result });

    }

    render() {
  
        return (
            <div>
                <div className="outer_list">
                    <nav className="navbar navbar-light bg-primary justify-content-between">
                        <a className="navbar-brand">Navbar</a>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onSearchChange} />
                        </form>
                    </nav>
                        <Contact data={this.state.users} />
                </div>
                </div>
        )
    }
}

export default List
