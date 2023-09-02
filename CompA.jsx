import React, { memo } from "react";

function CompA({learning}) {
  console.log("Child Component Calling");
  return( 
  <div>
    

 </div>
  )
}
export default memo(CompA);
