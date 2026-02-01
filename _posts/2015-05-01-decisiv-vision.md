---
layout: post
title: "Decisiv Vision - Fleet Management Platform"
date: 2015-05-01
end_date: 2018-08-01
categories: [experience, ruby, rails, optimization]
company: Decisiv
role: Senior Developer
location: Remote (US-based company)
---

## Overview

At Decisiv, I led the transformation of a struggling legacy system into a high-performance fleet management platform. This role showcased my ability to optimize systems under pressure and deliver measurable results.

## Major Achievement: 99% Performance Improvement

### The Challenge
The existing system was struggling with database query performance, causing slow response times and poor user experience for vehicle asset owners.

### The Solution
Built a real-time notifications architecture and completely restructured the database layer:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Query Time | 8,000ms | 70ms | **-99.1%** |
| Throughput | 800 RPM | 12,000 RPM | **15x** |
| Infrastructure Cost | Baseline | - | **40% reduction** |

### Technical Implementation

- **Query Optimization**: Redesigned database queries from the ground up
- **Caching Strategy**: Implemented multi-layer caching with Redis
- **Real-time Architecture**: Built notifications system using PubNub
- **Frontend**: Backbone.js for responsive UI
- **Database**: MySQL optimization and indexing strategy

## Project: Decisiv Vision

Developed a visualization tool for vehicle asset owners to:
- Query repair cases with custom search
- Build personalized view configurations
- Receive real-time notifications on case updates
- Access historical data analytics

## Technologies Stack

```
Backend:    Ruby on Rails
Frontend:   Backbone.js, JavaScript
Database:   MySQL
Real-time:  PubNub
Caching:    Redis
Testing:    RSpec, Jasmine
```

## Key Learnings

1. **Performance First**: Early optimization decisions pay dividends
2. **Measurement**: You can't improve what you don't measure
3. **User Experience**: Speed directly correlates with user satisfaction
4. **Cost Efficiency**: Better performance often means lower infrastructure costs

## Impact

This optimization project became a case study within the company for how to approach legacy system modernization. The techniques developed here informed future architectural decisions across the organization.