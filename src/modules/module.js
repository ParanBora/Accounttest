import * as React from 'react'
import * as ReactDOM from 'react-dom'


//공통

const Textfield = ({context, ...rest}) => (
  <div>
      {context}
      <input {...rest}/>
  </div>
);
  
const TextInTheBox=({context, ...rest}) =>(
  <div>
    <fieldset>      
        {context}
        <br />
        <br />
        <input type="submit" {...rest}/>
    </fieldset>
    <br/>
  </div>
)
  

  export {Textfield,TextInTheBox};
 