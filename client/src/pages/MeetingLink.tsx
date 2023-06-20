import { EuiFlexGroup, EuiForm, EuiSpacer,EuiCopy,EuiButtonIcon,EuiBadge,EuiBasicTable,
    EuiFlexItem,
    EuiPanel, } from "@elastic/eui";
import { addDoc } from "firebase/firestore";
import { getDocs, query } from "firebase/firestore";
import moment from "moment";
import React, { useState,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import CreateMeetingButtons from "../components/FormComponents/CreateMeetingButtons";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import useToast from "../hooks/useToast";
import { meetingsRef } from "../utils/firebaseConfig";
import { generateMeetingID } from "../utils/generateMeetingId";
import { MeetingType } from "../utils/types";


export default function MeetingLink() {
// start meeting
const userInfo = useAppSelector((zoom) => zoom.auth.userInfo);
const [meetings, setMeetings] = useState<Array<MeetingType>>([]);

useEffect(() => {
  const getMyMeetings = async () => {
    const firestoreQuery = query(meetingsRef);
    const fetchedMeetings = await getDocs(firestoreQuery);
    if (fetchedMeetings.docs.length) {
      const myMeetings: Array<MeetingType> = [];
      fetchedMeetings.forEach((meeting) => {
        const data = meeting.data() as MeetingType;
        if (data.createdBy === userInfo?.uid)
          myMeetings.push(meeting.data() as MeetingType);
        else {
          const index = data.invitedUsers.findIndex(
            (user: string) => user === userInfo?.uid
          );
          if (index !== -1) {
            myMeetings.push(meeting.data() as MeetingType);
          }
        }
      });

      setMeetings(myMeetings);
    }
  };
  if (userInfo) getMyMeetings();
}, [userInfo]);

// end


  useAuth();
  const [users] = useFetchUsers();
  const [createToast] = useToast();
  const uid = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.uid);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(moment());
  const createMeeting = async () => {
     const meetingId = generateMeetingID();
      await addDoc(meetingsRef, {
        createdBy: uid,
        meetingId,
     
        meetingDate: startDate.format("L"),
       
        status: true,
      });
      createToast({
        title: "One on One Meeting Created Successfully",
        type: "success",
      });
      navigate("/dashboard");
  
  }
  const meetingColumns = [
  {
    field: "meetingName",
    name: "Meeting Name",
  },
  {
    field: "meetingType",
    name: "Meeting Type",
  },
  {
    field: "meetingDate",
    name: "Meeting Date",
  },
  {
    field: "",
    name: "Status",

    render: (meeting: MeetingType) => {
      if (meeting.status) {
        if (meeting.meetingDate === moment().format("L")) {
          return (
            <EuiBadge color="success">
              <Link
                to={`/join/${meeting.meetingId}`}
                style={{ color: "black" }}
              >
                Join Now
              </Link>
            </EuiBadge>
          );
          }
        }
    }
  },
  {
    field: "meetingId",
    name: "Copy Link",
    width: "10%",
  render: (meetingId: string) => {
    return (
      <EuiCopy
        textToCopy={`localhost:3000/join/${meetingId}`}
      >
        {(copy: any) => (
          <EuiButtonIcon
            iconType="copy"
            onClick={copy}
            display="base"
            aria-label="meeting-copy"
          />
        )}
      </EuiCopy>
    );
  },
}
]
  return (
    <div>
     
      {/* <EuiFlexGroup justifyContent="center" alignItems="center">
        <EuiForm>
        
          <EuiSpacer />
          <CreateMeetingButtons createMeeting={createMeeting} />
        </EuiForm>
        <EuiFlexItem>
          <EuiPanel>
            <EuiBasicTable items={meetings} columns={meetingColumns} />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup> */}
    </div>
  );
}
