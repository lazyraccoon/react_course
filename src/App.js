import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
<div className="wrapper">
  <SayFullName name="Andrey" surname="1" link="https://vk.com/andreybukharev" />
  <SayFullName name="Andrey" surname="2" link="https://vk.com/id1" />
  <SayFullName name="Andrey" surname="3" link="https://vk.com/id2" />
  <SayFullName name="Andrey" surname="3" link="https://vk.com/id3" />
</div>

    );
  }
}


function SayFullName(props){
  return (
    <div>
    <h1> Мое имя  {props.name}, фамилия - {props.surname}</h1>
    <a href={props.link}> Ссылка на мой профиль </a>
    </div>
    )
}

export default App;
