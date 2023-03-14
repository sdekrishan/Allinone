import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {
    const {AdminAuth} = useSelector(store=>store.auth);

    if(AdminAuth){
        return children
    }
    else{
      return <Navigate to='/login'/>
    }
}

export default AdminPrivateRoute