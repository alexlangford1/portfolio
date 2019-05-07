import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import image from '../images/Untitled.png'


const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-6 text-white`};
  background-image: ${props => props.bg};
  display: flex;
  flex-direction: row;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const Image = styled.div`
  min-width: 50%;
  height: 270px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 30% 50%;
  border-radius: 9px;
`


const ProjectCard = ({ title, link, children, bg, image }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <div>
    <Title>{title}</Title>
    <Text>{children}</Text>
    </div>
    <Image image={image}/>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  
}
