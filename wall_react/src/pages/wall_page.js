import React, { Component } from 'react';
import PublicationComponent from '../components/publication_component';
import PublishComponent from '../components/publish_component';
const axios=require('axios').default;

class WallPage extends Component {
    constructor(props){
        super(props);
        this.state={
            publications:[],
            dateKey:Date.now()
        }
    }

    loadPublications=()=>{
        axios.get(process.env.REACT_APP_API_URL+'/publication')
        .then(response=>{
            this.setState({
                publications:response.data.reverse(),
                dateKey:Date.now()
            });
        })
        .catch(error=>console.log("error : ",error));
    }

    componentDidMount(){
        this.loadPublications();
    }
    
    render() {
        return( 
            <div>
                <div key={this.state.dateKey}>
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">The Wall</h1>
                        <PublishComponent onPublish={this.loadPublications}/>
                        {this.state.publications.map((p, index)=>{return <PublicationComponent key={index} author={p.author} content={p.content} date={new Date(p.date).toDateString()}/>})}
                    </div>
                </div>
            </div>
        );
    }
}

export default WallPage;