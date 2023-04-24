import React from 'react'
import HomePage from './homepage/HomePage'
import AboutPage from './aboutpage/AboutPage'
import MembersPage from './memberspage/MembersPage'
import ProjectPage from './projectspage/ProjectPage'
import ContactPage from './contactpage/ContactPage'
import Navbar from '../layouts/navbar/Navbar'

export default function AllPage() {
  return (
    <div id='/'>
         <Navbar></Navbar>
<HomePage></HomePage>
<AboutPage></AboutPage>
<MembersPage></MembersPage>
<ProjectPage></ProjectPage>
<ContactPage></ContactPage>
    </div>
  )
}
