import React from 'react';
import useForm from '../Form/useForm';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Select from './StyledComponents';
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
      <Box>
        <Place />
        <Input
          label="Endereço"
          type="text"
        />
      </Box>
      <Box>
        <SportsSoccer />
        <Select
          label="Esporte"
        />
      </Box>
      <Box>
        <CalendarToday />
        <DatePicker
          label="Data"
        />
      </Box>
      <Box>
        <SignalCellularAltIcon />
        <Select
          label="Intensidade"
        />
      </Box>
      <Button>Criar</Button>
    </form>
  );
};

export default Matches;
