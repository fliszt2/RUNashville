import React from 'react';

class CreatePost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: null,
            image: null,
            location: null,
            runDistance: null,
            runPace: null,
            runTime: null,
            runSteps: null,
            runHeartRate: null,
            runCalories: null,
            addRun: false,
        }
    }

    render(){
        let runPane = <div></div>
        if(this.state.addRun){
            runPane = <div id='run-details-pane'>
                <div>
                    <span className='add-run-tag'>Distance:</span>
                    <input type='text' className='add-run-data' name='runDistance'></input>
                    <span className='add-run-tag'>Avg. Pace:</span>
                    <input type='text' className='add-run-data' name='runPace'></input>
                    <span className='add-run-tag'>Heart Rate:</span>
                    <input type='text' className='add-run-data' name='runHeartRate'></input>
                </div>
                <div>
                    <span className='add-run-tag'>Time:</span>
                    <input type='text' className='add-run-data' name='runTime'></input>
                    <span className='add-run-tag'>Steps:</span>
                    <input type='text' className='add-run-data' name='runSteps'></input>
                    <span className='add-run-tag'> Calories Burned:</span>
                    <input type='text' className='add-run-data' name='runCalories'></input>
                </div>
            </div>
        }
        return(
            <div id='add-social-post'>
                <div className='add-social-post-options'>
                    <input type='checkbox' name='addRun'></input>
                    <label for='addRun'>Add Run Details</label>
                    <i class="fas fa-globe-americas feed-icon" name='location'></i>
                    <span>Add Location</span>
                </div>
                <i class="fas fa-camera"></i>
                {runPane}
                <textarea name='message'></textarea>
                <button>Submit</button>
            </div>
        );
    }
}

export default CreatePost;