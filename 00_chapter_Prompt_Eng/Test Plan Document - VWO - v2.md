# Test Plan Document - VWO

## 1. Project Information
| Field | Description |
| :--- | :--- |
| **Project Name** | VWO – Digital Experience Optimization Platform |
| **Project URL** | https://app.vwo.com/ |
| **Document Type** | Master Test Plan |
| **Prepared By** | Vinod Kumar M |
| **Date** | 2026-10-10 |
| **Version** | 1.0 |

## 2. Approvals
| Role | Signature / Status | Date |
| :--- | :--- | :--- |
| Product Manager | | |
| QA Lead | | |
| Development Manager| | |

## 3. Objectives & References
**Objectives**: Ensure that the VWO Digital Experience Optimization Platform meets its functional and non-functional requirements to enable users to improve conversion rates, test hypotheses empirically, and gain unified optimization insights securely and reliably.

**References**:
- Product Requirements Document (PRD) - Prepared by Pramod Dutta, January 7, 2026.
- VWO Website & Official Documentation
- geteppo.com (Pricing and Integration references)

## 4. Test Objectives
- Validate the robustness of the core experimentation capabilities (A/B, Split, Multivariate testing).
- Ensure the accuracy of the SmartStats engine in statistical evaluations.
- Verify that behavioral tracking (Heatmaps, Recordings) accurately captures real user data without degrading performance.
- Confirm integrations sync data smoothly and securely with third-party platforms.
- Certify non-functional capabilities including sub-2-second response time for editors, GDPR/CCPA compliance, and handling high user traffic loads.

## 5. Features
The platform delivers optimization and analysis features:
- **Experimentation & Testing (FR1-FR3)**: A/B/Multivariate testing with WYSIWYG & code editors, and SmartStats Bayesian engine.
- **Behavioral Insights (FR4)**: Heatmaps, session recordings, on-page surveys, and funnel analytics.
- **Audience Targeting & Personalization (FR5, FR7)**: Real-time customization based on user behaviors and demographics.
- **Reporting & Workflow (FR6, FR9)**: Real-time analytics, Kanban-style project management.
- **Integrations (FR8)**: Connectivity with Salesforce, Shopify, Snowflake, Segment, etc.

## 6. Scope of Testing
### In Scope
- Core testing modules: A/B, Split, and Multivariate testing.
- SmartStats engine output verification.
- Visual and code editor capabilities.
- Behavioral insights data capture (Heatmaps, Session recordings).
- Integrations with 3rd-party platforms (Shopify, Salesforce, Segment).
- Non-functional attributes: Performance (workflow editing speeds), Security (2FA, RBAC), Scalability, and Privacy.

### Out of Scope
- Native mobile SDK testing (currently slated for future enhancements).
- Third-party platform (e.g., Shopify, Salesforce) native operational testing outside of integration points.
- AI-driven suggestion engine (Future Enhancement).

## 7. Test Strategy
The QA team will adopt a multi-level testing strategy prioritizing automated testing for regression and core features, complemented by exploratory and manual testing for visual editors and complex workflow configurations. Automation will utilize **Playwright + TypeScript**. All defects and requirements will be managed in **Jira**, with automated builds via **Jenkins** and reporting published to **Report Portal**.

## 8. Scenarios
### Functional Scenarios
| Scenario ID | Feature | Test Scenario Description | Expected Result |
| :--- | :--- | :--- | :--- |
| **TC-FR1-01** | Experimentation | Create and launch an A/B test with 2 visual variations. | Variations are created successfully, and traffic is routed 50/50 without error. |
| **TC-FR1-02** | Experimentation | Execute a split URL test for two different landing pages. | Traffic is distributed correctly to URL A and URL B per configuration. |
| **TC-FR1-03** | Experimentation | Pause a running A/B test and verify traffic stops being split. | Test status changes to "Paused" within 5 seconds; 0 new visitors are assigned to variations after pause. |
| **TC-FR1-04** | Experimentation | Configure a Multivariate test with 3 elements and 8 combinations. | All 8 combinations are generated correctly; traffic is distributed evenly across combinations. |
| **TC-FR1-05** | Experimentation | Archive a completed A/B test and verify it appears in "Archived" state. | Test is moved to Archived; historical results and report data remain fully intact and accessible. |
| **TC-FR2-01** | SmartStats Engine | Validate Bayesian engine calculation on mock 10,000 visitors test data. | Engine calculates conversion uplift, variance, and significance perfectly matching standard expected outcomes. |
| **TC-FR2-02** | SmartStats Engine | Validate that the engine flags a test as "Not Significant" when conversion delta < 1%. | System correctly displays "Not Significant" status; no winner is declared prematurely. |
| **TC-FR2-03** | SmartStats Engine | Verify the engine reaches statistical significance with a simulated 15% uplift at 95% confidence. | Winner is correctly declared with confidence score ≥ 95% and uplift displayed as **+15%**. |
| **TC-FR3-01** | Visual Editor | Modify a headline element using the WYSIWYG editor. | Element changes are reflected accurately in the live preview across browser targets. |
| **TC-FR3-02** | Visual Editor | Add a custom CSS class to a button element via the code editor. | Button renders with the correct class on the live variation page with no CSS conflicts. |
| **TC-FR3-03** | Visual Editor | Insert a new image block into the variation using the visual editor. | Image renders at the correct position and dimensions; no layout shifts observed. |
| **TC-FR4-01** | Behavioral Insights | Record a user session navigating through a 3-step funnel. | Session recording captures all clicks and scrolls; playback is highly accurate with no missing events. |
| **TC-FR4-02** | Behavioral Insights | Generate a click heatmap for the homepage over 500 recorded sessions. | Heatmap is generated correctly, highlighting top-clicked regions; data reflects actual session events. |
| **TC-FR4-03** | Behavioral Insights | View the scroll depth heatmap and identify the 50% scroll threshold on a landing page. | Heatmap accurately renders color-coded scroll zones; 50% depth marker is correctly placed on the page. |
| **TC-FR4-04** | Behavioral Insights | Configure a 4-step funnel and identify the step with the highest drop-off rate. | Funnel report correctly identifies drop-off percentages at each step; highest drop-off step is visually highlighted. |
| **TC-FR5-01** | Audience Targeting | Configure test audience strictly to "Mobile Users from US". | Only US-based mobile visitors enter the experiment; all others see the control. |
| **TC-FR5-02** | Audience Targeting | Set up audience targeting by UTM source = "google" and verify segmentation. | Only visitors with UTM source = "google" are bucketed into the experiment; all others are excluded. |
| **TC-FR5-03** | Audience Targeting | Configure a behavioral trigger to show variation after user visits 3+ pages. | Variation is displayed only after the 3rd page visit; users with fewer visits consistently see control. |
| **TC-FR6-01** | Reporting & Workflow | Verify real-time analytics update within 60 seconds of a new visit event. | Dashboard reflects new visitor count within ≤ 60 seconds of the recorded event. |
| **TC-FR6-02** | Reporting & Workflow | Export test results report as a CSV file. | CSV file downloads successfully, contains all expected columns (Variation, Visitors, Conversions, Uplift), and data matches the dashboard. |
| **TC-FR6-03** | Reporting & Workflow | Create a Kanban card for a new test hypothesis and move it to "In Progress". | Card is created with correct details; drag-and-drop to "In Progress" column is saved and reflected on board refresh. |
| **TC-FR7-01** | Personalization | Deliver targeted promotional banner based on user's past purchase history. | Targeted segment users see the customized banner in < 500ms; default users see standard content. |
| **TC-FR7-02** | Personalization | Configure personalization for returning users with > 2 previous visits to show a loyalty discount. | Returning users meeting the criteria see the discount banner; new users and single-visit users see the default page. |
| **TC-FR8-01** | Integrations | Sync VWO lead data to Salesforce CRM integration. | Data sync is successful, and lead records appear in Salesforce within 1 minute. |
| **TC-FR8-02** | Integrations | Validate Shopify integration triggers a VWO event on "Add to Cart" action. | "Add to Cart" Shopify event is received and logged in VWO within ≤ 5 seconds; event count matches Shopify records. |
| **TC-FR8-03** | Integrations | Validate Segment integration forwards VWO experiment assignment events to the Segment pipeline. | Experiment assignment events appear in the Segment debugger within ≤ 10 seconds with correct experiment ID and variation name. |

### Non-Functional Scenarios
| Scenario ID | Category | Test Scenario Description | Load / Measure | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **TC-NFR-PERF-01** | Performance | Measure Visual Editor load time under standard authenticated user traffic. | **200 concurrent users**, 10 req/sec, sustained for 5 min | Editor fully loads within **≤ 2 sec** at p95; 0 timeouts or errors. |
| **TC-NFR-PERF-02** | Performance | API response time for fetching A/B test results dashboard. | **500 API requests/min** sustained for 10 min | API responds within **≤ 1.5 sec** at p95; error rate **< 0.5%**. |
| **TC-NFR-SEC-01** | Security | Validate 2FA login enforcement — correct and incorrect token attempts. | **50 parallel login attempts** (25 valid / 25 with wrong 2FA token) | All 25 invalid attempts denied; **0** unauthorized sessions created. |
| **TC-NFR-SEC-02** | Security | Validate RBAC — Viewer role cannot launch or modify an experiment. | **20 concurrent Viewer-role sessions** | All 20 receive HTTP **403**; no experiment state changes recorded. |
| **TC-NFR-SCA-01** | Scalability | Simulate peak concurrent visitor traffic hitting an active A/B test. | **50,000 CCU** ramped over 10 min | System maintains **99.9% uptime**; page render time **≤ 3 sec** at p99. |
| **TC-NFR-SCA-02** | Scalability | Validate session recording ingestion under peak event load. | **10,000 recording events/sec** for 15 min | All events ingested without data loss; processing queue depth **< 1,000** items. |
| **TC-NFR-PRI-01** | Privacy | Test GDPR right-to-be-forgotten deletion for a single user. | **1 deletion request** + **100 subsequent verification queries** | All PII purged within **≤ 30 sec**; 0 records returned on verification. |
| **TC-NFR-PRI-02** | Privacy | Validate opt-out cookie suppresses data collection. | **1,000 users** with opt-out cookie set, browsing for 30 min | **0** session recordings or heatmap events collected for opted-out users. |

## 9. Test Approach, Levels, and Types
- **Unit Testing**: Handled by Development team (Shift-left approach).
- **Integration Testing**: Verifying data flow between VWO and external platforms (Shopify, Segment).
- **System Testing**: End-to-end testing of A/B test creation, launching, and analyzing.
- **Performance/Load Testing**: Validating high visitor volume capabilities and editor response time.
- **Security Testing**: RBAC and 2FA validation.

## 10. Entry & Exit Criteria
### Entry Criteria
- PRD, Design files, and Architecture documents are signed off.
- Test environments are provisioned and accessible.
- Automated testing framework (Playwright + TS) is configured and connected to CI/CD.
- Code is deployed to the QA environment with Unit tests passed.

### Exit Criteria
- 100% of test cases are executed (Manual + Automated).
- 0 Critical or High severity defects are open.
- Automation pass rate is > 95%.
- Performance metrics align with the stated 2-second response time.
- Sign-off provided by QA Lead and Product Manager.

## 11. Test Environment
| Environment | Purpose | Details / URL |
| :--- | :--- | :--- |
| **QA / Staging** | Core functional testing & automated regression. | https://qa.app.vwo.com |
| **Pre-Production** | Performance, Scalability, and Security testing. | https://preprod.app.vwo.com |
| **Integrations Sandbox**| Validating Salesforce/Shopify sync. | External Sandbox instances |

## 12. Test Deliverables
- Test Plan Document (This document)
- Test Scenarios & Test Cases (Stored in Jira)
- Automated Test Scripts Repository (Playwright + TS)
- Daily Execution & Defect Status Reports
- Final Test Closure Report

## 13. Test Schedule
| Phase | Start Date | End Date |
| :--- | :--- | :--- |
| Test Planning & Scripting | TBD | TBD |
| Integration & API Testing | TBD | TBD |
| E2E Functional Testing | TBD | TBD |
| Performance & Security | TBD | TBD |
| UAT & Sign-off | TBD | TBD |

## 14. Test Tools
| Tool Category | Tool Selection |
| :--- | :--- |
| **Test Management Tool** | Jira |
| **Defect Management Tool** | Jira |
| **Test CI/CD Tool** | Jenkins |
| **Test Automation Framework** | Playwright + TypeScript |
| **Test Reporting Tool** | Report Portal |

## 15. Work Effort Estimates
| Task / Activity | Estimated Effort (Person-Days) |
| :--- | :--- |
| Test Planning & Setup | 3 Days |
| Test Case Design | 5 Days |
| Automation Scripting | 12 Days |
| Test Execution (Manual & Auto) | 8 Days |
| Performance & Security Testing | 5 Days |
| **Total Estimated Effort** | **33 Days** |

## 16. Defect Management and Reporting
- Defects will be logged in **Jira**.
- Triage meetings will be held tri-weekly with Development, QA, and Product teams.
- **Defect Lifecycle**: Open -> In Progress -> Ready for QA -> In QA -> Closed/Reopened.
- Integration with **Report Portal** will provide live dashboards for pass/fail trends and automation stability.

## 17. Resources
- **1 QA Lead**: Strategy, planning, environment setup, sign-offs.
- **2 Automation Engineers (SDETs)**: Playwright script creation, Jenkins pipeline maintenance.
- **1 Performance/Security Tester**: Dedicated to testing the sub-2-second SLA and RBAC/2FA.
- **1 Manual/Exploratory QA**: Focusing on visual editors and complex user workflows.

## 18. Risks & Mitigation
| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| **Technical Complexity of SmartStats** | High | Work closely with Data Science team to obtain expected calculation matrices and use mock datasets for validation. |
| **Third-Party Integration Sandbox Limits**| Medium| Pre-arrange sandbox limits with Salesforce/Shopify early in the sprint to avoid rate limiting during automated tests. |
| **Test Data Availability** | High | Develop data-generation scripts to simulate 50k concurrent users and historical tracking data for reports. |
| **Delayed Code Delivery** | High | Implement shift-left practices and start API testing & automation script mocking before UI is fully ready. |
