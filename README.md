# Deploy React App to AWS (S3 + CloudFront + Route 53)

A reference pipeline for hosting a production-ready React single-page application on AWS using S3 for storage, CloudFront for global CDN delivery, and Route 53 for custom-domain DNS.

## What this project does

Builds a React app and ships it to AWS as a fast, secure, and globally cached static site. The S3 bucket holds the build artifacts, CloudFront fronts the bucket with HTTPS and edge caching, and Route 53 maps a custom domain to the distribution.

## Architecture

React build to S3 bucket to CloudFront distribution to Route 53 DNS to end users.

## Prerequisites

An AWS account with permissions for S3, CloudFront, ACM and Route 53. AWS CLI configured. Node.js 18+ and npm. A registered domain (optional, for Route 53).

## Build the React app

```bash
npm install
npm run build
```

## Deploy to AWS

```bash
aws s3 mb s3://my-react-app
aws s3 website s3://my-react-app --index-document index.html --error-document index.html
aws s3 sync build/ s3://my-react-app --delete
aws cloudfront create-distribution --origin-domain-name my-react-app.s3.amazonaws.com
```

Then add a Route 53 alias record pointing to the CloudFront domain.

## Notes

Use Origin Access Control (OAC) instead of public bucket access for production. Request an ACM certificate in us-east-1 for HTTPS on CloudFront. Invalidate the CloudFront cache after each deploy.

## License

MIT
