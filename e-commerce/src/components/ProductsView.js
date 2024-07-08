import React from 'react'
import GridView from './GridView'
import ListView from './ListView'

const ProductsView = ({mainState}) => {
  return (
    <>
      {
        mainState.gridView===true ? <GridView {...mainState}/>: <ListView  {...mainState}/>
      }
    </>
  )
}

export default ProductsView