import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { BackButton, Container, DivBackButton, Image, ImageDiv, Text, Title, Parag } from "./PostStyle"

function Post () {
  const [ postContent, setPostContent ] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    handlePost()
  }, [slug]);

  const handlePost = () => {
    axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then((response) => {
        console.log(response.data);
        setPostContent(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  console.log(postContent)

  return (
    <div>
      {postContent && (
        <Container>
          <ImageDiv>
            <Image src={postContent[0]._embedded["wp:featuredmedia"][0].source_url} alt=''/>
          </ImageDiv>
          <Title>{postContent[0].title.rendered}</Title>
          <Parag>
              <p>Criado em:  {postContent[0].date}</p>
              <p>Modificado em:  {postContent[0].modified}</p>          
          </Parag>        
          <Text dangerouslySetInnerHTML={{__html: postContent[0].content.rendered}}/>
        </Container>
      )}
      <DivBackButton>
        <BackButton>
          <Link to={"/"}>Voltar</Link>
        </BackButton>
      </DivBackButton>
      
    </div>
  )
}

export default Post;