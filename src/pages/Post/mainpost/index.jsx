import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ContainerPost = styled.div`
  width: 80%;
  margin: auto;
`

const HeaderPost = styled.div`
  display: flex;
  background: ${colors.secondary};
  position: relative;
  height: 60px;
  & img {
    border: ${colors.secondary} 2px solid;
    position: absolute;
    left: 15px;
    top: 20px;
    width: 100px;
    height: 100px;
  }
  & h2 {
    font-size: 20px;
    line-height: 3;
    text-align: left;
    color: white;
    margin-left: 130px;
  }
`

const BodyPost = styled.div`
  background: ${colors.backgroundLight};
  min-height: 80px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & p {
    width: 83%;
    text-align: justify;
  }
`

const MultiMediaContent = styled.div`
  margin: auto;
  & img {
    max-width: 450px;
    text-align: center;
  }
  &:after {
    content: ' ';
    border: ${colors.secondary} 2px solid;
    display: flex;
    width: 50%;
    margin: 15px auto 15px auto;
  }
`

let MainPost = () => {
  let [post, setPost] = useState([])
  let [value3, setValue3] = useState('')
  let [profile, setProfile] = useState([])
  let [value4, setValue4] = useState('')
  const idUrl = useParams()
  const id = idUrl.id

  useEffect(() => {
    fetch(`http://localhost:8080/getOne/${id}`, {
      headers: {
        Authorization: localStorage.getItem('Token_Groupo'),
      },
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [value3])

  useEffect(() => {
    fetch('http://localhost:8080/getUsers', {
      headers: {
        Authorization: localStorage.getItem('Token_Groupo'),
      },
    })
      .then((res) => res.json())
      .then((users) => setProfile(users))
  }, [value4])

  return (
    <>
      <ContainerPost key={post.id}>
        {/* En-tête ici ! */}
        {profile.map((user, index) => {
          return post.userId === user.id ? (
            <HeaderPost key={index}>
              <img src={user.profilImg} alt="Avatar profil" />
              <h2>{user.username}</h2>
            </HeaderPost>
          ) : null
        })}
        {/* Corps du message ! */}
        <BodyPost>
          {post.youtube !== 'null' ? (
            <MultiMediaContent>
              <iframe
                width="450px"
                height="280"
                src={post.youtube}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </MultiMediaContent>
          ) : null}

          {post.contentImg ? (
            <MultiMediaContent>
              <img src={post.contentImg} alt="Element multumedia" />
            </MultiMediaContent>
          ) : null}

          <p>{post.contentText}</p>
        </BodyPost>
        {/* Footer du message ! */}
        <div></div>
      </ContainerPost>
    </>
  )
}

export default MainPost
