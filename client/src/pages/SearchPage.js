import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchPage extends React.Component {
    state = {
        error: false,
        success: false,
        content: '',

    }
    contentChanged = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log(this.state.content);
    }

    SearchPost =(e) => {
        fetch("")
    }


    render() {
        if(this.state.success) return <Redirect to="/" />;

        return (
            <div className="col-10 col-md-8 col-lg-7">
                
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.content}
                        className="form-control mr-3 rounded"
                        onChange={this.contentChanged}
                        
                    />
                    <button className="btn btn-primary" onClick={this.savePost}>Search</button>
                </div>
            </div>

        );
    }
}
export default SearchPage;