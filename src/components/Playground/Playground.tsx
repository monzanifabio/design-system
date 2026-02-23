import Card from "../Card/Card";
import { Button } from "../Button/Button";
import Tag from "../Tag/Tag";
import { Tab } from "../Tab/Tab";
import { Select } from "../Select/Select";
import { Icon } from "../Icon/Icon";
import "../../App.css";

const eventData = [
  {
    date: "TODAY",
    count: 2,
    events: [
      {
        eventName: "Created asset",
        eventDatetime: "10:30 AM",
        username: "Fabio Monzani",
        eventLink: "View asset",
        note: "Asset created successfully.",
      },
      {
        eventName: "Updated project",
        eventDatetime: "09:00 AM",
        username: "Fabio Monzani",
        eventLink: "View project",
        note: "Project details updated.",
      },
    ],
  },
  {
    date: "YESTERDAY",
    count: 2,
    events: [
      {
        eventName: "Added contact",
        eventDatetime: "04:15 PM",
        username: "Fabio Monzani",
        eventLink: "View contact",
        note: "Contact added to property.",
      },
      {
        eventName: "Changed status",
        eventDatetime: "11:00 AM",
        username: "Fabio Monzani",
        eventLink: "View status",
        note: "Status changed to Active.",
      },
    ],
  },
  {
    date: "10 FEBRUARY 2026",
    count: 1,
    events: [
      {
        eventName: "Note added",
        eventDatetime: "02:00 PM",
        username: "Fabio Monzani",
        eventLink: "View note",
        note: "Inspection scheduled.",
      },
    ],
  },
];

const tabList = [
  { label: "Assets", icon: <Icon name="assets" /> },
  { label: "Projects", icon: <Icon name="project" /> },
  { label: "Notes", icon: <Icon name="note" /> },
  { label: "Contacts", icon: <Icon name="contacts" /> },
  { label: "Calendar", icon: <Icon name="calendar" /> },
];

const selectOptions1 = [
  { label: "All events", value: "all" },
  { label: "Created", value: "created" },
  { label: "Updated", value: "updated" },
];
const selectOptions2 = [
  { label: "All users", value: "all" },
  { label: "Fabio Monzani", value: "fabio" },
];

export default function Playground() {
  return (
    <div className="playground" style={{ backgroundColor: "var(--gray-100)" }}>
      <div>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h1 style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 600, fontSize: 24, color: "var(--black)", lineHeight: "32px", margin: 0 }}>78 Roberts Street</h1>
          <Button label="View in Kraken Customer" variant="outline" endIcon={true} startIcon={false} onClick={() => {}} />
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          {/* Left column */}
          <div style={{ width: 460, display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
              <div style={{ width: "100%" }}>
                <div style={{ fontWeight: 600, fontSize: 20, lineHeight: "28px", marginBottom: 10, color: "var(--black)" }}>Customer details</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    ["First name", "Fabio"],
                    ["Last name", "Monzani"],
                    ["User ID", "U-38567AB"],
                    ["Status", <Tag key="status" content="Active" style="Light" colour="Green" dismissable={false} text={true} icon={false} />],
                    ["Email", "fabio.monzani@kraken.tech"],
                    ["Phone", "+44 07926951240"],
                  ].map(([label, value], i) => (
                    <div key={label as string} style={{ display: "flex", borderBottom: i < 5 ? "1px solid var(--gray-200)" : undefined, padding: "8px 0" }}>
                      <div style={{ flex: 1, fontWeight: 600, fontSize: 16, color: "var(--black)" }}>{label}</div>
                      <div style={{ flex: 1, textAlign: "right", fontWeight: 400, fontSize: 16, color: "var(--black)" }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card>
              <div style={{ width: "100%" }}>
                <div style={{ fontWeight: 600, fontSize: 20, lineHeight: "28px", marginBottom: 10, color: "var(--black)" }}>Other properties</div>
                <div style={{ background: "var(--gray-100)", border: "1px solid var(--gray-200)", borderRadius: 8, padding: 16, marginBottom: 8 }}>
                  <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Apt 20706, 4 Wharf End, M17 1HZ</div>
                  <div style={{ display: "flex", gap: 24, marginBottom: 8 }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>Assets</div>
                      <div style={{ fontWeight: 400 }}>1</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }}>Projects</div>
                      <div style={{ fontWeight: 400 }}>1</div>
                    </div>
                  </div>
                  <div style={{ color: "var(--purple-600)", fontWeight: 500, fontSize: 16, cursor: "pointer" }}>View property details</div>
                </div>
              </div>
            </Card>
          </div>
          {/* Right column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid var(--gray-200)", gap: 0 }}>
              {tabList.map((tab, idx) => (
                <Tab key={tab.label} label={tab.label} icon={tab.icon} state={idx === 0 ? "Selected" : "Unselected"} onClick={() => {}} />
              ))}
            </div>
            {/* History header and filters */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 400, fontSize: 24, color: "var(--black)", lineHeight: "36px" }}>History</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Select options={selectOptions1} value={"all"} onChange={() => {}} />
                <Select options={selectOptions2} value={"all"} onChange={() => {}} />
              </div>
            </div>
            {/* Events timeline */}
            {eventData.map((section) => (
              <div key={section.date} style={{ marginTop: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ fontWeight: 600, fontSize: 18, color: "var(--black)" }}>{section.date}</div>
                  <div style={{ fontWeight: 400, fontSize: 16, color: "var(--gray-600)" }}>({section.count} events)</div>
                </div>
                {section.events.map((event, i) => (
                  <Card key={i}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Icon name="history" />
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontWeight: 600, fontSize: 18, color: "var(--black)" }}>{event.eventName}</div>
                          <div style={{ fontWeight: 500, fontSize: 14, color: "var(--gray-600)" }}>{event.eventDatetime}</div>
                        </div>
                        <div style={{ fontWeight: 500, fontSize: 14, color: "var(--gray-600)" }}>{event.username}</div>
                        <div style={{ fontWeight: 500, fontSize: 16, color: "var(--purple-600)", cursor: "pointer" }}>{event.eventLink}</div>
                        <div style={{ fontWeight: 500, fontSize: 14, color: "var(--gray-600)" }}>{event.note}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
