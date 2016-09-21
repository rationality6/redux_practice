import React, { Component, PropTypes } from 'react';

var BASE_URL = "http://localhost:3000/";
var API_URL = BASE_URL + "api/v1/";
var API_KEY = '8123503d3a95cb5a30d763f23ef2f2e85e6aad50da2170405ad9c3ad3e5cfd96'

$.get(
    API_URL = "questions",
    {api_key: API_KEY}
)

const propTypes = {

};
const defaultProps = {

};
class Questions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Questions</div>
        );
    }
}
Questions.propTypes = propTypes;
Questions.defaultProps = defaultProps;

export default Questions;
