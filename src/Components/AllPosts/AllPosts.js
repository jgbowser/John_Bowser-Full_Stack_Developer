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
          publishedAt,
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

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return(
    <section className='AllPosts'>
      <h2 className='AllPosts__page-header'>Welcome to my blog</h2>
      <div className='AllPosts__posts-container'>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div key={index} className='AllPosts__single-post'>
              <Link className='AllPosts__post-link' to={'/' + post.slug.current} key={post.slug.current}>
                <span className='AllPosts__post-info' key={index}>
                  <img className='AllPosts__post-image' src={post.mainImage.asset.url} alt='' />
                </span>
                <span className='AllPosts__post-details'>
                  <h2 className='AllPosts__post-title'>{post.title}</h2>
                  <p className='AllPosts__post-pub'>{new Date(post.publishedAt).toLocaleDateString(undefined, dateOptions)}</p>
                </span>
              </Link>
            </div>
          ))}
      </div>
    </section>
  )
}

export default AllPosts