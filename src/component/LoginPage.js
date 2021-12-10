import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

export function LoginPage({ startLogin }) {
    return (
        <div className="box-layout">
            <div className="box">
               <h1 className="title">Expensify</h1>
               <p>It's time to get your expenses under control</p>
               <button className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
