import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickDelete(surveyId) {
        console.log('delete clicked');
        this.props.deleteSurvey({ surveyId });
    }

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={ survey._id }>
                    <div className="card-content">
                        <span className="card-title">{ survey.title }</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={ () => this.onClickDelete(survey._id) }><i className="material-icons">delete</i></a>
                        <p>{ survey.body }</p>
                        <p className="right">Sent On: { new Date(survey.dateSent).toLocaleDateString() }</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: { survey.yes }</a>
                        <a>No: { survey.no }</a>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                { this.renderSurveys() }
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
