// const schema: any = {
//     "title": "",
//     "type": "object",
//     "properties": {
//         "connectionInformation": {
//             "title": "Connection Information",
//             "type": "object",
//             "properties": {
//                 "host": {
//                     "type": "string",
//                     "title": "Host",
//                     "minLength": 3,
//                 },
//                 "port": {
//                     "type": "number",
//                     "title": "Port",
//                     "default": "5432"
//                 },
//                 "databaseName": {
//                     "type": "string",
//                     "title": "Database Name",
//                     // "minLength": 3,
//                 },
//                 "tableName": {
//                     "type": "string",
//                     "title": "Table Name",
//                     // "minLength": 3,
//                 },
//             },
//             "required": ["host", "port", "databaseName", "tableName"]
//         },
//         "pollingInterval": {
//             "title": "Polling Interval",
//             "type": "object",
//             "properties": {
//                 "pollingInterval": {
//                     "type": "string",
//                     "title": "Polling Interval",
//                     "enum": ["Periodic"]
//                 },
//                 "schedule": {
//                     "type": "string",
//                     "title": "Schedule",
//                     "enum": ["Hourly", "Daily", "Weekly"]
//                 },
//             },
//             "required": ["pollingInterval", "schedule"]
//         },
//         "AuthenticationMechanism": {
//             "title": "Authentication Mechanism",
//             "type": "object",
//             "properties": {
//                 "databaseUserName": {
//                     "type": "string",
//                     "title": "Database Username",
//                     "maxLength": 40
//                 },
//                 "password": {
//                     "type": "string",
//                     "title": "Secret Key",
//                     "maxLength": 20
//                 }
//             },
//             "required": ["databaseUserName", "password"]
//         },
//     },
//     "definitions": {
//         "slectType": {
//           "title": "Database type",
//           "type": "object",
//           "properties": {
//             "Do you have any pets?": {
//               "type": "string",
//               "enum": [
//                 "No",
//                 "Yes: One",
//                 "Yes: More than one"
//               ],
//               "default": "No"
//             }
//           },
//           "required": [
//             "Do you have any pets?"
//           ],
//           "dependencies": {
//             "Do you have any pets?": {
//               "oneOf": [
//                 {
//                   "properties": {
//                     "Do you have any pets?": {
//                       "enum": [
//                         "No"
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "properties": {
//                     "Do you have any pets?": {
//                       "enum": [
//                         "Yes: One"
//                       ]
//                     },
//                     "How old is your pet?": {
//                       "type": "number"
//                     }
//                   },
//                   "required": [
//                     "How old is your pet?"
//                   ]
//                 },
//                 {
//                   "properties": {
//                     "Do you have any pets?": {
//                       "enum": [
//                         "Yes: More than one"
//                       ]
//                     },
//                     "Do you want to get rid of any?": {
//                       "type": "boolean"
//                     }
//                   },
//                   "required": [
//                     "Do you want to get rid of any?"
//                   ]
//                 }
//               ]
//             }
//           }
//         }
//       },
// }
// export default schema;

const schema: any =
{
    "type": "object",
    "properties": {
        "conditional": {
            "title": "DatabaseType",
            "$ref": "#/definitions/databaseType"
        },
    },
    "definitions": {
        "databaseType": {
            "type": "object",
            "properties": {
                "selectdatabase": {
                    "type": "string",
                    "title": "Select database",
                        "enum": [
                        "My sql",
                        "Postgres"
                    ],
                }
            },
            "dependencies": {
                "selectdatabase": {
                    "oneOf": [
                        {
                            "properties": {
                                "selectdatabase": {
                                    "enum": [
                                        "My sql"
                                    ]
                                },
                                "connectionInformation": {
                                    "title": "Connection Information",
                                    "type": "object",
                                    "properties": {
                                        "host": {
                                            "type": "string",
                                            "title": "Host",
                                            "minLength": 3,
                                        },
                                        "port": {
                                            "type": "number",
                                            "title": "Port",
                                            "default": 5432
                                        },
                                        "databaseName": {
                                            "type": "string",
                                            "title": "Database Name",
                                            // "minLength": 3,
                                        },
                                        "tableName": {
                                            "type": "string",
                                            "title": "Table Name",
                                            // "minLength": 3,
                                        },
                                    },
                                    "required": ["host", "port", "databaseName", "tableName"]
                                },
                                "pollingInterval": {
                                    "title": "Polling Interval",
                                    "type": "object",
                                    "properties": {
                                        "pollingInterval": {
                                            "type": "string",
                                            "title": "Polling Interval",
                                            "enum": ["Periodic"]
                                        },
                                        "schedule": {
                                            "type": "string",
                                            "title": "Schedule",
                                            "enum": ["Hourly", "Daily", "Weekly"]
                                        },
                                    },
                                    "required": ["pollingInterval", "schedule"]
                                },
                                "AuthenticationMechanism": {
                                    "title": "Authentication Mechanism",
                                    "type": "object",
                                    "selectCustomcomponent": true,
                                    "properties": {
                                        "databaseUserName": {
                                            "type": "string",
                                            "title": "Database Username",
                                            "maxLength": 40,
                                            "component":"password",
                                            "selectCustomcomponent": true
                                        },
                                        "password": {
                                            "type": "string",
                                            "title": "Password",
                                            "maxLength": 20,
                                            "component": "password",
                                            "selectCustomcomponent": true
                                        }
                                    },
                                    "required": ["databaseUserName", "password"]
                                },
                            }
                        },
                        {
                            "properties": {
                                "selectdatabase": {
                                    "enum": [
                                        "Postgres"
                                    ]
                                },
                                "connectionInformation": {
                                    "title": "Connection Information",
                                    "type": "object",
                                    "properties": {
                                        "host": {
                                            "type": "string",
                                            "title": "Host",
                                            "minLength": 3,
                                        },
                                        "port": {
                                            "type": "number",
                                            "title": "Port",
                                            "default": 1111
                                        },
                                        "databaseName": {
                                            "type": "string",
                                            "title": "Database Name",
                                            "minLength": 3,
                                        },
                                        "tableName": {
                                            "type": "string",
                                            "title": "Table Name",
                                            // "minLength": 3,
                                        },
                                    },
                                    // "required": ["host", "port", "databaseName", "tableName"]
                                },
                                "pollingInterval": {
                                    "title": "Polling Interval",
                                    "type": "object",
                                    "properties": {
                                        "pollingInterval": {
                                            "type": "string",
                                            "title": "Polling Interval",
                                            "enum": ["Periodic"]
                                        },
                                        "schedule": {
                                            "type": "string",
                                            "title": "Schedule",
                                            "enum": ["Hourly", "Daily", "Weekly"]
                                        },
                                    },
                                    "required": ["pollingInterval", "schedule"]
                                },
                                "AuthenticationMechanism": {
                                    "title": "Authentication Mechanism",
                                    "type": "object",
                                    "properties": {
                                        "databaseUserName": {
                                            "type": "string",
                                            "title": "Database Username",
                                            "maxLength": 40,
                                        },
                                        "password": {
                                            "type": "string",
                                            "title": "Password",
                                            "maxLength": 20,
                                            "component": "password"
                                        }
                                    },
                                    "required": ["databaseUserName", "password"]
                                },
                            }
                        }
                    ]
                }
            }
        }
    }
}
export default schema



