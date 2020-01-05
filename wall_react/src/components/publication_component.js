import React, { Component } from 'react';

class PublicationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    render() {
        return <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{this.props.author}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{this.props.date}</h6>
    <p className="card-text">{this.props.content}</p>
        </div>
      </div>
    }
}
 
export default PublicationComponent;