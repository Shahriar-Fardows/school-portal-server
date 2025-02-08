# School Portal API - Announcements

## Overview

This API allows you to manage announcements for the school portal. Below are two available endpoints for getting and adding announcements.

---

## Endpoints

### 1. Get All Announcements

**Endpoint**:  
`GET`  
`http://localhost:9000/api/v1/announcement/get-announcemet`

**Description**:  
This endpoint fetches all the announcements.

**Response**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Announcement proded",
  "data": [
    {
      "_id": "67a7a3cd274d35b4df080ec5",
      "title": "Important School Update",
      "message": "School will remain closed on Friday due to maintenance work.",
      "postedBy": "65b2f7e5e13a5f002bc45678",
      "expiresAt": "2025-02-10T23:59:59.000Z",
      "createdAt": "2025-02-07T14:00:00.000Z",
      "updatedAt": "2025-02-07T14:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "67a7a44e4da1c720ff342cae",
      "title": "Important School Update",
      "message": "School will remain closed on Friday due to maintenance work.",
      "postedBy": "65b2f7e5e13a5f002bc45678",
      "expiresAt": "2025-02-10T23:59:59.000Z",
      "createdAt": "2025-02-07T14:00:00.000Z",
      "updatedAt": "2025-02-07T14:00:00.000Z",
      "__v": 0
    }
  ]
}
```

### 2. Add a New Announcement

Endpoint:

`POST`
`http://localhost:9000/api/v1/announcement/add-announcemet`

Description:
Add a new announcement.

Request Body:

```json
{
  "title": "Important School Update",
  "message": "School will remain closed on Friday due to maintenance work.",
  "postedBy": "65b2f7e5e13a5f002bc45678",
  "expiresAt": "2025-02-10T23:59:59.000Z",
  "createdAt": "2025-02-07T14:00:00.000Z"
}
```

**Response**:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Announcement added successfully",
  "data": {
    "title": "Important School Update",
    "message": "School will remain closed on Friday due to maintenance work.",
    "postedBy": "65b2f7e5e13a5f002bc45678",
    "expiresAt": "2025-02-10T23:59:59.000Z",
    "_id": "67a7a50784961653fa771bfe",
    "createdAt": "2025-02-07T14:00:00.000Z",
    "updatedAt": "2025-02-07T14:00:00.000Z",
    "__v": 0
  }
}
```
