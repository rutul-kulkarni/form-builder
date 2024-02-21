# React + Vite

The Application flow consist of 2 phase.

1. Form Creation
2. Display Form

I have used Redux as central store to save states.

1. Form Creation

    Create Form --> Add Field --> Add Label --> Give validations like required --> Now the data will store to redux 


2. Display Form

    View form --> fetch the redux --> render field based on fieldtype --> show error on submit if validation failed --> log data to console if no error


