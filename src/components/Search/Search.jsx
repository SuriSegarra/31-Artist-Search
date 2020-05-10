import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
import latin from '../../assets/latin.png';
import hiphop from '../../assets/hiphop.png';
import pop from '../../assets/pop.png';
import rb from '../../assets/r&b.png';
import blues from '../../assets/blues.png';
import christian from '../../assets/christian.png';
import clasical from '../../assets/clasical.png';
import country from '../../assets/country.png';
import edm from '../../assets/edm.png';
import funk from '../../assets/funk.png';
import indie from '../../assets/indie.png';
import jazz from '../../assets/jazz.png';
import metal from '../../assets/metal.png';
import rock from '../../assets/rock.png';
import reggae from '../../assets/reggae.png';
import mexican from '../../assets/mexican.png';
import kpop from '../../assets/kpop.png';

const Search = ({ name, onChange, onClick }) => {

  return (
    
    <div className={styles.Search}>

      <h1> Artist<span> Search</span></h1>
  
      <h2>Browse all</h2>

      <input type='text' name={name} value={name} placeholder='Find an artist' onChange={onChange}/>

      <button onClick={onClick}>Search</button>

      <div className={styles.images}>
        <img src={latin} alt=''></img>
        <img src={hiphop} alt=''></img>
        <img src={pop} alt=''></img>
        <img src={rb} alt=''></img>
        <img src={indie} alt=''></img>
        <img src={rock} alt=''></img>
        <img src={edm} alt=''></img>
        <img src={reggae} alt=''></img>
        <img src={metal} alt=''></img>
        <img src={blues} alt=''></img>
        <img src={christian} alt=''></img>
        <img src={clasical} alt=''></img>
        <img src={country} alt=''></img>
        <img src={funk} alt=''></img>
        <img src={jazz} alt=''></img>
        <img src={rb} alt=''></img>
        <img src={kpop} alt=''></img>
        <img src={mexican} alt=''></img>
      </div>
    </div>
  
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Search;
