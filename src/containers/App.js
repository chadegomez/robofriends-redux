import React, { Component } from "react";
import { connect } from "react-redux/es/exports";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // const [ robots, setRobots ] = useState([]);
    // const [ searchField, setSearchField ] = useState('');
    // const [ count, setCount ] = useState(0);
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         // searchField: ''
    //     }
    // }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => {setRobots(users)})
    // }, [count])

    componentDidMount() {
        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users})
        // )
    }

    // const onSearchChange = event => {
    //     setSearchField(event.target.value);
    // }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
        return robot.name
            .toLowerCase()
            .includes(searchField.toLowerCase())
    })

    return isPending ?
        <h1 className="f2 neonText">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f2 neonText">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//check