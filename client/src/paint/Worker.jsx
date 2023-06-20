import React from 'react'
import Header from '../components/Header'
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
function Worker() {
  
  const navigate = useNavigate();
  return (
    <>
    
    <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          style={{ margin: "5vh 10vw" }}
        >
         
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage src={dashboard2} alt="icon" size="100%" />}
              title={`Whiteboard`}
              description="View whiteboard."
              onClick={() => navigate("/work")}
              paddingSize="xl"
            />
          </EuiFlexItem>
      
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage src={dashboard3} alt="icon" size="5rem" />}
              title={`File sharing`}
              description="View the file sharing."
              onClick={() => navigate("/filesharing")}
              paddingSize="xl"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
      
    </>
  )
}

export default Worker
