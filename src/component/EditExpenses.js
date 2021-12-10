import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  
  onSubmit = (expense) => {
    console.log(expense)
    this.props.startEditExpense(this.props.match.params.id, expense);
    this.props.history.push('/');  
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id})
    this.props.history.push('/')
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Edit Expense</h1>
          </div>  
        </div>
        <div className="content-container">
          <ExpenseForm 
            expense ={this.props.expense}
            onSubmit ={this.onSubmit}
          />
          <button onClick={this.onRemove} className="button remove-btn">Remove Expense</button>
        </div>        
      </div>
    ); 
  }
};


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);