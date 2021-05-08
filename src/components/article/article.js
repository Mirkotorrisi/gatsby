import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./article.scss"
const Article = ({ title, excerpt }) => {
  const ref = useRef()
  const [posX, setposX] = useState(90)
  const [posY, setposY] = useState(90)
  const [intensity, setIntensity] = useState(0)
  const handlePointer = e => {
    if (!ref) return
    const rect = ref.current.getBoundingClientRect()
    setposX(((e.clientX - rect.left) / rect.width)* 100)
    setposY(((e.clientY - rect.top) / rect.height)* 100)
  }
  const handleRange = (e) =>{
    setIntensity(e.target.value)
  }
  return (
    <>
    <article
      className={"article_container"}
      style={{
        trasform: "preserve-3d",
        transition:"all 1s ease",
        transform:
          "rotateX(" + 360 / (posX- 50) + "deg) rotateY(" + 360 / (posY-50 ) + "deg)",
          boxShadow: `${posX > 50 ? posX *-0.5 : posX*0.5}px ${posY > 50 ? posY *-0.5 : posY*0.5 }px ${intensity*10}px ${intensity*10}px rgba(0,0,0,${intensity})`,
      }}
    > 
      <div
        style={{
          width: "100%",
          minHeight: "100%",
          background:
            `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,${intensity}), rgba(255,255,255,0) ${intensity*100}%)`,
        }}
        ref={ref}
        onMouseMove={handlePointer}
        onTouchStart={handlePointer}
        onPointerLeave={()=>{setposX(-10000); setposY(-10000)}}
        onTouchEnd={()=>{setposX(0); setposY(0)}}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 className={"article_title"}>{title}</h1>
            <div
              className={"article_text"}
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
    </div>
    </div>
    </article>
    <input type="range" id="intensity" name="intensity" onChange={handleRange}
     min="0" max="1" value={intensity} step="0.1" />    
    </>
  )
}
Article.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
}

Article.defaultProps = {
  title: "",
  excerpt: "",
}

export default Article
