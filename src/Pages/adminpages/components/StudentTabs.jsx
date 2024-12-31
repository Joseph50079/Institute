import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import StudentTable from "./StudentTable";
import { UnregStudentTable } from "./UnregStudentTable";
   
export default function StudentTabs() {
    const data = [
      {
        label: "Registered",
        value: "registered",
        desc: (
            <StudentTable />
        ),
      },
      {
        label: "Unregistered",
        value: "admission",
        desc: (
            <UnregStudentTable />
        ),
      },
    ];
   
    return (
      <Tabs value="registered">
        <TabsHeader className="items-start flex m-6">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }