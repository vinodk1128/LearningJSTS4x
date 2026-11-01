/*
Create Unique Js Basics Tags

Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Normalize and deduplicate tags used for organizing tests.

Rules:
- Trim each tag.
- Lowercase each tag.
- Remove blank values.
- Keep first-seen order.

Example:
Input: createUniqueJsBasicsTags([" Smoke ","smoke","Regression"])

Expected: ["smoke","regression"]

Input: createUniqueJsBasicsTags([""," API "," ","api"])

Expected: ["api"]

*/
