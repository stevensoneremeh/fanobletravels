---
name: Managed mailer acknowledgements
description: Interpret the existing Replit mail service's SMTP acknowledgement without confusing its relay envelope with the final recipient.
---

The managed mailer may return an accepted relay-envelope address that differs from the supplied destination. Treat nonempty `accepted`, no `rejected`, and a valid message identifier as provider acceptance, not proof of final inbox delivery.

**Why:** An exact-recipient acknowledgement check incorrectly showed failure even though the managed service accepted the submitted messages.

**How to apply:** Confirm the outgoing payload uses the configured destination, then check the acknowledgement structure. Report that the provider accepted or queued the inquiry; do not claim that someone has checked the recipient's inbox.
