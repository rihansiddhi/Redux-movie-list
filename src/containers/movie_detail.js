import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
    render() { 
        if(!this.props.movie){
            return <div>Select a Movie.</div>;
        }
        return ( 
            <div>
                <h3>Details for:</h3>
                <div>
                    Title : {this.props.movie.title} <br/>
                    Genre : {this.props.movie.genre}
                </div>
            </div>
         );
        }
    }
    
    function mapStateToProps(state){
        return {
            movie : state.activeMovie
        }
    }
    
    export default connect (mapStateToProps)(MovieDetail);
        // renderMovie(){
        //     if(this.props.movie)
        //         return this.props.movie.title;
        //     else
        //         return 'No Book Selected';
        // }