import React from 'react';
import { Redirect } from 'react-router-dom';

function SearchField(props) {
    return (
      <div className="text-center mt-4">
        <input type="text" onChange={ props.changed } value={ props.value } />
        {/* <p>You entered: { props.value }</p> */}
      </div>);
  }

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
        this.setState({
            content: e.target.value
        })

        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.value)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
        .catch(error => {console.log(error)});
    }


    render() {
        if(this.state.success) return <Redirect to="/" />;

        return (
            <div className="col-10 col-md-8 col-lg-7">
                
                <div className="input-group">
                    <SearchField changed={ (e) => this.SearchPost(e) } value={ this.state.content } />
                    {/* <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.content}
                        className="form-control mr-3 rounded"
                        changed={ (e) => this.SearchPost(e) }
                        
                    /> */}
                    <button className="btn btn-primary" onClick={this.savePost}>Search</button>
                </div>
            </div>

        );
    }
}
export default SearchPage;