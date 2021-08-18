import React, { useState } from "react";

function ListOfContacts({setJsonFileData}) {
  
    
  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
        console.log(setJsonFileData)
      console.log("e.target.result", e.target.result);
      setJsonFileData(e.target.result);
    };
  };
  return (
    <>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
    </>
  );
}

export default ListOfContacts;