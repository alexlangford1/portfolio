import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

import image from '../images/Untitled.png'



// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/alex.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(1, .7fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-32 shadow-lg h-32`};
  object-fit: cover;
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
  color: rgba(0,0,0,.9);
`



const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Alex Langford.
        </BigTitle>
       <Subtitle>I'm creating awesome web experiences for the next generation of consumer-facing companies.</Subtitle>
       
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Wander"
            link="https://wander-dev.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            image={`${image}`}
          >
            This project is a vacation planner, My personal project while at DevMountain.
          </ProjectCard>
          <ProjectCard
            title="Group Project"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to left, #D4145A 0%, #FBB03B 100%)"
          >
            
            Super cool project
          </ProjectCard>
         
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Langford" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:alexlangford1@live.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/alex-langford/">LinkedIn</a> &{' '}
            <a href="https://github.com/alexlangford1/">GitHub</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Alex Langford.{' '}
          <a href="https://github.com/alexlangford1/">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
