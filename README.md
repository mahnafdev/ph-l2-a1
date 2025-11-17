# Hi TypeScript Devs! 🫡

## Let's answer 2 important TypeScript questions! ⚡

1. **What are some differences between interfaces and types in TypeScript?**

**Answer:** Interfaces are mainly used for perfecting objects and they can be extended with the `extends` keyword. Types are more flexible in case of types because they can apply primitive, non-primitive, nullish, union, intersection, so on and so forth. Interfaces combine with each other when declared multiple times in the same scope, while types can't do that. Types are like general-purpose type alias and interfaces are like structured blueprints.

2. **Provide an example of using union and intersection types in TypeScript.**

**Answer:** A union type is like the OR (`||`) operator, it lets a value be one type or another. While an intersection is like the AND (`&&`) operator, it combines multiple types into one. Here's an example:

```typescript
type A = { id: number };
type B = { name: string };

// Union
let objA: A | B;

// Intersection
let objB: A & B;
```
