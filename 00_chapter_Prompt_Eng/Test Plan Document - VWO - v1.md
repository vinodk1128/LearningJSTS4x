# Test Plan: VWO – Digital Experience Optimization Platform

## 1. Project Information
| Attribute | Details |
| :--- | :--- |
| **Project Name** | VWO – Digital Experience Optimization Platform |
| **Prepared By** | Vinod Kumar M |
| **Date** | October 6, 2026 |
| **Document Version** | 1.0 |

## 2. Approvals
| Role | Signature | Date |
| :--- | :--- | :--- |
| Project Manager | | |
| QA Manager | | |
| Product Manager | | |
| Development Lead | | |

## 3. Objectives & References
**Objectives:**
- Validate the core features of the VWO platform (Experimentation, Behavioral Insights, Personalization).
- Ensure the reliability, performance, and security of the application.
- Deliver high-quality software matching the PRD specifications.

**References:**
- Product Requirements Document (PRD) - January 7, 2026
- VWO official site and product pages

## 4. Test Objectives
- To verify that all functional requirements for A/B Testing, Insights, and Personalization are working as expected.
- To validate the accuracy of the SmartStats Engine.
- To ensure performance meets the < 2 seconds response time requirement.
- To confirm security features like 2FA and role-based access control are functioning.

## 5. Features
- **Experimentation & Testing:** A/B, Split URL, Multivariate, WYSIWYG & Code editor.
- **Behavioral Insights:** Heatmaps, Session recordings, Funnels.
- **Personalization:** Audience targeting, customized experiences.
- **Integrations:** Connectors for Shopify, Salesforce, Segment, etc.
- **Program & Workflow Management:** Kanban boards, collaboration tools.

## 6. In Scope and Out of Scope
### In Scope
- Functional testing of Experimentation, Insights, Personalization, and Workflow Management.
- Integration testing with simulated third-party connectors (Shopify, Salesforce, Segment, Snowflake).
- Performance testing for editing workflows.
- Security testing (2FA, Role-based access control).
- Cross-browser and Cross-device QA.

### Out of Scope
- Load testing for high visitor volumes on external customer sites (handled by infrastructure team).
- Testing of third-party platform internal functionalities (e.g., inside Salesforce).
- Mobile App SDK native testing (future enhancement).

## 7. Test Strategy
The test strategy involves an agile approach with continuous testing. Automation will be prioritized for regression suites using Playwright + TS. Manual exploratory testing will be conducted for UX-heavy features like WYSIWYG editors and heatmaps. API testing will validate integration connectors and the SmartStats backend.

## 8. Requirements and Planned Coverage

| Req ID | Feature | Scenarios | Expected Result |
| :--- | :--- | :--- | :--- |
| FR1 | A/B, Split & Multivariate Testing | 1. Create an A/B test with 2 variants.<br>2. Create a Multivariate test. | Test is created and status updates correctly. Variations are saved. |
| FR2 | SmartStats Engine | 1. Validate stats calculation with mock data.<br>2. Verify Bayesian analysis reports. | Stats accurately reflect conversion data; winner is confidently declared. |
| FR3 | Visual & Code Editor | 1. Modify a button color via WYSIWYG.<br>2. Inject JS via Code Editor. | Changes reflect in test preview across devices. |
| FR4 | Heatmaps & Session Recordings | 1. Generate click heatmap.<br>2. Playback session recording. | Accurate clicks are rendered; recording plays smoothly without errors. |
| FR5 | Audience Targeting | 1. Segment users by geography.<br>2. Segment by behavior. | Only targeted users see the personalized test variant. |
| FR6 | Real-time Reporting | 1. View dashboard during active test. | Dashboard updates in real-time with visitor/conversion data. |
| FR7 | Personalization Engine | 1. Deliver custom content based on user segment. | Content matches the defined segment rules instantly. |
| FR8 | Integration Connectors | 1. Sync data with mock Salesforce instance. | Data syncs successfully without field mapping errors. |
| FR9 | Collaboration & Workflow | 1. Move test card in Kanban board. | State updates seamlessly; notifications sent. |
| NFR1 | Performance | 1. Edit a large page in Visual Editor. | Editor loads and responds within 2 seconds. |
| NFR2 | Security | 1. Login with 2FA.<br>2. Access admin page as standard user. | 2FA is required; standard user is denied access. |

## 9. Test Approach, Levels, and Types
- **Unit Testing:** Executed by Development (Jest/Mocha).
- **Integration Testing:** Automated API tests for integrations and SmartStats.
- **System Testing:** End-to-end automation with Playwright + TS covering the full UI.
- **Performance Testing:** JMeter/K6 for specific NFR validation.
- **Security Testing:** OWASP Top 10 vulnerabilities scan.

## 10. Entry & Exit Criteria
**Entry Criteria:**
- Test environment is provisioned and stable.
- All high-priority requirements have been developed and unit tested.
- Test data is prepared.

**Exit Criteria:**
- 100% of planned test cases executed.
- No critical or high severity defects are open.
- Automation test pass rate is >= 95%.
- Test summary report is signed off by stakeholders.

## 11. Test Environment
| Component | Specification |
| :--- | :--- |
| **OS** | Windows 11, macOS, Linux |
| **Browsers** | Chrome, Firefox, Safari, Edge (Latest 2 versions) |
| **Devices** | Desktop, iOS, Android |
| **Database** | Staging DB replica (sanitized) |

## 12. Test Deliverables
- Test Plan Document
- Automated Test Scripts (Playwright + TS)
- Requirement Traceability Matrix (RTM)
- Defect Reports
- Test Execution Summary Report

## 13. Test Schedule
| Phase | Timeline |
| :--- | :--- |
| Test Planning | Week 1 |
| Test Case Design & Automation | Week 2 - Week 3 |
| Test Execution (Integration & System) | Week 4 - Week 5 |
| Performance & Security Testing | Week 6 |
| Sign-off | Week 7 |

## 14. Test Tools
| Tool Type | Tool Name |
| :--- | :--- |
| Test Management | Jira |
| Defect Management | Jira |
| CI/CD | Jenkins |
| Test Automation Framework | Playwright + TS |
| Test Reporting | Report portal |

## 15. Work Effort Estimates
| Task | Estimated Effort (Person-Days) |
| :--- | :--- |
| Planning & Design | 5 |
| Automation Framework Setup | 3 |
| Scripting (Playwright + TS) | 15 |
| Manual/Exploratory Testing | 7 |
| Non-functional Testing | 5 |
| **Total** | **35 Days** |

## 16. Defect Management and Reporting
Defects will be logged in **Jira**. 
**Fields include:** ID, Title, Description, Steps to Reproduce, Expected/Actual Result, Severity, Priority, Status, Environment, and Attachments.
**Defect Triage:** Weekly triage meetings with Dev Lead and Product Manager to prioritize and plan fixes.

## 17. Test Deliverables and Approval
All deliverables (Test Plan, Scripts, Reports) will be reviewed by the QA Manager and signed off by the Project Manager prior to production release.

## 18. Resources
| Role | Count | Responsibilities |
| :--- | :--- | :--- |
| QA Manager | 1 | Oversee QA process, approvals, strategy |
| Automation Engineer (Playwright) | 2 | Develop and maintain automation suite |
| Manual QA / Exploratory Tester | 1 | Usability testing, edge cases |
| Performance/Security Engineer | 1 | NFR validation |

## 19. Risks & Mitigation
| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| Delay in third-party connector readiness (e.g., Salesforce sandbox down) | High | Use mock APIs to simulate responses. |
| Complex UI rendering issues in WYSIWYG editor | Medium | Dedicate early exploratory testing cycles specifically for the editor. |
| Automation suite flakiness due to dynamic web elements | Medium | Implement robust locators, auto-waiting, and retry mechanisms in Playwright. |

## 20. References
- PRD Document
- Jira Requirements Board
