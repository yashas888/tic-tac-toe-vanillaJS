const schema: any = {
    "title": "",
    "type": "object",
    "properties": {
        "Kafka": {
            "type": "object",
            "properties": {
                "kafkaTopicName": {
                    "type": "string",
                    "title": "Kafka Topic Name",
                },
                "commaSepratedListofBrokerUrls": {
                    "type": "string",
                    "title": "Comma Seprated List of Broker Urls",
                },
            },
            "required": ["kafkaTopicName", "commaSepratedListofBrokerUrls"]
        },
    }
}

export default schema;


