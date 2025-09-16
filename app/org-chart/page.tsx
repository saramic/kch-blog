"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Tree components to avoid SSR issues
const Tree = dynamic(() => import("react-organizational-chart").then(mod => ({ default: mod.Tree })), { ssr: false });
const TreeNode = dynamic(() => import("react-organizational-chart").then(mod => ({ default: mod.TreeNode })), { ssr: false });

// Organizational data structure with job descriptions and risk accountabilities
const orgData = {
  id: "komendant",
  name: "Michał Milewski",
  position: "Komendant Chorągwi",
  jobDescription: "Chief Scout of the Polish Scouting Association in Australia. Responsible for overall leadership, strategic direction, and coordination of all scouting activities across Australia.",
  riskAccountabilities: [
    "Ultimate responsibility for safety of all scouting activities",
    "Ensures compliance with Australian scouting regulations",
    "Oversees child protection policies and implementation",
    "Accountable for financial oversight and governance",
    "Manages reputation and public relations risks"
  ],
  children: [
    {
      id: "komenda-choragwi",
      name: "Komenda Chorągwi",
      position: "Command Staff",
      jobDescription: "Administrative support team for the Chief Scout, handling day-to-day operations and coordination.",
      riskAccountabilities: [
        "Administrative accuracy and record keeping",
        "Communication and information management",
        "Support coordination of activities"
      ],
      children: [
        {
          id: "secretary",
          name: "Seb W",
          position: "Secretary",
          jobDescription: "Manages administrative tasks, meeting minutes, correspondence, and maintains official records.",
          riskAccountabilities: [
            "Accurate record keeping and documentation",
            "Confidential information management",
            "Meeting coordination and communication"
          ]
        },
        {
          id: "treasurer",
          name: "Kevin K",
          position: "Skarbnik (Treasurer)",
          jobDescription: "Responsible for financial management, budgeting, and financial reporting for the organization.",
          riskAccountabilities: [
            "Financial accuracy and compliance",
            "Budget management and reporting",
            "Financial risk assessment and mitigation",
            "Audit compliance and transparency"
          ]
        }
      ]
    },
    {
      id: "vic-podhale",
      name: "Victoria Podhale",
      position: "Victorian Region",
      jobDescription: "Regional coordination and management of scouting activities in Victoria state.",
      riskAccountabilities: [
        "Regional safety coordination",
        "Local compliance with state regulations",
        "Regional risk management"
      ],
      children: [
        {
          id: "hufcowy-vic",
          name: "Richard J",
          position: "Hufcowy (District Leader)",
          jobDescription: "District leader responsible for coordinating all Victorian scouting groups and activities.",
          riskAccountabilities: [
            "District-wide safety oversight",
            "Group coordination and support",
            "Local risk assessment and management"
          ]
        },
        {
          id: "komenda-hufca",
          name: "Komenda Hufca",
          position: "District Command",
          jobDescription: "District administrative support team.",
          riskAccountabilities: [
            "District administrative oversight",
            "Resource management",
            "Communication coordination"
          ],
          children: [
            {
              id: "chris-p",
              name: "Chris P",
              position: "District Staff",
              jobDescription: "District administrative support and coordination.",
              riskAccountabilities: [
                "Administrative support",
                "Activity coordination",
                "Communication management"
              ]
            },
            {
              id: "kwatermistrz",
              name: "David B",
              position: "Kwatermistrz (Quartermaster)",
              jobDescription: "Manages equipment, supplies, and logistics for district activities.",
              riskAccountabilities: [
                "Equipment safety and maintenance",
                "Supply chain management",
                "Inventory and asset management",
                "Equipment-related risk assessment"
              ]
            }
          ]
        },
        {
          id: "druyny",
          name: "Drużyny (Troops)",
          position: "Troop Leaders",
          jobDescription: "Individual troop leadership coordinating weekly meetings and activities.",
          riskAccountabilities: [
            "Direct youth safety supervision",
            "Weekly activity risk management",
            "Parent and youth communication"
          ],
          children: [
            {
              id: "1dh",
              name: "Felix M",
              position: "1DH (1st Troop Leader)",
              jobDescription: "Leader of the 1st Victorian troop, responsible for weekly meetings and troop activities.",
              riskAccountabilities: [
                "Direct supervision of youth activities",
                "Activity-specific risk assessments",
                "Child protection compliance",
                "Emergency response coordination"
              ]
            },
            {
              id: "7dh",
              name: "Anton B",
              position: "7DH (7th Troop Leader)",
              jobDescription: "Leader of the 7th Victorian troop, responsible for weekly meetings and troop activities.",
              riskAccountabilities: [
                "Direct supervision of youth activities",
                "Activity-specific risk assessments",
                "Child protection compliance",
                "Emergency response coordination"
              ]
            },
            {
              id: "21dh",
              name: "Richard J",
              position: "21DH (21st Troop Leader)",
              jobDescription: "Leader of the 21st Victorian troop, responsible for weekly meetings and troop activities.",
              riskAccountabilities: [
                "Direct supervision of youth activities",
                "Activity-specific risk assessments",
                "Child protection compliance",
                "Emergency response coordination"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "nsw-polesie",
      name: "NSW Polesie",
      position: "NSW Region",
      jobDescription: "Regional coordination and management of scouting activities in New South Wales.",
      riskAccountabilities: [
        "Regional safety coordination",
        "Local compliance with state regulations",
        "Regional risk management"
      ],
      children: [
        {
          id: "hufcowy-nsw",
          name: "Richard Chawa",
          position: "Hufcowy (District Leader)",
          jobDescription: "District leader responsible for coordinating all NSW scouting groups and activities.",
          riskAccountabilities: [
            "District-wide safety oversight",
            "Group coordination and support",
            "Local risk assessment and management",
            "NSW state regulation compliance"
          ]
        }
      ]
    },
    {
      id: "qld-pomorze",
      name: "Qld Pomorze",
      position: "Queensland Region",
      jobDescription: "Regional coordination and management of scouting activities in Queensland.",
      riskAccountabilities: [
        "Regional safety coordination",
        "Local compliance with state regulations",
        "Regional risk management"
      ],
      children: [
        {
          id: "hufcowy-qld",
          name: "Patrick C",
          position: "Hufcowy (District Leader)",
          jobDescription: "District leader responsible for coordinating all Queensland scouting groups and activities.",
          riskAccountabilities: [
            "District-wide safety oversight",
            "Group coordination and support",
            "Local risk assessment and management",
            "Queensland state regulation compliance"
          ]
        }
      ]
    }
  ]
};

interface OrgNode {
  id: string;
  name: string;
  position: string;
  jobDescription: string;
  riskAccountabilities: string[];
  children?: OrgNode[];
}

export default function OrgChartPage() {
  const [selectedNode, setSelectedNode] = useState<OrgNode | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders on client side
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Detect mobile screen size
  React.useEffect(() => {
    if (!isClient) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isClient]);

  const renderNode = (node: OrgNode) => {
    return (
      <TreeNode
        key={node.id}
        label={
          <div
            onClick={() => setSelectedNode(node)}
            style={{
              border: "2px solid #1976d2",
              borderRadius: 8,
              padding: isMobile ? "6px 8px" : "8px 12px",
              background: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              cursor: "pointer",
              minWidth: isMobile ? 100 : 120,
              maxWidth: isMobile ? 140 : "none",
              textAlign: "center",
              transition: "all 0.2s",
              margin: isMobile ? "4px" : "8px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e3f2fd";
              e.currentTarget.style.transform = isMobile ? "scale(1.02)" : "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{
              fontWeight: "bold",
              fontSize: isMobile ? 10 : 12,
              marginBottom: 4,
              lineHeight: isMobile ? 1.2 : 1.4
            }}>
              {node.name}
            </div>
            <div style={{
              fontSize: isMobile ? 8 : 10,
              color: "#666",
              lineHeight: isMobile ? 1.1 : 1.2
            }}>
              {node.position}
            </div>
          </div>
        }
      >
        {node.children?.map(child => renderNode(child))}
      </TreeNode>
    );
  };

  // Don't render until client-side
  if (!isClient) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Loading Organizational Chart...</h2>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          width: isFullscreen ? "100vw" : "100vw",
          minHeight: isFullscreen ? "100vh" : "auto",
          margin: isFullscreen ? 0 : "0 calc(-50vw + 50%)",
          padding: isFullscreen ? "1rem" : (isMobile ? "1rem" : "1rem 1em"),
          position: isFullscreen ? "fixed" : "relative",
          top: isFullscreen ? 0 : "auto",
          left: isFullscreen ? 0 : "auto",
          zIndex: isFullscreen ? 1000 : "auto",
          background: "#fff",
          boxSizing: "border-box"
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0.5rem" : "0"
        }}>
          <h2 className="title is-4" style={{
            fontSize: isMobile ? "18px" : "24px",
            margin: isMobile ? "0" : "auto"
          }}>
            Organizational Chart - ZHP Australia
          </h2>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            style={{
              padding: isMobile ? "6px 12px" : "8px 16px",
              border: "2px solid #1976d2",
              borderRadius: 6,
              background: isFullscreen ? "#1976d2" : "#fff",
              color: isFullscreen ? "#fff" : "#1976d2",
              cursor: "pointer",
              fontSize: isMobile ? 12 : 14,
              fontWeight: "bold"
            }}
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>

        {/* Full Width Org Chart */}
        <div style={{
          width: "100%",
          overflow: "auto",
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: isMobile ? "1rem" : "2rem",
          minHeight: isFullscreen ? "calc(100vh - 100px)" : (isMobile ? "400px" : "600px"),
          boxSizing: "border-box"
        }}>
          <Tree
            lineWidth={isMobile ? "1px" : "2px"}
            lineColor="#1976d2"
            lineBorderRadius={isMobile ? "5px" : "10px"}
            nodePadding={isMobile ? "4px" : "8px"}
            label={<div></div>}
          >
            {renderNode(orgData)}
          </Tree>
        </div>
      </div>

      {/* Modal for Job Description */}
      {selectedNode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000
          }}
          onClick={() => setSelectedNode(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: isMobile ? "1.5rem" : "2rem",
              maxWidth: isMobile ? "95vw" : 600,
              maxHeight: "90vh",
              overflow: "auto",
              margin: isMobile ? "0.5rem" : "1rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <h4 className="title is-4" style={{ marginBottom: "0.5rem" }}>
                  {selectedNode.name}
                </h4>
                <p style={{ fontWeight: "bold", color: "#1976d2", fontSize: 18 }}>
                  {selectedNode.position}
                </p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 24,
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f5f5f5"}
                onMouseLeave={(e) => e.currentTarget.style.background = "none"}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "0.75rem", fontSize: 16, color: "#333" }}>
                Job Description:
              </h5>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#555" }}>
                {selectedNode.jobDescription}
              </p>
            </div>

            <div>
              <h5 style={{ fontWeight: "bold", marginBottom: "0.75rem", fontSize: 16, color: "#333" }}>
                Risk Accountabilities:
              </h5>
              <ul style={{ paddingLeft: "1.25rem", fontSize: 15 }}>
                {selectedNode.riskAccountabilities.map((item, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem", lineHeight: 1.5, color: "#555" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
