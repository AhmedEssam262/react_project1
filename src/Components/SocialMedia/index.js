import React ,{Component} from 'react';
import './style.css';
import axios from 'axios';
class  Social extends Component {
  state ={
    social:[]
  }
  componentDidMount() {
    axios.get('js/data.json')
    .then(res=>(this.setState({social:res.data.social})))
  }
  render() {
    const social=this.state.social;
    const socialList=social.map((s)=>{
      return(
        <div item={s.id} class="social pin" key={s.id}>
        <i class={s.icon}></i>
        <p>
            <span class="info1">{s.title}</span>
            <span class="info2">{s.body}</span>
        </p>
    </div>
      )
    })

    return (
      <div class="social-media">
              {socialList}
  </div>
    );
  }
}

export default Social;
