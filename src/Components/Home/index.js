import React ,{Component} from 'react';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js';
const  Home =()=> {
  return (
    <HomeSection>
    <div class="container">
        <HomeInformation>
            <HomeTitle>Ahmed Essam</HomeTitle>
            <HomeInfo>Software Engineer</HomeInfo>
            <HomeDesc>
                Iam a professional <Span>Full-stack developer</Span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
    </div>
</HomeSection>
  );
}

export default Home;
