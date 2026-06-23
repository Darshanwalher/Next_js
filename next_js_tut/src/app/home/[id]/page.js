import React from 'react'

const page = async({params}) => {
    const {id} = await params
    console.log(id);
    
  return (
    <div>
      <h1>These is dynamic routing - {id} page</h1>
    </div>
  )
}

export default page
