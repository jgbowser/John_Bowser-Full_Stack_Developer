import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../client'
import './AllPosts.css'

const AllPosts = () => {
  const [ allPostsData, setAllPosts ] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error)
  }, [])
  return(
    <section className='AllPosts'>
      <h1>Blog Posts</h1>
      <h2>Welcome to my blog</h2>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={'/' + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt='' />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </section>
  )
}

export default AllPosts