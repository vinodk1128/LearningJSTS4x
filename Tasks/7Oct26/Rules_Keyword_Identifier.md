# Keywords and Identifiers in Programming

Programs use words for two different purposes:

- **Keywords** are reserved words with a special meaning in a programming language.
- **Identifiers** are names programmers choose for variables, functions, classes, and other parts of a program.

For example, in `let score = 85;`, `let` is a keyword and `score` is an identifier.

## Keywords

A keyword is part of a language’s vocabulary. It helps describe what the program should do.

| Keyword | Purpose | Example |
|---|---|---|
| `if` | Checks a condition | `if (score >= 50) { ... }` |
| `else` | Provides another path | `else { ... }` |
| `for` | Repeats a block of code | `for (let i = 0; i < 3; i++) { ... }` |
| `while` | Repeats while a condition is true | `while (count < 3) { ... }` |
| `function` | Defines a function | `function greet() { ... }` |
| `return` | Sends a value back from a function | `return total;` |
| `class` | Defines a class | `class Student { ... }` |

You cannot use a keyword as the name of a variable or function:

```javascript
let if = 10; // Invalid: `if` is a keyword
```

The list of keywords differs between programming languages.

## Identifiers

An identifier is a name chosen by the programmer. Identifiers help us refer to parts of a program.

```javascript
let studentName = "Asha";
let score = 85;

function showScore() {
  console.log(score);
}
```

Here, `studentName`, `score`, and `showScore` are identifiers.

### Common naming rules

The exact rules can vary between languages, but these are common:

| Rule | Valid example | Invalid example |
|---|---|---|
| Start with a letter or, in some languages, `_` or `$` | `name`, `_count` | `2name` |
| Use letters, digits, or allowed symbols such as `_` | `student2`, `total_marks` | `total-marks` |
| Do not include spaces | `firstName` | `first name` |
| Do not use a reserved keyword | `className` | `class` |

### Capitalization

Many languages treat uppercase and lowercase letters as different. JavaScript does:

```javascript
let score = 80;
let Score = 95;

console.log(score); // 80
console.log(Score); // 95
```

`score` and `Score` are separate identifiers.

### Choose clear names

Names should make it easier to understand what the program represents or does.

| Less clear | Clearer |
|---|---|
| `x` | `studentAge` |
| `n` | `numberOfStudents` |
| `f()` | `calculateTotal()` |

In JavaScript, programmers commonly use **camelCase** for variable and function names, as in `studentName` or `calculateTotal`.

## Example

```javascript
const passingScore = 50;

function checkResult(score) {
  if (score >= passingScore) {
    return "Pass";
  } else {
    return "Try again";
  }
}

const result = checkResult(72);
console.log(result);
```

In this example:

- **Keywords:** `const`, `function`, `if`, `else`, `return`
- **Identifiers:** `passingScore`, `checkResult`, `score`, `result`
- **Values:** `50`, `72`, `"Pass"`, and `"Try again"`

**In short:** keywords belong to the language, while identifiers are names chosen by the programmer.
