# sarathi
An intelligent web server, with built-in dev tooling.

It's an abstraction over different set of web dev/serving tooling and technology.


- Optimised assets are generated on demand if already present assets is not optimised for the requester.
- Let requester express the expectation of response using HTTP standards.
- It's lower level than a WAF. It will simply read the request and perform necessary operations based on the request description.

Now that's not the intelligent part, virtually every web server does that, what is intelligent though is that it includes opinionated dev tools, which produce a limited/reproducible and resilient response, intelligently optimised, tailor made for the request description.

- Uses JSPM Resolver
