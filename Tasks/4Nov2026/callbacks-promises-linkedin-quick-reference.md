# Callbacks vs Promises in QA Automation

Quick interview reference for JavaScript test automation.

When a test navigates, clicks, calls an API, or waits for an element, the operation may finish later. Callbacks and promises are two ways to handle that asynchronous work.

## Callbacks

A callback is a function passed to another function to run later.

```js
button.click((error) => {
  if (error) return handleError(error);
  console.log("Clicked");
});
```

**Good for:** event listeners, short handlers, and older callback-based APIs.

**Challenges:** nested steps can become hard to read, and errors and test completion must be managed carefully.

## Promises

A promise represents the eventual success or failure of one asynchronous operation. `async` / `await` is a readable way to work with promises.

```js
await page.goto("https://example.test");
await page.getByRole("button", { name: "Save" }).click();
await expect(page.getByText("Saved")).toBeVisible();
```

**Good for:** ordered browser steps, API calls, and waits. Promises also support clear error handling and coordinating independent work with `Promise.all`.

**Challenges:** forgetting `await` or `return` can make a test finish too early. Parallel work can introduce races, and a promise does not represent repeated events.

## At a glance

| Callbacks | Promises |
|---|---|
| Pass a function to run later | Represent a future result |
| Useful for events and legacy APIs | Useful for sequencing async test steps |
| Can become deeply nested | Chain with `.then()` or use `async` / `await` |

## QA interview takeaway

Use callbacks when the API or event model calls for them. For modern automation workflows, prefer the framework's promise-based API with `async` / `await`. Always make asynchronous work visible to the test runner by awaiting or returning it, and wait for application conditions instead of relying on fixed sleeps.

**In one sentence:** Callbacks tell an API what function to run later; promises represent a future result and make asynchronous test flows easier to compose.

#SoftwareTesting #QAAutomation #JavaScript #TestAutomation #InterviewPrep
