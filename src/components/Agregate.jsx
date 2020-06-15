import React, { Component } from 'react';
import axios from 'axios';
import counter from '../assets/images/counterbanner.svg';
 
class Agregate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      total_donasi: '',
      posts: []
    } 
  };
  
  componentDidMount() {
    axios.get('http://165.22.100.70:8040/tim5/d/donasi').then(res => {
        this.setState({ count: res.data.count })
    });
    axios.get('http://165.22.100.70:8040/tim5/p/total').then(res => { 
      this.setState({ posts : res.data })
    });
  }

  displayTotalDonasi = (posts) => {
    if (!posts.length) return null;

    return posts.map ((post) => (
      <p>{post.total_donasi}</p>
    ));
  };

  render()
  {
    return(
      <div>
        <div> 
        <img src={counter} alt="counter.svg" className="counter" /> 
           <p className="Wdana"> DANA TERKUMPUL (RUPIAH)</p>
           <p className="Wjumlahdana">{this.displayTotalDonasi(this.state.posts)}</p>

           <p className="Wdonatur">TOTAL PROGRAM DONASI</p>
           <p className="Wjumlahdonatur">{this.state.count}</p>
       </div>
      </div>
    ) 
  }
}

export default Agregate;
