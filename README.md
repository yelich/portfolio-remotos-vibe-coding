# Speech & Occupational Therapy Clinic Landing Page

A modern, highly accessible, and high-performance web solution designed to establish the digital presence of a specialized clinical facility focusing on **Speech Therapy** and **Occupational Therapy**. 

The primary goal of this project is to seamlessly connect families and patients with the clinic's healthcare services, facilitating online appointment scheduling and patient onboarding through intelligent automation.

## How It Was Built (Agentic AI Development)

Unlike traditional development workflows, this website was engineered using **[Google Antigravity](https://antigravity.google)**, an advanced development environment (IDE) designed to orchestrate autonomous AI agents. 
* The medical information structure, patient-friendly accessible layout, and underlying code logic were entirely generated using natural language instructions (*prompts*).
* Antigravity’s AI agents autonomously planned, wrote, and verified the code, drastically reducing production and commercial deployment times.

## Tech Stack & Integrations

* **Frontend Architecture:** HTML5, CSS3, JavaScript (Clean, empathetic design fully optimized for mobile devices).
* **IDE & Generation Engine:** [Google Antigravity](https://antigravity.google) (Agentic mode powered by Gemini).
* **Version Control:** [GitHub Desktop](https://github.com) for quick local-to-cloud repository synchronization.
* **Healthcare Automation & CRM:** Native connection to **[GoHighLevel](https://gohighlevel.com)** via an embedded patient intake form. This integration automatically triggers custom marketing *workflows*, patient welcome series, therapist routing, and automated SMS/email appointment reminders.

## Prerequisites & Setup

Since this project is entirely managed and orchestrated by agentic AI, configuration relies on credential syncing rather than manual command-line dependencies:

1. Install the **[Google Antigravity](https://antigravity.google)** local client.
2. Clone this repository locally using **[GitHub Desktop](https://github.com)**.
3. Configure a GitHub **Personal Access Token (PAT)** with write permissions to allow the AI agent to update the codebase remotely via chat prompts.
4. Link your unique **[GoHighLevel](https://gohighlevel.com)** form ID within the contact section of the HTML file to ensure incoming patient data routes successfully.

## Automated Deployment & Maintenance

Updating the clinic's landing page is **100% automated** and requires zero manual console interactions (`npm` or `pip` are not needed):

1. Request modifications or add new features by describing your requirements directly in the **Antigravity** chat interface (e.g., *"Add a new service section for Sensory Integration Therapy"*).
2. The AI agent processes the instruction, edits the necessary project files, and conducts internal code validation.
3. Upon successful validation, the AI leverages your authorized GitHub token to automatically `push` the updates directly to the main branch of this repository.

---
*Note: This project serves as a practical demonstration of how agentic AI-powered tools optimize software delivery times, enabling healthcare clinics to digitize their workflow pipelines quickly, securely, and professionally.*

## Testing & Webhook Verification

To ensure that the integration between the frontend form and **GoHighLevel** works seamlessly, follow these verification steps:

### 1. Local Form Submission Test
1. Open the project locally or via a live preview server.
2. Fill out the intake form using test data (e.g., `testpatient@example.com`).
3. Open your browser's **Developer Tools (F12)** and navigate to the **Network** tab.
4. Click **Submit** and verify that an HTTP request to the GoHighLevel webhook endpoint returns a `200 OK` or `201 Created` status code.

### 2. Payload Inspection via GoHighLevel
1. Log into your **GoHighLevel Sub-Account**.
2. Navigate to **Automation > Workflows** and select the workflow triggered by the *Inbound Webhook*.
3. Click on **Execution Logs** or **History** to view the incoming data payload.
4. Verify that the JSON keys matches exactly with the variables mapped in your form fields (e.g., `first_name`, `email`, `therapy_type`).

### 3. Workflow Trigger Validation
* Confirm that after receiving the test webhook, the automation path executes the first action (such as adding a tag like `[Lead: Speech Therapy]` or creating an Opportunity card in the CRM pipeline).


