import React, { Component, PropTypes } from 'react';
import axios from 'axios'

const BASE_URL = "http://localhost:4000/";
const API_URL = BASE_URL + "api/v1/";
const API_KEY = '8123503d3a95cb5a30d763f23ef2f2e85e6aad50da2170405ad9c3ad3e5cfd96'

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
        // this.getQuestions = this.getQuestions.bind(this)
    }

    getQuestions() {
        axios.get(`${API_URL}/questions?api_key=${API_KEY}`)
          .then((response) => {
            this.setState({
                questions: response.data
            })
        })
          .catch((error) => {
            console.log(error);
          });
    }

    componentDidMount(){
        this.getQuestions()
    }

    renderQuestion(question) {
        return <ul key={`question_${question.id}`}>
            <li>ID: {question.id}</li>
            <li>Title: {question.title}</li>
        </ul>
    }

    render() {
        const questions = this.state.questions.map((question) => {
            return this.renderQuestion(question)
        })

        return(
            <div>
                <h1>Questions</h1>
                {questions}
            </div>
        );
    }
}


// Questions.propTypes = propTypes;
// Questions.defaultProps = defaultProps;

export default Questions;
