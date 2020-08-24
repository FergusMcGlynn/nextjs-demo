This is a simple Next.js app written by Christian Beddows to 
showcase some Next.js features and demonstrate how it works.

# Deploy to AWS

## "Automatic" deployment

Run this repo's github action, either by pushing a change
or by running it from the Github web interface

## "Manual" deployment

You'll need to have `node`, `npm` and `npx` installed (all should be
installed with `node`)

1. Clone this repository and cd into its root directory
1. Install [cfn-certificate-provider](https://github.com/binxio/cfn-certificate-provider). 
This is required in order to automate the process of generating 
an SSL certificate for the application.
1. [Log in to AWS](https://wiki.york.ac.uk/display/AWS/2.+Command+Line+Access)
using `saml2aws login`
1. run `npm run deploy`

## Undeployment

To remove all resources from AWS:

1. run `npx serverless remove`