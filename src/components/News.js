import React from 'react'
import { useEffect,useState } from 'react';
import Spinner  from './Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState([0])
  

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // document.title =`${capitalizeFirst(props.category)}`;
  
  const updateNews = async() => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7caad652877645a1927dc0c731d9a44a&page=${props.page}&pagesize=${props.pagesize}`;
    setLoading(true) 
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [])
  
  


  const fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7caad652877645a1927dc0c731d9a44a&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults)
  };

    return (
      <>
        <div className="container">
          <div className="container py-5">
            <h2 className="text-center py-3">
              News - Top {capitalizeFirst(props.category)} headlines
            </h2>
          </div>
          {loading && <Spinner />}
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-1" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : " "}
                    src={element.urlToImage}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : " "
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          ></InfiniteScroll>
        </div>
      </>
    );
  }


News.defaultProps = {
    country: "in",
    pagesize: 18,
    category:'general'
  };
News.propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category : PropTypes.string
};
  
export default News
