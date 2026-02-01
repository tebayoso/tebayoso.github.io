---
layout: post
title: "AWS Login Helper - DevOps CLI Tool"
date: 2021-06-01
categories: [project, cli, devops, aws]
project_type: tool
status: completed
---

## Overview

**AWS Login Helper** is a CLI tool I built to solve a common problem: managing multiple AWS profiles across different authentication methods. Designed for consultants and organizations managing dozens of AWS accounts.

## The Problem

Working with multiple AWS accounts is painful:
- Constant context switching between profiles
- Different authentication methods (SSO, MFA, access keys)
- Remembering account IDs and roles
- Secure credential management

## The Solution

A simple CLI that wraps AWS authentication with sensible defaults and 1Password integration.

## Features

### 🔐 Secure Credential Management
- Integrates with **1Password** for secure credential storage
- No plaintext credentials in config files
- Automatic token rotation

### 🔄 Profile Management
```bash
# List all configured profiles
aws-login list

# Login to a specific profile
aws-login login production

# Switch between profiles
aws-login switch staging

# SSO login flow
aws-login sso enterprise
```

### ⚙️ Configuration as Code
```yaml
profiles:
  production:
    account: "123456789"
    role: AdminRole
    auth_method: sso
    sso_start_url: https://company.awsapps.com
    
  staging:
    account: "987654321"
    role: DeveloperRole
    auth_method: mfa
    credential_source: 1password
```

## Technology Stack

- **Runtime**: Node.js
- **AWS SDK**: v3
- **Security**: 1Password CLI integration
- **Config**: YAML-based configuration
- **Testing**: Jest

## Installation

```bash
npm install -g aws-login-helper

# Or use npx
npx aws-login-helper login
```

## Impact

- **Time Saved**: Hours per week for consultants
- **Security**: No more plaintext credentials
- **Adoption**: Used by multiple consulting teams

## Lessons Learned

1. **Developer Experience**: Simple CLI interfaces save time
2. **Security First**: Integration with password managers is essential
3. **Documentation**: Clear setup instructions drive adoption

## Repository

Private tool used internally by consulting teams. Contact me for access or discussion about the architecture.