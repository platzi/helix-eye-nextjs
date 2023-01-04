import React from 'react';
import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export default function Galaxies(props: { galaxies: [] }) {

  const { galaxies } = props

  const renderLayout = () => {
    if (galaxies?.length === 0) return <LoadingSpinner />
    return <GalaxiesLayout galaxies={galaxies} />
  }

  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      {renderLayout()}
    </GalaxiesPageWrapper>
  );
}

Galaxies.getInitialProps = async () =>  {
  const res = await fetch('https://images-api.nasa.gov/search?q=galaxies')
  const data = await res.json()
  return { galaxies: data?.collection?.items }
}

Galaxies.defaultProps = {
  galaxies: []
}