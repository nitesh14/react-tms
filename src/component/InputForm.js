import React from 'react';

const InputForm = (props) => {

    return (
        <form onSubmit={props.addTask}>
            <div className="form-group">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add Todo" 
                        aria-label="Add Todo" aria-describedby="button-addon2"
                        value={props.curretTask} onChange={props.updateTask} />
                    <div className="input-group-append">
                        <button className="btn btn btn-primary" type="submit" id="button-addon2">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default InputForm;