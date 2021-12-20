import React, {useEffect, useState} from 'react';
import config from "../config/environment";
import axios from "axios";
import { Pagination } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Dropdown from "./Dropdown";

interface ListInterface {
    items: object[];
    // pages: string[];
}

const useStyles = makeStyles((theme) => ({
  selectedImage: {
    width: 100,
    height: 100,
    margin: 10,
  }
}));

const Constructor = () => {
  const [state, setState] = useState<any>([]);

  const [shaker, setShaker] = useState<any>({asset_url: null});
  const [jigger, setJigger] = useState<any>({asset_url: null});
  const [stainer, setStainer] = useState<any>({asset_url: null});
  const [madler, setMadler] = useState<any>({asset_url: null});

  const classes = useStyles();



  return (
      <div>
        <div>
          <img className={classes.selectedImage} src={shaker.asset_url} />
          <img className={classes.selectedImage} src={jigger.asset_url} />
          <img className={classes.selectedImage} src={stainer.asset_url} />
          <img className={classes.selectedImage} src={madler.asset_url} />
        </div>
        <Dropdown title={'Шейкер'} categoryId={251685} selectProduct={setShaker} />
        <Dropdown title={'Джиггер'} categoryId={255321} selectProduct={setJigger} />
        <Dropdown title={'Cтрейнер'} categoryId={255320} selectProduct={setStainer} />
        <Dropdown title={'Мадлер'} categoryId={255323} selectProduct={setMadler} />

      </div>
  );
};

export default Constructor;