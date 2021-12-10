import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ description, amount, createdAt, dispatch, id, note}) => {
  return (
            
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h3 className="title">{description}</h3>
        <span className="sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        <p>{note}</p>
      </div>
      <div>
        <h3 className="data">
          {numeral(amount / 100).format('$0,0.00')}
        </h3>
      </div>
    </Link>
        
  )
}


export default connect()(ExpenseListItem);