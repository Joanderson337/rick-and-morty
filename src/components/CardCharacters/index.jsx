import { ContainerCard } from "./styled";

export function CardCharacters({image, name, genre, specie}){
  return(
       <ContainerCard>
          <div className="image"></div>
            <img src={image} alt="" />
          <div className="info">
            <h3>{name}</h3>
            <ul>
              <li>Gênero: {genre}</li>
              <li>Espécie: {specie}</li>
            </ul>
          </div>
       </ContainerCard>
  )
}