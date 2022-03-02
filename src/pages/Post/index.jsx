import styled from 'styled-components'
import MainPost from './mainpost/index.jsx'
import Comment from './comment/index.jsx'

const PostContainer = styled.div`
  width: 50%;
  margin: auto;
  background: white;
  padding: 10px;
`

function Post() {
  return (
    <>
      <PostContainer>
        <MainPost />
        <Comment />
      </PostContainer>
    </>
  )
}

export default Post
