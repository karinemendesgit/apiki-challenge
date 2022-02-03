import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Button, Main } from "./HomeStyle";

function Home () {
  const [ post, setPost ] = useState([]);
  const [ page, setPage ] = useState(2);
  const [ totalPage, setTotalPage ] = useState(1);

  useEffect(() => {
    handleAllPosts();
  }, []);

  const handleAllPosts = () => {
    axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`)
      .then((response) => {
        
        setPost(response.data);
        setTotalPage(response.headers["x-wp-totalpages"]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleLoadingPosts = () => {
    if (page < totalPage) {
      setPage(page + 1);
      axios
        .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
        .then((response) => {
          console.log(response.data)
          setTotalPage(response.headers["x-wp-totalpages"]);
          setPost(response.data);
        })
    } if (totalPage === 1) {
      setPage(1);
      axios
        .get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1')
        .then((response) => {
          setPost(response.data);
        })
    }
  }
  
  return (
    <Main>    
      {post && post.map((item) => {
        return (
          <Card key={item.id}>
            <h2>{item.yoast_head_json.title}</h2>
            <div>
              <img src={item._embedded["wp:featuredmedia"][0].source_url} alt="" />
            </div>
            <p>{item.yoast_head_json.description}</p>            
            <Link to={`post/${item.slug}`}>Continuar</Link>
          </Card>
        )        
      })}       
      <div>
        <Button onClick={handleLoadingPosts}>Carregar mais...</Button>
      </div>
    </Main>
  )
}

export default Home;