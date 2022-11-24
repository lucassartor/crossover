import React from 'react';
import useForm from '../Form/useForm';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
//import Box from '../Form/StyledComponents';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Place, SportsSoccer, CalendarToday, SignalCellularAlt } from '@mui/icons-material';

const Matches = () => {
  const endereco = useForm();
  const esporte = useForm();
  const intensidade = useForm();

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
        <Box flex>
          <InputLabel id="localizacaoLabel">Localização</InputLabel>
          <Place fontSize="large"/>
          <Input
            labelId="localizacaoLabel"
            id="localizacao"
            type="text"
          />
        </Box>

        <Box flex>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="esporteLabel">Esporte</InputLabel>
            <SportsSoccer fontSize="large"/>
            <Select
              labelId="esporteLabel"
              id="esporte"
              value={esporte.value}
              label="Esporte"
              onChange={esporte.onChange}
              displayEmpty
            >
              <MenuItem value={''}>Selecione o esporte</MenuItem>
              <MenuItem value={'Futebol'}>Futebol</MenuItem>
              <MenuItem value={'Basquete'}>Basquete</MenuItem>
              <MenuItem value={'Volei'}>Volei</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box flex>
          <InputLabel id="dataLabel">Data</InputLabel>
          <CalendarToday fontSize="large"/>
          {/* <DatePicker
            labelId="dataLabel"
          /> */}
        </Box>

        <Box flex>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="intensidadeLabel">Intensidade</InputLabel>
            <SignalCellularAlt fontSize="large"/>
            <Select
              labelId="intensidadeLabel"
              id="intensidade"
              value={intensidade.value}
              label="Intensidade"
              onChange={intensidade.onChange}
              displayEmpty
            >
              <MenuItem value={''}>Selecione a intensidade</MenuItem>
              <MenuItem value={'Iniciante'}>Iniciante</MenuItem>
              <MenuItem value={'Intermediário'}>Intermediário</MenuItem>
              <MenuItem value={'Experiente'}>Experiente</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button>Criar</Button>
      </Box>
    </form>
  );
};

export default Matches;
