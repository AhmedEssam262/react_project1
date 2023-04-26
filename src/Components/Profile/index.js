import React ,{Component} from 'react';
import './style.css';
const  Profile =()=> {
  return (
    <div class="profile_skills">
    <div class="container">
        <div class="profile">
            <h2 class="profile-title"><span>My </span>Profile</h2>
            <ul class="profile-list">
                <li class="profile-item">
                    <span>Name</span>
                    Ahmed Essam
                </li>
                <li class="profile-item">
                    <span>Birthday</span>
                    26/2/2000
                </li>
                <li class="profile-item">
                    <span>Univerisy</span>
                    Ain shams
                </li>
                <li class="profile-item">
                    <span>Phone</span>
                    01149071132
                </li>
                <li class="profile-item">
                    <span>Email</span>
                    ahmed.essameldin262@gmail.com
                </li>
                <li class="profile-item">
                    <span>GitHub</span>
                    <span class="web">https://github.com/AhmedEssam262</span>
                </li>
            </ul>
        </div>
        
        <div class="skills">
            <h2 class="skills-title">Some <span>skills</span></h2>
            <p class="skills-desc">
           Iam a software engineer, graduated from faculty of engineering Ainshams Univerisy,2023
            </p>
            <div class="bar">
                <span class="title">Backend (Laravel)</span>
                <span class="perc">80%</span>
                <div class="parent">
                    <span class="sp1"></span>
                </div>
            </div>
            
            <div class="bar">
                <span class="title">Frontend(React)</span>
                <span class="perc">70%</span>
                <div class="parent">
                    <span class="sp2"></span>
                </div>
            </div>
            
            <div class="bar">
                <span class="title">Software</span>
                <span class="perc">90%</span>
                <div class="parent">
                    <span class="sp3"></span>
                </div>
            </div>
        </div>
        
    </div>
</div>
  );
}

export default Profile;
