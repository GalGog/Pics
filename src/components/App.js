import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class  App extends React.Component {

        onSearchSubmit (term) {
           axios.get('https://api.unsplash.com/search/photos',{
               params: { query: term},
               headers: {
                   Authorization: 'Client-ID 9ea1c127d2814cd253337bec06dad5ed34c2861a271c59e344e758df668bbff2'
               }
           }).then((response) => {
               console.log(response.data.results);
        } );
        }



    render (){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );

    }

}

export default App;