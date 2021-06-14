import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Albom from './Albom';
import { loadAlboms } from '../redux/action';
import ReactLoading from 'react-loading';

function Alboms(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const alboms = useSelector((state) => state.alboms.items);
  const loading = useSelector((state) => state.alboms.loading);

  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadAlboms(params.id));
    }
  }, [params]);

  if (loading) {
    return (
      <div>
        <ReactLoading
          className="m-auto justify-content-center align-items-center"
          type="spin"
          color="#0033ff"
          height={40}
          width={30}
        />
      </div>
    );
  }

  return (
    <div>
      {alboms.map((albom) => {
        return <Albom albom={albom} key={albom.id} />;
      })}
    </div>
  );
}

export default Alboms;
