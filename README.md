## What is a hook?

Hooks were added to React in version 16.8
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
Note: Although Hooks generally replace class components, there are no plans to remove classes from React.

Hooks allow us to "hook" into React features such as state and lifecycle methods.

## Hook Rules

There are 3 rules for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional.

Note: Hooks will not work in React class components.

## Custom Hooks

If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.
There are more details in the CustomHook component of this project.
