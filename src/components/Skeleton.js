import React from 'react'

const Skeleton = () => {
  return (
    <div className="skeleton card">
    <div className="img-container loading">
    <img  alt="" />
    </div>
    <div className="desc">
        <h4 className='loading'>&#160;</h4>
        <h6 className='loading'>&#160; </h6>
        <p className='loading'>&#160;</p>
        <p className='loading'>&#160;</p>
    </div>
</div>
  )
}

export default Skeleton