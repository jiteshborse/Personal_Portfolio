# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS:

## Steps:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create Email Service**
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create Email Template**
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (jitesh.borse007@gmail.com)

4. **Get Your Keys**
   - Service ID from the service you created
   - Template ID from the template you created
   - Public Key from Account settings

5. **Update Contact.jsx**
   - Replace `YOUR_SERVICE_ID` with your actual service ID
   - Replace `YOUR_TEMPLATE_ID` with your actual template ID
   - Replace `YOUR_PUBLIC_KEY` with your actual public key

## Example Template:
```
Subject: New Portfolio Contact from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Security Note:
The public key is safe to use in frontend code as it's designed for client-side usage.