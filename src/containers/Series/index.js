import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component{
    state = {
        series:[],
        seriesName :'',
        isFetching : false
    }
    
    componentDidMount(){
        // const series = ['Vikings','Game of thrones'];
        // setTimeout(() => {
        //   this.setState({series});
        // }, 2000)
    
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        // .then((response) => response.json())
        // .then(json => this.setState({series:json}))
    }

    onSeriesInputChange = (e) => {
        //console.log(e);
        //console.log(e.target.value);
        this.setState(
            {seriesName : e.target.value, 
            isFetching:true }
        );
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({series:json, isFetching:false}))
    }

    render(){
        const {series, seriesName, isFetching} = this.state;
        return(
            <div>
                <Intro message="This is a custom message.."/>
                <div>
                    <input 
                        type="text" 
                        value={seriesName}
                        onChange={this.onSeriesInputChange} 
                    />
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === ""
                    &&
                    <p>Please enter series name in the input</p> 
                }
                {
                  !isFetching && series.length === 0 && seriesName.trim() !== ""
                  &&
                  <p>No TV series available with this name</p>   
                }
                {
                  isFetching && <Loader />   
                }
                {
                  !isFetching && <SeriesList list={this.state.series} />  
                }
            </div>  
        )
    }
}

export default Series