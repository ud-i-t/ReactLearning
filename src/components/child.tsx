import React from 'react';

type Props = {
  message: string
}

function Child(props:Props) {
    return(
      <p>{props.message}</p>
    )
  }

export default Child