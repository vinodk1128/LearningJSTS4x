/*Problem statement:
Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.
*/

function isValidName(value) {
  if (typeof value !== "string") return false;

  const name = value.trim();
  console.log(name);

  // Must start with a letter, underscore, or dollar sign.
  // Remaining characters may also include digits.
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) {
    return false;
  }

  const reservedWords = new Set([
    "let",
    "const",
    "var",
    "class",
    "function",
    "return",
  ]);

  return !reservedWords.has(name);
}

// Examples
console.log(isValidName("userName")); // true
console.log(isValidName(" _result ")); // true (trimmed first)
console.log(isValidName("2ndValue")); // false
console.log(isValidName("first-name")); // false
console.log(isValidName("")); // false
console.log(isValidName("return")); // false
console.log(isValidName( 6876 ));