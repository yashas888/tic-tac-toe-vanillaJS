const schema: any = {
    schema: {
        "type": "object",
        "properties": {
            "storageSource": {
                "title": "Storage Source",
                "type": "object",
                "properties": {
                    "cloudService": {
                        "type": "string",
                        "title": "Cloud Service",
                        "enum": ["AWS"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select the cloud service from the available options."
                        }]
                    },
                    "storageService": {
                        "type": "string",
                        "title": "Storage Service",
                        "enum": ["S3"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select the storage service from the available options."
                        }]
                    }
                },
                "required": ["cloudService", "storageService"]
            },
            "bucketConfiguration": {
                "title": "Bucket Configuration",
                "type": "object",
                "properties": {
                    "bucketName": {
                        "type": "string",
                        "title": "Bucket name",
                        "minLength": 3,
                        "pattern": "(?!(^xn--|^sthree-|.+--ol-s3$|.+-s3alias$))^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$",
                        "default": "default-bucket-name",
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter the Source Bucket Name."
                        }]
                    },
                    "prefix": {
                        "type": "string",
                        "title": "Prefix",
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter the prefix for bucket name."
                        }]
                    },
                },
                "required": ["bucketName"]
            },
            "pollingInterval": {
                "title": "Polling Interval",
                "type": "object",
                "properties": {
                    "pollingInterval": {
                        "type": "string",
                        "title": "Polling Interval",
                        "enum": ["Periodic"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select polling interval"
                        }]
                    },
                    "schedule": {
                        "type": "string",
                        "title": "Schedule",
                        "enum": ["Hourly", "Daily", "Weekly"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "schedule"
                        }]
                    },
                },
                "required": ["pollingInterval", "schedule"]
            },
            "AuthenticationMechanism": {
                "title": "Authentication Mechanism",
                "type": "object",
                "properties": {
                    "credentials": {
                        "type": "string",
                        "title": "Credentials",
                        "default": "Credentials",
                        "enum": ["Credentials"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select authentication mechanism type."
                        }]
                    },
                    "accessKey": {
                        "type": "string",
                        "title": "Access Key",
                        "pattern": "^(ASIA|AKIA|AROA|AIDA)([A-Z0-9]+)$",
                        "maxLength": 40,
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter the Access Key."
                        }],
                        "component": "password"
                    },
                    "secretKey": {
                        "type": "string",
                        "title": "Secret Key",
                        "pattern": "^[a-zA-Z0-9+/=]*$",
                        "maxLength": 20,
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter the Secret Key."
                        }],
                        "component": "password"
                    },
                    "region": {
                        "type": "string",
                        "title": "Region",
                        "enum": [
                            "us-east-1",
                            "us-east-2",
                            "us-west-1",
                            "us-west-2",
                            "ap-south-1",
                            "ap-northeast-1",
                            "ap-northeast-2",
                            "ap-northeast-3",
                            "ap-southeast-1",
                            "ap-southeast-2",
                            "ap-east-1",
                            "ap-southeast-3",
                            "ap-southeast-4",
                            "ca-central-1",
                            "eu-central-1",
                            "eu-west-1",
                            "eu-west-2",
                            "eu-west-3",
                            "eu-north-1",
                            "eu-south-1",
                            "eu-south-2",
                            "eu-central-2",
                            "sa-east-1",
                            "af-south-1",
                            "me-south-1",
                            "me-central-1",
                            "il-central-1"
                        ],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select region from the available options."
                        }]
                    },
                },
                "required": ["credentials", "accessKey", "secretKey", "region"]
            },
        },
    }
}

export default schema;


