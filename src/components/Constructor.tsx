import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Dropdown from "./Dropdown";
import Gaisers from '../products/Gaisers.json';
import Jiggers from '../products/Jiggers.json';
import Madlers from '../products/Madlers.json';
import Shakers from '../products/Shakers.json';
import Spoons from '../products/Spoons.json';
import Squisers from '../products/Squisers.json';
import Strainers from '../products/Strainers.json';

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
        {console.log(Strainers)}
        <Dropdown title={'Шейкер'} categoryId={251685} selectProduct={setShaker} items={Shakers} />
        <Dropdown title={'Джиггер'} categoryId={255321} selectProduct={setJigger} items={Jiggers} />
        <Dropdown title={'Cтрейнер'} categoryId={255320} selectProduct={setStainer} items={Strainers} />
        <Dropdown title={'Мадлер'} categoryId={255323} selectProduct={setMadler} items={Madlers} />

      </div>
  );
};

export default Constructor;