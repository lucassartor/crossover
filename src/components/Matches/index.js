import React from 'react';
import useForm from '../Form/useForm';
import Input from '@material-ui/core/Input';
import Select from './StyledComponents';
import Button from '@material-ui/core/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Place, SportsSoccer, CalendarToday, SignalCellularAltIcon } from '@mui/icons-material';

const Matches = () => {
  const endereco = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (endereco.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Place />
      <Input
        label="Endereço"
        type="text"
      />
      <SportsSoccer />
      <Select
        label="Esporte"
      />
      <CalendarToday />
      <DatePicker
        label="Data"
      />
      <SignalCellularAltIcon />
      <Select
        label="Intensidade"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default Matches;
