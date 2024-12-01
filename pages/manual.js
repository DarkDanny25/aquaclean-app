import React from 'react';
import {
  Header,
  Img,
  Title,
  Subtitle,
  Section,
  SectionManual,
  InstructionsText,
  SectionGroup,
  Image,
  List,
  ListItem,
  ControlContainer,
  ControlImage,
} from '../frontend/styles/manual.styles';

const Manual = () => {
  return (
    <>
      <Header>
        <Img src="/img/fondo3.jpg" alt="Encabezado de la guía de uso" />
        <Title>Guía de uso</Title>
        <Subtitle>¿Tienes dudas acerca de su uso? Aquí te las aclaramos</Subtitle>
      </Header>

      <Section>Manual de usuario</Section>
      <InstructionsText>Instrucciones detalladas para el uso correcto del equipo.</InstructionsText>

      <SectionGroup>
        <SectionManual>Preparación y Configuración Inicial</SectionManual>
        <Image src="/img/manual1.jpg" alt="Proceso de encendido" />
        <List>
          <ListItem>1. Revisión previa: Verifica conexiones, hélices y carga de baterías.</ListItem>
          <ListItem>2. Pruebas iniciales: Asegúrate de que controles y casco estén en buen estado.</ListItem>
          <ListItem>3. Encendido: Enciende el control remoto y luego el barco.</ListItem>
          <ListItem>4. Sincronización: Confirma conexión con luz LED o señal.</ListItem>
          <ListItem>5. Manejo inicial: Usa el barco en aguas tranquilas para practicar controles.</ListItem>
        </List>

        <SectionManual>Cuidados y Seguridad</SectionManual>
        <Image src="/img/manual2.jpg" alt="Retirar red" />
        <List>
          <ListItem>1. Limpieza y revisión: Limpia el casco, revisa hélices y asegúrate de que no haya grietas.</ListItem>
          <ListItem>2. Componentes eléctricos y baterías: Mantén compartimientos sellados, retira y almacena baterías en lugar seco si no se usará.</ListItem>
          <ListItem>3. Almacenamiento: Guarda el barco en un lugar seco y protegido, evitando peso excesivo.</ListItem>
          <ListItem>4. Seguridad: Usa en zonas seguras, evita viento fuerte y supervisa a los niños.</ListItem>
        </List>

        <SectionManual>Recomendaciones</SectionManual>
        <Image src="/img/manual3.jpeg" alt="Colocar red" />
        <List>
          <ListItem>1. Encendido: Revisa carga y posición de las baterías, y el interruptor.</ListItem>
          <ListItem>2. Sin respuesta: Cambia baterías del control y re sincroniza si es necesario.</ListItem>
          <ListItem>3. Paradas o flotabilidad: Verifica hélices, motores y posibles grietas en el casco.</ListItem>
          <ListItem>4. Accesorios: Lleva baterías extra, herramientas básicas y caja de transporte.</ListItem>
        </List>
      </SectionGroup>

      <Section>Controlador</Section>
      <SectionManual>¿Cómo funciona el control?</SectionManual>
      <ControlContainer>
        <ControlImage src="/img/manual4.jpg" alt="Control remoto" />
        <List>
          <ListItem>Botón 1: Encender/Apagar el equipo.</ListItem>
          <ListItem>Botón 2: Cambiar de modo de operación.</ListItem>
          <ListItem>Botón 3: Ajustar la intensidad o velocidad.</ListItem>
          <ListItem>Botón 4: Activar el modo de ahorro de energía.</ListItem>
        </List>
      </ControlContainer>
    </>
  );
};

export default Manual;