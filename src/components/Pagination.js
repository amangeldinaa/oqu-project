import React from 'react'
import {Box, Pagination, PaginationItem} from '@mui/material';
import {Link as NavLink} from 'react-router-dom';

const AppPagination = ({setPageNumber, numberOfPages, page}) => {
  
  return (
    <Box>
      <Pagination
        onChange={(_, num) => {
          setPageNumber(num)
          window.scroll(0,0)
        }}
        count={numberOfPages}
        // color="primary"
        page={page}
        renderItem={
          (item) => (
            <PaginationItem
              component={NavLink}
              to={`/allbooks/?page=${item.page}`}
              {...item}
            />
          )
        }
      />
    </Box>
  )
}

export default AppPagination