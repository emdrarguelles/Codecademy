# Next.js CRUD Cheat Sheet (Route Handlers)

Uses JSONPlaceholder, the same fake API from the lessons. Note: it accepts
POST/PUT/DELETE and sends back realistic responses, but it does NOT actually
save anything, so a created or deleted todo won't really change.

## The map

| CRUD   | HTTP method | File                           | URL                |
| ------ | ----------- | ------------------------------ | ------------------ |
| Read   | GET         | `app/api/todos/route.ts`       | `/api/todos`       |
| Create | POST        | `app/api/todos/route.ts`       | `/api/todos`       |
| Read 1 | GET         | `app/api/todos/[id]/route.ts`  | `/api/todos/57`    |
| Update | PUT         | `app/api/todos/[id]/route.ts`  | `/api/todos/57`    |
| Delete | DELETE      | `app/api/todos/[id]/route.ts`  | `/api/todos/57`    |

Why two files? Create and read-all work on the whole collection (no id).
Read-one, update, and delete work on one item, so they need the id from the
URL. The `[id]` folder name (square brackets) makes that part of the URL a
variable.

The skeleton is the same every time:
**do the request, check `response.ok`, throw if it failed, return the result.**

---

## File 1: `app/api/todos/route.ts` (collection)

```typescript
const BASE = 'https://jsonplaceholder.typicode.com/todos'

// READ (all)  ->  fetch('/api/todos')
export async function GET() {
  const response = await fetch(BASE, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Failed to fetch todos.')
  }

  const result = await response.json()
  return Response.json(result)
}

// CREATE  ->  fetch('/api/todos', { method: 'POST', ... })
export async function POST(request: Request) {
  const body = await request.json() // what the client sent to YOU

  const response = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body), // what YOU send onward
  })

  if (!response.ok) {
    throw new Error('Failed to create todo.')
  }

  const result = await response.json()
  return Response.json(result, { status: 201 }) // 201 = created
}
```

---

## File 2: `app/api/todos/[id]/route.ts` (one item)

```typescript
const BASE = 'https://jsonplaceholder.typicode.com/todos'

type Context = { params: Promise<{ id: string }> }
// Next 15+: params is a Promise, so it gets awaited.
// Older versions: params is a plain object, no await. Follow your lesson.

// READ (one)  ->  fetch('/api/todos/57')
export async function GET(request: Request, { params }: Context) {
  const { id } = await params

  const response = await fetch(`${BASE}/${id}`, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Failed to fetch todo.')
  }

  const result = await response.json()
  return Response.json(result)
}

// UPDATE  ->  fetch('/api/todos/57', { method: 'PUT', ... })
export async function PUT(request: Request, { params }: Context) {
  const { id } = await params
  const body = await request.json()

  const response = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error('Failed to update todo.')
  }

  const result = await response.json()
  return Response.json(result)
}

// DELETE  ->  fetch('/api/todos/57', { method: 'DELETE' })
export async function DELETE(request: Request, { params }: Context) {
  const { id } = await params

  const response = await fetch(`${BASE}/${id}`, { method: 'DELETE' })

  if (!response.ok) {
    throw new Error('Failed to delete todo.')
  }

  return new Response(null, { status: 204 }) // 204 = success, nothing to send back
}
```

---

## Calling them from a client component

```typescript
// READ all (GET is the default, no method needed)
const todos = await (await fetch('/api/todos')).json()

// CREATE
await fetch('/api/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Go hiking', completed: false }),
})

// UPDATE
await fetch('/api/todos/57', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Go hiking (updated)', completed: true }),
})

// DELETE
await fetch('/api/todos/57', { method: 'DELETE' })
```

---

## Quick reminders

- `request.json()` reads the body sent TO your route.
- `JSON.stringify(...)` is for the body you send OUT in your own fetch.
- `Response.json(result)` (capital R) builds the response in a route handler.
- Only export the methods that route should answer. Anything else gets a 405.
- A `route.ts` and a `page.tsx` can't live in the same folder.
- `params` and `request` are normal function arguments, so `{ params }` is
  destructured because the second argument is an object.
