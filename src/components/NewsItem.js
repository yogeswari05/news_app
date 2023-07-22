import React from 'react'

const NewsItem = (props) => {
   let { title, description, src, newsUrl, author, date, source } = props;
      return (
         <div>
            <div className="card" style={{ width: '18rem' }}>
               <img src={src? src:'https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg'} className="card-img-top" alt="..."/>
               <div className="card-body">
                  <h5 className="card-title">{title}...</h5>
                  <h6> <span className="badge bg-secondary">New</span></h6>
                   <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
                     {source}
                  </span>
                  <p className="card-text">{description}... </p>
                  <p className="card-text"><small className="text-muted">By {author} on {new Date (date).toLocaleString() }</small></p>
                  <a href={newsUrl} target='_blank' className="btn btn-primary">Read more ...</a>
               </div>
            </div>
         </div>
      )
   }

export default NewsItem