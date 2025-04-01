import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const InvoicePreview = ({ invoice }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <img src="/images/logo.png" alt="Company Logo" style={{ maxWidth: '150px' }} />
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>INVOICE</Typography>
          <Typography><strong>Invoice #:</strong> {invoice.invoiceNumber}</Typography>
          <Typography><strong>Date:</strong> {new Date().toLocaleDateString()}</Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography gutterBottom><strong>Bill To:</strong></Typography>
        <Typography>{invoice.customerName}</Typography>
        {invoice.customerAddress && <Typography>{invoice.customerAddress}</Typography>}
        {invoice.customerPhone && <Typography>{invoice.customerPhone}</Typography>}
      </Box>

      <Table sx={{ mb: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Quantity</strong></TableCell>
            <TableCell><strong>Price</strong></TableCell>
            <TableCell><strong>Amount</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoice.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Table sx={{ width: '300px' }}>
          <TableBody>
            <TableRow>
              <TableCell><strong>Subtotal:</strong></TableCell>
              <TableCell>${invoice.subtotal.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Tax:</strong></TableCell>
              <TableCell>${(invoice.subtotal * (invoice.tax / 100)).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Discount:</strong></TableCell>
              <TableCell>${invoice.discount.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Total:</strong></TableCell>
              <TableCell>${invoice.total.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {invoice.notes && (
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #eee' }}>
          <Typography gutterBottom><strong>Notes:</strong></Typography>
          <Typography>{invoice.notes}</Typography>
        </Box>
      )}

      <Box sx={{ mt: 6, textAlign: 'center', fontSize: '12px', color: '#777' }}>
        <Typography>Thank you for your business!</Typography>
      </Box>
    </Box>
  );
};

export default InvoicePreview;