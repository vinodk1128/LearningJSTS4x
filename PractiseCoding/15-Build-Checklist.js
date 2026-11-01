/*
Build Js Basics Checklist

Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Convert a list of tasks into a numbered checklist.

Rules:
- Keep the original task text after trimming.
- Number items from 1.
- Append " - TODO" to each item.
- Skip blank values.

Example:
Case 1
Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

Case 2
Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])
Expected: ["1. Practice switch - TODO","2. Push code - TODO"]

*/