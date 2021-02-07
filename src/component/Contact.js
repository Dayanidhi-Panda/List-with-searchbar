import React, { Component } from 'react'; 


export class Contact extends React.Component {
    // constructor() {
    //     super()   
    // }

    render() {
        return (
            <div>
                <div className="row">
                {
                    this.props.data ?
                        this.props.data
                        .sort((a, b) => a.PFName.localeCompare(b.PFName))
                        .map((e) =>
  
                    <div className="col-md-4 col-sm-6 wrap" >
                        <div className="card" >
                            <div className="card-body">
                                <div className="pic" ><img src={"./playerimages/"+e.Id+".jpg"} alt="not found" />
                                </div>
                                <div className="Details">
                                     <span className="name">Name : {e.PFName} </span><br />
                                     <div>
                                     <span className="skill">Skills : {e.SkillDesc}</span>
                                     <span className="value">Value : ${e.Value}</span>
                                     </div>
                                     <span className="match">Upcoming Match : {e.UpComingMatchesList[0].CCode} vs {e.UpComingMatchesList[0].VsCCode}</span><br/>
                                     <span className="time">Time : {e.UpComingMatchesList[0].MDate}</span>
                                 </div>
                            </div>
                        </div>
                    </div>
                        )
                        :
                        null
                }
            </div>
            </div>

        )
    }
}

export default Contact

