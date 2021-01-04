import React from 'react'
import './blogpage.scss'
import axios from 'axios'

//  const util = {
//      getImgSrc : imgTag => {
//         const srcIdx = imgTag.indexOf('src=')
//         const srcEnd = imgTag.indexOf('"',srcIdx + 5)
//         const imgSrc = imgTag.substring(srcIdx + 5, srcEnd)
        
//         console.log(imgSrc)
//         return imgSrc
//      },

//      getImgTag : html => {
//         const startIdx = html.search(/<img/)
//         const endIdx = html.indexOf('>', startIdx)
//         const imgTag = html.substring(startIdx, endIdx + 1)
        
//         console.log(imgTag)
//         return imgTag
//      },

//     setImgDimensions: imgSrc => {
//          const img = new Image()
//          img.onload = function() {
//              const cWidth = document.getElementsByTagName('html')[0].clientWidth
//              console.log(`if(${cWidth} < ${this.width})`)
//              if(cWidth < this.width) {
//                  console.log(`set width to ${cWidth - 10}px`)
//                  this.style.width = `${cWidth - 10}px`
//                  this.style.height = 'auto'
//              }
//          }
//          img.src = imgSrc
//      }
//  }

class BlogPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {blog: '<h1>Loading...</h1>'}
    }
    
    componentDidMount() {
        const m404 = `<h1>Four Hundred and Four</h1><h2>Yeah... That's not a thing...</h2>`
        
        console.log(this.props)
        axios.get(`/api/articles/${this.props.article}`)
             .then( res => {
                this.setState({blog: res.data || m404})
             }).catch( err => {
                 console.log(err)
                 this.setState({blog: m404})
             })
    }

    render() {
        return (
        <main id="blog-page" dangerouslySetInnerHTML = {{ __html: this.state.blog }} />
        )
    }

}

export default BlogPage