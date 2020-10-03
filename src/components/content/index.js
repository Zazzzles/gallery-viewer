import React, { useEffect, useState, useContext } from 'react';

import {
  Container,
  Topbar,
  Title,
  CardContainer,
  CardContainerInner,
  CardWrapper,
  Subtitle,
} from './index.module.css';

import api from '../../api';

import chunkArray from '../../helpers/chunk-array';
import mod from '../../helpers/modulus';
import toast from 'just-toasty';
import PictureTile from '../picture-tile';
import NavigationContext from '../../context/navigation-context';
import Pagination from '../pagination';

export default ({ activeCollection }) => {
  const { xIndex, windowDimensions, setXLimit, setXIndex } = useContext(
    NavigationContext
  );
  const [totalPictures, setTotalPictures] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [entries, setEntries] = useState([]);
  const [tileGroupCount, setTileGroupCount] = useState(3);
  const [maxPages, setMaxPages] = useState();

  //  When edge of tile group ended
  const fetchMoreEntries = async (page) => {
    const res = await api.photos.get.byCollection(activeCollection.id, {
      page,
      per_page: 18,
    });
    setEntries((prev) => {
      return [...prev, ...res.data];
    });
  };

  //  First paint

  useEffect(() => {
    (async () => {
      if (activeCollection.id) {
        try {
          const res = await api.photos.get.byCollection(activeCollection.id, {
            page: 1,
            per_page: 18,
          });
          const totalEntries = res.headers['x-total'];
          setTotalPictures(totalEntries);
          setEntries(res.data);
          setCurrentPage(1);
          setXIndex(xIndex === 0 ? 0 : 1);
          setMaxPages(mod(totalEntries, 6));
        } catch (err) {
          console.log(err);
          toast('Could not fetch collection photos');
        }
      }
    })();
  }, [activeCollection.id]);

  //  Set xLimit as well as tile group count

  useEffect(() => {
    const pages = mod(entries.length, 6);
    setTileGroupCount(pages);
    setXLimit(pages);
  }, [entries]);

  //  Check when we react end of tilegroup

  useEffect(() => {
    if (xIndex >= tileGroupCount - 1) {
      fetchMoreEntries(currentPage + 1);
      setCurrentPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [xIndex]);

  const contextualCardContentWidth = `${
    windowDimensions.width * (xIndex > 0 ? 0.95 : 0.8)
  }px`;

  return (
    <div className={Container}>
      <div className={Topbar}>
        <h1 className={Title}>{activeCollection.name}</h1>
        <span className={Subtitle}>{totalPictures} pictures in this album</span>
      </div>
      <div
        className={CardContainer}
        style={{
          width: contextualCardContentWidth,
        }}
      >
        <div
          className={CardContainerInner}
          style={{
            transform: `translate3d(-${
              xIndex * (windowDimensions.width * 0.95)
            }px ,0,0)`,
            minWidth: `${tileGroupCount * contextualCardContentWidth}px`,
          }}
        >
          {chunkArray(entries, 6).map((page, index) => {
            return (
              <div
                className={CardWrapper}
                style={{
                  width: contextualCardContentWidth,
                }}
                key={index}
              >
                {page.map((pic, picIndex) => {
                  return <PictureTile {...pic} key={picIndex} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Pagination pageCount={maxPages + 1} activePage={xIndex} />
    </div>
  );
};
