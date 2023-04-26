import React ,{Component} from 'react';
import axios from 'axios';

import {PartDesc,Line,PartTitle,Icon,WorkPart,Span,WorkTitle,WorkSection} from './style.js'
class   Work extends Component {
  state={
    works : []
  }

  componentDidMount() {
    axios.get('js/data.json')
    .then(res=>(this.setState({works:res.data.works})))
  }
 
  render(){
    const {works} = this.state;
    console.log(works)
    //const works=this.state.works;
    const workList=works.map( (workItem)=>{
      
      return(
        <WorkPart first={workItem.id} key={workItem.id}>
            <Icon className={workItem.icon_name}></Icon>
            <PartTitle><span>My</span> Work</PartTitle>            
            <Line/>
            <PartDesc>
                {workItem.body}    
            </PartDesc>
        </WorkPart>
      )
    })
    return(
      <WorkSection>
        <div className='container'>
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {workList}
        </div>
      </WorkSection>

    )
  }

}

export default Work;
