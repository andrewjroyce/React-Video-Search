// import React from 'react';

// const SearchBar = () => {
//     return <input />;
// }

// export default SearchBar;

// plain JS function, functional component
// Then there are class components, interal record keeping and whats happening to itself while rendered
// This component needs to be introspective, needs to be aware of whats typed and communicate
// Once we have class "searchBar" we could just write "new SearchBar"
import React, {Component} from 'react'; // same as const Component=React.Component 

class SearchBar extends Component {
    constructor(props){
        super(props); // Component has its own constructor method, inherits parent method

        this.state = { term: ''};
    }
 
    render(){   //render is needed for any class, dif fthan other JS objects, still a method tho // all inputs have "Change" built in, html thing, this is react defined property
        return( <div className="search-bar">
            <input
                value={this.state.term}
                onChange={event=>this.onInputChange(event.target.value)}/> 
            </div>
        )  
        }

onInputChange(term){  //always called with event object, could be named e or whatever, 
    this.setState({term})
    this.props.onSearchTermChange(term)// the method that was "this.onInputChange" was eliminated for arrow function now in there
}
} 

export default SearchBar;