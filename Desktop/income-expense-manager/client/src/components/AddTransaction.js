import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";

const FormContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
`;

const FormTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: #3498db;
    background: #fff;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  &::placeholder {
    color: #95a5a6;
  }
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2980b9;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #eee;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $status }) => 
      $status === 'ready' ? '#2ecc71' : 
      $status === 'error' ? '#e74c3c' : 
      $status === 'processing' ? '#f39c12' : '#95a5a6'};
    transition: all 0.3s ease;
  }
`;

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

    setStatus("processing");
    
    setTimeout(() => {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount,
      };

      addTransaction(newTransaction);
      setText("");
      setAmount("");
      setStatus("complete");
      
      setTimeout(() => setStatus("idle"), 1500);
    }, 800);
  };

  return (
    <FormContainer>
      <FormTitle>Add Transaction</FormTitle>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount (positive for income, negative for expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button 
          type="submit" 
          disabled={!text || !amount || status === "processing"}
        >
          {status === "processing" ? "Processing..." : "Add Transaction"}
        </Button>
        <StatusIndicator $status={
          !text || !amount ? "error" : 
          status === "processing" ? "processing" : 
          status === "complete" ? "ready" : "idle"
        }>
          {[...Array(5)].map((_, i) => <span key={i} />)}
        </StatusIndicator>
      </Form>
    </FormContainer>
  );
};

export default AddTransaction;