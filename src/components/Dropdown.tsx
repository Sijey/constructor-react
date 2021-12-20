import React, { useEffect, useState} from 'react';
import {makeStyles} from "@mui/styles";
import axios from "axios";
import config from "../config/environment";
import {Pagination} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      justifyContent:"center",
      display:'flex',
      width: '100%',
    },

    '& .MuiPagination-ul': {
      marginBottom: '30px',
    }
  },

   dropdown: {
     transition: '2s',
     '& h3': {
       background: 'grey',
       height: 50,
       margin: '10px',
       color: 'white',
       display: 'flex',
       alignItems: 'center'
     }
   }
}));

const Dropdown = ({title, categoryId, selectProduct, items}) => {
  const classes = useStyles();
  const [page, setPage] = useState<any>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<any>(items);

  const getProducts = (page) => {
    return axios.get(`${config.baseUrl}/products`, {params: {page: `page=${page}`, q: `q[category_id_eq]=${categoryId}` }})
        .then((res) => {
          setProducts(res.data);
        })
  }

  // useEffect(() => {
  //   isOpen && getProducts(page);
  // }, [page, isOpen]);

  const changePage = (e, value) => {
    setPage(value);
  }

  const openBlock = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
      <div className={classes.dropdown} >
        <h3 onClick={openBlock}>{title}</h3>

        {isOpen && <>
        <div style={{margin: '10px'}}>
          {products.items && products.items.map(item => (
              <img
                  src={item.asset_url}
                  key={item.sku}
                  style={{height: '150px', width: '150px'}}
                  onClick={() => {selectProduct(item); openBlock()}}
              />
          ))}
        </div>

          {/*{products?.items && <Pagination*/}
          {/*count={products.pagination.total_pages}*/}
          {/*shape="rounded"*/}
          {/*onChange={changePage}*/}
          {/*className={classes.root}*/}
          {/*/>}*/}
        </>}
      </div>
  );
};

export default Dropdown;