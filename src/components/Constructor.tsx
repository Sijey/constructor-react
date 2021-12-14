import React, {useEffect, useState} from 'react';
import config from "../config/environment";
import axios from "axios";
import { Pagination } from "@mui/material";
import { makeStyles } from '@mui/styles';

interface ListInterface {
    items: object[];
    // pages: string[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      justifyContent:"center",
      display:'flex',
      // position: 'fixed',
      // bottom: 30,
      width: '100%',
    },

    '& .MuiPagination-ul': {
      marginBottom: '30px',
    }
  }
}));

const Constructor = () => {
  const [state, setState] = useState<any>([]);
  const [page, setPage] = useState<any>(1);

  const classes = useStyles();

  const getProducts = (page) => {
    return axios.get(`${config.baseUrl}/products`, {params: {page: `page=${page}`}})
        .then((res) => {
          setState(res.data);
        })
  }

  useEffect(() => {
    getProducts(page);
  }, [page]);

  const changePage = (e, value) => {
      setPage(value);
  }

  return (
      <div>
        <div style={{marginBottom: '30px'}}>
          {state?.items && state.items.map(item => (
              <img src={item.asset_url} key={item.id} style={{height: '150px', width: '150px'}}  alt='' />
          ))}
        </div>
          {state?.items && <Pagination
              count={state.pagination.total_pages}
              shape="rounded"
              onChange={changePage}
              className={classes.root}
          />}
      </div>
  );
};

export default Constructor;