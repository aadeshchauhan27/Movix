import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper
 from '../../../components/contentWrapper/ContentWrapper';


export const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery1] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop+ data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data])

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className="heroBanner">
            <div className="backdrop-img">
                <Img src={background}/>
            </div>
            <div className="opacity-layer">
                
            </div>
            <ContentWrapper>
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome </span>
                    <span className="subTitle">Millions of movies, TVshows and people to discover. Explore now</span>
                    <div className="searchInput">
                        <input type="text" placeholder='Search for a movie or tv show...'
                            onKeyUp={searchQueryHandler}
                            onChange={(e) => setQuery1(e.target.value)} />
                        <button>Search</button>
                    </div>
                </div>
            </div>
            </ContentWrapper>        
        </div>
    )
}
