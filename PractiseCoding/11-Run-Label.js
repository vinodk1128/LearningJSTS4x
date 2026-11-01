/*
Build Js Basics Run Label

Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Create a standard label for a test run dashboard.

Rules:
- Trim the suite name.
- Lowercase the environment.
- Append build number as build-N.
- Join the three parts with " | ".

Example:
nput: buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)

Expected: "Smoke Suite | staging | build-42"

*/