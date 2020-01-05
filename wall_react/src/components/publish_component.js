import React, { Component } from 'react';
const axios=require('axios').default;

class PublishComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formExpanded:false
        }
    }
 
    publish=(event)=>{
        event.preventDefault();
        let d = new Date().toISOString();
        let okDate=d.slice(0,10)+' '+d.slice(11,19);
        axios.post(process.env.REACT_APP_API_URL+"/publication",{
            author:this.state.tempAuthor,
            content:this.state.tempContent,
            date:okDate})
        .then(()=>{
            this.props.onPublish();
        })
        .catch(error=>{
            let message = "Error : ";
            if(error.response!==undefined){
                message += error.response.status+" : "+error.response.statusText;
            }
            else{
                message+=error.message;
            }
            console.log(message);
        });
    }

    changeTempAuthor=(event)=>{
        this.setState({
            tempAuthor:event.target.value
        });
    }

    changeTempContent=(event)=>{
        this.setState({
            tempContent:event.target.value
        });
    }

    onClickWrite=(event)=>{
        this.setState({
            formExpanded:event.target.attributes["aria-expanded"].value
        });
    }

    render() {
        return <><div className="text-right mt-3">
        <button onClick={this.onClickWrite} className="btn btn-success mb-2" type="button" data-toggle="collapse" data-target="#form-publish" aria-expanded="false" aria-controls="input-publish">
            {this.state.formExpanded==="true"?"Hide the form" : "Write a post"}
        </button></div>
                        <div className="collapse" id="form-publish">
        <form onSubmit={this.publish}>
                <div className="form-group">
                    <label htmlFor="input-author">Author</label>
                    <input onChange={this.changeTempAuthor} placeholder="Author" required maxLength={255} type="text" className="form-control" id="input-author"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-content">Content</label>
                    <textarea onChange={this.changeTempContent} placeholder="Content" required maxLength={255} className="form-control" id="input-content" rows="3"></textarea>
                </div>
            <div className="text-right"><button type="submit" className="btn btn-success mb-2">Publish</button></div>
        </form>
                        <hr/>
                        </div>
        </>
    }
}
 
export default PublishComponent;