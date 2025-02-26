import React from 'react'

function UpdateUser(){
    return (
      <div class="container mt-5">
          <h2>Update User</h2>
          <form id="userForm">
              
              <div class="mb-3">
                  <label htmlfor="">Name</label>
                  <input type="text" placeholder='name'/>
              </div>
  
              
              <div class="mb-3">
                  <label >Email</label>
                  <input type="email" placeholder="email" name="email"/>
              </div>
  
              
              <div class="mb-3">
                  <label for="age" class="form-label">Age</label>
                  <input type="number" placeholder="age" name="age" />
              </div>
  
              
              <button type="submit" class="btn btn-primary">Update</button>
          </form>
      </div>
    )
  }
  

export default UpdateUser