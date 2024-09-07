import React from 'react';
import Button from 'react-bootstrap/Button';
import './Check-in.css';

const CheckIn = ({ reserva, onVoltar }) => {
  return (
    <div className="container mt-4">
      <h1>Check-in</h1>
      <div className="reserva-detalhes">
        <p><strong>Nome do Hóspede:</strong> {reserva.nomeHospede}</p>
        <p><strong>CPF:</strong> {reserva.cpfcnpj}</p>
        <p><strong>Email:</strong> {reserva.email}</p>
        <p><strong>Data de Check-in:</strong> {reserva.checkIn}</p>
        <p><strong>Data de Check-out:</strong> {reserva.checkOut}</p>
        <p><strong>Quarto:</strong> {reserva.quarto}</p>
        <p><strong>Detalhes Relevantes:</strong> {reserva.detalhesRelevantes}</p>
      </div>
      <Button variant="primary" onClick={onVoltar}>Voltar</Button>
      <Button variant="success" className="ml-2">Confirmar Check-in</Button>
    </div>
  );
};

export default CheckIn;
//check-in funcional