import React from 'react';

import { genderTranslator, brazilDateFormatter } from '../../utils';

import './style.css';

const Char = props => {
  return (
    <div className='char'>
      <p>
        <strong>Nome:</strong> {props.char.name}
      </p>
      <p>
        <strong>Espécie:</strong> {props.char.species}
      </p>
      <p>
        <strong>Gênero: </strong> {genderTranslator(props.char.gender)}
      </p>
      {typeof props.char.house !== 'undefined' && props.char.house !== '' && (
        <p>
          <strong>Casa: </strong> {props.char.house}
        </p>
      )}
      <p>
        <strong>Data de nascimento: </strong>{' '}
        {brazilDateFormatter(props.char.dateOfBirth)}
      </p>
      <p>
        <strong>Bruxo: </strong> {props.char.wizard ? 'Sim' : 'Não'}
      </p>
    </div>
  );
};

export default Char;
