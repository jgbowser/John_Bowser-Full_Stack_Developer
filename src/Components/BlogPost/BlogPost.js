import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import BlogHeader from '../BlogHeader/BlogHeader'
import './BlogPost.css'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const BlogPost = () => {
  const [ postData, setPostData ] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error)
  }, [slug])

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  if(!postData) return <div>Loading...</div>

  return (
    <section className='BlogPost'>
      <BlogHeader />
      <div className='BlogPost__info'>
        <h2>{postData.title}</h2>
        <div className='BlogPost__pub-info'>
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt='Author is John Bowser'
            className='BlogPost__author-image'
          />
          <div className='BlogPost__pub-text'>
            <h4>{postData.name}</h4>
            <p className='BlogPost__published'>Published: {new Date(postData.publishedAt).toLocaleDateString(undefined, dateOptions)}</p>
          </div>
        </div>
      </div>
      <img 
        src={urlFor(postData.mainImage).width(1000).url()} 
        alt=''
        className='BlogPost__main-image'
      />
      <div className='BlogPost__main-content'>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
      />
      </div>
    </section>
  )
}

export default BlogPost