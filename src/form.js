import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
         <div class="field">
            <label class="label">地区</label>
             <div class="control">
               <input class="input" type="text" placeholder="tokyo"/>
             </div>
         </div>
         <div class="field">
          <label class="label">国</label>
             <div class="control">
              <input class="input" type="text" placeholder="japan"/>
             </div>
         </div>
         <div class="control">
             <button class="button is-primary">Submit</button>
         </div>
        </form>
    )
}

export default Form; 