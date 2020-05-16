import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../themes/CartoonCharacters.css';
import Cartoonlist from './Cartoon-list';
import Cartoonsort from '../common-module/Cartoon-sort';
import Cartoonsearch from '../common-module/Cartoon-search';
const axios = require('axios');

class Cartooncontainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shows: [],
            filteredShows: [],
            search: '',
            sort: 'asc'
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.sortedShows = this.sortedShows.bind(this)
    }
    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => {
                this.setState({
                    shows: [...res.data.results],
                    filteredShows: [...res.data.results]
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    updateSearch(event) {
        const searchtext = event.target.value.toLowerCase();
        this.setState({ search: searchtext });
        this.filterList();
    }

    sortedShows(event) {
        const sortData = {
            shows: this.state.shows,
            sort: event.target.value
        }
        let sortedResults = Cartoonsort(sortData);
        this.setState({ filteredShows: [...sortedResults] });

    }

    filterList() {
        const searchData = {
            shows: this.state.shows,
            search: this.state.search
        }

        let shows = Cartoonsearch(searchData);
        this.setState({ filteredShows: [...shows] });
    }


    render() {
        // const sorted = this.state.filteredShows.sort((a, b) => {
        //     const isReversed = this.state.sort === 'asc' ? 1 : -1;
        //     return isReversed * a.name.localeCompare(b.name)
        // })
        return (
            <Container fluid className="top">
                <Row>
                    <Col className="title">Rick & Marty Show</Col>
                </Row>
                <Row>
                    <Col sm="12" md="3" ></Col>
                    <Col sm="12" md="3">
                        <input type='text' className="search" placeholder="search by name.."
                            value={this.state.search} onChange={this.updateSearch}>
                        </input>
                    </Col>
                    <Col sm="12" md="3">
                        <select className="sort" onChange={this.sortedShows} >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </Col>
                    <Col sm="12" md="3">

                    </Col>
                </Row>

                <Row>
                    <Cartoonlist shows={this.state.filteredShows} />
                </Row>
            </Container>
        )
    }
}

export default Cartooncontainer
