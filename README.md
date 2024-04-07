### Nest.js Repository Configuration Template

#### Contents

- Typescript configuration
- Editor config file
- Git ignore file
- Dependabot configuration

#### How to retrieve Personal Access Token

Visit https://github.com/settings/tokens
Generate New Token (classic)
Select write:packages, read:packages and repo (repo selects automatically)
Create .env file and place GH_TOKEN environment variable there.

#### Dependabot configuration

https://github.com/org/repo/settings/secrets/dependabot/new

SET DEPENDABOT_PAT TO your GH_TOKEN

#### Environment configuration

https://github.com/org/repo/settings/environments

Create production environment. Create environment secret GH_TOKEN
