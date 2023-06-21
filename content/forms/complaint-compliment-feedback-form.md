+++
description = ""
title = "Complaint, Compliment & Feedback Form"
_template = "forms"

[menu.sitemap]
name = "Complaints, Compliments and Feedback"
weight = 9

[message]
content = "One of our staff members will review your comments shortly."
heading = "Thank-you for you message"

[[section]]
description = ""
heading = "Anonymous Complaint, Compliment & Feedback"

  [[section.input]]
  isRequired = false
  label = "If you would like to be anonymous with your complaint/compliment/feedback please tick the box and go to  Question 3."
  name = "AnonymousPreference"
  placeholder = ""
  type = "checkbox"

[[section]]
description = ""
heading = "1. Please provide your contact details for the complaint/complement/feeback"

  [[section.input]]
  isRequired = false
  label = "Name of Person"
  name = "FullName"
  placeholder = ""
  type = "text"

  [[section.input]]
  isRequired = false
  label = "Address"
  name = "Address"
  placeholder = ""
  type = "textarea"

  [[section.input]]
  isRequired = true
  label = "Email"
  name = "Email"
  placeholder = ""
  type = "email"

  [[section.input]]
  isRequired = false
  label = "Contact Number"
  name = "Phone"
  placeholder = ""
  type = "tel"

  [[section.input]]
  isRequired = false
  label = "My preferred contact method is"
  name = "ContactMethod"
  options = [ "Phone", "Email" ]
  placeholder = "Select your contact preference"
  type = "select"

[[section]]
description = ""
heading = "2. If you are making the complaint/complement/feedback on behalf of another person provide the following details."

  [[section.input]]
  isRequired = false
  label = "Their Name"
  name = "OnBehalfOfName"
  placeholder = ""
  type = "text"

  [[section.input]]
  isRequired = false
  label = "What is your relationship with the person?"
  name = "OnBehalfOfRelationship"
  placeholder = ""
  type = "text"

  [[section.input]]
  isRequired = false
  label = "Does the person know you are making this complaint/providing feedback?"
  name = "OnBehalfOfKnowlege"
  placeholder = ""
  type = "text"

  [[section.input]]
  isRequired = false
  label = "Does the person consent to the complaint/feedback being made?"
  name = "OnBehalfOfConsent"
  placeholder = ""
  type = "text"

[[section]]
description = ""
heading = "3. Who is the person, or the service about whom you are complaining, complimenting or providing feedback about?"

  [[section.input]]
  isRequired = true
  label = "The Name of the person this is about"
  name = "ReportingName"
  placeholder = ""
  type = "text"

  [[section.input]]
  isRequired = false
  label = "Their Contact Details (if known)"
  name = "ReportingContact"
  placeholder = ""
  type = "text"

[[section]]
description = "Provide some details to help us understand your concerns. You should include what happened, where it happened, time it happened and who was involved."
heading = "4. What is your Complaint/Compliment/Feedback about?"

  [[section.input]]
  isRequired = false
  label = "Details"
  name = "ReportingDetails"
  placeholder = ""
  type = "textarea"

[[section]]
description = ""
heading = "5. What outcomes are you seeking as a result of the complaint/compliment/feedback?"

  [[section.input]]
  isRequired = false
  label = "Summarise the outcome"
  name = "OutcomeSummary"
  placeholder = ""
  type = "textarea"
+++

