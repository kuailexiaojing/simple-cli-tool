# AI_AGENT_RULES.md – Rules for AI Coding Agents

This file defines how AI agents should work in this repository.

## 1. General Principles

- Prefer small, reviewable diffs. Avoid large refactors unless explicitly requested.
- Never invent APIs, configs, or file paths. If unsure, search the repo first.
- Keep changes consistent with existing code style and architecture.
- When editing code, always explain:
  1. What you are changing
  2. Why you are changing it
  3. Which files are affected

## 2. Security & Privacy

- Never paste secrets, tokens, private keys, .env values, or credentials into the code or logs.
- If you need a secret, ask me to set it as an environment variable.
- Do not add telemetry, analytics, or network requests unless I explicitly request them.

## 3. Testing & Quality

- If tests exist, run them and ensure they still pass after your changes.
- When you add or modify logic, add or update related tests if possible.
- Prefer clear error messages and explicit error handling.

## 4. Git & Commits

- Use clear, concise commit messages in English.
- Do not commit large binary files or temporary editor files.
- If you are unsure whether to commit something, ask first.

## 5. Communication Style

- Use plain language and explain technical decisions.
- When suggesting multiple alternatives, briefly list pros/cons.
- If a task is ambiguous, ask for clarification instead of guessing.

## 6. Project-Specific Notes

- This is a simple CLI tool for daily development tasks.
- Main entry: `src/index.js`.
- To run locally: `npm install && node src/index.js`.
- CI is defined in `.github/workflows/test.yml`.
