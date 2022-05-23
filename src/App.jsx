import React, { useState, useEffect } from "react";
import api from "./services/api";
import Background from "./components/Background";

import moment from 'moment'
import 'moment/locale/pt-br'

import {
  Container,
  Main,
  SectionRight,
  Mensagem,
  SelectSorteios,
  InfoSorteios,
} from "./styled";

import logo from "./assets/logo.svg";

import colors from './constants/color'

const App = () => {

  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concursoListId, setConcursoListId] = useState([]);
  const [selectValue, setSelectValue] = useState('0'); 

  useEffect(() => {
    api
      .get("/loterias")
      .then((response) => {
        setLoterias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/loterias-concursos")
      .then((response) => {
        setConcursos(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const concursoId = concursos.filter((res) => res.loteriaId == selectValue ).map((res) => res.concursoId)

  const color=colors.filter((res) => res.id == selectValue).map((res) => res.color)
  useEffect(() => {
    api
      .get(`/concursos/${concursoId[0]}`)
      .then((response) => {
        setConcursoListId([response.data])
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectValue]);
  
  return (
    <Container>
      <Main>
      <Background
      className="img" 
      color={color}
      />
        <InfoSorteios>
        <SelectSorteios value={selectValue} onChange={e => setSelectValue(e.target.value)}>
          {loterias.map((res) => (
            <option value={res.id} key={res.id}>{res.nome.toUpperCase()}</option>
          ))}
        </SelectSorteios> 
        {concursoListId.map(res => (
          <>
        <div className="logoAlign">
          <img src={logo} />
          {colors.filter((res) => res.id == selectValue).map((res) => (
            <span>{res.name.toLocaleUpperCase()}</span>
          ))}
          
        </div>
        
        <div className="rodapeStyle">
          <p>CONCURSO</p>
          <span>{res.id} - {moment(`${res.data}`).format('L')}</span>
        </div>
        </>
        ))}
        </InfoSorteios>  
      <SectionRight>
      
        <ul>
          {concursoListId.map(res => res.numeros.map(n => (
          <li>
            <strong>{n}</strong>
          </li>
          )))}
        </ul>
        
        <Mensagem>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Mensagem>
      </SectionRight>
      </Main>
    </Container>
  );
};

export default App;
