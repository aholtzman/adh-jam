import React from 'react'
import Name from '../components/Name'
import Link from '../components/Link'
import {
  Grid,
  PhotoButton,
  CVButton,
  ArtButton,
  DesignButton,
  CurationButton,
  FullName
} from '../components/MenuItems'

const Home = () => {
  return(
      <Grid>
        <PhotoButton><Link primary to='/artworks'><h4>artworks</h4></Link></PhotoButton>
        <ArtButton><Link primary to='/contact'><h4>contact</h4></Link></ArtButton>
        <CVButton><Link primary to='/about'><h4>cv</h4></Link></CVButton>
        <DesignButton><Link primary to='/design'><h4>design</h4></Link></DesignButton>
        <CurationButton><Link primary to='/curation'><h4>curation</h4></Link></CurationButton>
        <FullName>
            <Name />
        </FullName>
      </Grid>
  );
}

export default Home
