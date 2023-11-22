import React from 'react'

function Tweet({Fed}) {
  return (
    <div>
        {Fed.map((element, index)=>(
            <div className='tweet' key={index}>
                <side className='tweet-avatar'>
                    <img src={element.image} alt="" />
                </side>
                <div className='tweet-content'>
                    {element.user.map((userelement, indexId) =>(
                        <div>
                            <div className='tweet-body' >
                            <h2 className='tweet-title' key={indexId}>
                            <span className='tweet-title-author'>{userelement.title} </span>
                            <img className='tweet-title-author' src={userelement.certificateIcon} alt="" />
                            <span className='tweet-title-details'>{userelement.email} </span>
                            <span className='tweet-title-details'>{userelement.dure} </span>
                            </h2>
                            <p className='tweet-text'>{element.tweet} </p>
                            <div className='tweet-image'>
                                <img  src={element.phototweet} alt="" />
                            </div>
                        </div>
                        <div className='tweet-actions'>
                            {element.iconLike.map((elementLike, Id)=>(
                                <div className='tweet-action'  key={Id}>
                                    <img src={elementLike.commentIcon} alt="" />
                                    <span>{elementLike.CountComment} </span>
                                </div> 
                                    
                            ))}
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        ))}
    </div>
  )
}

export default Tweet