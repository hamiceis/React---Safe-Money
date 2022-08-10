import styled from "styled-components"
import loading from '../../../assets/Loading.svg'

export function Loading () {
  return(
    <LoaderContainer>
      <img className="Loader" src={loading} alt="Loading" />
    </LoaderContainer>
  )
}


//Styled components 


const LoaderContainer = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

.loader {
  width: 10px;
}

`