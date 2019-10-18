const validatePublickey = {
    "title": "Public Key Validate",
    "description": "Will validate the requests of PGR public key",
    "type": "object",
    "properties": {
        "start_date": {
            "description": "It should be time in number(milliseconds)",
            "type": "number"
        },
        "end_date": {
            "description": "It should be time in number(milliseconds)",
            "type": "number"
        }
    },
    "required": ["start_date","end_date"]
}

export default validatePublickey;