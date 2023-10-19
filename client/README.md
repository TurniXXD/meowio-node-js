# Meowio frontend

- generate swagger types with `pnpm gen:swagger`

## Unresolved tasks

- For comments I would create new component `Comment` that would be renered in map in `ArticleDetail`
- For article edit I would create new component named EditArticleForm style it and create tests, this component would load initial data into input value so owner knows what was in original article
  - You can use `updateArticle` mutation to test this
- For my articles I would create new component named ArticlesTable that would enable sorting and filtering for ease of use, owner could click on edit, that would redirect him to /edit-article, or remove button that would display a modal asking him to confirm deletion of an article and then send request to server
  - You can use `removeArticle` mutation to test the removal of an article
- I didn't resolve rehype error when testing with jest

tests

- load api key
- load mock user from constant (the one from seed) and sign in using axios
- test create, update, remove article
