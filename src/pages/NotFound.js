import React from 'react'
import {useEffect} from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found-Instagram";
  }, []);

  return (
    <div>Not Found</div>
  )
}

export default NotFound;