import React from "react";
import "./WorkFlow.scss";
import WorkFlowItem from "./WorkFlowItem";
import WorkflowImage from "../../../../assests/images/workflowimage.png";
import HomeData from "../../../../store/data/HomeData";

const WorkFlow = () => {
  return (
    <div className="container">
      <div className="row work-flow-margin">
        <div className="col-lg-5 col-md-5 image-sectionHolder">
          <div className="workflowimge-holder">
            <img src={WorkflowImage} />
          </div>
        </div>
        <div className="col-lg-7  col-md-7">
          <div className="workflow-items-holder">
            <div>
              <h5>Our WorkFlow:</h5>
              <p>
                I always follow professional Workflow and provide you best
                service with resealable costs.
              </p>
            </div>

            <div className="workflow-items">
              {/**<ul className="items-holder"></ul> */}
              <div className="row">
                {HomeData.workFlowData.map((data) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={data.id}>
                    <WorkFlowItem
                      ItemColor={data.itemColor}
                      number={data.number}
                      title={data.title}
                      description={data.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

{
  /**
 <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="navy-blue-item" number="01" title="Your brief"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="light-purple-item" number="02" title="Research"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="orang-item" number="03" title="Concept Design"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="light-red-item" number="04" title="Revision #01"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="blue-item" number="05" title="Revision #01"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="orange-dark-item" number="06" title="Revision #02"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="light-green-item" number="07" title="Revision #02"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="pink-item" number="08" title="Revision #03"  description="I always  professional Workflow and provide"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <WorkFlowItem ItemColor="red-item" number="09" title="Final Design"  description="I always  professional Workflow and provide"/>
                            </div> */
}
