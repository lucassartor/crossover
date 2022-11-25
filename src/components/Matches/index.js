import React from 'react';
import useForm from '../Form/useForm';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import {FormCard, iconStyles} from '../Form/StyledComponents';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Place, SportsSoccer, CalendarToday, SignalCellularAlt } from '@mui/icons-material';

const Matches = () => {
  const endereco = useForm();
  const esporte = useForm();
  const data = useForm();
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
      <Box py={4} align='center' backgroundColor='#343434'>
        <Box display='flex' flexWrap='wrap' gap={1} maxWidth='1200px' pb={1}>
          <FormCard>
            <InputLabel id="localizacaoLabel" style={{ color: '#fff' }}>Localização</InputLabel>
            <Place {...iconStyles}/> <br/>
            <Input
              labelId="localizacaoLabel"
              id="localizacao"
              type="text"
              placeholder='Digite um endereço'
            />
          </FormCard>

          <FormCard>
              <InputLabel id="esporteLabel" style={{ color: '#fff' }} display='inline-block'>Esporte</InputLabel>
              <SportsSoccer {...iconStyles}/> <br/>
              <FormControl>
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
          </FormCard>

          <FormCard>
            <InputLabel id="dataLabel" style={{ color: '#fff' }}>Data</InputLabel>
            <CalendarToday {...iconStyles}/> <br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                labelId="dataLabel"
                label="Selecione a data"
                value={data.value || null}
                onChange={data.onChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormCard>

          <FormCard>
              <InputLabel id="intensidadeLabel" style={{ color: '#fff' }}>Intensidade</InputLabel>
              <SignalCellularAlt {...iconStyles}/> <br/>
              <FormControl>
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
          </FormCard>
        </Box>
        <Button
          variant='contained'
          size='large'
          style={{backgroundColor:'#E8FC0F', color:'#000'}}
        >Criar partida</Button>
      </Box>
    </form>
  );
};

export default Matches;
