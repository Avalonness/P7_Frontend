import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PostContainer = styled.div`
  width: 50%;
  margin: auto;
  background: white;
  padding: 10px;
`

let Post = () => {
  // let [post, setPost] = useState([])
  // let [value3, setValue3] = useState('')
  // let [value4, setValue4] = useState('')
  // const idUrl = useParams()
  // const id = idUrl.id
  // console.log(id)

  // useEffect(() => {
  //   fetch(`http://localhost:8080/getOne/${id}`, {
  //     headers: {
  //       Authorization: localStorage.getItem('Token_Groupo'),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setPost(data))
  // }, [value3])

  // console.log(post)

  return (
    <>
      <PostContainer>pouet</PostContainer>
    </>
  )
}

export default Post
