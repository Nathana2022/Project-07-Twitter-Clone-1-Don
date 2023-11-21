import React from 'react'

function TweetDetails({ tweet }) {
    return (
      <div className="tweets">
        {tweet.map((element) => (
          <div className="tweet">
            <aside className="tweet-avatar">
              <img src={element.imageIcon} alt="" />
            </aside>
            <div className="tweet-content">
              <div className="tweet-body">
                {element.dataTitles.map((title) => (
                  <h2 className="tweet-title">
                    <span className="tweet-title-author">{title.text} </span>
                    <img src={title.iconCer} alt="" />
                    <span className="tweet-title-details">{title.textMail} </span>
                    <span className="tweet-title-details">{title.temps} </span>
                  </h2>
                ))}
                <p className="tweet-text">{element.description} </p>
                <img className="tweet-image" src={element.photo} alt="" />
              </div>
              <div className="tweet-actions">
                  {element.dataLikes.map((like) => (
                      <div className="tweet-action">
                        <img src={like.iconLike} alt="" />
                        <span>{like.count} </span>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
export default TweetDetails